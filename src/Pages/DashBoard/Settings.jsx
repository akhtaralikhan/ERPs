import React, { useEffect, useState } from "react";
import {
  getCategory,
  getCompany,
  getCompanyTenant3,
  getCurrency,
  getCurrency10,
  getPlan,
  getRoles,
  getSettingTypeGeneral,
  getSettingTypesLicense,
  getSubscriptionsAllUser3,
  getSubscriptionsTenant3,
  getTaxe,
  getUsers,
  getUsers3,
} from "../../redux/settings/actions";
import { useRedux } from "../../hooks/useRedux";

const Settings = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { dispatch, useAppSelector } = useRedux();

  useEffect(() => {
    dispatch(getCompanyTenant3());
    // dispatch(getCompany());
    dispatch(getUsers());
    dispatch(getSubscriptionsTenant3());
    dispatch(getSubscriptionsAllUser3());
    dispatch(getPlan());
    dispatch(getCategory());
    dispatch(getTaxe());
    dispatch(getUsers3());
    dispatch(getCurrency());
    dispatch(getSettingTypesLicense());
    dispatch(getSettingTypeGeneral());
    dispatch(getRoles());
    // dispatch(getCurrency10());
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
              <div className="mb-5">
                <h4>Settings</h4>
              </div>
              <div className="row">
                <div className="col-sm-auto">
                  <div
                    className="sticky-top"
                    style={{ marginTop: "-72px", paddingTop: "72px" }}
                  >
                    <div className="nav flex-column nav-pills" id="v-pills">
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#company-profile"
                      >
                        Company profile
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#user-role">
                        Users & Roles
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#currencies">
                        Currencies
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#invoice-custom"
                      >
                        Invoice customization
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#subscription">
                        Subscriptions
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#pricing">
                        Pricings
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#categories">
                        Categories
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#taxes">
                        taxes
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#user-profile">
                        User profile
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#close-account"
                      >
                        Close account
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div id="company-profile" className="card mb-3">
                    <div className="card-header">
                      <h3>Company profile</h3>
                    </div>
                    <div className="card-body">
                      <p>Fields followed by (*) are mandatory</p>

                      <form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="inputEmail3"
                          >
                            Email *
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="inputEmail3"
                              type="email"
                            />
                            <small>
                              {" "}
                              Use the company email that will be displayed in
                              invoices & bills. This email will not use for
                              login.
                            </small>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="name"
                          >
                            Company name *
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="name"
                              type="text"
                              placeholder="Company name"
                            />
                            <small>
                              Use the company name that will be displayed in
                              invoices & bills..
                            </small>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="phone-number"
                          >
                            Phone
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="phone-number"
                              type="tel"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="register-number"
                          >
                            Registration number
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="register-number"
                              type="number"
                              placeholder="Registration number"
                            />
                          </div>
                        </div>

                        <h5>Tax information</h5>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="tax-number"
                          >
                            Tax number
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="tax-number"
                              type="number"
                              placeholder="Tax number"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="tax-number-type"
                          >
                            Tax number type
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="tax-number-type"
                              type="number"
                              placeholder="Tax number type"
                            />
                          </div>
                        </div>

                        <h5>Billing address</h5>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="address1"
                          >
                            Address line 1 *
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              id="address1"
                              className="form-control"
                              placeholder="Address line 1"
                            ></textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="address2"
                          >
                            Address line 2
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              id="address2"
                              className="form-control"
                              placeholder="Address line 2"
                            ></textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="zip-code1"
                          >
                            Zip code *
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="zip-code1"
                              className="form-control"
                              type="number"
                              placeholder="Zip code"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="city1"
                          >
                            City *
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="city1"
                              className="form-control"
                              type="text"
                              placeholder="city"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="country1"
                          >
                            Country *
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="country1"
                              className="form-control"
                              type="text"
                              placeholder="Country"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="country"
                          ></label>
                          <div className="col-sm-10">
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
                                Billing and shipping address are the same
                              </label>
                            </div>
                          </div>
                        </div>

                        <h5>Shipping address</h5>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="address3"
                          >
                            Address line 1 *
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              id="address3"
                              className="form-control"
                              placeholder="Address line 1"
                            ></textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="address4"
                          >
                            Address line 2
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              id="address4"
                              className="form-control"
                              placeholder="Address line 2"
                            ></textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="zip-code2"
                          >
                            Zip code *
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="zip-code2"
                              className="form-control"
                              type="number"
                              placeholder="Zip code"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="city2"
                          >
                            City *
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="city2"
                              className="form-control"
                              type="text"
                              placeholder="city"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="country2"
                          >
                            Country *
                          </label>
                          <div className="col-sm-10">
                            <input
                              id="country2"
                              className="form-control"
                              type="text"
                              placeholder="Country"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="country3"
                          ></label>
                          <div className="col-sm-10">
                            <button className="btn btn-primary" type="submit">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="user-role" className="card mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h3>Users</h3>
                      <button className="btn btn-primary text-uppercase">
                        <i className="fa fa-solid fa-plus me-3"></i>Invite users
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive mx-n1 px-1 scrollbar">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Fullname</th>
                              <th scope="col">Role</th>
                              <th scope="col">Creation date</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
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
                              <td className="text-primary">$920</td>
                              <td>Sep 15, 2023, 15:31</td>
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
                      </div>
                    </div>
                  </div>
                  <div id="currencies" className="card mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h3>Currencies</h3>
                      <button className="btn btn-primary text-uppercase">
                        <i className="fa fa-solid fa-plus me-3"></i>new
                        Currencies
                      </button>
                    </div>
                    <div className="card-body">
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
                                <th className="sort border-top" data-sort="age">
                                  Symbol
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  ISO Code
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Default
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
                                  Dollar
                                </td>
                                <td className="align-middle">$</td>
                                <td className="align-middle">USD</td>
                                <td className="align-middle">N\A</td>
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
                                        data-bs-target="#currencies-modal"
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
                                <td className="align-middle ps-3 name">NGN</td>
                                <td className="align-middle">NGN</td>
                                <td className="align-middle">NGN</td>
                                <td className="align-middle">NGN</td>
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
                                        data-bs-target="#currencies-modal"
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
                  <div id="invoice-custom" className="card mb-3">
                    <div className="card-header">
                      <h3>Invoice customization</h3>
                    </div>
                    <div className="card-body">
                      <h5>Template</h5>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code3"
                        >
                          Select a default template
                        </label>
                        <div className="col-sm-10">
                          <div className="row">
                            <div className="col-sm-6">
                              <h5>Standard</h5>
                            </div>
                            <div className="col-sm-6">
                              <h5>Trappist-1</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h5>Invoice</h5>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code4"
                        >
                          Invoice logo
                        </label>
                        <div className="col-sm-10">
                          <input
                            className="form-control"
                            id="customFile"
                            type="file"
                            placeholder="Invoice logo"
                          />
                          <small>Minimum dimensions: 80x80 pixel</small>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code5"
                        >
                          Default title
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code5"
                            className="form-control"
                            type="text"
                            placeholder="Default title"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code6"
                        >
                          Default Subtitle
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code6"
                            className="form-control"
                            type="text"
                            placeholder="Default Subtitle"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code7"
                        >
                          Default footer
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code7"
                            className="form-control"
                            type="text"
                            placeholder="Default footer"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="note-term"
                        >
                          Default note and terms
                        </label>
                        <div className="col-sm-10">
                          <textarea
                            id="note-term"
                            className="form-control"
                            placeholder="Default note and terms"
                          ></textarea>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country4"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide shipping address
                            </label>
                          </div>
                        </div>
                      </div>

                      <h5>Estimate</h5>

                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code8"
                        >
                          Default title
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code8"
                            className="form-control"
                            type="text"
                            placeholder="Default title"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code9"
                        >
                          Default Subtitle
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code9"
                            className="form-control"
                            type="text"
                            placeholder="Default Subtitle"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code10"
                        >
                          Default footer
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code10"
                            className="form-control"
                            type="text"
                            placeholder="Default footer"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="note-term"
                        >
                          Default note and terms
                        </label>
                        <div className="col-sm-10">
                          <textarea
                            id="note-term"
                            className="form-control"
                            placeholder="Default note and terms"
                          ></textarea>
                        </div>
                      </div>

                      <h5>Column and items settings</h5>

                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code11"
                        >
                          Items label
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code11"
                            className="form-control"
                            type="text"
                            placeholder="Items label"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code12"
                        >
                          Price label
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code12"
                            className="form-control"
                            type="text"
                            placeholder="Price label"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="zip-code13"
                        >
                          Amount label
                        </label>
                        <div className="col-sm-10">
                          <input
                            id="zip-code13"
                            className="form-control"
                            type="text"
                            placeholder="Amount label"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country5"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide description
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country6"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide quantity
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country7"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide price
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country8"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide tax
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country9"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide category
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country10"
                        ></label>
                        <div className="col-sm-10">
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
                              Hide discount
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="country11"
                        ></label>
                        <div className="col-sm-10">
                          <button className="btn btn-primary" type="submit">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="subscription" className="card mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h3>Subscriptions</h3>
                      <button className="btn btn-primary text-uppercase">
                        <i className="fa fa-solid fa-plus me-3"></i>Update Plan
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-sm fs--1 mb-0">
                          <thead>
                            <tr>
                              <th
                                className="sort border-top ps-3"
                                data-sort="name"
                              >
                                Plan
                              </th>
                              <th className="sort border-top" data-sort="age">
                                Price
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Subscribed on
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Start at
                              </th>
                              <th
                                className="sort align-middle pe-0 border-top"
                                scope="col"
                              >
                                Renew at
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
                                Free plan
                              </td>
                              <td className="align-middle">$0</td>
                              <td className="align-middle">
                                Jul 3, 2023, 04:00
                              </td>
                              <td className="align-middle">
                                Jul 3, 2023, 04:00
                              </td>
                              <td className="align-middle">
                                Aug 3, 2023, 04:00
                              </td>
                              <td className="align-middle">
                                <span className="badge bg-success">active</span>
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
                                Free plan
                              </td>
                              <td className="align-middle">$0</td>
                              <td className="align-middle">
                                Jul 3, 2023, 04:00
                              </td>
                              <td className="align-middle">
                                Jul 3, 2023, 04:00
                              </td>
                              <td className="align-middle">
                                Aug 3, 2023, 04:00
                              </td>
                              <td className="align-middle">
                                <span className="badge bg-success">active</span>
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
                    </div>
                  </div>
                  <div id="pricing" className="card mb-3">
                    <div className="card-header">
                      <h3>Pricing</h3>
                    </div>
                    <div className="card-body">
                      <div className="row g-7 g-lg-11 mb-7">
                        <div className="col-12 col-sm-6 col-xxl-3">
                          <img
                            className="mb-4 d-dark-none"
                            src="src/assets/img/spot-illustrations/13.png"
                            alt=""
                            width="120"
                            height="96"
                          />
                          <img
                            className="mb-4 d-light-none"
                            src="src/assets/img/spot-illustrations/dark_13.png"
                            alt=""
                            width="120"
                            height="96"
                          />
                          <div className="mb-sm-5 pricing-column-title-box">
                            <h3 className="mb-2">Learner</h3>
                            <p className="text-800 mb-0 pe-3">
                              For individuals who are interested in giving it a
                              shot first.
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-4">
                            <h3 className="display-3 fw-bolder">Free</h3>
                          </div>
                          <button className="btn btn-lg w-100 mb-6 btn-outline-primary">
                            Buy
                          </button>
                          <h5 className="mb-4">What’s included</h5>
                          <ul
                            className="fa-ul"
                            style={{ "--fa-li-margin": "1.5em" }}
                          >
                            <li className="text-800 mb-2">
                              <span className="fa-li">
                                <span className="fas fa-check text-primary"></span>
                              </span>
                              Timeline
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Advanced Search
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Custom fields
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Task dependencies
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Private teams & projects
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-xxl-3">
                          <img
                            className="mb-4 d-dark-none"
                            src="src/assets/img/spot-illustrations/14.png"
                            alt=""
                            width="120"
                            height="96"
                          />
                          <img
                            className="mb-4 d-light-none"
                            src="src/assets/img/spot-illustrations/dark_14.png"
                            alt=""
                            width="120"
                            height="96"
                          />
                          <div className="mb-sm-5 pricing-column-title-box">
                            <h3 className="mb-2">Starter</h3>
                            <p className="text-800 mb-0 pe-3">
                              For teams that need to create project plans with
                              confidence.
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-4">
                            <h3 className="display-3 fw-bolder">$14.99</h3>
                            <h5 className="fs-0 fw-normal ms-1">/ month</h5>
                          </div>
                          <button className="btn btn-lg w-100 mb-6 btn-outline-primary">
                            Buy
                          </button>
                          <h5 className="mb-4">What’s included</h5>
                          <ul
                            className="fa-ul"
                            style={{ "--fa-li-margin": "1.5em" }}
                          >
                            <li className="text-800 mb-2">
                              <span className="fa-li">
                                <span className="fas fa-check text-primary"></span>
                              </span>
                              Timeline
                            </li>
                            <li className="mb-2 text-900">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-success"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-check text-white"></span>
                                </span>
                              </span>
                              Advanced Search
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Custom fields
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Task dependencies
                            </li>
                            <li className="mb-2 text-500">
                              <span className="fa-li me-2 stack-icon-item">
                                <span className="fa-stack fs--3">
                                  <span className="fas fa-circle fa-stack-2x text-300"></span>
                                  <span className="fas fa-stack-1x fa-inverse fa-times text-600"></span>
                                </span>
                              </span>
                              Private teams & projects
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="categories" className="card mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h3>Categories</h3>
                      <button className="btn btn-primary text-uppercase">
                        <i className="fa fa-solid fa-plus me-3"></i>new
                        Categories
                      </button>
                    </div>
                    <div className="card-body">
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
                                <th className="sort border-top" data-sort="age">
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
                                <td className="align-middle ps-3 name">Test</td>
                                <td className="align-middle">service</td>
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
                              <tr>
                                <td className="align-middle ps-3 name">
                                  TEST 2
                                </td>
                                <td className="align-middle">service</td>
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
                  <div id="taxes" className="card mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h3>Taxe(s)</h3>
                      <button className="btn btn-primary text-uppercase">
                        <i className="fa fa-solid fa-plus me-3"></i>new Taxe
                      </button>
                    </div>
                    <div className="card-body">
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
                                <th className="sort border-top" data-sort="age">
                                  Rate
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
                                <td className="align-middle ps-3 name">IVA1</td>
                                <td className="align-middle">12%</td>
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
                                        data-bs-target="#taxes-modal"
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
                                  Consumption Tax
                                </td>
                                <td className="align-middle">5%</td>
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
                                        data-bs-target="#taxes-modal"
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
                  <div id="user-profile" className="card mb-3">
                    <div className="card-header">
                      <h3>User profile</h3>
                    </div>
                    <div className="card-body">
                      <h5>User information</h5>
                      <div className="row mb-3">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="fullname"
                        >
                          Fullname
                        </label>
                        <div className="col-sm-9">
                          <input
                            id="fullname"
                            className="form-control"
                            type="text"
                            placeholder="full name"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            id="email"
                            className="form-control"
                            type="email"
                            placeholder="email"
                          />
                        </div>
                      </div>

                      <h5>Change password</h5>
                      <small>
                        Do not fill in these fields if you do not wish to change
                        your password
                      </small>

                      <div className="row mb-3">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="c-password"
                        >
                          Current password
                        </label>
                        <div className="col-sm-9">
                          <input
                            id="c-password"
                            className="form-control"
                            type="password"
                            placeholder="email"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="n-password"
                        >
                          New password
                        </label>
                        <div className="col-sm-9">
                          <input
                            id="n-password"
                            className="form-control"
                            type="password"
                            placeholder="email"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor="r-password"
                        >
                          Repeat password
                        </label>
                        <div className="col-sm-9">
                          <input
                            id="r-password"
                            className="form-control"
                            type="password"
                            placeholder="email"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          className="col-sm-3 col-form-label"
                          htmlFor=""
                        ></label>
                        <div className="col-sm-9">
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="close-account" className="card mb-3">
                    <div className="card-header">
                      <h3>Close your account</h3>
                    </div>
                    <div className="card-body">
                      <h5>
                        By closing your account you will no longer be able to
                        log in to the application and will lose all your data!!{" "}
                      </h5>

                      <button className="btn btn-danger w-100 my-5 text-uppercase">
                        Close your account
                      </button>
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
                        Update user
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
                        <label className="form-label" htmlFor="Fullname">
                          Fullname * :
                        </label>
                        <input
                          className="form-control"
                          id="Fullname"
                          type="text"
                          placeholder="Name "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Email">
                          Email :
                        </label>
                        <input
                          className="form-control"
                          id="Email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Role">
                          Role :
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
              {/* <!-- currencies modal --> */}
              <div
                className="modal fade"
                id="currencies-modal"
                tabIndex={-1}
                aria-labelledby="edit-modalModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="edit-modalModalLabel">
                        Currencies
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
                          Code :
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option defaultValue="">Test</option>
                          <option value="1">TEST 2</option>
                          <option value="2">test</option>
                        </select>
                        <small>
                          Currency code must be three-letter ISO Code. Check for
                          avalaible currency code
                        </small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtextName">
                          Name :
                        </label>
                        <input
                          className="form-control"
                          id="inputtextName"
                          type="text"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtextSymbol">
                          Symbol :
                        </label>
                        <input
                          className="form-control"
                          id="inputtextSymbol"
                          type="text"
                          placeholder="Purchase date"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="flexCheckChecked"
                          type="checkbox"
                          value=""
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Set as default currrency
                        </label>
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
              {/* <!-- currencies modal -->

                        <!-- Taxe(s) modal --> */}
              <div
                className="modal fade"
                id="taxes-modal"
                tabIndex={-1}
                aria-labelledby="edit-modalModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="edit-modalModalLabel">
                        Update taxe
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
                        <label className="form-label" htmlFor="inputtextName2">
                          Name :
                        </label>
                        <input
                          className="form-control"
                          id="inputtextName2"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtextRate">
                          Rate (%) :
                        </label>
                        <input
                          className="form-control"
                          id="inputtextRate"
                          type="number"
                          placeholder="Purchase date"
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
              {/* <!-- Taxe(s) modal -->
                        <!-- Edit modal --> */}

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
