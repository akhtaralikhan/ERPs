import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddPaymentModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Payment data:", data);
    reset();
    setShowModal(false); // Close modal on successful validation
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-between">
          <h5 className="mb-0">Add Payment Status</h5>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
        <ModalBody>
          <form id="payment-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="payment-name" className='form-label'>Name</label>
              <input
                id="payment-name"
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Reference"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="payment-desc" className='form-label'>Description</label>
              <input
                id="payment-desc"
                type="text"
                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                placeholder="Description"
                {...register("description", { required: "Description is required" })}
              />
              {errors.description && (
                <small className="text-danger">{errors.description.message}</small>
              )}
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" form="payment-form">
            <small>Save</small>
          </Button>
          <Button color="secondary" onClick={toggle}>
            <small>Cancel</small>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddPaymentModal;
