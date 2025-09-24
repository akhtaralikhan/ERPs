import React from "react";

const UserManagementViewModal = ({ data }) => {
  const d = data || {};

  return (
    <div
      className="modal fade"
      id="UserManagementViewModal"
      tabIndex="-1"
      aria-labelledby="UserManagementViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="UserManagementViewModalLabel">
              View User
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
          <div className="modal-body">
            {/* Tabs */}
            <ul className="nav nav-tabs mb-3" id="userTabView" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="summary-tab-view"
                  data-bs-toggle="tab"
                  data-bs-target="#summary-view"
                  type="button"
                  role="tab"
                >
                  Summary
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="details-tab-view"
                  data-bs-toggle="tab"
                  data-bs-target="#details-view"
                  type="button"
                  role="tab"
                >
                  User Details
                </button>
              </li>
            </ul>

            <div className="tab-content" id="userTabViewContent">
              {/* Summary Tab */}
              <div
                className="tab-pane fade show active"
                id="summary-view"
                role="tabpanel"
              >
                <div className="row g-3">
                  {/* ID */}
                  <div className="col-md-6">
                    <label className="form-label">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.id ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Profile Picture */}
                  <div className="col-md-6">
                    <label className="form-label">Profile Picture</label>
                    <div className="d-flex align-items-center">
                      <img
                        src={d.imageImg ?? "https://via.placeholder.com/40"}
                        alt="Profile"
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                      />
                      <span>
                        {d.firstname} {d.lastname}
                      </span>
                    </div>
                  </div>

                  {/* Application User Id */}
                  <div className="col-md-6">
                    <label className="form-label">Application User Id</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.applicationUserId ?? ""}
                      readOnly
                    />
                  </div>

                  {/* First Name */}
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.firstname ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.lastname ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.Phonenumber ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.email ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Address */}
                  <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.address ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Country */}
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.country ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Date Of Birth */}
                  <div className="col-md-6">
                    <label className="form-label">Date Of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.dob ?? ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* User Details Tab */}
              <div className="tab-pane fade" id="details-view" role="tabpanel">
                <div className="row g-3">
                  {/* Employee ID */}
                  <div className="col-md-6">
                    <label className="form-label">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.employeeId ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Branch */}
                  <div className="col-md-6">
                    <label className="form-label">Branch</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.branch ?? ""}
                      readOnly
                    />
                  </div>

                  {/* User Role */}
                  <div className="col-md-6">
                    <label className="form-label">User Role</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.userRole ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Joining Date */}
                  <div className="col-md-6">
                    <label className="form-label">Joining Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.joiningDate ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Leaving Date */}
                  <div className="col-md-6">
                    <label className="form-label">Leaving Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.leavingDate ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Created Date */}
                  <div className="col-md-6">
                    <label className="form-label">Created Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.createdDate ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Modified Date */}
                  <div className="col-md-6">
                    <label className="form-label">Modified Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.modifiedDate ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Created By */}
                  <div className="col-md-6">
                    <label className="form-label">Created By</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.createdBy ?? ""}
                      readOnly
                    />
                  </div>

                  {/* Modified By */}
                  <div className="col-md-6">
                    <label className="form-label">Modified By</label>
                    <input
                      type="text"
                      className="form-control"
                      value={d.modifiedBy ?? ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              <small>Close</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementViewModal;
