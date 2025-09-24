import React, { useEffect, useState } from "react";

const SmtpSettingsEditModal = ({ mode, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    host: "",
    port: "",
    fromEmail: "",
    fromFullName: "",
    sslEnabled: false,
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
    const modalEl = document.getElementById("emailSMPTSettingModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
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
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">User Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="user@example.com"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Host (SMTP) *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="host"
                    value={formData.host}
                    onChange={handleChange}
                    placeholder="smtp.example.com"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Port (SMTP) *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="port"
                    value={formData.port}
                    onChange={handleChange}
                    placeholder="587"
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
                      name="sslEnabled"
                      checked={formData.sslEnabled}
                      onChange={handleChange}
                      id="sslEnabled"
                    />
                    <label className="form-check-label" htmlFor="sslEnabled">
                      SSL Enabled
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="isDefault"
                      checked={formData.isDefault}
                      onChange={handleChange}
                      id="isDefault"
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
