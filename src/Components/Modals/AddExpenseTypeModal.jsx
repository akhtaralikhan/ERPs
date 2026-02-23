import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddExpenseTypeModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  // ✅ Create Bootstrap instance only once
  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);

    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false); // sync back to React
    });
  }, []);

  // ✅ Control open/close
  useEffect(() => {
    if (showModal) {
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [showModal]);

  const onSubmit = (data) => {
    console.log(data);
    bsModalRef.current.hide();
  };

  return (
    <div
      className="modal fade"
      id="AddExpenseTypeModal"
      tabIndex="-1"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Expense Type</h5>
            <button
              type="button"
              className="btn p-1"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name.message}
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

export default AddExpenseTypeModal;