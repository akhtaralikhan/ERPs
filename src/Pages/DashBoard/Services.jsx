import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import { getServices } from "../../redux/productAndServices/actions";
import { getSubscriptionsTenant3Action } from "../../redux/console/actions";
import { getCurrencyDefault } from "../../redux/dashboard/actions";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [selectedTax, setSelectedTax] = useState("IVA1 (12%)");


  const { dispatch, useAppSelector } = useRedux();

  useEffect(() => {
    dispatch(getSubscriptionsTenant3Action());
    dispatch(getCurrencyDefault())
    dispatch(getServices())
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
                      <Link to="connect-bank.html">
                        <button
                          className="btn btn-primary me-1 mb-1 text-uppercase w-100"
                          type="button"
                        >
                          Connect your bank account
                        </button>
                      </Link>
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
                          <h4>Services</h4>
                          <button
                            className="btn btn-primary me-1 mb-1 text-uppercase"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-modal"
                          >
                            <i className="fa fa-solid fa-plus me-3"></i>New
                            Services
                          </button>
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
                                      Name
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="email"
                                    >
                                      Creation Date
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
                                      Sku
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
                                      Purchase Price
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Sale Price
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
                                      <Link to="#">G500 </Link>
                                    </td>
                                    <td className="align-middle email">
                                      Sep 10, 2023, 07:59
                                    </td>
                                    <td className="align-middle age">Food</td>
                                    <td className="align-middle age">G500</td>
                                    <td className="align-middle age">
                                      {" "}
                                      IVA1 (12%)
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $12500
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $15500
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
                                          <Link
                                            className="dropdown-item"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-modal"
                                          >
                                            Edit
                                          </Link>
                                          <div className="dropdown-divider"></div>
                                          <Link
                                            className="dropdown-item text-danger"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#verticallyCentered"
                                          >
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <Link to="#">G500 </Link>
                                    </td>
                                    <td className="align-middle email">
                                      Sep 10, 2023, 07:59
                                    </td>
                                    <td className="align-middle age">Food</td>
                                    <td className="align-middle age">G500</td>
                                    <td className="align-middle age">
                                      {" "}
                                      IVA1 (12%)
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $12500
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $15500
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
                                          <Link
                                            className="dropdown-item"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-modal"
                                          >
                                            Edit
                                          </Link>
                                          <div className="dropdown-divider"></div>
                                          <Link
                                            className="dropdown-item text-danger"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#verticallyCentered"
                                          >
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <Link to="#">G500 </Link>
                                    </td>
                                    <td className="align-middle email">
                                      Sep 10, 2023, 07:59
                                    </td>
                                    <td className="align-middle age">Food</td>
                                    <td className="align-middle age">G500</td>
                                    <td className="align-middle age">
                                      {" "}
                                      IVA1 (12%)
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $12500
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $15500
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
                                          <Link
                                            className="dropdown-item"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-modal"
                                          >
                                            Edit
                                          </Link>
                                          <div className="dropdown-divider"></div>
                                          <Link
                                            className="dropdown-item text-danger"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#verticallyCentered"
                                          >
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <Link to="#">G500 </Link>
                                    </td>
                                    <td className="align-middle email">
                                      Sep 10, 2023, 07:59
                                    </td>
                                    <td className="align-middle age">Food</td>
                                    <td className="align-middle age">G500</td>
                                    <td className="align-middle age">
                                      {" "}
                                      IVA1 (12%)
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $12500
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $15500
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
                                          <Link
                                            className="dropdown-item"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-modal"
                                          >
                                            Edit
                                          </Link>
                                          <div className="dropdown-divider"></div>
                                          <Link
                                            className="dropdown-item text-danger"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#verticallyCentered"
                                          >
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">
                                      <Link to="#">G500 </Link>
                                    </td>
                                    <td className="align-middle email">
                                      Sep 10, 2023, 07:59
                                    </td>
                                    <td className="align-middle age">Food</td>
                                    <td className="align-middle age">G500</td>
                                    <td className="align-middle age">
                                      {" "}
                                      IVA1 (12%)
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $12500
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      $15500
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
                                          <Link
                                            className="dropdown-item"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-modal"
                                          >
                                            Edit
                                          </Link>
                                          <div className="dropdown-divider"></div>
                                          <Link
                                            className="dropdown-item text-danger"
                                            to="#!"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#verticallyCentered"
                                          >
                                            Delete
                                          </Link>
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
                                <span className="text-600"> Items of </span>43
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
                        Services
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
                          Name * :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Name "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Sku :
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
                          Sale price ($) :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Sale price ($)"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext">
                          Purchase price ($) * :
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
                          Category * :
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option defaultValue="">Test</option>
                          <option value="1">TEST 2</option>
                          <option value="2">test</option>
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
                        <label className="form-label" htmlFor="inputtext">
                          Tax * :
                        </label>
                        <select
                          className="form-select"
                          value={selectedTax}
                          onChange={(e) => setSelectedTax(e.target.value)}
                        >
                          <option defaultValue="">IVA1 (12%)</option>
                          <option value="1">Consumption Tax (5%)</option>
                          <option value="2">Service Charge (5%)</option>
                          <option value="3">tax2 (5%)</option>
                          <option value="3">bahrain tax (10%)</option>
                          <option value="3">VAT7 (7%)</option>
                        </select>

                        <button
                          className="btn btn-soft-primary small"
                          type="button"
                        >
                          <i className="fa fa-solid fa-plus me-2"></i> New Tax
                        </button>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleTextarea">
                          Description :
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea"
                          rows="3"
                          placeholder="Description"
                          defaultValue=""
                        ></textarea>
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
                      <Link className="mx-1" to="#">
                        microhind
                      </Link>
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

export default Services;
