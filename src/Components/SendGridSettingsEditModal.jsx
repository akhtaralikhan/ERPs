import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const SendGridSettingsEditModal = ({ mode, onSave, initialData, modalId }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      apiKey: "",
      fromEmail: "",
      fromFullName: "",
      isDefault: false,
    },
  });

  const values = watch();

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset(initialData);
    } else {
      reset({
        username: "",
        apiKey: "",
        fromEmail: "",
        fromFullName: "",
        isDefault: false,
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = (data) => {
    onSave(data);

    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
  };

const getValidationClass = (name) => {
  // Skip checkboxes
  if (name === "isDefault") return "";

  if (errors[name]) return "is-invalid";

  // ✅ Only mark as valid if the user has touched/changed the field
  if (touchedFields[name] && !errors[name]) return "is-valid";

  return "";
};


  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>
              {mode === "edit"
                ? "Edit SendGrid Settings"
                : "Add SendGrid Settings"}
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
              <div className="row g-3">
                {/* Username */}
                <div className="col-md-6">
                  <label className="form-label">SendGrid User *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass("username")}`}
                    placeholder="sendgrid-user"
                    {...register("username", {
                      required: "SendGrid User is required",
                    })}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username.message}
                    </div>
                  )}
                </div>

                {/* API Key */}
                <div className="col-md-6">
                  <label className="form-label">SendGrid API Key *</label>
                  <input
                    type="password"
                    className={`form-control ${getValidationClass("apiKey")}`}
                    placeholder="Enter API Key"
                    {...register("apiKey", {
                      required: "API Key is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                  />
                  {errors.apiKey && (
                    <div className="invalid-feedback">
                      {errors.apiKey.message}
                    </div>
                  )}
                </div>

                {/* From Email */}
                <div className="col-md-6">
                  <label className="form-label">From Email *</label>
                  <input
                    type="email"
                    className={`form-control ${getValidationClass(
                      "fromEmail"
                    )}`}
                    placeholder="noreply@example.com"
                    {...register("fromEmail", {
                      required: "From Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.fromEmail && (
                    <div className="invalid-feedback">
                      {errors.fromEmail.message}
                    </div>
                  )}
                </div>

                {/* From Full Name */}
                <div className="col-md-6">
                  <label className="form-label">From Full Name *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass(
                      "fromFullName"
                    )}`}
                    placeholder="Company Notifications"
                    {...register("fromFullName", {
                      required: "From Full Name is required",
                      minLength: { value: 2, message: "Too short" },
                    })}
                  />
                  {errors.fromFullName && (
                    <div className="invalid-feedback">
                      {errors.fromFullName.message}
                    </div>
                  )}
                </div>

                {/* Is Default */}
                <div className="col-md-6 d-flex align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="sendgridIsDefault"
                      {...register("isDefault")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sendgridIsDefault"
                    >
                      Is Default
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                <small>{mode === "edit" ? "Update" : "Save"}</small>
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

export default SendGridSettingsEditModal;
