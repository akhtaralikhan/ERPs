import React, { useEffect } from "react";
import { useRedux } from "../../hooks/useRedux";
import { getAccountType, getAssets, getBillNaN, getChartAccounts, getCurrency, getCurrencyDefault, getCustomer, getGoal, getInvoiceNaN, getManualJournal, getPayment, getRevenue, getRevenueTotal, getTaxe, getTransactions, getVendor } from "../../redux/accounting/actions";
import { getBankAccount } from "../../redux/dashboard/actions";


const ManualJournals = () => {

  const { dispatch, useAppSelector } = useRedux();

  //do check again
  useEffect(() => {
    dispatch(getManualJournal());//1
    dispatch(getTransactions());
    dispatch(getCurrencyDefault());//2
    dispatch(getChartAccounts());//
    dispatch(getVendor());
    dispatch(getTaxe());//3
    dispatch(getAssets());//4
    dispatch(getCustomer());
    dispatch(getInvoiceNaN());
    dispatch(getBillNaN());
    dispatch(getCurrency());
    dispatch(getAccountType());
    dispatch(getPayment());
    dispatch(getBankAccount());
    dispatch(getRevenue());
    dispatch(getRevenueTotal());
    dispatch((getGoal()));
  }, []);
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
                            <h4>Manual journals </h4>
                          </div>
                          <div className="">
                            <button
                              className="btn btn-primary me-1 mb-1 text-uppercase"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-modal"
                            >
                              <i className="fa fa-solid fa-plus me-3"></i>New
                              Credit notes
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
                                      Reference
                                    </th>
                                    <th
                                      className="sort border-top ps-3"
                                      data-sort="name"
                                    >
                                      Date
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="age"
                                    >
                                      Dabits
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="age"
                                    >
                                      Credits
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Status
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
                                      <a href="#">#MJL1</a>
                                    </td>
                                    <td className="align-middle">
                                      {" "}
                                      Mar 12, 2023, 08:15
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      <span className="badge bg-success">
                                        Publish
                                      </span>
                                    </td>
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
                                            View
                                          </a>
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
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <a href="#">#MJL1</a>
                                    </td>
                                    <td className="align-middle">
                                      {" "}
                                      Mar 12, 2023, 08:15
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      <span className="badge bg-success">
                                        Publish
                                      </span>
                                    </td>
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
                                            View
                                          </a>
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
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <a href="#">#MJL1</a>
                                    </td>
                                    <td className="align-middle">
                                      {" "}
                                      Mar 12, 2023, 08:15
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      <span className="badge bg-success">
                                        Publish
                                      </span>
                                    </td>
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
                                            View
                                          </a>
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
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <a href="#">#MJL1</a>
                                    </td>
                                    <td className="align-middle">
                                      {" "}
                                      Mar 12, 2023, 08:15
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      $59
                                    </td>
                                    <td className="align-middle text-primary">
                                      <span className="badge bg-success">
                                        Publish
                                      </span>
                                    </td>
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
                                            View
                                          </a>
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
                        Manual journal
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
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Date * :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="date"
                          placeholder="date "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Reference:
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Sku"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Currency * :
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option defaultValue="">Test</option>
                          <option value="1">TEST 2</option>
                          <option value="2">test</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Notes :
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea"
                          rows="3"
                          placeholder="Description"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Status :
                        </label>
                        <span className="badge bg-secondary">Draft</span>
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

export default ManualJournals;
