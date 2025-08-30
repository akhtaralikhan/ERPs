import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AddPaymentModal({showModal,setShowModal}) {


  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Invoice</ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-3">
            <label htmlFor="" className='form-label'>customer *</label>
            <select type="text" className='form-select mb-2' />
            <button className='btn btn-soft-primary'><a className="fa fa-solid fa-plus me-2"/> New Customer</button>
            </div>
            <div className="mb-3">
                <label htmlFor=""  className='form-label '>Date</label>
                <input type="date"  className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor=""  className='form-label '>Expiry Date</label>
                <input type="date"  className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor=""  className='form-label'>Currency *</label>
                <select type="text"  className='form-select' />
            </div>
            <div className="mb-3">
                <label htmlFor=""  className='form-label'>Reference</label>
                <input type="text"  className='form-control' placeholder='Reference'/>
            </div>
            <div className="mb-3">
                <label htmlFor=""  className='form-label'>phone</label>
                <input type="text"  className='form-control' placeholder='Phone'/>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddPaymentModal;