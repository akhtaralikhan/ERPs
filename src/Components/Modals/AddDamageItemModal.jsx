import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import { useForm } from "react-hook-form";

function AddDamageItemModal({ showModal, setShowModal, items, currentStock }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    console.log("Damage Item Data:", data); // Replace with your actual logic
    toggle();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Add Damage Item</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <select
              className="form-control"
              {...register("itemName", { required: "Select an item" })}
              defaultValue=""
            >
              <option value="" disabled>Please Select Item</option>
              {items && items.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
            {errors.itemName && <small className="text-danger">{errors.itemName.message}</small>}
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
              className="form-control"
              {...register("totalDamageItem", {
                required: "Total damage item is required",
                min: { value: 1, message: "Must be at least 1" },
                validate: value => value <= currentStock || "Cannot exceed current stock"
              })}
              placeholder="Enter total damaged quantity"
            />
            {errors.totalDamageItem && <small className="text-danger">{errors.totalDamageItem.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Reason Of Damage</label>
            <input
              type="text"
              className="form-control"
              {...register("reasonOfDamage", { required: "Reason is required" })}
              placeholder="Enter the reason of damage"
            />
            {errors.reasonOfDamage && <small className="text-danger">{errors.reasonOfDamage.message}</small>}
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

export default AddDamageItemModal;
