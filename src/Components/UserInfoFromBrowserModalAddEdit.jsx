import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserInfoFromBrowserModalAddEdit = ({ mode, onSave, initialData }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm({
    mode: "onChange", // 👈 update validation state on change
    defaultValues: {
      BrowserUniqueID: "",
      Lat: "",
      Long: "",
      TimeZone: "",
      BrowserMajor: "",
      BrowserName: "",
    },
  });

  // watch all values for validation state
  const values = watch();

  // Reset form when mode or initialData changes
  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset(initialData);
    } else {
      reset({
        BrowserUniqueID: "",
        Lat: "",
        Long: "",
        TimeZone: "",
        BrowserMajor: "",
        BrowserName: "",
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = (data) => {
    onSave(data);
    const modalEl = document.getElementById("UserInfoFromBrowserModalAddEdit");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
  };

  const getValidationClass = (name) => {
    // If there's an error, show red
    if (errors[name]) return "is-invalid";

    // If the field is touched OR value changed from initialData, show green
    if (mode === "edit" && initialData) {
      if (values[name] !== initialData[name] && !errors[name])
        return "is-valid";
    } else {
      // Create mode: green only if touched and valid
      if (touchedFields[name] && !errors[name]) return "is-valid";
    }

    return "";
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
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
              {/* Browser Unique ID */}
              <div className="mb-3">
                <label className="form-label">Browser Unique ID *</label>
                <input
                  type="text"
                  className={`form-control ${getValidationClass(
                    "BrowserUniqueID"
                  )}`}
                  placeholder="Enter Browser Unique ID"
                  {...register("BrowserUniqueID", {
                    required: "Browser Unique ID is required",
                  })}
                />
                {errors.BrowserUniqueID && (
                  <div className="invalid-feedback">
                    {errors.BrowserUniqueID.message}
                  </div>
                )}
              </div>

              {/* Lat & Long */}
              <div className="row">
                <div className="col mb-3">
                  <label className="form-label">Lat *</label>
                  <input
                    type="number"
                    step="any"
                    className={`form-control ${getValidationClass("Lat")}`}
                    placeholder="Enter Latitude"
                    {...register("Lat", {
                      required: "Latitude is required",
                      pattern: {
                        value: /^-?\d+(\.\d+)?$/,
                        message: "Enter a valid number",
                      },
                    })}
                  />
                  {errors.Lat && (
                    <div className="invalid-feedback">{errors.Lat.message}</div>
                  )}
                </div>
                <div className="col mb-3">
                  <label className="form-label">Long *</label>
                  <input
                    type="number"
                    step="any"
                    className={`form-control ${getValidationClass("Long")}`}
                    placeholder="Enter Longitude"
                    {...register("Long", {
                      required: "Longitude is required",
                      pattern: {
                        value: /^-?\d+(\.\d+)?$/,
                        message: "Enter a valid number",
                      },
                    })}
                  />
                  {errors.Long && (
                    <div className="invalid-feedback">
                      {errors.Long.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Time Zone */}
              <div className="mb-3">
                <label className="form-label">Time Zone *</label>
                <input
                  type="text"
                  className={`form-control ${getValidationClass("TimeZone")}`}
                  placeholder="Enter Time Zone (e.g., GMT+5:30)"
                  {...register("TimeZone", {
                    required: "Time Zone is required",
                  })}
                />
                {errors.TimeZone && (
                  <div className="invalid-feedback">
                    {errors.TimeZone.message}
                  </div>
                )}
              </div>

              {/* Browser Major */}
              <div className="mb-3">
                <label className="form-label">Browser Major *</label>
                <input
                  type="number"
                  className={`form-control ${getValidationClass(
                    "BrowserMajor"
                  )}`}
                  placeholder="Enter Browser Major Version"
                  {...register("BrowserMajor", {
                    required: "Browser Major is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid number",
                    },
                  })}
                />
                {errors.BrowserMajor && (
                  <div className="invalid-feedback">
                    {errors.BrowserMajor.message}
                  </div>
                )}
              </div>

              {/* Browser Name */}
              <div className="mb-3">
                <label className="form-label">Browser Name *</label>
                <input
                  type="text"
                  className={`form-control ${getValidationClass(
                    "BrowserName"
                  )}`}
                  placeholder="Enter Browser Name"
                  {...register("BrowserName", {
                    required: "Browser Name is required",
                  })}
                />
                {errors.BrowserName && (
                  <div className="invalid-feedback">
                    {errors.BrowserName.message}
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

export default UserInfoFromBrowserModalAddEdit;
