import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function VatPercentageModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  useEffect(() => {
    showModal ? bsModalRef.current.show() : bsModalRef.current.hide();
  }, [showModal]);

  const onSubmit = (data) => {
    console.log("Vat Data:", data);
    bsModalRef.current.hide();
  };

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Vat Percentage</h5>
            <button type="button" className="btn p-1" data-bs-dismiss="modal">
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
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
                <label className="form-label">Vat Percentage</label>
                <input
                  type="text"
                  className={`form-control ${errors.vatPercentage ? "is-invalid" : ""}`}
                  placeholder="Vat Percentage"
                  {...register("vatPercentage", {
                    required: "Vat Percentage is required",
                    pattern: {
                      value: /^\d+(\.\d{1,2})?$/,
                      message: "Enter valid percentage"
                    }
                  })}
                />
                {errors.vatPercentage && (
                  <div className="invalid-feedback">
                    {errors.vatPercentage.message}
                  </div>
                )}
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="switchCheckDefault"
                  {...register("isDefault")}
                />
                <label
                  className="form-check-label"
                  htmlFor="switchCheckDefault"
                >
                  Is Default
                </label>
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

export default VatPercentageModal;