import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddDamageItemModal({ showModal, setShowModal, items, currentStock }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  // Create modal instance once
  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);

    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  // Control open/close
  useEffect(() => {
    if (showModal) {
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [showModal]);

  const onSubmit = (data) => {
    console.log("Damage Item Data:", data);
    bsModalRef.current.hide();
  };

  return (
    <div
      className="modal fade"
      id="AddDamageItemModal"
      tabIndex="-1"
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Add Damage Item</h5>
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

              <div className="mb-3">
                <label className="form-label">Item Name</label>
                <select
                  className={`form-select ${errors.itemName ? "is-invalid" : ""}`}
                  {...register("itemName", { required: "Select an item" })}
                  defaultValue=""
                >
                  <option value="" disabled>Please Select Item</option>
                  {items && items.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.itemName && (
                  <div className="invalid-feedback">
                    {errors.itemName.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Current Total Stock</label>
                <input
                  type="number"
                  className="form-control"
                  value={currentStock || 0}
                  readOnly
                  {...register("currentTotalStock")}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Total Damage Item</label>
                <input
                  type="number"
                  className={`form-control ${errors.totalDamageItem ? "is-invalid" : ""}`}
                  placeholder="Enter total damaged quantity"
                  {...register("totalDamageItem", {
                    required: "Total damage item is required",
                    min: { value: 1, message: "Must be at least 1" },
                    validate: value =>
                      value <= currentStock || "Cannot exceed current stock"
                  })}
                />
                {errors.totalDamageItem && (
                  <div className="invalid-feedback">
                    {errors.totalDamageItem.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Reason Of Damage</label>
                <input
                  type="text"
                  className={`form-control ${errors.reasonOfDamage ? "is-invalid" : ""}`}
                  placeholder="Enter the reason of damage"
                  {...register("reasonOfDamage", {
                    required: "Reason is required"
                  })}
                />
                {errors.reasonOfDamage && (
                  <div className="invalid-feedback">
                    {errors.reasonOfDamage.message}
                  </div>
                )}
              </div>

            </div>

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

export default AddDamageItemModal;