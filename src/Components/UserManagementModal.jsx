import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserManagementModal = ({ mode, onSave, initialData }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {
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
    },
  });

  const values = watch();

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({ ...initialData, password: "", confirmPassword: "" });
    } else {
      reset({});
    }
  }, [mode, initialData, reset]);

  const onSubmit = (data) => {
    if (
      (mode === "new" || data.password || data.confirmPassword) &&
      data.password !== data.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }

    onSave(data);

    const modalEl = document.getElementById("userManagementModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
  };

  const getValidationClass = (name) => {
    if (errors[name]) return "is-invalid";
    if (touchedFields[name] && !errors[name]) return "is-valid";
    return "";
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
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
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
                    <div className="col-md-6">
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        className={`form-control ${getValidationClass(
                          "firstname"
                        )}`}
                        {...register("firstname", {
                          required: "First Name is required",
                          minLength: {
                            value: 2,
                            message: "At least 2 characters",
                          },
                          maxLength: {
                            value: 50,
                            message: "Max 50 characters",
                          },
                        })}
                      />
                      {errors.firstname && (
                        <div className="invalid-feedback">
                          {errors.firstname.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Last Name *</label>
                      <input
                        type="text"
                        className={`form-control ${getValidationClass(
                          "lastname"
                        )}`}
                        {...register("lastname", {
                          required: "Last Name is required",
                          minLength: {
                            value: 2,
                            message: "At least 2 characters",
                          },
                          maxLength: {
                            value: 50,
                            message: "Max 50 characters",
                          },
                        })}
                      />
                      {errors.lastname && (
                        <div className="invalid-feedback">
                          {errors.lastname.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Address *</label>
                      <input
                        type="text"
                        className={`form-control ${getValidationClass(
                          "address"
                        )}`}
                        {...register("address", {
                          required: "Address is required",
                          maxLength: {
                            value: 100,
                            message: "Max 100 characters",
                          },
                          minLength: {
                            value: 5,
                            message: "At least 5 characters",
                          },
                        })}
                      />
                      {errors.address && (
                        <div className="invalid-feedback">
                          {errors.address.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Country *</label>
                      <input
                        type="text"
                        className={`form-control ${getValidationClass(
                          "country"
                        )}`}
                        {...register("country", {
                          required: "Country is required",
                          maxLength: {
                            value: 50,
                            message: "Max 50 characters",
                          },
                        })}
                      />
                      {errors.country && (
                        <div className="invalid-feedback">
                          {errors.country.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="text"
                        className={`form-control ${getValidationClass(
                          "Phonenumber"
                        )}`}
                        {...register("Phonenumber", {
                          required: "Phone Number is required",
                          pattern: {
                            value: /^[0-9]{7,15}$/,
                            message: "Enter valid number (7-15 digits)",
                          },
                        })}
                      />
                      {errors.Phonenumber && (
                        <div className="invalid-feedback">
                          {errors.Phonenumber.message}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">User Role *</label>
                      <select
                        className={`form-select ${getValidationClass(
                          "userRole"
                        )}`}
                        {...register("userRole", {
                          required: "Please select a role",
                        })}
                      >
                        <option value="">--- SELECT ---</option>
                        <option value="Admin">Admin</option>
                        <option value="General">General</option>
                      </select>
                      {errors.userRole && (
                        <div className="invalid-feedback">
                          {errors.userRole.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className={`form-control ${getValidationClass(
                          "email"
                        )}`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter valid email",
                          },
                        })}
                        disabled={mode === "edit"}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Branch *</label>
                      <select
                        className={`form-select ${getValidationClass(
                          "branch"
                        )}`}
                        {...register("branch", {
                          required: "Branch is required",
                        })}
                      >
                        <option value="">--- SELECT ---</option>
                        <option value="Branch1">Branch 1</option>
                        <option value="Branch2">Branch 2</option>
                      </select>
                      {errors.branch && (
                        <div className="invalid-feedback">
                          {errors.branch.message}
                        </div>
                      )}
                    </div>

                    {mode === "new" && (
                      <div className="col-md-6">
                        <label className="form-label">Password *</label>
                        <input
                          type="password"
                          className={`form-control ${getValidationClass(
                            "password"
                          )}`}
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "At least 6 characters",
                            },
                          })}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="col-md-6">
                      <label className="form-label">Choose a file *</label>
                      <input
                        type="file"
                        className={`form-control ${getValidationClass("file")}`}
                        {...register("file", {
                          required: "File is required",
                          validate: (fileList) =>
                            fileList.length === 0
                              ? "Please select a file"
                              : [
                                  "image/jpeg",
                                  "image/png",
                                  "application/pdf",
                                ].includes(fileList[0].type) ||
                                "Allowed formats: jpg, png, pdf",
                        })}
                      />
                      {errors.file && (
                        <div className="invalid-feedback">
                          {errors.file.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* User Details Tab */}
                <div className="tab-pane fade" id="details" role="tabpanel">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Employee ID *</label>
                      <input
                        type="text"
                        className={`form-control ${getValidationClass(
                          "employeeId"
                        )}`}
                        {...register("employeeId", {
                          required: "Employee ID is required",
                          maxLength: {
                            value: 20,
                            message: "Max 20 characters",
                          },
                          pattern: {
                            value: /^[A-Za-z0-9_-]+$/,
                            message:
                              "Only letters, numbers, _ and - are allowed",
                          },
                        })}
                      />
                      {errors.employeeId && (
                        <div className="invalid-feedback">
                          {errors.employeeId.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Joining Date *</label>
                      <input
                        type="date"
                        className={`form-control ${getValidationClass(
                          "joiningDate"
                        )}`}
                        {...register("joiningDate", {
                          required: "Joining Date is required",
                          validate: (value) =>
                            new Date(value) <= new Date() ||
                            "Joining Date cannot be in the future",
                        })}
                      />
                      {errors.joiningDate && (
                        <div className="invalid-feedback">
                          {errors.joiningDate.message}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth *</label>
                      <input
                        type="date"
                        className={`form-control ${getValidationClass("dob")}`}
                        {...register("dob", {
                          required: "Date of Birth is required",
                          validate: (value) => {
                            const dob = new Date(value);
                            const today = new Date();
                            if (dob >= today)
                              return "Date of Birth cannot be today or in the future";
                            return true;
                          },
                        })}
                      />
                      {errors.dob && (
                        <div className="invalid-feedback">
                          {errors.dob.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Leaving Date</label>
                      <input
                        type="date"
                        className={`form-control ${getValidationClass(
                          "leavingDate"
                        )}`}
                        {...register("leavingDate", {
                          required: "Leaving Date is required",
                          validate: (value) => {
                            if (!values.joiningDate)
                              return "Set Joining Date first";
                            return new Date(value) >=
                              new Date(values.joiningDate)
                              ? true
                              : "Leaving date cannot be before joining date";
                          },
                        })}
                      />

                      {errors.leavingDate && (
                        <div className="invalid-feedback">
                          {errors.leavingDate.message}
                        </div>
                      )}
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
