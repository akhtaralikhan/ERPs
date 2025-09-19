import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddPaymentModal({ showModal, setShowModal }) {
  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Customer Type</ModalHeader>
        <ModalBody>
          <form>
                  <div className="mb-3">
                <label htmlFor=""  className='form-label'>Name</label>
                <input type="text"  className='form-control' placeholder='Reference'/>
            </div>
            
                   <div className="mb-3">
                <label htmlFor=""  className='form-label'> Description</label>
                <input type="text"  className='form-control' placeholder='Reference'/>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddPaymentModal;