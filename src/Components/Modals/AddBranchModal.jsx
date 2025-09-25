import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";

function AddBranchModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  // This function handles form submission
  const onSubmit = (data) => {
    console.log("Form data:", data); // Replace with actual submit logic
    toggle();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle} size="lg">
        <div className="modal-header d-flex justify-content-between">
          <h5 className="mb-0">Add Branch</h5>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter branch name"
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Person</label>
            <input
              type="text"
              className="form-control"
              {...register("contactPerson", { required: "Contact Person is required" })}
              placeholder="Enter contact person"
            />
            {errors.contactPerson && <small className="text-danger">{errors.contactPerson.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number"
                }
              })}
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              {...register("address", { required: "Address is required" })}
              placeholder="Enter address"
            />
            {errors.address && <small className="text-danger">{errors.address.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Short Description</label>
            <textarea
              className="form-control"
              {...register("shortDescription", { required: "Short description is required" })}
              placeholder="Enter a brief description"
              rows={2}
            />
            {errors.shortDescription && <small className="text-danger">{errors.shortDescription.message}</small>}
          </div>
          <div className="modal-footer p-0 pt-2">
              <Button color="primary" type="submit"><small>Save</small></Button>
              <Button color="secondary" onClick={toggle}><small>Cancel</small></Button>
            </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default AddBranchModal;
