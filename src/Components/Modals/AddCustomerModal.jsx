import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function AddPaymentModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      customerName: "",
      companyName: "",
      type: "",
      phone: "",
      email: "",
      address: "",
      postcode: "",
      notes: ""
    }
  });

  // Create bootstrap modal once
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
    console.log(data);
    bsModalRef.current.hide();
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Add Customer Type</h5>
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

              {/* Customer Name */}
              <div className="mb-3">
                <label className="form-label">Customer Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.customerName ? "is-invalid" : ""}`}
                  placeholder="Customer Name"
                  {...register("customerName", {
                    required: "Customer Name is required"
                  })}
                />
                {errors.customerName && (
                  <div className="invalid-feedback">
                    {errors.customerName.message}
                  </div>
                )}
              </div>

              {/* Company Name */}
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.companyName ? "is-invalid" : ""}`}
                  placeholder="Company Name"
                  {...register("companyName", {
                    required: "Company Name is required"
                  })}
                />
                {errors.companyName && (
                  <div className="invalid-feedback">
                    {errors.companyName.message}
                  </div>
                )}
              </div>

              {/* Type */}
              <div className="mb-3">
                <label className="form-label">Type</label>
                <select
                  className={`form-control ${errors.type ? "is-invalid" : ""}`}
                  {...register("type", { required: "Type is required" })}
                  defaultValue=""
                >
                  <option value="">Select Type</option>
                  <option value="Other">Other</option>
                  <option value="Trader">Trader</option>
                  <option value="Premium">Premium</option>
                  <option value="Normal">Normal</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">
                    {errors.type.message}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label">Phone no.</label>
                <input
                  type="number"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  placeholder="Phone no."
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number"
                    }
                  })}
                />
                {errors.phone && (
                  <div className="invalid-feedback">
                    {errors.phone.message}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email"
                    }
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email.message}
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  rows={3}
                  className={`form-control ${errors.address ? "is-invalid" : ""}`}
                  placeholder="Address"
                  {...register("address", {
                    required: "Address is required"
                  })}
                />
                {errors.address && (
                  <div className="invalid-feedback">
                    {errors.address.message}
                  </div>
                )}
              </div>

              {/* Post Code */}
              <div className="mb-3">
                <label className="form-label">Post Code</label>
                <input
                  type="text"
                  className={`form-control ${errors.postcode ? "is-invalid" : ""}`}
                  placeholder="Post Code"
                  {...register("postcode", {
                    required: "Post Code is required"
                  })}
                />
                {errors.postcode && (
                  <div className="invalid-feedback">
                    {errors.postcode.message}
                  </div>
                )}
              </div>

              {/* Notes */}
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea
                  rows={3}
                  className="form-control"
                  placeholder="Notes"
                  {...register("notes")}
                />
              </div>

            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
              >
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

export default AddPaymentModal;