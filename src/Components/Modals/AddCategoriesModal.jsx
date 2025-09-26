import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody } from "reactstrap";

function AddCategoriesModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    console.log("Category data:", data);
    reset();
    setShowModal(false);
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-between">
          <h5 className="mb-0">Add Categories</h5>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
        <ModalBody>
          <form id="category-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="category-name" className='form-label'>Name</label>
              <input
                id="category-name"
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
              <label htmlFor="category-description" className='form-label'>Description</label>
              <input
                id="category-description"
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
          <Button color="primary" type="submit" form="category-form"><small>Save</small></Button>
          <Button color="secondary" onClick={toggle}><small>Cancel</small></Button>
        </div>
      </Modal>
    </div>
  );
}

export default AddCategoriesModal;
