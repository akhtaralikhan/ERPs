import React, { useEffect, useRef } from "react";
import Flatpickr from "react-flatpickr";
import { Controller, useForm } from "react-hook-form";

function AddEmployeeModal({
  showModal,
  setShowModal,
  departments = [],
  designations = [],
  subDepartments = [],
}) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const joiningDate = watch("joiningDate");

  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  useEffect(() => {
    showModal ? bsModalRef.current.show() : bsModalRef.current.hide();
  }, [showModal]);

  const onSubmit = (data) => {
    console.log("Employee data:", data);
    bsModalRef.current.hide();
  };

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Employee</h5>
            <button type="button" className="btn p-1" data-bs-dismiss="modal">
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">

                  {/* LEFT SIDE FIELDS (unchanged) */}
                  {/* Just converted error styling */}
                  
                  {/* Employee ID */}
                  <div className="mb-3">
                    <label className="form-label">Employee Id</label>
                    <input
                      className={`form-control ${errors.employeeId ? "is-invalid" : ""}`}
                      defaultValue="EMP-XXXXX"
                      readOnly
                      {...register("employeeId", { required: "Employee ID is required" })}
                    />
                    {errors.employeeId && <div className="invalid-feedback">{errors.employeeId.message}</div>}
                  </div>

                  {/* First Name */}
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                      {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                  </div>

                  {/* Last Name */}
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                  </div>

                  {/* DOB */}
                  <div className="mb-3">
                    <label className="form-label">Date Of Birth</label>
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{ required: "DOB is required" }}
                      render={({ field }) => (
                        <Flatpickr
                          value={field.value || ""}
                          onChange={(_, dateStr) => field.onChange(dateStr)}
                          options={{ dateFormat: "Y-m-d" }}
                          className={`form-control ${errors.dateOfBirth ? "is-invalid" : ""}`}
                          placeholder="Select date of birth"
                        />
                      )}
                    />
                    {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth.message}</div>}
                  </div>

                  {/* Selects converted to form-select */}
                  {[
                    { name: "designation", label: "Designation", data: designations },
                    { name: "department", label: "Department", data: departments },
                    { name: "subDepartment", label: "Sub Department", data: subDepartments }
                  ].map(field => (
                    <div className="mb-3" key={field.name}>
                      <label className="form-label">{field.label}</label>
                      <select
                        className={`form-select ${errors[field.name] ? "is-invalid" : ""}`}
                        defaultValue=""
                        {...register(field.name, { required: `${field.label} is required` })}
                      >
                        <option value="" disabled>--- SELECT ---</option>
                        {field.data.map(item => (
                          <option key={item.id} value={item.id}>{item.label}</option>
                        ))}
                      </select>
                      {errors[field.name] && (
                        <div className="invalid-feedback">
                          {errors[field.name].message}
                        </div>
                      )}
                    </div>
                  ))}

                </div>

                <div className="col-md-6">

                  {/* Right Side */}
                  <div className="mb-3">
                    <label className="form-label">Joining Date</label>
                    <Controller
                      name="joiningDate"
                      control={control}
                      rules={{ required: "Joining date is required" }}
                      render={({ field }) => (
                        <Flatpickr
                          value={field.value || ""}
                          onChange={(_, dateStr) => field.onChange(dateStr)}
                          options={{ dateFormat: "Y-m-d" }}
                          className={`form-control ${errors.joiningDate ? "is-invalid" : ""}`}
                          placeholder="Select joining date"
                        />
                      )}
                    />
                    {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate.message}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Leaving Date</label>
                    <Controller
                      name="leavingDate"
                      control={control}
                      rules={{
                        validate: value =>
                          !value ||
                          new Date(value) >= new Date(joiningDate) ||
                          "Leaving date must be after joining date"
                      }}
                      render={({ field }) => (
                        <Flatpickr
                          value={field.value || ""}
                          onChange={(_, dateStr) => field.onChange(dateStr)}
                          options={{ dateFormat: "Y-m-d" }}
                          className={`form-control ${errors.leavingDate ? "is-invalid" : ""}`}
                          placeholder="Select leaving date"
                        />
                      )}
                    />
                    {errors.leavingDate && <div className="invalid-feedback">{errors.leavingDate.message}</div>}
                  </div>

                  {["phone", "email"].map(field => (
                    <div className="mb-3" key={field}>
                      <label className="form-label text-capitalize">{field}</label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                        {...register(field, { required: `${field} is required` })}
                      />
                      {errors[field] && <div className="invalid-feedback">{errors[field].message}</div>}
                    </div>
                  ))}

                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      className={`form-control ${errors.address ? "is-invalid" : ""}`}
                      {...register("address", { required: "Address is required" })}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                  </div>

                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeModal;
