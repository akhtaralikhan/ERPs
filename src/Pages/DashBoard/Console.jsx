import React, { useState } from "react";

const Console = () => {
  const [language, setLanguage] = useState("1");
  const [isChecked, setIsChecked] = useState(false);

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
                <h4>Super admin</h4>
              </div>
              <div className="row">
                <div className="col-sm-auto">
                  <div
                    className="sticky-top"
                    style={{ marginTop: "-72px", paddingTop: "72px" }}
                  >
                    <div className="nav flex-column nav-pills" id="v-pills">
                      <a className="nav-link ps-0 ps-sm-3" href="#user-role">
                        Users & Roles
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#stripe-account"
                      >
                        Stripe accounts
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#pricing">
                        pricing
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#subscription">
                        Subscription
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#currencies">
                        Currencies
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#preference">
                        Preferences
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#email-settings"
                      >
                        Email settings
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#social-login">
                        Social login
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#stripe-paypal"
                      >
                        Stripe & PayPal
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div id="user-role" className="card mb-3">
                    <div className="card-header d-flex justify-content-between">
                      <h3>Users</h3>
                      <button
                        className="btn btn-primary text-uppercase me-1 mb-1"
                        type="button"
                      >
                        <i className="fa fa-solid fa-plus me-3"></i>Invite User
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive mx-n1 px-1 scrollbar">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Fullname</th>
                              <th scope="col">Role</th>
                              <th scope="col">Creation date</th>
                              <th scope="col">Edit Plan</th>
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
                              <td className="align-middle text-start status">
                                <button
                                  className="btn btn-soft-primary me-1 mb-1"
                                  type="button"
                                >
                                  Edit Plan
                                </button>
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
                                    <a className="dropdown-item">Forword</a>
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
                              <td className="align-middle text-start status">
                                <button
                                  className="btn btn-soft-primary me-1 mb-1"
                                  type="button"
                                >
                                  Edit Plan
                                </button>
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
                                    <a className="dropdown-item">Forword</a>
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
                  <div id="stripe-account" className="card mb-3">
                    <div className="card-header">
                      <h3>Stripe accounts</h3>
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
                                  Account Id
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Email
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Details submitted
                                </th>
                                <th
                                  className="sort align-middle pe-0 border-top"
                                  scope="col"
                                >
                                  Country
                                </th>
                              </tr>
                            </thead>
                            <tbody className="list">
                              <tr>
                                <td className="align-middle ps-3 name">001</td>
                                <td className="align-middle">abc@gmail.com</td>
                                <td className="align-middle">aaaaaaaaaaaaa</td>
                                <td className="align-middle">India</td>
                              </tr>

                              <tr>
                                <td className="align-middle ps-3 name">001</td>
                                <td className="align-middle">abc@gmail.com</td>
                                <td className="align-middle">aaaaaaaaaaaaa</td>
                                <td className="align-middle">India</td>
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
                  <div id="pricing" className="card mb-3">
                    <div className="card-header d-flex justify-content-between">
                      <h3>Pricing</h3>
                      <button
                        className="btn btn-primary text-uppercase me-1 mb-1"
                        type="button"
                      >
                        <i className="fa fa-solid fa-plus me-3"></i>New Pricing
                      </button>
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
                  <div id="subscription" className="card mb-3">
                    <div className="card-header d-flex justify-content-between">
                      <h3>Subscriptions</h3>
                      <button
                        className="btn btn-primary text-uppercase me-1 mb-1"
                        type="button"
                      >
                        <i className="fa fa-solid fa-edit me-3"></i>Update Plan
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
                                  User
                                </th>
                                <th className="sort border-top" data-sort="age">
                                  Plan
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
                                  Renew At
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
                                <td className="align-middle">Free plan</td>
                                <td className="align-middle">$0</td>
                                <td className="align-middle">
                                  Sep 17, 2023, 17:35
                                </td>
                                <td className="align-middle">
                                  Jan 1, 1, 00:00
                                </td>
                                <td className="align-middle">
                                  Jan 1, 1, 00:00
                                </td>
                                <td className="align-middle">
                                  <span className="badge bg-success">
                                    Active
                                  </span>
                                </td>
                              </tr>

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
                                <td className="align-middle">Free plan</td>
                                <td className="align-middle">$0</td>
                                <td className="align-middle">
                                  Sep 17, 2023, 17:35
                                </td>
                                <td className="align-middle">
                                  Jan 1, 1, 00:00
                                </td>
                                <td className="align-middle">
                                  Jan 1, 1, 00:00
                                </td>
                                <td className="align-middle">
                                  <span className="badge bg-success">
                                    Active
                                  </span>
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
                  <div id="currencies" className="card mb-3">
                    <div className="card-header d-flex justify-content-between">
                      <h3>Currencies</h3>
                      <button
                        className="btn btn-primary text-uppercase me-1 mb-1"
                        type="button"
                      >
                        <i className="fa fa-solid fa-plus me-3"></i>New
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
                                <td className="align-middle">Dollar</td>
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
                                <td className="align-middle">EUR</td>
                                <td className="align-middle">€</td>
                                <td className="align-middle">EUR</td>
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
                  <div id="preference" className="card mb-3">
                    <div className="card-header">
                      <h3>Application preferences</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="inputEmail3"
                          >
                            Application title
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="inputEmail3"
                              type="email"
                              placeholder="Application title"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="language"
                          >
                            Language
                          </label>
                          <div className="col-sm-9">
                            <select
                              id="language"
                              className="form-select form-select mb-3"
                              aria-label=".form-select example"
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                            >
                              <option value="1">English</option>
                              <option value="2">French</option>
                              <option value="3">Arabic</option>
                              <option value="4">Spanish</option>
                            </select>
                            <small>
                              Use ISO 639-1 Code (2 letter) and create a
                              corresponding translation file
                            </small>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="phone-number"
                          >
                            Currency Conversion API Key
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="phone-number"
                              type="tel"
                              placeholder="Currency Conversion API Key"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="register-number"
                          >
                            Logo
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="register-number"
                              type="number"
                              placeholder="Registration number"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="customFile"
                          >
                            Logo
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="customFile"
                              type="file"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="customFile2"
                          >
                            Favicon
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="customFile2"
                              type="file"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="register-number"
                          ></label>
                          <div className="col-sm-9">
                            <button
                              className="btn btn-primary text-uppercase me-1 mb-1"
                              type="button"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="email-settings" className="card mb-3">
                    <div className="card-header">
                      <h3>Update email settings</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="host"
                          >
                            Host
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="host"
                              type="email"
                              placeholder="Host"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="emailport"
                          >
                            Email port
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="emailport"
                              type="number"
                              placeholder="Email port"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label"></label>
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
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="Username"
                          >
                            Username
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="Username"
                              type="Email"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="Password"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="Password"
                              type="password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="form-email"
                          >
                            From email
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="form-email"
                              type="email"
                              placeholder="From email"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="display-name"
                          >
                            Display name
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              id="display-name"
                              type="email"
                              placeholder="Display name"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label"></label>
                          <div className="col-sm-10">
                            <button
                              className="btn btn-primary text-uppercase me-1 mb-1"
                              type="button"
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-primary text-uppercase me-1 mb-1"
                              type="button"
                            >
                              Send Test Mail
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="social-login" className="card mb-3">
                    <div className="card-header">
                      <h3>Update payment settings</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="client-id"
                          >
                            Google client id
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="client-id"
                              type="email"
                              placeholder="Google client id"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">
                            Enable Google login
                          </label>
                          <div className="col-sm-9">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                id="google-login"
                                type="checkbox"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="google-login"
                              >
                                Enable Google login
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="fb-api-id"
                          >
                            Facebook app id
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="fb-api-id"
                              type="number"
                              placeholder="Facebook app id"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">
                            Enable Facebook login
                          </label>
                          <div className="col-sm-9">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                id="fblogin"
                                type="checkbox"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="fblogin"
                              >
                                Enable Facebook login
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label"></label>
                          <div className="col-sm-9">
                            <button
                              className="btn btn-primary text-uppercase me-1 mb-1"
                              type="button"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="stripe-paypal" className="card mb-3">
                    <div className="card-header">
                      <h3>Update payment settings</h3>
                    </div>
                    <div className="card-body">
                      <h5>Stripe api credentials</h5>
                      <small>
                        Setup stripe credentials for stripe subscriptions and
                        stripe account onboarding
                      </small>

                      <form>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="publishable-key"
                          >
                            Stripe publishable key
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="publishable-key"
                              type="text"
                              placeholder="Google client id"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="secret-key"
                          >
                            Stripe secret key
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="secret-key"
                              type="text"
                              placeholder="Stripe secret key"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="Subscription-webhook"
                          >
                            Subscription webhook secret
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="Subscription-webhook"
                              type="text"
                              placeholder="Subscription webhook secret"
                            />
                            <small>
                              Enter the webhook signing secret for the following
                              example url:
                              https://yourdomain.com/api/subscriptions/stripe/webhook
                            </small>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="customer-checkout"
                          >
                            Customer checkout webhook secret
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="customer-checkout"
                              type="text"
                              placeholder="Customer checkout webhook secret"
                            />
                            <small>
                              Enter the webhook signing secret for the following
                              example
                              url:https://yourdomain.com/api/stripe/account/checkout/completed
                            </small>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="transactions-webhook"
                          >
                            Transactions webhook secret
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="transactions-webhook"
                              type="text"
                              placeholder="Transactions webhook secret"
                            />
                            <small>
                              Enter the webhook signing secret for the following
                              example url:
                              https://yourdomain.com/api/stripe/account/transaction/webhook
                            </small>
                          </div>
                        </div>

                        <h5>PayPal API credentials for subscription</h5>

                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="paypal-client-id"
                          >
                            PayPal client id
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="paypal-client-id"
                              type="text"
                              placeholder="PayPal client id"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="paypal-secret"
                          >
                            PayPal secret
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="paypal-secret"
                              type="text"
                              placeholder="PayPal secret"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="paypal-mode"
                          >
                            Paypal mode
                          </label>
                          <div className="col-sm-9">
                            <select
                              id="paypal-mode"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option defaultValue="">
                                Select Paypal mode
                              </option>
                              <option value="1">Sendbox</option>
                              <option value="2">Live</option>
                            </select>
                          </div>
                        </div>

                        <h5>
                          PayPal partner platform API credentials for user
                          account onboarding
                        </h5>

                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="partner-platform-client"
                          >
                            Partner platform client Id
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="partner-platform-client"
                              type="text"
                              placeholder="Partner platform client Id"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            className="col-sm-3 col-form-label"
                            htmlFor="partner-platform-secret"
                          >
                            Partner platform secret
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="partner-platform-secret"
                              type="text"
                              placeholder="Partner platform secret"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">
                            Paypal mode
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option defaultValue="">
                                Select Paypal mode
                              </option>
                              <option value="1">Sendbox</option>
                              <option value="2">Live</option>
                            </select>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label"></label>
                          <div className="col-sm-9">
                            <button
                              className="btn btn-primary text-uppercase me-1 mb-1"
                              type="button"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
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
                        Products
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
                          className="col-sm-5 col-form-label"
                          htmlFor="inputtext1"
                        >
                          Name * :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext1"
                            type="text"
                            placeholder="Name "
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-5 col-form-label"
                          htmlFor="inputtext2"
                        >
                          Amount :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext2"
                            type="number"
                            placeholder="Amount"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-5 col-form-label"
                          htmlFor="inputtext3"
                        >
                          Purchase date :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext3"
                            type="text"
                            placeholder="Purchase date"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-5 col-form-label"
                          htmlFor="inputtext4"
                        >
                          Suported date :
                        </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="inputtext4"
                            type="text"
                            placeholder="Suported date"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          className="col-sm-5 col-form-label"
                          htmlFor="inputtext5"
                        >
                          Description :
                        </label>
                        <div className="col-sm-7">
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
                        <label className="form-label" htmlFor="inputtext6">
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
                        <label className="form-label" htmlFor="inputtext7">
                          Name :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext7"
                          type="text"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputtext8">
                          Symbol :
                        </label>
                        <input
                          className="form-control"
                          id="inputtext8"
                          type="text"
                          placeholder="Purchase date"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="flexCheckChecked"
                          type="checkbox"
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
                        <!-- Edit modal --> */}

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

export default Console;
