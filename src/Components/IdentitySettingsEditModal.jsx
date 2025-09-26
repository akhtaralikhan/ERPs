import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const IdentitySettingsEditModal = ({ mode, onSave, initialData, modalId }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      PasswordRequireDigit: false,
      PasswordRequiredLength: "",
      PasswordRequireNonAlphanumeric: false,
      PasswordRequireUppercase: false,
      PasswordRequireLowercase: false,
      PasswordRequiredUniqueChars: "",
      LockoutDefaultLockoutTimeSpanInMinutes: "",
      LockoutMaxFailedAccessAttempts: "",
      LockoutAllowedForNewUsers: false,
      UserRequireUniqueEmail: false,
      SignInRequireConfirmedEmail: false,
      SlidingExpiration: false,
      CookieHttpOnly: false,
      CookieExpiration: "",
      CookieExpireTimeSpan: "",
      LoginPath: "",
      LogoutPath: "",
      AccessDeniedPath: "",
    },
  });

  const values = watch();

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset(initialData);
    } else {
      reset({});
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
    if (errors[name]) return "is-invalid";
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
                ? "Edit Default Identity Option"
                : "Add Identity Setting"}
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
                {/* Password Settings */}
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("PasswordRequireDigit")}
                    />
                    <label className="form-check-label">
                      Password Require Digit
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Password Required Length *
                  </label>
                  <input
                    type="number"
                    className={`form-control ${getValidationClass(
                      "PasswordRequiredLength"
                    )}`}
                    {...register("PasswordRequiredLength", {
                      required: "Required",
                    })}
                  />
                  {errors.PasswordRequiredLength && (
                    <div className="invalid-feedback">
                      {errors.PasswordRequiredLength.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("PasswordRequireNonAlphanumeric")}
                    />
                    <label className="form-check-label">
                      Password Require Non Alphanumeric
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("PasswordRequireUppercase")}
                    />
                    <label className="form-check-label">
                      Password Require Uppercase
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("PasswordRequireLowercase")}
                    />
                    <label className="form-check-label">
                      Password Require Lowercase
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Password Required Unique Chars *
                  </label>
                  <input
                    type="number"
                    className={`form-control ${getValidationClass(
                      "PasswordRequiredUniqueChars"
                    )}`}
                    {...register("PasswordRequiredUniqueChars", {
                      required: "Required",
                    })}
                  />
                  {errors.PasswordRequiredUniqueChars && (
                    <div className="invalid-feedback">
                      {errors.PasswordRequiredUniqueChars.message}
                    </div>
                  )}
                </div>

                {/* Lockout Settings */}
                <div className="col-md-6">
                  <label className="form-label">
                    Lockout Default Time Span (Minutes) *
                  </label>
                  <input
                    type="number"
                    className={`form-control ${getValidationClass(
                      "LockoutDefaultLockoutTimeSpanInMinutes"
                    )}`}
                    {...register("LockoutDefaultLockoutTimeSpanInMinutes", {
                      required: "Required",
                    })}
                  />
                  {errors.LockoutDefaultLockoutTimeSpanInMinutes && (
                    <div className="invalid-feedback">
                      {errors.LockoutDefaultLockoutTimeSpanInMinutes.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Lockout Max Failed Access Attempts *
                  </label>
                  <input
                    type="number"
                    className={`form-control ${getValidationClass(
                      "LockoutMaxFailedAccessAttempts"
                    )}`}
                    {...register("LockoutMaxFailedAccessAttempts", {
                      required: "Required",
                    })}
                  />
                  {errors.LockoutMaxFailedAccessAttempts && (
                    <div className="invalid-feedback">
                      {errors.LockoutMaxFailedAccessAttempts.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("LockoutAllowedForNewUsers")}
                    />
                    <label className="form-check-label">
                      Lockout Allowed For New Users
                    </label>
                  </div>
                </div>

                {/* User & SignIn Settings */}
                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("UserRequireUniqueEmail")}
                    />
                    <label className="form-check-label">
                      User Require Unique Email
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("SignInRequireConfirmedEmail")}
                    />
                    <label className="form-check-label">
                      Sign In Require Confirmed Email
                    </label>
                  </div>
                </div>

                {/* Cookie Settings */}
                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("SlidingExpiration")}
                    />
                    <label className="form-check-label">
                      Sliding Expiration
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      {...register("CookieHttpOnly")}
                    />
                    <label className="form-check-label">Cookie Http Only</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Cookie Expiration *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass(
                      "CookieExpiration"
                    )}`}
                    {...register("CookieExpiration", { required: "Required" })}
                  />
                  {errors.CookieExpiration && (
                    <div className="invalid-feedback">
                      {errors.CookieExpiration.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Cookie Expire Time Span *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass(
                      "CookieExpireTimeSpan"
                    )}`}
                    {...register("CookieExpireTimeSpan", {
                      required: "Required",
                    })}
                  />
                  {errors.CookieExpireTimeSpan && (
                    <div className="invalid-feedback">
                      {errors.CookieExpireTimeSpan.message}
                    </div>
                  )}
                </div>

                {/* Path Settings */}
                <div className="col-md-6">
                  <label className="form-label">Login Path *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass(
                      "LoginPath"
                    )}`}
                    {...register("LoginPath", { required: "Required" })}
                  />
                  {errors.LoginPath && (
                    <div className="invalid-feedback">
                      {errors.LoginPath.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Logout Path *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass(
                      "LogoutPath"
                    )}`}
                    {...register("LogoutPath", { required: "Required" })}
                  />
                  {errors.LogoutPath && (
                    <div className="invalid-feedback">
                      {errors.LogoutPath.message}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Access Denied Path *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass(
                      "AccessDeniedPath"
                    )}`}
                    {...register("AccessDeniedPath", { required: "Required" })}
                  />
                  {errors.AccessDeniedPath && (
                    <div className="invalid-feedback">
                      {errors.AccessDeniedPath.message}
                    </div>
                  )}
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
                <small>Cancel</small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IdentitySettingsEditModal;
