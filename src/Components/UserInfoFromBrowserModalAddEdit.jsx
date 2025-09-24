import React, { useEffect, useState } from "react";

const UserInfoFromBrowserModalAddEdit = ({ mode, onSave, initialData }) => {
  const emptyForm = {
    id: "",
    BrowserUniqueID: "",
    Lat: "",
    Long: "",
    TimeZone: "",
    BrowserMajor: "",
    BrowserName: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  // Reset form when mode or initialData changes
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    } else if (mode === "new") {
      setFormData(emptyForm);
    }
  }, [mode, initialData]);

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    // Hide bootstrap modal after save
    const modalEl = document.getElementById("UserInfoFromBrowserModalAddEdit");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    setValidated(false);
  };

  return (
    <div
      className="modal fade"
      id="UserInfoFromBrowserModalAddEdit"
      tabIndex="-1"
      aria-labelledby="UserInfoFromBrowserModalAddEditLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5
              className="modal-title"
              id="UserInfoFromBrowserModalAddEditLabel"
            >
              {mode === "edit" ? "Edit User Info" : "Add User Info"}
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
                <label className="form-label">Browser Unique ID *</label>
                <input
                  type="text"
                  name="BrowserUniqueID"
                  className="form-control"
                  placeholder="Enter Browser Unique ID"
                  value={formData.BrowserUniqueID}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <div className="col mb-3">
                  <label className="form-label">Lat</label>
                  <input
                    type="text"
                    name="Lat"
                    className="form-control"
                    placeholder="Enter Latitude"
                    value={formData.Lat}
                    onChange={handleChange}
                  />
                </div>
                <div className="col mb-3">
                  <label className="form-label">Long</label>
                  <input
                    type="text"
                    name="Long"
                    className="form-control"
                    placeholder="Enter Longitude"
                    value={formData.Long}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Time Zone</label>
                <input
                  type="text"
                  name="TimeZone"
                  className="form-control"
                  placeholder="Enter Time Zone"
                  value={formData.TimeZone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Browser Major</label>
                <input
                  type="text"
                  name="BrowserMajor"
                  className="form-control"
                  placeholder="Enter Browser Major Version"
                  value={formData.BrowserMajor}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Browser Name</label>
                <input
                  type="text"
                  name="BrowserName"
                  className="form-control"
                  placeholder="Enter Browser Name"
                  value={formData.BrowserName}
                  onChange={handleChange}
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

export default UserInfoFromBrowserModalAddEdit;
