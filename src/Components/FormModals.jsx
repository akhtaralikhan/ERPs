export const MainModal = ({MainData,formData,handleRemoveData,handleSubmit,handleInputs,setModal}) => {
    return (
          <form className="p-4">
                <div class="mb-3">
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
                    onClick={() => setModal("notMain")}
                    className="btn btn-soft-primary"
                  >
                    <span className="fa fa-solid fa-plus me-2" /> New Supplier
                  </button>
                <div class="mb-3">
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
                <div class="mb-3">
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
                <div class="mb-3">
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
                <div class="mb-3">
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

                <div className="table-responsive">
                  <table
                    className="table table-sm table-bordered table-responsive fs-9 mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    <thead>
                      <tr>
                        <th className="align-middle white-space-nowrap">Id</th>
                        <th className="align-middle white-space-nowrap">
                          Item Name
                        </th>
                        <th className="align-middle white-space-nowrap">
                          Quantity
                        </th>
                        <th className="align-middle white-space-nowrap">
                          Unit Price
                        </th>
                        <th className="align-middle white-space-nowrap">
                          Vat %
                        </th>
                        <th className="align-middle white-space-nowrap">
                          Discount %
                        </th>
                        <th className="align-middle white-space-nowrap">
                          Total
                        </th>
                        <th className="align-middle white-space-nowrap">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{MainData.id}</td>
                        <td>
                          <select
                            style={{ width: "400px" }}
                            className="form-select"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleInputs}
                          >
                            <option value="Dummy">--Select--</option>
                            <option value="Dummy">Dummy Data</option>
                            <option value="Data">Data</option>
                          </select>
                        </td>
                        <td>
                          <input
                            style={{ width: "50px" }}
                            name="quantity"
                            type="text"
                            value={formData.quantity}
                            className="form-control border-0"
                            onChange={handleInputs}
                          />
                        </td>
                        <td>
                          <select
                            className="form-select"
                            style={{ width: "70px" }}
                            value={formData.unitPrice}
                            onChange={handleInputs}
                            name="unitPrice"
                          >
                            <option value="">1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            className="form-control border-0"
                            value={formData.vat}
                            onChange={handleInputs}
                            name="vat"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "70px" }}
                            className="form-control border-0"
                            value={formData.discount}
                            onChange={handleInputs}
                            name="discount"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="total"
                            value={formData.total}
                            onChange={handleInputs}
                            style={{ width: "60px" }}
                          />
                        </td>
                        <td
                          style={{ width: "150px" }}
                          className="cursor-pointer"
                        >
                          <span
                            className="badge bg-primary"
                            onClick={handleSubmit}
                          >
                            Add Item
                          </span>
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
                <div className="d-flex justify-content-center align-items-center p-4">
              <div className="btn btn-primary me-3 " >
                Save
              </div>
              <div className="btn btn-primary me-3">Draft</div>
              <div className="btn btn-primary " >
                Close
              </div>
            </div>
              </form>
    )
}

export const NotMain = () =>{
  return(
    <form className="p-4  ">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    customer *
                  </label>
                  <select type="text" className="form-select mb-2" />
                 
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label ">
                    Date
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label ">
                    Expiry Date
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Currency *
                  </label>
                  <select type="text" className="form-select" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Reference
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Reference"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                  <div className="submit text-center mt-5">
                   <button
                    onClick={() => setModal("notMain")}
                    className="btn btn-soft-primary"
                  >
                    <a className="fa fa-solid fa-plus me-2" /> Add Supplier
                  </button>
                  </div>
                </div>
              </form>
  )
}

export const Other = () =>{
  return (
    <form className="p-4">
                <label htmlFor="" className="form-label">
                  Others
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="others"
                />
              </form>
  )
}