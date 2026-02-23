import React from "react";

const ManageUserRolesViewModal = ({ data }) => {
  const d = data || {};

  const fmtDate = (val) => {
    if (!val) return "";
    try {
      const dt = new Date(val);
      if (isNaN(dt)) return val;
      return dt.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    } catch (e) {
      return val;
    }
  };

  return (
    <div
      className="modal fade"
      id="manageUserRolesViewModal"
      tabIndex="-1"
      aria-labelledby="manageUserRolesViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="manageUserRolesViewModalLabel">
              View User Role
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
            <ul className="nav nav-tabs mb-3" id="roleTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Info"
                  type="button"
                  role="tab"
                >
                  Info
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="AccessRoleList-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#AccessRoleList"
                  type="button"
                  role="tab"
                >
                  Access Role List
                </button>
              </li>
            </ul>

            <div className="tab-content" id="roleTabContent">
              {/* Info Tab */}
              <div
                className="tab-pane fade show active"
                id="Info"
                role="tabpanel"
              >
                <div className="row g-3">
                  {/* ID */}
                  <div className="col-md-6">
                    <label className="form-label">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={d.id ?? ""}
                    />
                  </div>

                  {/* Name */}
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={d.name ?? ""}
                    />
                  </div>

                  {/* Description */}
                  <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      readOnly
                      value={d.description ?? ""}
                    />
                  </div>

                  {/* Created Date */}
                  <div className="col-md-6">
                    <label className="form-label">Created Date</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={fmtDate(d.createdDate)}
                    />
                  </div>

                  {/* Modified Date */}
                  <div className="col-md-6">
                    <label className="form-label">Modified Date</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={fmtDate(d.modifiedDate)}
                    />
                  </div>

                  {/* Created By */}
                  <div className="col-md-6">
                    <label className="form-label">Created By</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={d.createdBy ?? ""}
                    />
                  </div>

                  {/* Modified By */}
                  <div className="col-md-6">
                    <label className="form-label">Modified By</label>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={d.modifiedBy ?? ""}
                    />
                  </div>
                </div>
              </div>

                {/* Access Role List Tab */}
                <div
                  className="tab-pane fade"
                  id="AccessRoleList"
                  role="tabpanel"
                >
                  <div
                    className="table-responsive ManageUserRolesModal__table-container">
                    <table className="table table-bordered align-middle mb-0">
                      <thead className="table-primary text-center">
                        <tr>
                          <th style={{ width: "5%" }}>SL</th>
                          <th style={{ width: "45%" }}>Role Name</th>
                          <th style={{ width: "5%" }}>SL</th>
                          <th style={{ width: "45%" }}>Role Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(() => {
                          const roleList = [
                            "Admin",
                            "Attendance",
                            "Attendance Report",
                            "Audit Logs",
                            "Branch",
                            "Business ERP",
                            "Categories",
                            "Company Info",
                            "Currency",
                            "Customer Info",
                            "Customer Type",
                            "Damage Item Details",
                            "Dashboard",
                            "Department",
                            "Designation",
                            "Draft Invoice",
                            "Expense Type",
                            "High In Demand",
                            "Highest Earning",
                            "Identity Setting",
                            "Invoice",
                            "Item Cart",
                            "Item Cart Side Invoice",
                            "Item Report",
                            "Items",
                            "Items History",
                            "Login History",
                            "Low In Demand",
                            "Low In Stock",
                            "Lowest Earning",
                            "Manage Invoice",
                            "Manage Page Access",
                            "Notifications",
                            "Offer",
                            "Orders",
                            "Purchase Payment",
                            "Purchase Payment Draft",
                            "Purchase Payment Quote",
                            "Purchase Report",
                            "Purchase Summary",
                            "Purchase Transaction By Day",
                            "Purchase Transaction By Month",
                            "Purchase Transaction By Year",
                            "Quote Invoice",
                            "Refresh Token",
                            "Sales Report",
                            "Sales Return Log",
                            "Send Email History",
                            "Settings",
                            "Sub Department",
                            "Summary Report",
                            "Taxes",
                            "User Logs",
                            "User Management",
                            "Vendor Info",
                            "Vendor Type",
                            "Warranty",
                            "Warehouse",
                            "Warehouse Stock",
                            "Weekly Report",
                            "Yearly Report",
                            "Zone Info",
                            "Other Role1",
                            "Other Role2",
                            "Other Role3",
                            "Other Role4",
                          ];

                          const chunkedRoles = [];
                          for (let i = 0; i < roleList.length; i += 2) {
                            chunkedRoles.push(roleList.slice(i, i + 2));
                          }

                          return chunkedRoles.length > 0 ? (
                            chunkedRoles.map((pair, rowIndex) => (
                              <tr key={rowIndex}>
                                {/* Left column */}
                                <td className="text-center">
                                  {rowIndex * 2 + 1}
                                </td>
                                <td>
                                  <div className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`view-chk-${pair[0]}`}
                                      checked={d.selectedRoles?.includes(
                                        pair[0]
                                      )}
                                      disabled
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`view-chk-${pair[0]}`}
                                    >
                                      {pair[0]}
                                    </label>
                                  </div>
                                </td>

                                {/* Right column */}
                                {pair[1] ? (
                                  <>
                                    <td className="text-center">
                                      {rowIndex * 2 + 2}
                                    </td>
                                    <td>
                                      <div className="form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id={`view-chk-${pair[1]}`}
                                          checked={d.selectedRoles?.includes(
                                            pair[1]
                                          )}
                                          disabled
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={`view-chk-${pair[1]}`}
                                        >
                                          {pair[1]}
                                        </label>
                                      </div>
                                    </td>
                                  </>
                                ) : (
                                  <>
                                    <td></td>
                                    <td></td>
                                  </>
                                )}
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td
                                colSpan="4"
                                className="text-center text-muted"
                              >
                                No roles available.
                              </td>
                            </tr>
                          );
                        })()}
                      </tbody>
                    </table>
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

export default ManageUserRolesViewModal;
