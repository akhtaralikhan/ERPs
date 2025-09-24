import React, { useEffect, useState } from "react";

const ManageUserRolesModal = ({ mode, onSave, initialData }) => {
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

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    selectedRoles: [],
  });
  const [search, setSearch] = useState("");
  const [validated, setValidated] = useState(false);

  // 🔹 Load form data
useEffect(() => {
  if (mode === "edit" && initialData) {
    setFormData({
      name: initialData.name || "",
      description: initialData.description || "",
      selectedRoles: initialData.selectedRoles || [],   // ✅ fallback
    });
  } else {
    setFormData({ name: "", description: "", selectedRoles: [] });
  }
}, [mode, initialData]);


  // 🔹 Filter roles by search
  const filteredRoles = roleList.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  // 🔹 Group roles in pairs (2 columns)
  const chunkedRoles = [];
  for (let i = 0; i < filteredRoles.length; i += 2) {
    chunkedRoles.push(filteredRoles.slice(i, i + 2));
  }

  // 🔹 Input handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (role) => {
    setFormData((prev) => ({
      ...prev,
      selectedRoles: prev.selectedRoles.includes(role)
        ? prev.selectedRoles.filter((r) => r !== role)
        : [...prev.selectedRoles, role],
    }));
  };

  const handleCheckAll = () => {
    if (formData.selectedRoles.length === filteredRoles.length) {
      setFormData((prev) => ({ ...prev, selectedRoles: [] }));
    } else {
      setFormData((prev) => ({ ...prev, selectedRoles: filteredRoles }));
    }
  };

  // 🔹 Submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    onSave(formData);

    // ✅ Hide modal after save
    const modalEl = document.getElementById("manageUserRolesModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    setValidated(false);
  };

  return (
    <div
      className="modal fade"
      id="manageUserRolesModal"
      tabIndex="-1"
      aria-labelledby="manageUserRolesModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="manageUserRolesModalLabel">
              {mode === "edit" ? "Edit User Role" : "Add New User Role"}
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
            className={`needs-validation ${validated ? "was-validated" : ""}`}
            noValidate
            onSubmit={submitHandler}
          >
            <div className="modal-body">
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Role Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter Role Name.</div>
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Select Roles */}
              <h6 className="mb-2">Select Roles</h6>
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
                  id="checkAllRoles"
                  checked={
                    filteredRoles.length > 0 &&
                    formData.selectedRoles.length === filteredRoles.length
                  }
                  onChange={handleCheckAll}
                />
                <label className="form-check-label" htmlFor="checkAllRoles">
                  Check All
                </label>
              </div>

              {/* Roles Table */}
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
                  <tbody>
                    {chunkedRoles.length > 0 ? (
                      chunkedRoles.map((pair, rowIndex) => (
                        <tr key={rowIndex}>
                          {/* Left column */}
                          <td className="text-center">{rowIndex * 2 + 1}</td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={`chk-${pair[0]}`}
                                checked={formData.selectedRoles.includes(
                                  pair[0]
                                )}
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
                                    id={`chk-${pair[1]}`}
                                    checked={formData.selectedRoles.includes(
                                      pair[1]
                                    )}
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
                          No roles found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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

export default ManageUserRolesModal;
