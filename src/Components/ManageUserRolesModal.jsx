import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, touchedFields, isSubmitted, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      selectedRoles: [],
    },
  });

  const selectedRoles = watch("selectedRoles");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({
        name: initialData.name || "",
        description: initialData.description || "",
        selectedRoles: initialData.selectedRoles || [],
      });
    } else {
      reset({ name: "", description: "", selectedRoles: [] });
    }
  }, [mode, initialData, reset]);

  const filteredRoles = roleList.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );
  const chunkedRoles = [];
  for (let i = 0; i < filteredRoles.length; i += 2) {
    chunkedRoles.push(filteredRoles.slice(i, i + 2));
  }

  const getValidationClass = (name) => {
    if (errors[name]) return "is-invalid";
    if ((touchedFields[name] || isSubmitted) && !errors[name])
      return "is-valid";
    return "";
  };

  const getCheckboxClass = () => {
    if (
      (touchedFields.selectedRoles || isSubmitted) &&
      selectedRoles.length > 0
    )
      return "is-valid";
    if (
      (touchedFields.selectedRoles || isSubmitted) &&
      selectedRoles.length === 0
    )
      return "is-invalid";
    return "";
  };

  const onSubmit = (data) => {
    onSave(data);

    const modalEl = document.getElementById("manageUserRolesModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    reset();
  };

  const handleCheckAll = () => {
    const currentRoles = chunkedRoles.flat();
    if (currentRoles.every((r) => selectedRoles.includes(r))) {
      setValue("selectedRoles", []);
    } else {
      setValue("selectedRoles", currentRoles);
    }
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

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  className={`form-control ${getValidationClass("name")}`}
                  placeholder="Enter Role Name"
                  {...register("name", {
                    required: "Role Name is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                    maxLength: { value: 50, message: "Max 50 characters" },
                  })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Description *</label>
                <textarea
                  className={`form-control ${getValidationClass(
                    "description"
                  )}`}
                  placeholder="Enter Description"
                  {...register("description", {
                    required: "Description is required",
                    minLength: { value: 5, message: "At least 5 characters" },
                    maxLength: { value: 200, message: "Max 200 characters" },
                  })}
                />
                {errors.description && (
                  <div className="invalid-feedback">
                    {errors.description.message}
                  </div>
                )}
              </div>

              <h6 className="mb-2">Select Roles *</h6>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for Page Name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className={`form-check-input ${getCheckboxClass()}`}
                  id="checkAllRoles"
                  checked={
                    filteredRoles.length > 0 &&
                    filteredRoles.every((r) => selectedRoles.includes(r))
                  }
                  onChange={handleCheckAll}
                />
                <label className="form-check-label" htmlFor="checkAllRoles">
                  Check All
                </label>
              </div>
              {errors.selectedRoles && (
                <div className="text-danger mb-2">
                  {errors.selectedRoles.message}
                </div>
              )}

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
                    {chunkedRoles.length > 0 ? (
                      chunkedRoles.map((pair, rowIndex) => (
                        <tr key={rowIndex}>
                          <td className="text-center">{rowIndex * 2 + 1}</td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className={`form-check-input ${selectedRoles.includes(pair[0])
                                    ? "is-valid"
                                    : ""
                                  }`}
                                id={`chk-${pair[0]}`}
                                {...register("selectedRoles", {
                                  validate: (value) =>
                                    value.length > 0 ||
                                    "At least one role must be selected",
                                })}
                                value={pair[0]}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`chk-${pair[0]}`}
                              >
                                {pair[0]}
                              </label>
                            </div>
                          </td>

                          {pair[1] && (
                            <>
                              <td className="text-center">
                                {rowIndex * 2 + 2}
                              </td>
                              <td>
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className={`form-check-input ${selectedRoles.includes(pair[1])
                                        ? "is-valid"
                                        : ""
                                      }`}
                                    id={`chk-${pair[1]}`}
                                    {...register("selectedRoles")}
                                    value={pair[1]}
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

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" disabled={!isValid}>
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
