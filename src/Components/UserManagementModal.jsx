import React, { useEffect, useState } from "react";

const UserManagementModal = ({ mode, onSave, initialData }) => {
  const emptyForm = {
    firstname: "",
    lastname: "",
    Phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    country: "",
    userRole: "",
    branch: "",
    file: null,
    employeeId: "",
    joiningDate: "",
    dob: "",
    leavingDate: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        ...emptyForm,
        ...initialData,
        password: "",
        confirmPassword: "",
      });
    } else if (mode === "new") {
      setFormData(emptyForm);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (mode === "new" || formData.password || formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
    }

    onSave(formData);

    const modalEl = document.getElementById("userManagementModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    setValidated(false);
  };

  return (
    <div
      className="modal fade"
      id="userManagementModal"
      tabIndex="-1"
      aria-labelledby="userManagementModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="userManagementModalLabel">
              {mode === "edit" ? "Edit User" : "Add New User"}
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
            noValidate
            className={validated ? "was-validated" : ""}
            onSubmit={submitHandler}
          >
            <div className="modal-body">
              {/* Tabs */}
              <ul className="nav nav-tabs mb-3" id="userTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="summary-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#summary"
                    type="button"
                    role="tab"
                  >
                    Summary
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="details-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#details"
                    type="button"
                    role="tab"
                  >
                    User Details
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="userTabContent">
                {/* Summary Tab */}
                <div
                  className="tab-pane fade show active"
                  id="summary"
                  role="tabpanel"
                >
                  <div className="row g-3">
                    {/* First Name */}
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        First Name is required
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-md-6">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Last Name is required
                      </div>
                    </div>

                    {/* Country */}
                    <div className="col-md-6">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="text"
                        name="Phonenumber"
                        className="form-control"
                        value={formData.Phonenumber}
                        onChange={handleChange}
                      />
                    </div>

                    {/* User Role */}
                    <div className="col-md-6">
                      <label className="form-label">User Role</label>
                      <select
                        name="userRole"
                        className="form-select"
                        value={formData.userRole}
                        onChange={handleChange}
                        required
                      >
                        <option value="">--- SELECT ---</option>
                        <option value="Admin">Admin</option>
                        <option value="General">General</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a role
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={mode === "edit"}
                      />
                      <div className="invalid-feedback">
                        Valid Email required
                      </div>
                    </div>

                    {/* Branch */}
                    <div className="col-md-6">
                      <label className="form-label">Branch</label>
                      <select
                        name="branch"
                        className="form-select"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                      >
                        <option value="">--- SELECT ---</option>
                        <option value="Branch1">Branch 1</option>
                        <option value="Branch2">Branch 2</option>
                      </select>
                      <div className="invalid-feedback">Branch is required</div>
                    </div>

                    {/* Password (Only show in "new" mode) */}
                    {mode === "new" && (
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={formData.password}
                          onChange={handleChange}
                          required={mode === "new"}
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>
                    )}

                    {/* File */}
                    <div className="col-md-6">
                      <label className="form-label">Choose a file</label>
                      <input
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    {/* Confirm Password (Only show in "new" mode) */}
                    {mode === "new" && (
                      <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required={mode === "new"}
                        />
                        <div className="invalid-feedback">
                          Confirm Password is required
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* User Details Tab */}
                <div className="tab-pane fade" id="details" role="tabpanel">
                  <div className="row g-3">
                    {/* Employee ID */}
                    <div className="col-md-6">
                      <label className="form-label">Employee ID</label>
                      <input
                        type="text"
                        name="employeeId"
                        className="form-control"
                        value={formData.employeeId}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Joining Date */}
                    <div className="col-md-6">
                      <label className="form-label">Joining Date</label>
                      <input
                        type="date"
                        name="joiningDate"
                        className="form-control"
                        value={formData.joiningDate}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        className="form-control"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Leaving Date */}
                    <div className="col-md-6">
                      <label className="form-label">Leaving Date</label>
                      <input
                        type="date"
                        name="leavingDate"
                        className="form-control"
                        value={formData.leavingDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
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
                <small>Close</small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserManagementModal;
