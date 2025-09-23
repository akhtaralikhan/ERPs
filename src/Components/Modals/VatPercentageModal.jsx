import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      <ModalHeader toggle={toggle}>Add Vat Percentage</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Reference"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Vat Percentage</label>
            <input
              type="text"
              className="form-control"
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

          <ModalFooter>
            <Button color="primary" type="submit">Save</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default VatPercentageModal;
