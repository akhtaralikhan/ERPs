import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddEmailConfigModal({ showModal, setShowModal }) {
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
    console.log("Email Config:", data);
    bsModalRef.current.hide();
  };

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Email Config</h5>
            <button type="button" className="btn p-1" data-bs-dismiss="modal">
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email"
                    }
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Enter password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              {/* Hostname */}
              <div className="mb-3">
                <label className="form-label">Hostname</label>
                <input
                  type="text"
                  className={`form-control ${errors.hostname ? "is-invalid" : ""}`}
                  placeholder="Enter mail server hostname"
                  {...register("hostname", { required: "Hostname is required" })}
                />
                {errors.hostname && <div className="invalid-feedback">{errors.hostname.message}</div>}
              </div>

              {/* Port */}
              <div className="mb-3">
                <label className="form-label">Port</label>
                <input
                  type="number"
                  className={`form-control ${errors.port ? "is-invalid" : ""}`}
                  placeholder="Port"
                  {...register("port", {
                    required: "Port is required",
                    min: { value: 1, message: "Port must be greater than 0" }
                  })}
                />
                {errors.port && <div className="invalid-feedback">{errors.port.message}</div>}
              </div>

              {/* SSL */}
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" {...register("sslEnabled")} />
                <label className="form-check-label">SSL Enabled</label>
              </div>

              {/* Sender Name */}
              <div className="mb-3">
                <label className="form-label">Sender Full Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.senderName ? "is-invalid" : ""}`}
                  placeholder="Sender's full name"
                  {...register("senderName", { required: "Sender full name is required" })}
                />
                {errors.senderName && <div className="invalid-feedback">{errors.senderName.message}</div>}
              </div>

              {/* Default */}
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" {...register("isDefault")} />
                <label className="form-check-label">IsDefault</label>
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

export default AddEmailConfigModal;