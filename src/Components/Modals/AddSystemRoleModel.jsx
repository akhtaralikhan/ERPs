import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddExpenseTypeModal({ showModal, setShowModal }) {
  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Role</ModalHeader>
        <ModalBody>
          <form>
                  <div className="mb-3">
                <label htmlFor=""  className='form-label'>Role Name</label>
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

export default AddExpenseTypeModal;