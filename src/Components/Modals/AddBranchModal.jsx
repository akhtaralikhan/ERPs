import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddBranchModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  // ✅ Create modal instance only once
  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);

    // Sync Bootstrap close → React state
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  // ✅ Control open/close
  useEffect(() => {
    if (showModal) {
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [showModal]);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    bsModalRef.current.hide();
  };

  return (
    <div
      className="modal fade"
      id="AddBranchModal"
      tabIndex="-1"
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
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
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter branch name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Contact Person</label>
                <input
                  type="text"
                  className={`form-control ${errors.contactPerson ? "is-invalid" : ""}`}
                  placeholder="Enter contact person"
                  {...register("contactPerson", {
                    required: "Contact Person is required"
                  })}
                />
                {errors.contactPerson && (
                  <div className="invalid-feedback">
                    {errors.contactPerson.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                  placeholder="Enter phone number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter a valid phone number"
                    }
                  })}
                />
                {errors.phoneNumber && (
                  <div className="invalid-feedback">
                    {errors.phoneNumber.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? "is-invalid" : ""}`}
                  placeholder="Enter address"
                  {...register("address", {
                    required: "Address is required"
                  })}
                />
                {errors.address && (
                  <div className="invalid-feedback">
                    {errors.address.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <textarea
                  rows={2}
                  className={`form-control ${errors.shortDescription ? "is-invalid" : ""}`}
                  placeholder="Enter a brief description"
                  {...register("shortDescription", {
                    required: "Short description is required"
                  })}
                />
                {errors.shortDescription && (
                  <div className="invalid-feedback">
                    {errors.shortDescription.message}
                  </div>
                )}
              </div>

            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" disabled={!isValid}>
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

export default AddBranchModal;