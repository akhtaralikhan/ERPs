import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddAttendanceModal({ showModal, setShowModal, employees }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  // To compare dates for validation
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const onSubmit = (data) => {
    console.log("Attendance Data:", data);
    toggle();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Add Attendance</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Employee</label>
            <select
              className="form-control"
              {...register("employee", { required: "Please select an employee" })}
              defaultValue=""
            >
              <option value="" disabled>--- SELECT ---</option>
              {employees && employees.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.name}</option>
              ))}
            </select>
            {errors.employee && <small className="text-danger">{errors.employee.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Check In</label>
            <input
              type="datetime-local"
              className="form-control"
              {...register("checkIn", { required: "Check In is required" })}
            />
            {errors.checkIn && <small className="text-danger">{errors.checkIn.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Check Out</label>
            <input
              type="datetime-local"
              className="form-control"
              {...register("checkOut", {
                required: "Check Out is required",
                validate: value =>
                  !checkIn || new Date(value) > new Date(checkIn) || "Check Out must be after Check In"
              })}
            />
            {errors.checkOut && <small className="text-danger">{errors.checkOut.message}</small>}
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

export default AddAttendanceModal;
