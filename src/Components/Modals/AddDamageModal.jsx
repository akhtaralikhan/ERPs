import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AddDamageModal({ showModal, setShowModal }) {

    const toggle = () => setShowModal(!showModal);

    return (
        <div>
            <Modal isOpen={showModal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Add Damage Item</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Item Name</label>
                            <select className="form-select">
                                <option>Please Select Item</option>
                                <option>Item 1</option>
                                <option>Item 2</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Current Total Stock</label>
                            <input type="number" className="form-control" value="0" disabled />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Total Damage Item</label>
                            <input type="number" className="form-control" placeholder="Enter Damage Quantity" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Reason Of Damage</label>
                            <input type="text" className="form-control" placeholder="Enter Reason" />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Save
                    </Button>
                    <Button color="danger" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddDamageModal;
