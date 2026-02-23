import React, { useEffect, useRef } from "react";
import Flatpickr from "react-flatpickr";
import { Controller, useForm } from "react-hook-form";

function AddAttendanceModal({ showModal, setShowModal, employees }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  const checkIn = watch("checkIn");

  // ✅ Create Bootstrap modal instance once
  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);

    // Sync Bootstrap close → React state
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  // ✅ Control show/hide
  useEffect(() => {
    if (showModal) {
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [showModal]);

  const onSubmit = (data) => {
    console.log("Attendance Data:", data);
    bsModalRef.current.hide();
  };

  return (
    <div
      className="modal fade"
      id="AddAttendanceModal"
      tabIndex="-1"
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Add Attendance</h5>
            <button
              type="button"
              className="btn p-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">

              {/* Employee */}
              <div className="mb-3">
                <label className="form-label">Employee</label>
                <select
                  className={`form-control ${errors.employee ? "is-invalid" : ""}`}
                  {...register("employee", {
                    required: "Please select an employee"
                  })}
                  defaultValue=""
                >
                  <option value="" disabled>--- SELECT ---</option>
                  {employees &&
                    employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name}
                      </option>
                    ))}
                </select>
                {errors.employee && (
                  <div className="invalid-feedback">
                    {errors.employee.message}
                  </div>
                )}
              </div>

              {/* Check In */}
              <div className="mb-3">
                <label className="form-label">Check In</label>
                <Controller
                  name="checkIn"
                  control={control}
                  rules={{ required: "Check In is required" }}
                  render={({ field }) => (
                    <Flatpickr
                      value={field.value || ""}
                      onChange={(_, dateStr) => field.onChange(dateStr)}
                      options={{
                        enableTime: true,
                        dateFormat: "Y-m-d\\TH:i",
                        time_24hr: true,
                        static: true,
                        disableMobile: true
                      }}
                      className={`form-control ${errors.checkIn ? "is-invalid" : ""}`}
                      placeholder="Select check in date and time"
                    />
                  )}
                />
                {errors.checkIn && (
                  <div className="invalid-feedback">
                    {errors.checkIn.message}
                  </div>
                )}
              </div>

              {/* Check Out */}
              <div className="mb-3">
                <label className="form-label">Check Out</label>
                <Controller
                  name="checkOut"
                  control={control}
                  rules={{
                    required: "Check Out is required",
                    validate: (value) =>
                      !checkIn ||
                      new Date(value) > new Date(checkIn) ||
                      "Check Out must be after Check In"
                  }}
                  render={({ field }) => (
                    <Flatpickr
                      value={field.value || ""}
                      onChange={(_, dateStr) => field.onChange(dateStr)}
                      options={{
                        enableTime: true,
                        dateFormat: "Y-m-d\\TH:i",
                        time_24hr: true,
                        static: true,
                        disableMobile: true
                      }}
                      className={`form-control ${errors.checkOut ? "is-invalid" : ""}`}
                      placeholder="Select check out date and time"
                    />
                  )}
                />
                {errors.checkOut && (
                  <div className="invalid-feedback">
                    {errors.checkOut.message}
                  </div>
                )}
              </div>

            </div>

            {/* Footer */}
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
}

export default AddAttendanceModal;
