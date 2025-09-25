import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function AddWarehouseModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  // Submit handler
  const onSubmit = (data) => {
    // You can handle the data here, e.g. send to API or update parent state
    console.log("Submitted data:", data);
    reset();
    setShowModal(false);
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-between">
          <h5 className="mb-0">Add Branch</h5>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
        <ModalBody>
          <form id="add-warehouse-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="branch-name" className="form-label">Name</label>
              <input
                id="branch-name"
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
              <label htmlFor="branch-description" className="form-label">Description</label>
              <input
                id="branch-description"
                type="text"
                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                placeholder="Reference"
                {...register("description", { required: "Description is required" })}
              />
              {errors.description && (
                <small className="text-danger">{errors.description.message}</small>
              )}
            </div>
          </form>
        </ModalBody>
        <div className="modal-footer p-0 pt-2">
              <Button color="primary" type="submit"><small>Save</small></Button>
              <Button color="secondary" onClick={toggle}><small>Cancel</small></Button>
            </div>
      </Modal>
    </div>
  );
}

export default AddWarehouseModal;
