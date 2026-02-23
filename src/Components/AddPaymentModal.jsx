import React, { useState, useEffect, useRef } from "react";
import { MainModal, NotMain, Other } from "./FormModals";
import "./AddPaymentModal.css";

function AddPaymentModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const [modal, setModal] = useState("Main");

  const initialData = {
    id: "",
    itemName: "",
    quantity: "",
    unitPrice: "",
    discount: "",
    vat: "",
    total: "",
  };

  const [MainData, setMainData] = useState([]);
  const [formData, setFormData] = useState(initialData);

  // Initialize Bootstrap modal once
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

  const toggle = () => {
    bsModalRef.current.hide();
  };

  const handleSubmit = () => {
    console.log("submitted");
    console.log(formData);

    const newData = {
      ...formData,
      id: MainData.length + 1,
    };

    setMainData((prev) => [...prev, newData]);
    setFormData(initialData);
  };

  const handleRemoveData = (id) => {
    setMainData((prev) => prev.filter((data) => data.id !== id));
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Add Invoice</h5>
            <button
              type="button"
              className="btn p-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="card">

              {/* Tabs */}
              <div className="upper-label d-flex w-100 text-center add-payment-blue-border-bottom">
                <label
                  onClick={() => setModal("Main")}
                  className={`${
                    modal === "Main"
                      ? "border-bottom-0 text-dark"
                      : "text-primary"
                  } border-end p-2 fw-semi-bold px-6 cursor-pointer`}
                >
                  Main
                </label>

                <label
                  onClick={() => setModal("others")}
                  className={`${
                    modal === "others"
                      ? "border-bottom-0 text-dark"
                      : "text-primary"
                  } border-end p-2 fw-semi-bold px-6 cursor-pointer`}
                >
                  Others
                </label>

                <label
                  onClick={() => setModal("notMain")}
                  className={`${
                    modal === "notMain"
                      ? "border-bottom-0 text-dark"
                      : "text-primary"
                  } py-2 fw-semi-bold px-5 white-space-nowrap cursor-pointer`}
                >
                  Add New Customer
                </label>
              </div>

              {/* Sections */}
              <div className={`fade-section ${modal === "Main" ? "show" : ""}`}>
                <MainModal
                  setModal={setModal}
                  formData={formData}
                  handleInputs={handleInputs}
                  handleRemoveData={handleRemoveData}
                  handleSubmit={handleSubmit}
                  MainData={MainData}
                />
              </div>

              <div className={`fade-section ${modal === "notMain" ? "show" : ""}`}>
                <NotMain />
              </div>

              <div className={`fade-section ${modal === "others" ? "show" : ""}`}>
                <Other />
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleSubmit}>
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

        </div>
      </div>
    </div>
  );
}

export default AddPaymentModal;
