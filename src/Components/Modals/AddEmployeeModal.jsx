import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddEmployeeModal({
  showModal,
  setShowModal,
  departments = [],
  designations = [],
  subDepartments = [],
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    console.log("Employee data:", data);
    toggle();
  };

  const joiningDate = watch("joiningDate");
  const leavingDate = watch("leavingDate");

  return (
    <Modal isOpen={showModal} toggle={toggle} size="l">
      <ModalHeader toggle={toggle}>Add Employee</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Employee Id</label>
                <input
                  className="form-control"
                  {...register("employeeId", { required: "Employee ID is required" })}
                  defaultValue="EMP-XXXXX"
                  placeholder="Auto-generated or entered"
                  readOnly
                />
                {errors.employeeId && <small className="text-danger">{errors.employeeId.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  className="form-control"
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="First Name"
                />
                {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  className="form-control"
                  {...register("lastName", { required: "Last name is required" })}
                  placeholder="Last Name"
                />
                {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Date Of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("dateOfBirth", { required: "DOB is required" })}
                />
                {errors.dateOfBirth && <small className="text-danger">{errors.dateOfBirth.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Designation</label>
                <select
                  className="form-control"
                  {...register("designation", { required: "Designation is required" })}
                  defaultValue=""
                >
                  <option value="" disabled>--- SELECT ---</option>
                  {designations.map(des => (
                    <option key={des.id} value={des.id}>{des.label}</option>
                  ))}
                </select>
                {errors.designation && <small className="text-danger">{errors.designation.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-control"
                  {...register("department", { required: "Department is required" })}
                  defaultValue=""
                >
                  <option value="" disabled>--- SELECT ---</option>
                  {departments.map(dep => (
                    <option key={dep.id} value={dep.id}>{dep.label}</option>
                  ))}
                </select>
                {errors.department && <small className="text-danger">{errors.department.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Sub Department</label>
                <select
                  className="form-control"
                  {...register("subDepartment", { required: "Sub Department is required" })}
                  defaultValue=""
                >
                  <option value="" disabled>--- SELECT ---</option>
                  {subDepartments.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.label}</option>
                  ))}
                </select>
                {errors.subDepartment && <small className="text-danger">{errors.subDepartment.message}</small>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Joining Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("joiningDate", { required: "Joining date is required" })}
                />
                {errors.joiningDate && <small className="text-danger">{errors.joiningDate.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Leaving Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("leavingDate", {
                    validate: value => !value || new Date(value) >= new Date(joiningDate) || "Leaving date must be after joining date"
                  })}
                />
                {errors.leavingDate && <small className="text-danger">{errors.leavingDate.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: { value: /^[\d\-+\s]{7,15}$/, message: "Enter a valid phone number" }
                  })}
                />
                {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" }
                  })}
                />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && <small className="text-danger">{errors.address.message}</small>}
              </div>
            </div>
          </div>
          <ModalFooter>
            <Button color="primary" type="submit">Save</Button>
            <Button color="danger" onClick={toggle}>Close</Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default AddEmployeeModal;
