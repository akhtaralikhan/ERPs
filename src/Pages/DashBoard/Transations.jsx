import React, { useEffect } from "react";
import { useRedux } from "../../hooks/useRedux";
import { getCurrencyDefault, getTransactions } from "../../redux/accounting/actions";

const Transations = () => {
  const { dispatch, useAppSelector } = useRedux();

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getCurrencyDefault());

  }, [])


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
                <div className="col-12 col-xxl-12">
                  <div className="row g-3">
                    <div className="col-12 col-md-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <div className="">
                            <h4>Transactions</h4>
                          </div>
                          <div className="">
                            <button
                              className="btn btn-soft-warning btn-sm m-1"
                              type="button"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="This Balance is different from the PayPal account balance "
                            >
                              <span className="fab fa-adobe"></span>
                            </button>
                            <button
                              className="btn btn-primary me-1 mb-1 text-uppercase"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-modal"
                            >
                              <i className="fa fa-solid fa-plus me-3"></i>New
                              Income
                            </button>
                            <button
                              className="btn btn-primary me-1 mb-1 text-uppercase"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-modal"
                            >
                              <i className="fa fa-solid fa-plus me-3"></i>New
                              Expense
                            </button>
                          </div>
                        </div>
                        <div className="card-body border-bottom">
                          <div
                            id="tableExample3"
                            data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
                          >
                            <div className="search-box mb-3 mr-0">
                              <form
                                className="position-relative"
                                data-bs-toggle="search"
                                data-bs-display="static"
                              >
                                <input
                                  className="form-control search-input search form-control-sm"
                                  type="search"
                                  placeholder="Search"
                                  aria-label="Search"
                                />
                                <span className="fas fa-search search-box-icon"></span>
                              </form>
                            </div>
                            <div className="table-responsive">
                              <table className="table table-striped table-sm fs--1 mb-0">
                                <thead>
                                  <tr>
                                    <th
                                      className="sort border-top ps-3"
                                      data-sort="name"
                                    >
                                      Date
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="account"
                                    >
                                      Account
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="Category"
                                    >
                                      Category
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="type"
                                    >
                                      Type
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="source"
                                    >
                                      Source
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="desc"
                                    >
                                      Description
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="tax"
                                    >
                                      Tax
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Amount
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
                                    <td className="align-middle ps-3 name">
                                      Aug 6, 2023, 22:55
                                    </td>
                                    <td className="align-middle">Transferts</td>
                                    <td className="align-middle">
                                      Other income
                                    </td>
                                    <td className="align-middle">
                                      <span className="badge bg-primary">
                                        Income
                                      </span>
                                    </td>
                                    <td className="align-middle">
                                      Application
                                    </td>
                                    <td className="align-middle">Ttt</td>
                                    <td className="align-middle">$0</td>
                                    <td className="align-middle text-primary">
                                      $0
                                    </td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <a
                                        href="#!"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticallyCentered"
                                      >
                                        <span className="far fa-times-circle  text-danger fs-2"></span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      Aug 6, 2023, 22:55
                                    </td>
                                    <td className="align-middle">Transferts</td>
                                    <td className="align-middle">
                                      Other income
                                    </td>
                                    <td className="align-middle">
                                      <span className="badge bg-primary">
                                        Income
                                      </span>
                                    </td>
                                    <td className="align-middle">
                                      Application
                                    </td>
                                    <td className="align-middle">Ttt</td>
                                    <td className="align-middle">$0</td>
                                    <td className="align-middle text-primary">
                                      $0
                                    </td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <a
                                        href="#!"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticallyCentered"
                                      >
                                        <span className="far fa-times-circle  text-danger fs-2"></span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      Aug 6, 2023, 22:55
                                    </td>
                                    <td className="align-middle">Transferts</td>
                                    <td className="align-middle">
                                      Other income
                                    </td>
                                    <td className="align-middle">
                                      <span className="badge bg-primary">
                                        Income
                                      </span>
                                    </td>
                                    <td className="align-middle">
                                      Application
                                    </td>
                                    <td className="align-middle">Ttt</td>
                                    <td className="align-middle">$0</td>
                                    <td className="align-middle text-primary">
                                      $0
                                    </td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <a
                                        href="#!"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticallyCentered"
                                      >
                                        <span className="far fa-times-circle  text-danger fs-2"></span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      Aug 6, 2023, 22:55
                                    </td>
                                    <td className="align-middle">Transferts</td>
                                    <td className="align-middle">
                                      Other income
                                    </td>
                                    <td className="align-middle">
                                      <span className="badge bg-primary">
                                        Income
                                      </span>
                                    </td>
                                    <td className="align-middle">
                                      Application
                                    </td>
                                    <td className="align-middle">Ttt</td>
                                    <td className="align-middle">$0</td>
                                    <td className="align-middle text-primary">
                                      $0
                                    </td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <a
                                        href="#!"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticallyCentered"
                                      >
                                        <span className="far fa-times-circle  text-danger fs-2"></span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      Aug 6, 2023, 22:55
                                    </td>
                                    <td className="align-middle">Transferts</td>
                                    <td className="align-middle">
                                      Other income
                                    </td>
                                    <td className="align-middle">
                                      <span className="badge bg-primary">
                                        Income
                                      </span>
                                    </td>
                                    <td className="align-middle">
                                      Application
                                    </td>
                                    <td className="align-middle">Ttt</td>
                                    <td className="align-middle">$0</td>
                                    <td className="align-middle text-primary">
                                      $0
                                    </td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <a
                                        href="#!"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticallyCentered"
                                      >
                                        <span className="far fa-times-circle  text-danger fs-2"></span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      Aug 6, 2023, 22:55
                                    </td>
                                    <td className="align-middle">Transferts</td>
                                    <td className="align-middle">
                                      Other income
                                    </td>
                                    <td className="align-middle">
                                      <span className="badge bg-primary">
                                        Income
                                      </span>
                                    </td>
                                    <td className="align-middle">
                                      Application
                                    </td>
                                    <td className="align-middle">Ttt</td>
                                    <td className="align-middle">$0</td>
                                    <td className="align-middle text-primary">
                                      $0
                                    </td>
                                    <td className="align-middle white-space-nowrap pe-0">
                                      <a
                                        href="#!"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticallyCentered"
                                      >
                                        <span className="far fa-times-circle  text-danger fs-2"></span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                              <span
                                className="d-none d-sm-inline-block"
                                data-list-info="data-list-info"
                              >
                                1 to 5{" "}
                                <span className="text-600"> Items of </span>
                                43
                              </span>
                              <div className="d-flex">
                                <button
                                  className="page-link disabled"
                                  data-list-pagination="prev"
                                  disabled=""
                                >
                                  <svg
                                    className="svg-inline--fa fa-chevron-left"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-left"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                                    ></path>
                                  </svg>
                                  {/* <!-- <span className="fas fa-chevron-left"></span> Font Awesome fontawesome.com --> */}
                                </button>
                                <ul className="mb-0 pagination">
                                  <li className="active">
                                    <button
                                      className="page"
                                      type="button"
                                      data-i="1"
                                      data-page="5"
                                    >
                                      1
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="page"
                                      type="button"
                                      data-i="2"
                                      data-page="5"
                                    >
                                      2
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="page"
                                      type="button"
                                      data-i="3"
                                      data-page="5"
                                    >
                                      3
                                    </button>
                                  </li>
                                  <li className="disabled">
                                    <button className="page" type="button">
                                      ...
                                    </button>
                                  </li>
                                </ul>
                                <button
                                  className="page-link pe-0"
                                  data-list-pagination="next"
                                >
                                  <svg
                                    className="svg-inline--fa fa-chevron-right"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                                    ></path>
                                  </svg>
                                  {/* <!-- <span className="fas fa-chevron-right"></span> Font Awesome fontawesome.com --> */}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-200 mb-6 mt-4" />

              {/* <!-- delete modal --> */}

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

              {/* <!-- delete modal -->
                        <!-- Edit modal --> */}

              <div
                className="modal fade"
                id="edit-modal"
                tabIndex={-1}
                aria-labelledby="edit-modalModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="edit-modalModalLabel">
                        Add new expense
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
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Date * :
                        </label>
                        <div className="col-sm-8">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="date"
                            placeholder="Date "
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Amount ($) :
                        </label>
                        <div className="col-sm-8">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="number"
                            placeholder="Amount"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Tax ($) :
                        </label>
                        <div className="col-sm-8">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Tax ($)"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Vendor * :
                        </label>
                        <div className="col-sm-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">Test</option>
                            <option value="1">TEST 2</option>
                            <option value="2">test</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Reference :
                        </label>
                        <div className="col-sm-8">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Reference"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Bank account * :
                        </label>
                        <div className="col-sm-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">Bank account</option>
                            <option value="1">Consumption Tax (5%)</option>
                            <option value="2">Service Charge (5%)</option>
                            <option value="3">tax2 (5%)</option>
                            <option value="3">bahrain tax (10%)</option>
                            <option value="3">VAT7 (7%)</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Account * :
                        </label>
                        <div className="col-sm-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">Account</option>
                            <option value="1">Consumption Tax (5%)</option>
                            <option value="2">Service Charge (5%)</option>
                            <option value="3">tax2 (5%)</option>
                            <option value="3">bahrain tax (10%)</option>
                            <option value="3">VAT7 (7%)</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Category * :
                        </label>
                        <div className="col-sm-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">Category</option>
                            <option value="1">Consumption Tax (5%)</option>
                            <option value="2">Service Charge (5%)</option>
                            <option value="3">tax2 (5%)</option>
                            <option value="3">bahrain tax (10%)</option>
                            <option value="3">VAT7 (7%)</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-4 col-form-label"
                          htmlFor="inputtext"
                        >
                          Description :
                        </label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="3"
                            placeholder="Description"
                          ></textarea>
                        </div>
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

              {/* <!-- Edit modal --> */}

           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transations;
