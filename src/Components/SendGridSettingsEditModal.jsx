import React, { useEffect, useState } from "react";

const SendGridSettingsEditModal = ({ mode, onSave, initialData, modalId }) => {
  const [formData, setFormData] = useState({
    username: "",
    apiKey: "",
    fromEmail: "",
    fromFullName: "",
    isDefault: false,
  });

  // ✅ Load initial values if edit mode
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);

    // ✅ Hide Bootstrap modal
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
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
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">SendGrid User *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="sendgrid-user"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">SendGrid API Key *</label>
                  <input
                    type="password"
                    className="form-control"
                    name="apiKey"
                    value={formData.apiKey}
                    onChange={handleChange}
                    placeholder="Enter API Key"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">From Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="fromEmail"
                    value={formData.fromEmail}
                    onChange={handleChange}
                    placeholder="noreply@example.com"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">From Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fromFullName"
                    value={formData.fromFullName}
                    onChange={handleChange}
                    placeholder="Company Notifications"
                    required
                  />
                </div>

                <div className="col-md-6 d-flex align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="isDefault"
                      checked={formData.isDefault}
                      onChange={handleChange}
                      id="sendgridIsDefault"
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
