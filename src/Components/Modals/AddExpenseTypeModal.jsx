import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";

function AddExpenseTypeModal({ showModal, setShowModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const toggle = () => setShowModal(!showModal);

  // Replace this with your save logic
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toggle();
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <div className="modal-header d-flex" toggle={toggle}>
          <p className="mb-0">Add Expense Type</p>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className='form-label'>Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Reference'
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Description</label>
              <input
                type="text"
                className='form-control'
                placeholder='Reference'
                {...register("description", { required: "Description is required" })}
              />
              {errors.description && <small className="text-danger">{errors.description.message}</small>}
            </div>
            <div className="modal-footer p-0 pt-2">
              <Button color="primary" type="submit"><small>Save</small></Button>
              <Button color="secondary" onClick={toggle}><small>Cancel</small></Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddExpenseTypeModal;
