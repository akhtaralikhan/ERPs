import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody } from "reactstrap";

function VatPercentageModal({ showModal, setShowModal }) {
  const toggle = () => setShowModal(!showModal);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Vat Data:", data);
    toggle();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <div className="modal-header d-flex justify-content-between">
        <h5 className="mb-0">Add Vat Percentage</h5>
        <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
      </div>
      <ModalBody>
        <form id="vat-percentage-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Reference"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Vat Percentage</label>
            <input
              type="text"
              className={`form-control ${errors.vatPercentage ? "is-invalid" : ""}`}
              placeholder="Vat Percentage"
              {...register("vatPercentage", {
                required: "Vat Percentage is required",
                pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Enter valid percentage" }
              })}
            />
            {errors.vatPercentage && <small className="text-danger">{errors.vatPercentage.message}</small>}
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="switchCheckDefault"
              {...register("isDefault")}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">Is Default</label>
          </div>

          <div className="modal-footer p-0 pt-2">
            <Button color="primary" type="submit" form="vat-percentage-form">
              <small>Save</small>
            </Button>
            <Button color="secondary" onClick={toggle}>
              <small>Cancel</small>
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default VatPercentageModal;
