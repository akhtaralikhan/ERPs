import React, { useState } from "react";

const ManagePageAccessModal = ({ onSave }) => {
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


  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filteredRoles = roleList.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheckbox = (role) => {
    setSelected((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleCheckAll = () => {
    if (selected.length === filteredRoles.length) {
      setSelected([]);
    } else {
      setSelected(filteredRoles);
    }
  };

  const handleSave = () => {
    onSave(selected);
    const modalEl = document.getElementById("managePageAccessModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
  };

  // ✅ Utility: Group roles into chunks of 2 (for two-column rows)
  const chunkedRoles = [];
  for (let i = 0; i < filteredRoles.length; i += 2) {
    chunkedRoles.push(filteredRoles.slice(i, i + 2));
  }

  return (
    <div
      className="modal fade"
      id="managePageAccessModal"
      tabIndex="-1"
      aria-labelledby="managePageAccessModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="managePageAccessModalLabel">
              Manage Page Access
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
            {/* Search */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for Page Name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* Check All */}
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkAll"
                checked={
                  filteredRoles.length > 0 &&
                  selected.length === filteredRoles.length
                }
                onChange={handleCheckAll}
              />
              <label className="form-check-label" htmlFor="checkAll">
                Check All
              </label>
            </div>

            {/* Table Two Column Style */}
            <div
  className="table-responsive"
  style={{ maxHeight: "300px", overflowY: "auto" }}
>
  <table className="table table-bordered align-middle mb-0">

                <thead className="table-primary text-center">
                  <tr>
                    <th style={{ width: "5%" }}>SL</th>
                    <th style={{ width: "45%" }}>Role Name</th>
                    <th style={{ width: "5%" }}>SL</th>
                    <th style={{ width: "45%" }}>Role Name</th>
                  </tr>
                </thead>
                <tbody >
                  {chunkedRoles.length > 0 ? (
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
                              id={`chk-${pair[0]}`}
                              checked={selected.includes(pair[0])}
                              onChange={() => handleCheckbox(pair[0])}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`chk-${pair[0]}`}
                            >
                              {pair[0]}
                            </label>
                          </div>
                        </td>

                        {/* Right column (if exists) */}
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
                                  id={`chk-${pair[1]}`}
                                  checked={selected.includes(pair[1])}
                                  onChange={() => handleCheckbox(pair[1])}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`chk-${pair[1]}`}
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
                      <td colSpan="4" className="text-center text-muted">
                        No pages found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              <small>Update</small>
            </button>
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

export default ManagePageAccessModal;
