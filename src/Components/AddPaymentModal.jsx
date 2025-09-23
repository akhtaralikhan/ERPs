import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { MainModal, NotMain, Other } from "./FormModals";
import './AddPaymentModal.css'

function AddPaymentModal({ showModal, setShowModal }) {
  const [modal, setModal] = useState("Main");
  const initialData = {
    id: "",
    itemName: "",
    quantity: "",
    unitPrice: "",
    discount: "",
    vat: "",
    total: "",
  }

  const toggle = () => setShowModal(!showModal);

  const [MainData, setMainData] = useState([]);

  const [formData, setFormData] = useState(initialData);

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
    <div>
      <Modal isOpen={showModal} toggle={toggle} size="md">
        <ModalHeader>
          Add Invoice{" "}
          <i
            style={{ margin: "0px 0px 0px 603px" }}
            className="fa fa-xmark fs--1 text-danger cursor-pointer"
            onClick={toggle}
          ></i>
        </ModalHeader>
        <ModalBody>
          <div className="card">
            <div className="upper-label  d-flex w-100 text-center border-bottom  ">
              <label
                htmlFor="form-label  "
                onClick={() => setModal("Main")}
                className={`${modal === "Main"
                  ? "border-bottom-0  text-none"
                  : " text-primary"
                  }  border-end p-2 fw-semi-bold px-6 cursor-pointer `}
              >
                Main
              </label>
              <hr />
              <label
                htmlFor="form-label"
                onClick={() => setModal("others")}
                className={` ${modal === "others"
                  ? "border-bottom-0 text-none"
                  : " text-primary"
                  } border-end p-2 fw-semi-bold  px-6 cursor-pointer`}
              >
                Others
              </label>
              <label
                htmlFor="form-label"
                onClick={() => setModal("notMain")}
                className={` ${modal === "notMain"
                  ? "border-bottom-0 text-none "
                  : " text-primary"
                  }  py-2 fw-semi-bold  px-5 white-space-nowrap cursor-pointer`}
              >
                Add New Customer
              </label>
            </div>

            <div className={`fade-section ${modal === "Main" ? "show" : ""}`} >
              <MainModal setModal={setModal} formData={formData} handleInputs={handleInputs} handleRemoveData={handleRemoveData} handleSubmit={handleSubmit} MainData={MainData} />
            </div>
            <div className={`fade-section ${modal === "notMain" ? "show" : ""}`} >
              <NotMain />
            </div>
            <div className={`fade-section ${modal === "others" ? "show" : ""}`}>
              <Other />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddPaymentModal;
