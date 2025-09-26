import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserResetPasswordModal = ({ user, onReset }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    reset({
      newPassword: "",
      confirmPassword: "",
    });
  }, [user, reset]);

  const onSubmit = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    onReset({ ...user, newPassword: data.newPassword });

    // Close modal
    const modalEl = document.getElementById("userResetPasswordModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    reset();
  };

  const getValidationClass = (name) => {
    if (errors[name]) return "is-invalid";
    if (touchedFields[name] && !errors[name]) return "is-valid";
    return "";
  };

  return (
    <div
      className="modal fade"
      id="userResetPasswordModal"
      tabIndex="-1"
      aria-labelledby="userResetPasswordModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="userResetPasswordModalLabel">
              Reset Password
            </h5>
            <button
              type="button"
              className="btn p-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">New Password *</label>
                <input
                  type="password"
                  className={`form-control ${getValidationClass(
                    "newPassword"
                  )}`}
                  {...register("newPassword", {
                    required: "New Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.newPassword && (
                  <div className="invalid-feedback">
                    {errors.newPassword.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  className={`form-control ${getValidationClass(
                    "confirmPassword"
                  )}`}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                <small>Reset Password</small>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                <small>Close</small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserResetPasswordModal;
