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
        <ModalHeader toggle={toggle}>Add Expense Type</ModalHeader>
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
            <ModalFooter>
              <Button color="primary" type="submit">Save</Button>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddExpenseTypeModal;
