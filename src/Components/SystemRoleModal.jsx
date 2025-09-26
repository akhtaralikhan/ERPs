import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const SystemRoleModal = ({ mode, onSave, initialData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      RoleName: "",
    },
  });

  // Load initial data when editing
  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({
        RoleName: initialData.RoleName || "",
      });
    } else {
      reset({ RoleName: "" });
    }
  }, [mode, initialData, reset]);

  const onSubmit = (data) => {
    onSave(data);

    // Hide bootstrap modal after save
    const modalEl = document.getElementById("systemRoleModal");
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
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Role Name *</label>
                <input
                  type="text"
                  className={`form-control ${getValidationClass("RoleName")}`}
                  placeholder="Enter Role Name"
                  {...register("RoleName", {
                    required: "Role Name is required",
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
                {errors.RoleName && (
                  <div className="invalid-feedback">
                    {errors.RoleName.message}
                  </div>
                )}
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
