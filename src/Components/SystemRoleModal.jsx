import React, { useEffect, useState } from "react";

const SystemRoleModal = ({ mode, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    sl: "",
    RoleName: "",
  });

  // 🔹 Load initial data when editing
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    }
  }, [mode, initialData]);

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

    // ✅ Hide bootstrap modal after save
    const modalEl = document.getElementById("systemRoleModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    setValidated(false);
  };

  return (
    <div
      className="modal fade"
      id="systemRoleModal"
      tabIndex="-1"
      aria-labelledby="systemRoleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="systemRoleModalLabel">
              {mode === "edit" ? "Edit Role" : "Add New Role"}
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
          <form onSubmit={submitHandler}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Role Name *</label>
                <input
                  type="text"
                  name="RoleName"
                  className="form-control"
                  placeholder="Enter Role Name"
                  value={formData.RoleName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
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
};

export default SystemRoleModal;
