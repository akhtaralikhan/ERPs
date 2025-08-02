import React from "react";

const RecurringInvoice = () => {
  return (
    <>
      <div className="content">
        <div className="pb-5">
          <div className="row g-4">
            <div className="col-12 col-xxl-12">
              <div className="mb-3">
                <div className="card">
                  <div className="row align-items-center p-3">
                    <div className="col-lg-8">
                      <p className="m-0">
                        Connect your Stripe account to receive online payments
                        from your customers.
                      </p>
                      <p className="m-0">
                        Connect your PayPal account to receive online payments
                        from your customers.
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <a href="connect-bank.html">
                        <button
                          className="btn btn-primary me-1 mb-1 text-uppercase w-100"
                          type="button"
                        >
                          Connect your bank account
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center g-4">
                <div className="row align-items-center g-4">
                  <div className="col-12 col-xxl-12 col-xl-12">
                    <div className="row g-3">
                      <div className="col-12 col-md-12">
                        <div className="card">
                          <div className="card-header">
                            <h4>Set schedule</h4>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-4 col-sm-12">
                                <div className="mb-3 d-flex align-items-start">
                                  <label
                                    className="col-form-label"
                                    htmlFor="startDate-secondary"
                                  >
                                    Start date
                                  </label>
                                  <div className="mx-3">
                                    <input
                                      className="form-control"
                                      id="startDate-secondary"
                                      type="text"
                                      placeholder="Start Date"
                                    />
                                    <small>
                                      The invoice will be automatically sent on
                                      this date for the selected frequency
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <div className="d-flex align-items-center">
                                  <label
                                    className="col-form-label"
                                    htmlFor="inputPassword"
                                  >
                                    End date
                                  </label>
                                  <div className="mx-3">
                                    <input
                                      className="form-control"
                                      id="inputPassword"
                                      type="password"
                                    />
                                    <small>
                                      The automatic sending of the invoice will
                                      stop at this date
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                <div className="d-flex align-items-center">
                                  <label
                                    className="col-form-label"
                                    htmlFor="sending-freq"
                                  >
                                    Sending frequency
                                  </label>
                                  <div className="mx-3">
                                    <select
                                      id="sending-freq"
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option defaultValue="">
                                        Open this select menu
                                      </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    id="flexSwitchCheckDefault"
                                    type="checkbox"
                                  />

                                  <label
                                    className="form-check-label"
                                    htmlFor="flexSwitchCheckDefault"
                                  >
                                    Never end
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6">
                                <div className="mb-3 d-flex align-items-start">
                                  <label
                                    className="col-form-label"
                                    htmlFor="startDate-Third"
                                  >
                                    Repeat every
                                  </label>
                                  <div className="mx-1">
                                    <input
                                      className="form-control"
                                      id="startDate-Third"
                                      type="text"
                                      placeholder="Start Date"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6">
                                <select
                                  id="sending-freq"
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option defaultValue="">
                                    Open this select menu
                                  </option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center g-4">
                <div className="row align-items-center g-4">
                  <div className="col-12 col-xxl-12 col-xl-12">
                    <div className="row g-3">
                      <div className="col-12 col-md-12">
                        <div className="card">
                          <div className="card-header">
                            <h4>Invoice</h4>
                          </div>
                          <div className="card-body">
                            <h5>Fields followed by (*) are mandatory</h5>
                            <div className="my-3 row">
                              <label
                                className="col-sm-2 col-lg-2 col-form-label"
                                htmlFor="inputtext"
                              >
                                Customer * :
                              </label>
                              <div className="col-sm-10">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option defaultValue="">Customer </option>
                                  <option value="1">Customer 2</option>
                                  <option value="2">Customer </option>
                                </select>

                                <button
                                  className="btn btn-soft-primary small"
                                  type="button"
                                >
                                  <i className="fa fa-solid fa-plus me-2"></i>
                                  New Category
                                </button>
                              </div>
                            </div>
                            <div className="mb-3 row">
                              <div className="col-lg-6 col-sm-12">
                                <div className="row">
                                  <label
                                    className="col-sm-3 col-form-label"
                                    htmlFor="datepicker"
                                  >
                                    Date * :
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      className="form-control"
                                      id="inputtext"
                                      type="date"
                                      placeholder="date"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <div className="mb-3 row">
                                  <label
                                    className="col-sm-3 col-form-label"
                                    htmlFor="datepicker"
                                  >
                                    Expire at :
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      className="form-control"
                                      id="inputtext"
                                      type="date"
                                      placeholder="date"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <div className="col-lg-6">
                                <div className="row">
                                  <label
                                    className="col-sm-3 col-form-label"
                                    htmlFor="inputtext"
                                  >
                                    Currency * :
                                  </label>
                                  <div className="col-sm-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option defaultValue="">Customer </option>
                                      <option value="1">Customer 2</option>
                                      <option value="2">Customer </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3 row">
                                  <label
                                    className="col-sm-3 col-form-label"
                                    htmlFor="startDate-primary"
                                  >
                                    Reference :
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      className="form-control"
                                      id="startDate-primary"
                                      type="text"
                                      placeholder="Purchase price ($)"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3 row">
                              <div className="col-lg-6">
                                <div className="row">
                                  <label
                                    className="col-sm-3 col-form-label"
                                    htmlFor="inputtext"
                                  >
                                    Status :
                                  </label>
                                  <div className="col-sm-9">
                                    <span className="badge badge-phoenix fs--2 badge-phoenix-secondary">
                                      <span className="badge-label">Draft</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3 row">
                                  <label
                                    className="col-sm-3 col-form-label"
                                    htmlFor="inputtext"
                                  >
                                    Number * :
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      className="form-control"
                                      id="inputtext"
                                      type="text"
                                      placeholder="Order Number"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h4>Products & Services *</h4>
                            <div className="table-responsive mt-5">
                              <table className="table table-striped table-sm fs--1 mb-0">
                                <thead>
                                  <tr>
                                    <th
                                      className="sort border-top ps-3"
                                      data-sort="name"
                                    >
                                      Items
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="age"
                                    >
                                      Category
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Quantity
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Price
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Tax
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Discount (%)
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Total price
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="list">
                                  <tr>
                                    <td className="align-middle">abc</td>
                                    <td className="align-middle">a</td>
                                    <td className="align-middle">20</td>
                                    <td className="align-middle">10</td>
                                    <td className="align-middle">20</td>
                                    <td className="align-middle">30</td>
                                    <td className="align-middle">200</td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <div className="font-sans-serif btn-reveal-trigger position-static">
                                        <button
                                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs--2"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          data-boundary="window"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-bs-reference="parent"
                                        >
                                          <svg
                                            className="svg-inline--fa fa-ellipsis fs--2"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="ellipsis"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
                                            ></path>
                                          </svg>
                                          {/* <!-- <span className="fas fa-ellipsis-h fs--2"></span> Font Awesome fontawesome.com --> */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a
                                            className="dropdown-item"
                                            href="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-modal"
                                          >
                                            Edit
                                          </a>
                                          <div className="dropdown-divider"></div>
                                          <a
                                            className="dropdown-item text-danger"
                                            href="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#verticallyCentered"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="w-100 border-bottom">
                                <button
                                  className="btn btn-link mb-1 w-100"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-modal"
                                >
                                  <i className="fa fa-solid fa-plus me-3"></i>
                                  Add an item
                                </button>
                              </div>
                              <div className="my-5 d-flex justify-content-end w-100">
                                <div className="w-25">
                                  <div className="row">
                                    <div className="col-6">
                                      <p>Sub total:</p>
                                    </div>
                                    <div className="col-6">
                                      <p>0</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <p>Discount:</p>
                                    </div>
                                    <div className="col-6">
                                      <p>0</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <p>Tax:</p>
                                    </div>
                                    <div className="col-6">
                                      <p>0</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <p>
                                        <strong>Total price:</strong>
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <p>0</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="my-5">
                              <h5>Note & Terms</h5>
                              <textarea
                                className="form-control"
                                aria-label="With textarea"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- edit modal --> */}
              <div
                className="modal fade"
                id="edit-modal"
                tabIndex={-1}
                aria-labelledby="edit-modalModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="edit-modalModalLabel">
                        Add product or service
                      </h5>
                      <button
                        className="btn p-1"
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          className="svg-inline--fa fa-xmark fs--1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="xmark"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-sm fs--1 mb-0">
                          <thead>
                            <tr>
                              <th
                                className="sort border-top ps-3"
                                data-sort="name"
                              >
                                Items
                              </th>
                              <th className="sort border-top" data-sort="age">
                                Category
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Quantity
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Price
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Tax
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Discount (%)
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Total price
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <td className="align-middle">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  defaultValue="product"
                                >
                                  <option value="product">Product</option>
                                  <option value="services">Services</option>
                                </select>
                              </td>
                              <td className="align-middle">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    select a Product
                                  </option>
                                  <option value="KFC">KFC</option>
                                </select>
                              </td>
                              <td className="align-middle">
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Quantity"
                                />
                              </td>
                              <td className="align-middle">
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Price"
                                />
                              </td>
                              <td className="align-middle">
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Discount"
                                />
                              </td>
                              <td className="align-middle">
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Total price"
                                />
                              </td>
                              <td className="align-middle">
                                <input
                                  className="form-control"
                                  type="number"
                                  placeholder="Description"
                                />
                              </td>
                              <td className="align-middle white-space-nowrap pe-0">
                                <button
                                  className="btn"
                                  type="button"
                                  aria-label="Close"
                                >
                                  <i className="fa far fa-check-circle fa-lg"></i>
                                </button>
                                <button
                                  className="btn-close"
                                  type="button"
                                  aria-label="Close"
                                ></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-primary" type="button">
                        Save
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- edit modal -->

                        <!-- delete modal --> */}

              <div
                className="modal fade"
                id="verticallyCentered"
                tabIndex={-1}
                aria-labelledby="verticallyCenteredModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="verticallyCenteredModalLabel"
                      >
                        Deleting...
                      </h5>
                      <button
                        className="btn p-1"
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          className="svg-inline--fa fa-xmark fs--1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="xmark"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                          ></path>
                        </svg>
                        {/* <!-- <span className="fas fa-times fs--1"></span> Font Awesome fontawesome.com --> */}
                      </button>
                    </div>
                    <div className="modal-body">
                      <p className="text-700 lh-lg mb-0">
                        Are you sure you want to continue ?
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-primary" type="button">
                        Delete
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- delete modal --> */}
              <footer className="footer position-absolute">
                <div className="row g-0 justify-content-between align-items-center h-100">
                  <div className="col-12 col-sm-auto text-center">
                    <p className="mb-0 mt-2 mt-sm-0 text-900">
                      All Right Reserved
                      <span className="d-none d-sm-inline-block"></span>
                      <span className="d-none d-sm-inline-block mx-1">|</span>
                      <br className="d-sm-none" />
                      2023 &copy;
                      <a className="mx-1" href="#">
                        microhind
                      </a>
                    </p>
                  </div>
                  <div className="col-12 col-sm-auto text-center">
                    <p className="mb-0 text-600">v1.13.0</p>
                  </div>
                </div>
              </footer>
            </div>
            <div className="support-chat-container">
              <div className="container-fluid support-chat">
                <div className="card bg-white">
                  <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom">
                    <h5 className="mb-0 d-flex align-items-center gap-2">
                      Demo widget
                      <span className="fa-solid fa-circle text-success fs--3"></span>
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button
                        className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                        type="button"
                        id="support-chat-dropdown"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h text-900"></span>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end py-2"
                        aria-labelledby="support-chat-dropdown"
                      >
                        <a className="dropdown-item" href="#!">
                          Request a callback
                        </a>
                        <a className="dropdown-item" href="#!">
                          Search in chat
                        </a>
                        <a className="dropdown-item" href="#!">
                          Show history
                        </a>
                        <a className="dropdown-item" href="#!">
                          Report to Admin
                        </a>
                        <a className="dropdown-item btn-support-chat" href="#!">
                          Close Support
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body chat p-0">
                    <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                      <div className="text-end mt-6">
                        <a
                          className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                          href="#!"
                        >
                          <p className="mb-0 fw-semi-bold fs--1">
                            I need help with something
                          </p>
                          <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                        </a>
                        <a
                          className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                          href="#!"
                        >
                          <p className="mb-0 fw-semi-bold fs--1">
                            I can’t reorder a product I previously ordered
                          </p>
                          <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                        </a>
                        <a
                          className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                          href="#!"
                        >
                          <p className="mb-0 fw-semi-bold fs--1">
                            How do I place an order?
                          </p>
                          <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                        </a>
                        <a
                          className="false d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                          href="#!"
                        >
                          <p className="mb-0 fw-semi-bold fs--1">
                            My payment method not working
                          </p>
                          <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                        </a>
                      </div>
                      <div className="text-center mt-auto">
                        <div className="avatar avatar-3xl status-online">
                          <img
                            className="rounded-circle border border-3 border-white"
                            src="src/assets/img/team/30.webp"
                            alt=""
                          />
                        </div>
                        <h5 className="mt-2 mb-3">Eric</h5>
                        <p className="text-center text-black mb-0">
                          Ask us anything – we’ll get back to you here or by
                          email within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex align-items-center gap-2 border-top ps-3 pe-4 py-3">
                    <div className="d-flex align-items-center flex-1 gap-3 border rounded-pill px-4">
                      <input
                        className="form-control outline-none border-0 flex-1 fs--1 px-0"
                        type="text"
                        placeholder="Write message"
                      />
                      <label
                        className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
                        htmlFor="supportChatPhotos"
                      >
                        <span className="fa-solid fa-image"></span>
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        accept="image/*"
                        id="supportChatPhotos"
                      />
                      <label
                        className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
                        htmlFor="supportChatAttachment"
                      >
                        <span className="fa-solid fa-paperclip"></span>
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        id="supportChatAttachment"
                      />
                    </div>
                    <button className="btn p-0 border-0 send-btn">
                      <span className="fa-solid fa-paper-plane fs--1"></span>
                    </button>
                  </div>
                </div>
              </div>
              <button className="btn p-0 border border-200 btn-support-chat">
                <span className="fs-0 btn-text text-primary text-nowrap">
                  Chat demo
                </span>
                <span className="fa-solid fa-circle text-success fs--1 ms-2"></span>
                <span className="fa-solid fa-chevron-down text-primary fs-1"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecurringInvoice;
