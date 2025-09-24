import React, { useEffect, useState } from "react";

const IdentitySettingsEditModal = ({ mode, onSave, initialData }) => {
  const [formData, setFormData] = useState({
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
  });

  // ✅ Load initial data when editing
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [mode, initialData]);

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    onSave(formData);

    // ✅ Hide Bootstrap modal after save
    const modalEl = document.getElementById("identitySettingModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    setValidated(false);
  };

  return (
    <div
      className="modal fade"
      id="identitySettingModal"
      tabIndex="-1"
      aria-labelledby="identitySettingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="identitySettingModalLabel">
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
          <form
            onSubmit={submitHandler}
            className={validated ? "was-validated" : ""}
            noValidate
          >
            <div className="modal-body">
              <div className="row g-3">
                {/* Password Settings */}
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="PasswordRequireDigit"
                      checked={formData.PasswordRequireDigit}
                      onChange={handleChange}
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
                    className="form-control"
                    name="PasswordRequiredLength"
                    value={formData.PasswordRequiredLength}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="PasswordRequireNonAlphanumeric"
                      checked={formData.PasswordRequireNonAlphanumeric}
                      onChange={handleChange}
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
                      name="PasswordRequireUppercase"
                      checked={formData.PasswordRequireUppercase}
                      onChange={handleChange}
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
                      name="PasswordRequireLowercase"
                      checked={formData.PasswordRequireLowercase}
                      onChange={handleChange}
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
                    className="form-control"
                    name="PasswordRequiredUniqueChars"
                    value={formData.PasswordRequiredUniqueChars}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Lockout Settings */}
                <div className="col-md-6">
                  <label className="form-label">
                    Lockout Default Time Span (Minutes) *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="LockoutDefaultLockoutTimeSpanInMinutes"
                    value={formData.LockoutDefaultLockoutTimeSpanInMinutes}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Lockout Max Failed Access Attempts *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="LockoutMaxFailedAccessAttempts"
                    value={formData.LockoutMaxFailedAccessAttempts}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="LockoutAllowedForNewUsers"
                      checked={formData.LockoutAllowedForNewUsers}
                      onChange={handleChange}
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
                      name="UserRequireUniqueEmail"
                      checked={formData.UserRequireUniqueEmail}
                      onChange={handleChange}
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
                      name="SignInRequireConfirmedEmail"
                      checked={formData.SignInRequireConfirmedEmail}
                      onChange={handleChange}
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
                      name="SlidingExpiration"
                      checked={formData.SlidingExpiration}
                      onChange={handleChange}
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
                      name="CookieHttpOnly"
                      checked={formData.CookieHttpOnly}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Cookie Http Only</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Cookie Expiration *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CookieExpiration"
                    value={formData.CookieExpiration}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Cookie Expire Time Span *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="CookieExpireTimeSpan"
                    value={formData.CookieExpireTimeSpan}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Path Settings */}
                <div className="col-md-6">
                  <label className="form-label">Login Path *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="LoginPath"
                    value={formData.LoginPath}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Logout Path *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="LogoutPath"
                    value={formData.LogoutPath}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Access Denied Path *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="AccessDeniedPath"
                    value={formData.AccessDeniedPath}
                    onChange={handleChange}
                    required
                  />
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
