import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddCurrencyModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
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
    console.log("Currency Data:", data);
    bsModalRef.current.hide();
  };

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Currency</h5>
            <button type="button" className="btn p-1" data-bs-dismiss="modal">
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">

              {["name","code","symbol","country","description"].map(field => (
                <div className="mb-3" key={field}>
                  <label className="form-label text-capitalize">{field}</label>
                  <input
                    type="text"
                    className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                    placeholder={field}
                    {...register(field, { required: `${field} is required` })}
                  />
                  {errors[field] && (
                    <div className="invalid-feedback">
                      {errors[field].message}
                    </div>
                  )}
                </div>
              ))}

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" {...register("isDefault")} />
                <label className="form-check-label">Is Default</label>
              </div>

            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary"><small>Save</small></button>
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                <small>Cancel</small>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCurrencyModal;