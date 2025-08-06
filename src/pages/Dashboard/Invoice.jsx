import React, { useEffect, useState } from "react";
import { useRedux } from "../../hooks/useRedux";
import { getInvoices } from "../../redux/sales/actions";
import { getSubscriptionsTenant3Action } from "../../redux/console/actions";

const Invoice = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("Customer");
  const [selectedDoller, setSelectedDoller] = useState("Doller");

  const { dispatch, useAppSelector } = useRedux();

  useEffect(() => {
    dispatch(getSubscriptionsTenant3Action());
    dispatch(getInvoices());

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

              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h4>Invoices</h4>
                    </div>
                    <div className="col-lg-6 text-end">
                      <button
                        className="btn btn-primary me-1 mb-1 text-uppercase"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-modal"
                      >
                        <i className="fa fa-solid fa-plus me-3"></i>New Invoice
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <ul
                    className="nav nav-underline mt-3"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="All-tab"
                        data-bs-toggle="tab"
                        href="#tab-All"
                        role="tab"
                        aria-controls="tab-All"
                        aria-selected="true"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="RECURRING-tab"
                        data-bs-toggle="tab"
                        href="#tab-RECURRING"
                        role="tab"
                        aria-controls="tab-RECURRING"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        RECURRING
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="DRAFTED-tab"
                        data-bs-toggle="tab"
                        href="#tab-DRAFTED"
                        role="tab"
                        aria-controls="tab-DRAFTED"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        DRAFTED
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="APPROVED-tab"
                        data-bs-toggle="tab"
                        href="#tab-APPROVED"
                        role="tab"
                        aria-controls="tab-APPROVED"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        APPROVED
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="SENT-tab"
                        data-bs-toggle="tab"
                        href="#tab-SENT"
                        role="tab"
                        aria-controls="tab-SENT"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        SENT
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="OVERDUE-tab"
                        data-bs-toggle="tab"
                        href="#tab-OVERDUE"
                        role="tab"
                        aria-controls="tab-OVERDUE"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        OVERDUE
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="PAID-tab"
                        data-bs-toggle="tab"
                        href="#tab-PAID"
                        role="tab"
                        aria-controls="tab-PAID"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        PAID
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-3" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="tab-All"
                      role="tabpanel"
                      aria-labelledby="All-tab"
                    >
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
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Customer
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Date
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Due Date
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Discount
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
                                  Amount
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
                                  <a href="#">#INV21</a>
                                </td>
                                <td className="align-middle customer white-space-nowrap">
                                  <a
                                    className="d-flex align-items-center text-900"
                                    href="#"
                                  >
                                    <div className="avatar avatar-l">
                                      <div className="avatar-name rounded-circle">
                                        <span>R</span>
                                      </div>
                                    </div>
                                    <div className="">
                                      <h6 className="mb-0 ms-3 text-900">
                                        Richard Dawkins
                                      </h6>
                                      <small className="mb-0 ms-3 text-900">
                                        Johson@gmail.com
                                      </small>
                                    </div>
                                  </a>
                                </td>
                                <td className="align-middle age">
                                  Sep 15, 2023, 15:31
                                </td>
                                <td className="align-middle age">
                                  Sep 15, 2023, 15:31
                                </td>
                                <td className="align-middle age"> $150</td>
                                <td className="align-middle age"> $70</td>
                                <td className="align-middle age"> $920</td>
                                <td className="align-middle age">
                                  {" "}
                                  <span className="badge bg-secondary">
                                    Draft
                                  </span>
                                </td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                                      <a className="dropdown-item" href="#!">
                                        Forword
                                      </a>
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
                            1 to 5<span className="text-600"> Items of </span>43
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
                    <div
                      className="tab-pane fade"
                      id="tab-RECURRING"
                      role="tabpanel"
                      aria-labelledby="RECURRING-tab"
                    >
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
                                  Bank Name
                                </th>
                                <th
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Creation Date
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Bank holder name
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Bank account number
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Pending balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Type
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
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5<span className="text-600"> Items of </span>43
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
                    <div
                      className="tab-pane fade"
                      id="tab-DRAFTED"
                      role="tabpanel"
                      aria-labelledby="DRAFTED-tab"
                    >
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
                                  Bank Name
                                </th>
                                <th
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Creation Date
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Bank holder name
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Bank account number
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Pending balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Type
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
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5<span className="text-600"> Items of </span>43
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
                    <div
                      className="tab-pane fade"
                      id="tab-APPROVED"
                      role="tabpanel"
                      aria-labelledby="APPROVED-tab"
                    >
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
                                  Bank Name
                                </th>
                                <th
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Creation Date
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Bank holder name
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Bank account number
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Pending balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Type
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
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5<span className="text-600"> Items of </span>43
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
                    <div
                      className="tab-pane fade"
                      id="tab-SENT"
                      role="tabpanel"
                      aria-labelledby="SENT-tab"
                    >
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
                            <svg
                              className="svg-inline--fa fa-magnifying-glass search-box-icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="magnifying-glass"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                              ></path>
                            </svg>
                            {/* <!-- <span className="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com --> */}
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
                                  Bank Name
                                </th>
                                <th
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Creation Date
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Bank holder name
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Bank account number
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Pending balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Type
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
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5<span className="text-600"> Items of </span>43
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
                    <div
                      className="tab-pane fade"
                      id="tab-OVERDUE"
                      role="tabpanel"
                      aria-labelledby="OVERDUE-tab"
                    >
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
                            <svg
                              className="svg-inline--fa fa-magnifying-glass search-box-icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="magnifying-glass"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                              ></path>
                            </svg>
                            {/* <!-- <span className="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com --> */}
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
                                  Bank Name
                                </th>
                                <th
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Creation Date
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Bank holder name
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Bank account number
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Pending balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Type
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
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5<span className="text-600"> Items of </span>43
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
                    <div
                      className="tab-pane fade"
                      id="tab-PAID"
                      role="tabpanel"
                      aria-labelledby="PAID-tab"
                    >
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
                            <svg
                              className="svg-inline--fa fa-magnifying-glass search-box-icon"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="magnifying-glass"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                              ></path>
                            </svg>
                            {/* <!-- <span className="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com --> */}
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
                                  Bank Name
                                </th>
                                <th
                                  className="sort border-top"
                                  data-sort="email"
                                >
                                  Creation Date
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Bank holder name
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Bank account number
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Pending balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Balance
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Type
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
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  union
                                </td>
                                <td className="align-middle email">
                                  Sep 10, 2023, 07:59
                                </td>
                                <td className="align-middle age">alam khan</td>
                                <td className="align-middle age">
                                  12345678910
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age">
                                  {" "}
                                  INR2000.00
                                </td>
                                <td className="align-middle age"> Manual</td>
                                <td className="align-middle white-space-nowrap text-end pe-0">
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
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5<span className="text-600"> Items of </span>43
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

              {/* <!-- new invoice  --> */}
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
                        New Invoine
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
                          Customer * :
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={selectedCustomer}
                          onChange={(e) => setSelectedCustomer(e.target.value)}
                        >
                          <option defaultValue="">Customer </option>
                          <option value="1">Customer 2</option>
                          <option value="2">Customer </option>
                        </select>

                        <button
                          className="btn btn-soft-primary small"
                          type="button"
                        >
                          <i className="fa fa-solid fa-plus me-2"></i> New
                          Category
                        </button>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="datepicker">
                          Date * :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="date"
                          placeholder="date"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="datepicker">
                          Expire at :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="date"
                          placeholder="date"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Currency * :
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={selectedCustomer}
                          onChange={(e) => setSelectedCustomer(e.target.value)}
                        >
                          <option defaultValue="">Customer </option>
                          <option value="1">Customer 2</option>
                          <option value="2">Customer </option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Reference :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Purchase price ($)"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Status :
                        </label>
                        <span className="badge badge-phoenix fs--2 badge-phoenix-secondary">
                          <span className="badge-label">Draft</span>
                        </span>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Number * :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Order Number"
                        />
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
              {/* <!-- new invoice  -->
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
                        Edit Bank accounts
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
                        <label className="form-label" htmlFor="inputtext">
                          Bank name * :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Bank name"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Bank holder name :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Bank holder name"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Bank account number :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Bank account number"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Balance * :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Balance"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Pending balance * :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Pending balance"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Currency * :
                        </label>
                        <div className="col-sm-7">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={selectedDoller}
                            onChange={(e) => setSelectedDoller(e.target.value)}
                          >
                            <option defaultValue="">Dollar</option>
                            <option value="1">NGN</option>
                            <option value="2">AMD</option>
                            <option value="3">AED</option>
                            <option value="3">BHD</option>
                            <option value="3">INR</option>
                          </select>

                          <button
                            className="btn btn-soft-primary small"
                            type="button"
                          >
                            Add New Currency
                          </button>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Phone :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Address line 1 :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Address line 1"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Address line 2 :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Address line 2"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Zip code :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Zip code"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          City :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="form-label" htmlFor="inputtext">
                          Country :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext"
                            type="text"
                            placeholder="Country"
                          />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
