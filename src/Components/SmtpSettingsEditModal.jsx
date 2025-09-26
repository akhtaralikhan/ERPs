import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const SmtpSettingsEditModal = ({ mode, onSave, initialData }) => {
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
      password: "",
      host: "",
      port: "",
      fromEmail: "",
      fromFullName: "",
      sslEnabled: false,
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
        password: "",
        host: "",
        port: "",
        fromEmail: "",
        fromFullName: "",
        sslEnabled: false,
        isDefault: false,
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = (data) => {
    onSave(data);
    const modalEl = document.getElementById("emailSMPTSettingModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
  };

  const getValidationClass = (name) => {
    // For checkboxes, skip validation styling
    if (name === "sslEnabled" || name === "isDefault") return "";

    if (errors[name]) return "is-invalid";
    // ✅ Only mark as valid if the user has touched/changed the field
    if (touchedFields[name] && !errors[name]) return "is-valid";

    return "";
  };

  return (
    <div
      className="modal fade"
      id="emailSMPTSettingModal"
      tabIndex="-1"
      aria-labelledby="emailSMPTSettingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="emailSMPTSettingModalLabel">
              {mode === "edit" ? "Edit SMTP Email Setting" : "Add SMTP Setting"}
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
                  <label className="form-label">User Name *</label>
                  <input
                    type="email"
                    className={`form-control ${getValidationClass("username")}`}
                    placeholder="user@example.com"
                    {...register("username", {
                      required: "User Name is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username.message}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    className={`form-control ${getValidationClass("password")}`}
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {/* Host */}
                <div className="col-md-6">
                  <label className="form-label">Host (SMTP) *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass("host")}`}
                    placeholder="smtp.example.com"
                    {...register("host", { required: "Host is required" })}
                  />
                  {errors.host && (
                    <div className="invalid-feedback">
                      {errors.host.message}
                    </div>
                  )}
                </div>

                {/* Port */}
                <div className="col-md-6">
                  <label className="form-label">Port (SMTP) *</label>
                  <input
                    type="number"
                    className={`form-control ${getValidationClass("port")}`}
                    placeholder="587"
                    {...register("port", {
                      required: "Port is required",
                      min: { value: 1, message: "Port must be >= 1" },
                      max: { value: 65535, message: "Port must be <= 65535" },
                    })}
                  />
                  {errors.port && (
                    <div className="invalid-feedback">
                      {errors.port.message}
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

                {/* SSL Enabled */}
                <div className="col-md-6 d-flex align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="sslEnabled"
                      {...register("sslEnabled")} // no required
                    />
                    <label className="form-check-label" htmlFor="sslEnabled">
                      SSL Enabled
                    </label>
                  </div>
                </div>

                {/* Is Default */}
                <div className="col-md-6 d-flex align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isDefault"
                      {...register("isDefault")} // no required
                    />
                    <label className="form-check-label" htmlFor="isDefault">
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

export default SmtpSettingsEditModal;
