import React, { useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import { useRedux } from "../hooks/useRedux";
import { createSelector } from "reselect";
import { logoutUser } from "../redux/auth/login/actions";

const Navbar = () => {
  const { dispatch, useAppSelector } = useRedux();

  const userData = createSelector(
    (state) => state.Login,
    (state) => ({
      isUserLogin: state.isUserLogin,
      error: state.error,
      loginLoading: state.loading,
      isUserLogout: state.isUserLogout,
      user: state.user,
    })
  );

  const { isUserLogin, error, loginLoading, isUserLogout, user } = useAppSelector(userData);

  const profilePic = "faizan";

  // handleSignout

  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    window.location.href = "/Signin";
    dispatch(logoutUser());
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav
      className="navbar navbar-top fixed-top navbar-expand"
      id="navbarDefault"
    >
      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <button
            className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarVerticalCollapse"
            aria-controls="navbarVerticalCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </button>
          <Link className="navbar-brand me-1 me-sm-3" to="index.html">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src="src/assets/img/icons/MainIcon.png"
                  alt="phoenix"
                  style={{ width: "27px" }}
                />
                <p className="logo-text ms-2 d-none d-sm-block">Business ERP</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          
            
          <div className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100">
            <div className="scrollbar-overlay" style={{ maxHeight: "30rem" }}>
              <div className="list pb-3">
                <h6 className="dropdown-header text-1000 fs--2 py-2">
                  24 <span className="text-500">results</span>
                </h6>
                <hr className="text-200 my-0" />
                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                  Recently Searched{" "}
                </h6>
                <div className="py-2">
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        <span
                          className="fa-solid fa-clock-rotate-left"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Store Macbook
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        {" "}
                        <span
                          className="fa-solid fa-clock-rotate-left"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        MacBook Air - 13″
                      </div>
                    </div>
                  </Link>
                </div>
                <hr className="text-200 my-0" />
                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                  Products
                </h6>
                <div className="py-2">
                  <Link
                    className="dropdown-item py-2 d-flex align-items-center"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="file-thumbnail me-2">
                      <img
                        className="h-100 w-100 fit-cover rounded-3"
                        src="src/assets/img/products/60x60/3.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-1000 title">
                        MacBook Air - 13″
                      </h6>
                      <p className="fs--2 mb-0 d-flex text-700">
                        <span className="fw-medium text-600">
                          8GB Memory - 1.6GHz - 128GB Storage
                        </span>
                      </p>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item py-2 d-flex align-items-center"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="file-thumbnail me-2">
                      <img
                        className="img-fluid"
                        src="src/assets/img/products/60x60/3.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-1000 title">
                        MacBook Pro - 13″
                      </h6>
                      <p className="fs--2 mb-0 d-flex text-700">
                        <span className="fw-medium text-600 ms-2">
                          30 Sep at 12:30 PM
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <hr className="text-200 my-0" />
                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                  Quick Links
                </h6>
                <div className="py-2">
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        <span
                          className="fa-solid fa-link text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Support MacBook House
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        {" "}
                        <span
                          className="fa-solid fa-link text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Store MacBook″
                      </div>
                    </div>
                  </Link>
                </div>
                <hr className="text-200 my-0" />
                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                  Files
                </h6>
                <div className="py-2">
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        <span
                          className="fa-solid fa-file-zipper text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Library MacBook folder.rar
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        {" "}
                        <span
                          className="fa-solid fa-file-lines text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Feature MacBook extensions.txt
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        {" "}
                        <span
                          className="fa-solid fa-image text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        MacBook Pro_13.jpg
                      </div>
                    </div>
                  </Link>
                </div>
                <hr className="text-200 my-0" />
                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                  Members
                </h6>
                <div className="py-2">
                  <Link
                    className="dropdown-item py-2 d-flex align-items-center"
                    to="pages/members.html"
                  >
                    <div className="avatar avatar-l status-online  me-2 text-900">
                      <span className="username">{profilePic}</span>
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-1000 title">Carry Anna</h6>
                      <p className="fs--2 mb-0 d-flex text-700">
                        anna@technext.it
                      </p>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item py-2 d-flex align-items-center"
                    to="pages/members.html"
                  >
                    <div className="avatar avatar-l  me-2 text-900">
                      <img
                        className="rounded-circle "
                        src="src/assets/img/team/40x40/12.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-1000 title">John Smith</h6>
                      <p className="fs--2 mb-0 d-flex text-700">
                        smith@technext.it
                      </p>
                    </div>
                  </Link>
                </div>
                <hr className="text-200 my-0" />
                <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
                  Related Searches
                </h6>
                <div className="py-2">
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        <span
                          className="fa-brands fa-firefox-browser text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Search in the Web MacBook
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-1000 title">
                        {" "}
                        <span
                          className="fa-brands fa-chrome text-900"
                          data-fa-transform="shrink-2"
                        ></span>{" "}
                        Store MacBook″
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <p className="fallback fw-bold fs-1 d-none">No Result Found.</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-icon-wait px-2">
              <input
                className="form-check-input ms-0 theme-control-toggle-input"
                type="checkbox"
                data-theme-control="phoenixTheme"
                value="dark"
                id="themeControlToggle"
              />
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch theme"
              >
                <span className="icon" data-feather="moon"></span>
              </label>
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch theme"
              >
                <span className="icon" data-feather="sun"></span>
              </label>
            </div>
          </li>
          
          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              to="#"
              style={{ minWidth: "2.5rem" }}
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span
                data-feather="bell"
                style={{ height: "20px", width: "20px" }}
              ></span>
            </Link>

            <div
              className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret"
              id="navbarDropdownNotfication"
              aria-labelledby="navbarDropdownNotfication"
            >
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-black mb-0">Notificatons</h5>
                    <button
                      className="btn btn-link p-0 fs--1 fw-normal"
                      type="button"
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div
                    className="scrollbar-overlay"
                    style={{ maxHeight: "27rem" }}
                  >
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="src/assets/img/team/40x40/30.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">
                                Jessie Samson
                              </h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">💬</span>Mentioned
                                you in a comment.
                                <span className="ms-2 text-400 fw-bold fs--2">
                                  10m
                                </span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock"></span>
                                <span className="fw-bold">10:41 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <Link className="dropdown-item" to="#!">
                                Mark as unread
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle">
                                <span>J</span>
                              </div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jane Foster</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">📅</span>Created an
                                event.
                                <span className="ms-2 text-400 fw-bold fs--2">
                                  20m
                                </span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock"></span>
                                <span className="fw-bold">10:20 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <Link className="dropdown-item" to="#!">
                                Mark as unread
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle avatar-placeholder"
                                src="src/assets/img/team/40x40/avatar.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">
                                Jessie Samson
                              </h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">👍</span>Liked your
                                comment.
                                <span className="ms-2 text-400 fw-bold fs--2">
                                  1h
                                </span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock"></span>
                                <span className="fw-bold">9:30 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <Link className="dropdown-item" to="#!">
                                Mark as unread
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="src/assets/img/team/40x40/57.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">
                                Kiera Anderson
                              </h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">💬</span>Mentioned
                                you in a comment.
                                <span className="ms-2 text-400 fw-bold fs--2"></span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock"></span>
                                <span className="fw-bold">9:11 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <Link className="dropdown-item" to="#!">
                                Mark as unread
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="src/assets/img/team/40x40/59.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">
                                Herman Carter
                              </h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">👤</span>Tagged you
                                in a comment.
                                <span className="ms-2 text-400 fw-bold fs--2"></span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock"></span>
                                <span className="fw-bold">10:58 PM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <Link className="dropdown-item" to="#!">
                                Mark as unread
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src="src/assets/img/team/40x40/58.webp"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">
                                Benjamin Button
                              </h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs--2">👍</span>Liked your
                                comment.
                                <span className="ms-2 text-400 fw-bold fs--2"></span>
                              </p>
                              <p className="text-800 fs--1 mb-0">
                                <span className="me-1 fas fa-clock"></span>
                                <span className="fw-bold">10:18 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block">
                            <button
                              className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <Link className="dropdown-item" to="#!">
                                Mark as unread
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-0">
                  <div className="my-2 text-center fw-bold fs--2 text-600">
                    <Link className="fw-bolder" to="pages/notifications.html">
                      Notification history
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link"
              id="navbarDropdownNindeDots"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
              </svg>
            </Link>

            <div
              className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300"
              aria-labelledby="navbarDropdownNindeDots"
            >
              <div className="card bg-white position-relative border-0">
                <div
                  className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
                  style={{ height: "20rem" }}
                >
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/behance.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Behance
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/google-cloud.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Cloud
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/slack.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Slack
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/gitlab.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Gitlab
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/bitbucket.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          BitBucket
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/google-drive.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Drive
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/trello.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Trello
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/figma.webp"
                          alt=""
                          width="20"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Figma
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/twitter.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Twitter
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/pinterest.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Pinterest
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/ln.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Linkedin
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/google-maps.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Maps
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/google-photos.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Photos
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
                        to="#!"
                      >
                        <img
                          src="src/assets/img/nav-icons/spotify.webp"
                          alt=""
                          width="30"
                        />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">
                          Spotify
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link lh-1 pe-0"
              id="navbarDropdownUser"
              to="#!"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar-xs">
                <span
                  className="avatar-title d-flex rounded-circle text-uppercase bold fs-1 border p-1">
                  <span className="username m-1">{profilePic}</span>
                  <span className="user-status"></span>
                </span>
              </div>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
              aria-labelledby="navbarDropdownUser"
            >
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <div className="avatar-xs">
                        <span
                          className="avatar-title d-flex rounded-circle text-uppercase bold fs-1 border p-1">
                          <span className="username m-1">{profilePic}</span>
                          <span className="user-status"></span>
                        </span>
                      </div>
                    </div>
                    <h6 className="mt-2 text-black">{user?.data?.fullname}</h6>
                  </div>
                  <div className="mb-3 mx-3">
                    <input
                      className="form-control form-control-sm"
                      id="statusUpdateInput"
                      type="text"
                      placeholder="Update your status"
                    />
                  </div>
                </div>
                <div
                  className="overflow-auto scrollbar"
                  style={{ height: "10rem" }}
                >
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        {" "}
                        <span
                          className="me-2 text-900"
                          data-feather="user"
                        ></span>
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        <span
                          className="me-2 text-900"
                          data-feather="pie-chart"
                        ></span>
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        {" "}
                        <span
                          className="me-2 text-900"
                          data-feather="lock"
                        ></span>
                        Posts &amp; Activity
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        {" "}
                        <span
                          className="me-2 text-900"
                          data-feather="settings"
                        ></span>
                        Settings &amp; Privacy{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        {" "}
                        <span
                          className="me-2 text-900"
                          data-feather="help-circle"
                        ></span>
                        Help Center
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        {" "}
                        <span
                          className="me-2 text-900"
                          data-feather="globe"
                        ></span>
                        Language
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="#!">
                        {" "}
                        <span
                          className="me-2 text-900"
                          data-feather="user-plus"
                        ></span>
                        Add another account
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  <div className="px-3">
                    <button
                      onClick={handleSignout}
                      className="btn btn-phoenix-secondary d-flex flex-center w-100"
                      to="Signin"
                    >
                      <span className="me-2" data-feather="log-out">
                      </span>
                      Sign out
                    </button>
                  </div>
                  <div className="my-2 text-center fw-bold fs--2 text-600">
                    <Link className="text-600 me-1" to="#!">
                      Privacy policy
                    </Link>
                    &bull;
                    <Link className="text-600 mx-1" to="#!">
                      Terms
                    </Link>
                    &bull;
                    <Link className="text-600 ms-1" to="#!">
                      Cookies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
