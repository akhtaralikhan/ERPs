import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddCurrencyModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    console.log("Currency Data:", data);
    toggle();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle} size="lg">
        <div className="modal-header d-flex justify-content-between">
          <h5 className="mb-0">Add Currency</h5>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: "Name is required" })}
              placeholder="Currency name"
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Code</label>
            <input
              type="text"
              className="form-control"
              {...register("code", { required: "Code is required" })}
              placeholder="Currency code (e.g. USD)"
            />
            {errors.code && <small className="text-danger">{errors.code.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Symbol</label>
            <input
              type="text"
              className="form-control"
              {...register("symbol", { required: "Symbol is required" })}
              placeholder="Symbol (e.g. $)"
            />
            {errors.symbol && <small className="text-danger">{errors.symbol.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              {...register("country", { required: "Country is required" })}
              placeholder="Country"
            />
            {errors.country && <small className="text-danger">{errors.country.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              {...register("description", { required: "Description is required" })}
              placeholder="Short description"
            />
            {errors.description && <small className="text-danger">{errors.description.message}</small>}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("isDefault")}
            />
            <label className="form-check-label ms-2">Is Default</label>
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

export default AddCurrencyModal;
