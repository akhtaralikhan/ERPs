import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddWarehouseModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  // Create modal instance once
  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);

    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  // Control open/close
  useEffect(() => {
    if (showModal) {
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [showModal]);

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    reset();
    bsModalRef.current.hide();
  };

  return (
    <div
      className="modal fade"
      id="AddWarehouseModal"
      tabIndex="-1"
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Add Branch</h5>
            <button
              type="button"
              className="btn p-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">

              <div className="mb-3">
                <label htmlFor="branch-name" className="form-label">
                  Name
                </label>
                <input
                  id="branch-name"
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Reference"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="branch-description" className="form-label">
                  Description
                </label>
                <input
                  id="branch-description"
                  type="text"
                  className={`form-control ${errors.description ? "is-invalid" : ""}`}
                  placeholder="Reference"
                  {...register("description", {
                    required: "Description is required"
                  })}
                />
                {errors.description && (
                  <div className="invalid-feedback">
                    {errors.description.message}
                  </div>
                )}
              </div>

            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                <small>Save</small>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                <small>Cancel</small>
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddWarehouseModal;