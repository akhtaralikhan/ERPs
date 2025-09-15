import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export const TableModal =({  MainData,
  formData,
  handleRemoveData,
  handleSubmitted,
  handleInputs,
  addInvoice,
  setAddInvoice,
  })=>{
    const toggle = () =>{
      setAddInvoice(!addInvoice)
    }

    const {handleSubmit,register,reset,watch,formState:{errors}} = useForm({
      defaultValues:{
        itemName:"",
        quantity:"",
        unitPrice:"",
        vat:"",
        discount:"",
        total:"",
        action:""
      }
    })
    return(
    <div className="card">
      <Modal isOpen={addInvoice}  toggle={toggle} size="" centered>
        <ModalHeader>
                  Add Invoice{" "}
                  <i
                    style={{ margin: "0px 0px 0px 323px" }}
                    className="fa fa-xmark fs--1 text-danger cursor-pointer"
                    onClick={toggle}
                  ></i>
                  </ModalHeader>
      <form onSubmit={handleSubmit(handleSubmitted)}>
      <div className="table-responsive p-4">
        <table
          className="table table-sm table-bordered table-responsive fs-9 mb-0"
          style={{ fontSize: "13px" }}
        >
          <thead>
            <tr>
              <th className="align-middle white-space-nowrap">Id</th>
              <th className="align-middle white-space-nowrap">Item Name</th>
              <th className="align-middle white-space-nowrap">Quantity</th>
              <th className="align-middle white-space-nowrap">Unit Price</th>
              <th className="align-middle white-space-nowrap">Vat %</th>
              <th className="align-middle white-space-nowrap">Discount %</th>
              <th className="align-middle white-space-nowrap">Total</th>
              <th className="align-middle white-space-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{MainData.id}</td>
              <td>
                <select
                  style={{ width: "200px" }}
                  className={`form-select ${errors.itemName ? "is-invalid":""}`}
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleInputs}
                  {...register("itemName",{required:"item name is required"})}
                >
                  <option value="Dummy">--Select--</option>
                  <option value="Dummy">Dummy Data</option>
                  <option value="Data">Data</option>
                </select>
                <div className="invalid-feedback">{errors.itemName?.message}</div>
              </td>
              <td>
                <input
                  style={{ width: "50px" }}
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  className={`form-control ${errors.quantity ? "is-invalid":""}`}
                  onChange={handleInputs}
                  {...register("quantity",{required:"quantity is required"})}
                />
              </td>
              <div className="invalid-feedback">{errors.quantity?.message}</div>
              <td>
                <select
                  style={{ width: "70px" }}
                  value={formData.unitPrice}
                  onChange={handleInputs}
                  name="unitPrice"
                  className={`form-control ${errors.unitPrice ? "is-invalid":""}`}
                  {...register("unitPrice",{required:"unitPrice is required"})}
                >
                  <option value="">1</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="invalid-feedback">{errors.unitPrice?.message}</div>
              </td>
              <td>
                <input
                  type="text"
                  style={{ width: "50px" }}
                  className={`form-control ${errors.vat ? "is-invalid":""}`}
                  value={formData.vat}
                  onChange={handleInputs}
                  name="vat"
                  {...register("vat",{required:"vat is required"})}
                />
                <div className="invalid-feedback">{errors?.vat?.message}</div>
              </td>
              <td>
                <input
                  type="text"
                  style={{ width: "50px" }}
                  className={`form-control ${errors.discount ? "is-invalid":""}`}
                  value={formData.discount}
                  onChange={handleInputs}
                  name="discount"
                  {...register('discount',{required:"discount is required"})}
                />
                <div className="invalid-feedback">{errors.discount?.message}</div>

              </td>
              <td>
                <input
                  type="number"
                  name="total"
                  value={formData.total}
                  onChange={handleInputs}
                  className={`form-control ${errors.total ? "is-invalid":""}`}
                  style={{ width: "60px" }}
                  {...register("total",{required:"total amount is requird"})}
                />
              <div className="invalid-feedback">{errors.total?.message}</div>
              </td>
              <td style={{ width: "150px" }} className="cursor-pointer">
                <button type="submit" className="badge bg-primary border-0" >
                  Add Item
                </button>
              </td>
            </tr>
            {MainData?.map((data, idx) => (
              <tr key={idx}>
                <td>{data?.id}</td>
                <td>{data?.itemName}</td>
                <td>{data?.quantity}</td>
                <td>{data?.unitPrice}</td>
                <td>{data?.vat}</td>
                <td>{data?.discount}</td>
                <td>{data?.total}</td>
                <td>
                  <span
                    className="badge bg-danger ms-3 cursor-pointer"
                    onClick={() => handleRemoveData(data.id)}
                  >
                    X
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </form>
      </Modal>
    </div>
  )
}

export const MainModal = ({
  MainData,
  formData,
  handleRemoveData,
  handleSubmit,
  handleInputs,
  setModal,
  setShowModal
}) => {

  const [addInvoice,setAddInvoice] = useState(false);
  return (
    <form className="p-4">
      <div class="mb-2">
        <label class="form-label" for="basic-form-name">
          Supplier
        </label>
        <select
          class="form-select"
          id="basic-form-name"
          type="text"
          placeholder="Name"
        >
          <option value="">Faizan</option>
          <option value="">Arfat</option>
          <option value="">Azim</option>
        </select>
      </div>
      <button
      type="button"
        onClick={() => setModal("notMain")}
        className="btn btn-soft-primary"
      >
        <span className="fa fa-solid fa-plus me-2" /> Add Customer
      </button>
      <div class="mb-2">
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
      <div class="mb-2">
        <label class="form-label" for="basic-form-password">
          Payment Status
        </label>
        <select
          class="form-select"
          id="basic-form-password"
          placeholder="Password"
        >
          <option value="">Deposit</option>
          <option value="">Paid</option>
          <option value="">Unpaid</option>
        </select>
      </div>
      <div class="mb-2">
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
      <div class="mb-2">
        <label class="form-label" for="basic-form-gender">
          Document Type
        </label>
        <select
          class="form-select"
          id="basic-form-gender"
          aria-label="Default select example"
        >
          <option value="">Invoice</option>
          <option selected="">Quote</option>
        </select>
      </div>

  
      <div className="d-flex justify-content-center align-items-center p-4">
        {/* <div className="btn btn-primary me-3 ">Save</div> */}
        <div className="btn btn-primary me-3" onClick={()=>{
          
          setAddInvoice(true)}}>Add Invoice</div>
        {addInvoice && <TableModal setModal={setModal} setShowModal={setShowModal} addInvoice={addInvoice} setAddInvoice={setAddInvoice} handleInputs={handleInputs} MainData={MainData} formData={formData} handleRemoveData={handleRemoveData}  handleSubmitted={handleSubmit}/>}
        {/* <div className="btn btn-primary ">Close</div> */}
      </div>
    </form>
  );
};

export const NotMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      type:"",
      companyName:"",
      phone:"",
      email:"",
      address:"",
      postcode:""
    },
  });
  const submit =( ) =>{
    console.log("dfsadf");
  }
  return (
    <form  onSubmit={handleSubmit(submit)}>
      <div className="p-4 row g-4">
        <div className="col-md-6 col-lg-6">
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Name *
            </label>
            <select
              type="text"
              className={`form-select mb-2 ${errors.name ? "is-invalid" : ""}`}
              {...register("name",{required:"Name is required"})}
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
            <input type="text" className={`form-control ${errors.companyName ? "is-invalid" :"" }`} {...register("companyName",{required:"Comapany name is required"})} />
            {errors.companyName && <div className="invalid-feedback">{errors.companyName.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Type*
            </label>
            <select type="text" className={`form-select ${errors.type ? "is-invalid" :""}`}  {...register("type",{required:"Company type is required"})}>
              <option value="-1">other</option>
              <option value="-1">Trader</option>
              <option value="-1">Normal</option>
            </select>
            {errors.type &&  <div className="invalid-feedback">{errors.type.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label ">
              Phone
            </label>
            <input type="number" className={`form-control ${errors.phone ? "is-invalid" :""}`}  {...register("phone",{required:"Phone no is required"})}/>
            {errors.phone &&  <div className="invalid-feedback">{errors.phone.message}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" :""}`}
              placeholder="Reference"
              {...register("email",{required:'email is required'})}
            />
            {errors.email &&  <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <textarea
              type="text"
              className={`form-control ${errors.address ? "is-invalid" :""}`}
              placeholder="Address"
              {...register("address",{required:"address is requird"})}
            />
          </div>
           {errors.address &&  <div className="invalid-feedback">{errors.address.message}</div>}

          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Postcode
            </label>
            <textarea
              type="text"
              className={`form-control ${errors.postcode ? "is-invalid" : ""}`}
              placeholder="Postcode"
              {...register("postcode",{required:"Postcode is required"})}
            />
            {errors.postcode &&  <div className="invalid-feedback">{errors.postcode.message}</div>}
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
            <button className="btn btn-soft-primary">
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
