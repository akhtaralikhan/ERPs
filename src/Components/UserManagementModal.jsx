import React, { useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { Controller, useForm } from "react-hook-form";

const UserManagementModal = ({ mode, onSave, initialData }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isValid },
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
      reset({
        ...initialData,
        password: "",
        confirmPassword: "",
      });
    } else {
      reset({
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
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = (data) => {
    onSave(data);

    const modalEl = document.getElementById("userManagementModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }

    reset();
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

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
              <div className="row g-3">

                {/* First Name */}
                <div className="col-md-6">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass("firstname")}`}
                    {...register("firstname", {
                      required: "First Name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                      maxLength: { value: 50, message: "Max 50 characters" },
                    })}
                  />
                  {errors.firstname && (
                    <div className="invalid-feedback">
                      {errors.firstname.message}
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClass("lastname")}`}
                    {...register("lastname", {
                      required: "Last Name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                      maxLength: { value: 50, message: "Max 50 characters" },
                    })}
                  />
                  {errors.lastname && (
                    <div className="invalid-feedback">
                      {errors.lastname.message}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className={`form-control ${getValidationClass("email")}`}
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

                {/* Password (only new mode) */}
                {mode === "new" && (
                  <>
                    <div className="col-md-6">
                      <label className="form-label">Password *</label>
                      <input
                        type="password"
                        className={`form-control ${getValidationClass("password")}`}
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

                    <div className="col-md-6">
                      <label className="form-label">Confirm Password *</label>
                      <input
                        type="password"
                        className={`form-control ${getValidationClass(
                          "confirmPassword"
                        )}`}
                        {...register("confirmPassword", {
                          required: "Confirm Password is required",
                          validate: (value) =>
                            value === values.password ||
                            "Passwords do not match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback">
                          {errors.confirmPassword.message}
                        </div>
                      )}
                    </div>
                  </>
                )}

              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
              >
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