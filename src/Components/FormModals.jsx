import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "reactstrap";


export const TableModal = ({ addInvoice, setAddInvoice, onSave }) => {
  const toggle = () => setAddInvoice(!addInvoice);
  const [formData, setFormData] = useState([]);
  console.log(formData);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  // ✅ Add new row
  const handleSubmitted = (newRow) => {
    setFormData((prev) => [
      ...prev,
      { ...newRow, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
  };

  // ✅ Remove row
  const handleRemoveData = (id) => {
    setFormData((prev) => prev.filter((row) => row.id !== id));
  };

  // ✅ Handle Save (send data to parent)
  const handleSave = () => {
    if (onSave) {
      onSave(formData); // send data to parent
    }
    toggle(); // close modal after save
  };

  return (
    <div className="">
      <Modal isOpen={addInvoice} toggle={toggle} size="xl" centered>
        <div className="modal-header modal-title d-flex justify-content-between w-100">
          <h5>Add Invoice</h5>
          <i
            className="fa fa-xmark fs--1 text-danger cursor-pointer"
            onClick={toggle}
          ></i>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            handleSubmitted(data); // ✅ only append
            reset();
          })}
        >
          <div className="table-responsive p-4">
            <table className="table table-sm table-bordered table-striped table-hover align-middle text-center mb-0"
              style={{ fontSize: "13px", borderCollapse: "collapse" }}
            >
              <thead className="">
                <tr>
                  <th style={{ width: "20%" }}>Item Name</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "15%" }}>Unit Price</th>
                  <th style={{ width: "10%" }}>Vat %</th>
                  <th style={{ width: "10%" }}>Discount %</th>
                  <th style={{ width: "15%" }}>Total</th>
                  <th style={{ width: "10%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Form Row */}
                <tr>
                  <td>
                    <select
                      className={`form-select form-select-sm ${errors.itemName ? "is-invalid" : ""}`}
                      {...register("itemName", { required: "Item name is required" })}
                    >
                      <option value="">--Select--</option>
                      <option value="Dummy">Dummy Data</option>
                      <option value="Data">Data</option>
                    </select>
                    <small className="invalid-feedback">{errors.itemName?.message}</small>
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`form-control form-control-sm ${errors.quantity ? "is-invalid" : ""}`}
                      {...register("quantity", { required: "Quantity is required" })}
                    />
                    <small className="invalid-feedback">{errors.quantity?.message}</small>
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`form-control form-control-sm ${errors.unitPrice ? "is-invalid" : ""}`}
                      {...register("unitPrice", { required: "unitPrice is required" })}
                    />
                    <small className="invalid-feedback">{errors.unitPrice?.message}</small>
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`form-control form-control-sm ${errors.vat ? "is-invalid" : ""}`}
                      {...register("vat", { required: "Vat is required" })}
                    />
                    <small className="invalid-feedback">{errors.vat?.message}</small>
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`form-control form-control-sm ${errors.discount ? "is-invalid" : ""}`}
                      {...register("discount", { required: "Discount is required" })}
                    />
                    <small className="invalid-feedback">{errors.discount?.message}</small>
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`form-control form-control-sm ${errors.total ? "is-invalid" : ""}`}
                      {...register("total", { required: "Total amount is required" })}
                    />
                    <small className="invalid-feedback">{errors.total?.message}</small>
                  </td>
                  <td className="text-center">
                    <button type="submit" className="btn btn-sm btn-primary" disabled={!isValid}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </td>
                </tr>

                {/* Data Rows */}
                {formData.map((data, idx) => (
                  <tr key={data.id || idx}>
                    <td>{data?.itemName}</td>
                    <td>{data?.quantity}</td>
                    <td>{data?.unitPrice}</td>
                    <td>{data?.vat}</td>
                    <td>{data?.discount}</td>
                    <td>{data?.total}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveData(data.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer Buttons */}
            <div className="w-100 justify-content-end d-flex">
              <button
                type="button"
                className="btn btn-outline-danger mt-3 me-3"
                onClick={toggle}
              >
                Discard
              </button>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};


export const MainModal = ({
  MainData,
  formData,
  handleRemoveData,
  handleSubmit,
  handleInputs,
  setModal,
  setShowModal
}) => {


  const [addInvoice, setAddInvoice] = useState(false);
  const [Data, setData] = useState([]);
  const grandTotal = Data.reduce((acc, curr) => acc + Number(curr.total || 0), 0);

  // Save handler
  const onSave = (e) => {
    e.preventDefault();
    handleSubmit();         // Save the data (runs parent handler)
    setShowModal(false);    // Close the modal after saving
  };

  // Close handler
  const onClose = () => {
    setShowModal(false);    // Closes the modal
    // Or: setModal(null);   // If your modal logic prefers this
  };


  return (
    <>
      <form className="p-4" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
        <div class="mb-2">
          <label class="form-label" for="basic-form-name">
            Supplier
          </label>
          <select
            className="form-select"
            name="supplier"
            value={formData.supplier}
            onChange={handleInputs}
            id="basic-form-name"
          >
            <option value="Faizan">Faizan</option>
            <option value="Arfat">Arfat</option>
            <option value="Azim">Azim</option>
          </select>
        </div>
        <button
          type="button"
          onClick={() => setModal("notMain")}
          className="btn btn-soft-primary"
        >
          <span className="fa fa-solid fa-plus me-2" /> Add Customer
        </button>
        <div className="row">
          <div class="mb-2 col-md-6 col-12">
            <label class="form-label" for="basic-form-email">
              Purchase Order Number
            </label>
            <input
              class="form-control"
              id="basic-form-email"
              type="email"
              placeholder="N/A"
            />
          </div>
          <div class="mb-2 col-md-6 col-12">
            <label class="form-label" for="basic-form-password">
              Payment Status
            </label>
            <select
              class="form-select"
              id="basic-form-password"
              placeholder="Password"
            >
              <option value="Deposit">Deposit</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
          <div class="mb-2 col-md-6 col-12">
            <label class="form-label" for="basic-form-dob">
              Invoice No
            </label>
            <input
              class="form-control"
              id="basic-form-dob"
              type="text"
              placeholder="PINV8"
            />
          </div>
          <div class="mb-2 col-md-6 col-12">
            <label class="form-label" for="basic-form-gender">
              Document Type
            </label>
            <select
              class="form-select"
              id="basic-form-gender"
              aria-label="Default select example"
            >
              <option value="Invoice">Invoice</option>
              <option selected>Quote</option>
            </select>
          </div>
          <div class="mb-2 col-md-6 col-12">
            <label class="form-label" for="basic-form-gender">
              Payment
            </label>
            <select
              class="form-select"
              id="basic-form-gender"
              aria-label="Default select example"
            >
              <option selected>Select Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-3 d-flex justify-content-between">
            <p>Total Amount </p>
            <p className="">$ {grandTotal}</p>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center pt-3 border-top pb-0 ">
          <button
            type="submit"
            className="btn btn-primary me-3 small"
          >
            <small>Save</small>
          </button>
          <div className="btn btn-primary me-3 small" onClick={() => setAddInvoice(true)}>
            <small>Add Invoice</small>
          </div>
          {addInvoice && (
            <TableModal
              onSave={setData}
              setModal={setModal}
              setShowModal={setShowModal}
              addInvoice={addInvoice}
              setAddInvoice={setAddInvoice}
              handleInputs={handleInputs}
              MainData={MainData}
              formData={formData}
              handleRemoveData={handleRemoveData}
              handleSubmitted={handleSubmit}
            />
          )}
          <div className="btn btn-primary small" onClick={onClose}>
            <small>Close</small>
          </div>
        </div>
      </form>
    </>
  );
};

export const NotMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      type: "",
      companyName: "",
      phone: "",
      email: "",
      address: "",
      postcode: ""
    },
  });
  const submit = () => {
    console.log("dfsadf");
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="p-4 row g-4">
        <div className="col-md-6 col-lg-6">
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Name *
            </label>
            <select
              type="text"
              className={`form-select mb-2 ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: "Name is required" })}
            >
              <option value="1">Faizan</option>
              <option value="1">Arfat</option>
              <option value="1">Others</option>
            </select>
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label ">
              Company Name
            </label>
            <input type="text" className={`form-control ${errors.companyName ? "is-invalid" : ""}`} {...register("companyName", { required: "Comapany name is required" })} />
            {errors.companyName && <div className="invalid-feedback">{errors.companyName.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Type*
            </label>
            <select type="text" className={`form-select ${errors.type ? "is-invalid" : ""}`}  {...register("type", { required: "Company type is required" })}>
              <option value="-1">other</option>
              <option value="-1">Trader</option>
              <option value="-1">Normal</option>
            </select>
            {errors.type && <div className="invalid-feedback">{errors.type.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label ">
              Phone
            </label>
            <input type="number" className={`form-control ${errors.phone ? "is-invalid" : ""}`}  {...register("phone", { required: "Phone no is required" })} />
            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Reference"
              {...register("email", { required: 'email is required' })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <textarea
              type="text"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              placeholder="Address"
              {...register("address", { required: "address is requird" })}
            />
          </div>
          {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}

          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Postcode
            </label>
            <textarea
              type="text"
              className={`form-control ${errors.postcode ? "is-invalid" : ""}`}
              placeholder="Postcode"
              {...register("postcode", { required: "Postcode is required" })}
            />
            {errors.postcode && <div className="invalid-feedback">{errors.postcode.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Notes
            </label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Notes"
            />
          </div>
          <div className="submit text-center mt-5">
            <button className="btn btn-soft-primary" disabled={!isValid}>
              <a className="fa fa-solid fa-plus me-2" /> Add Supplier
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export const Other = () => {
  return (
    <form className="p-4">
      <label htmlFor="" className="form-label">
        Others
      </label>
      <input type="text" className="form-control" placeholder="others" />
    </form>
  );
};
