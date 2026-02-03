import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function AddPaymentModal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const toggle = () => setShowModal(!showModal);

  const onSubmit = (data) => {
    // Handle save action
    console.log(data);
    toggle();
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-between">
          <h5 className="mb-0">Add Customer Type</h5>
          <i className="fa-solid fa-xmark text-danger pointer" onClick={toggle}></i>
        </div>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className='form-label'>Customer Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Customer Name'
                {...register("customerName", { required: "Customer Name is required" })}
              />
              {errors.customerName && <small className="text-danger">{errors.customerName.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Company Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Company Name'
                {...register("companyName", { required: "Company Name is required" })}
              />
              {errors.companyName && <small className="text-danger">{errors.companyName.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Type</label>
              <select
                className='form-control'
                {...register("type", { required: "Type is required" })}
                defaultValue="Other"
              >
                <option value="Other">Other</option>
                <option value="Trader">Trader</option>
                <option value="Premium">Premium</option>
                <option value="Normal">Normal</option>
              </select>
              {errors.type && <small className="text-danger">{errors.type.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Phone no.</label>
              <input
                type="number"
                className='form-control'
                placeholder='Phone no.'
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" }
                })}
              />
              {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Email</label>
              <input
                type="email"
                className='form-control'
                placeholder='Email'
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }
                })}
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Address</label>
              <textarea
                rows={3}
                className='form-control'
                placeholder='Address'
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <small className="text-danger">{errors.address.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Post Code</label>
              <input
                type="text"
                className='form-control'
                placeholder='Post Code'
                {...register("postcode", { required: "Post Code is required" })}
              />
              {errors.postcode && <small className="text-danger">{errors.postcode.message}</small>}
            </div>
            <div className="mb-3">
              <label className='form-label'>Notes</label>
              <textarea
                rows={3}
                className='form-control'
                placeholder='Notes'
                {...register("notes")}
              />
            </div>
            <div className="modal-footer p-0 pt-2">
              <Button color="primary" type="submit"><small>Save</small></Button>
              <Button color="secondary" onClick={toggle}><small>Cancel</small></Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddPaymentModal;
