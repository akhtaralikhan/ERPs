import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddEmailConfigModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    console.log("Email Config:", data);
    toggle();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle} size="lg">
      <div className="modal-header d-flex justify-content-between">
        <h5 className="mb-0">Add Email Config</h5>
        <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
      </div>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email"
                }
              })}
              placeholder="Enter email"
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter password"
            />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Hostname</label>
            <input
              type="text"
              className="form-control"
              {...register("hostname", { required: "Hostname is required" })}
              placeholder="Enter mail server hostname"
            />
            {errors.hostname && <small className="text-danger">{errors.hostname.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Port</label>
            <input
              type="number"
              className="form-control"
              {...register("port", {
                required: "Port is required",
                min: { value: 1, message: "Port must be greater than 0" }
              })}
              placeholder="Port"
            />
            {errors.port && <small className="text-danger">{errors.port.message}</small>}
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label className="form-label me-3">SSL Enabled</label>
            <input
              type="checkbox"
              className="form-check-input"
              {...register("sslEnabled")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sender Full Name</label>
            <input
              type="text"
              className="form-control"
              {...register("senderName", { required: "Sender full name is required" })}
              placeholder="Sender's full name"
            />
            {errors.senderName && <small className="text-danger">{errors.senderName.message}</small>}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("isDefault")}
            />
            <label className="form-check-label ms-2">IsDefault</label>
          </div>
          <div className="modal-footer p-0 pt-2">
            <Button color="primary" type="submit"><small>Save</small></Button>
            <Button color="secondary" onClick={toggle}><small>Cancel</small></Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default AddEmailConfigModal;
