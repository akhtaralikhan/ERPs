import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import feather from "feather-icons";

const Sidebar = () => {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const user = userData ? JSON.parse(userData) : null;
    if (user?.data?.role?.name === "SuperAdmin") {
      setIsSuperAdmin(true);
    }
  }, [isSuperAdmin]);


  useEffect(() => {
    feather.replace();

    const navbarStyle = window?.config?.config?.phoenixNavbarStyle;
    if (navbarStyle && navbarStyle !== "transparent") {
      document.body.classList.add(`navbar-${navbarStyle}`);
    }
  }, []);

  return (
    <nav className="navbar navbar-vertical navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        {/* <!-- scrollbar removed--> */}
        <div className="navbar-vertical-content">
          <ul className="navbar-nav flex-column" id="navbarVerticalNav">
            <li className="nav-item">
              {/* <!-- parent pages--> */}
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="pie-chart"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Dashboard</span>
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/BankAccounts"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="check-square"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Bank Accounts</span>
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="nav-item-wrapper">
                <Link
                  className="nav-link dropdown-indicator label-1"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="product-services"
                  data-bs-target="#product-services"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather="shopping-bag"></span>
                    </span>
                    <span className="nav-link-text">Product & Services</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="product-services"
                  >
                    <li className="collapsed-nav-item-title d-none">
                      Product & Services
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Product"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Product</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Services"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Services</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              {/* <!-- label--> */}
              <p className="navbar-vertical-label">Sales & Expenses</p>
              <hr className="navbar-vertical-line" />
              {/* <!-- parent pages--> */}
              <div className="nav-item-wrapper">
                <Link
                  className="nav-link dropdown-indicator label-1"
                  to=""
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sale"
                  data-bs-target="#sale"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Sale</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="sale"
                  >
                    <li className="collapsed-nav-item-title d-none">Sale</li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Estimates"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Estimates</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Invoice"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Invoices</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/RecurringInvoice"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
                            Recurring invoices
                          </span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Incomes"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Incomes</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/CreditNotes"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Credit notes</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Customer"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Customers</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <Link
                  className="nav-link dropdown-indicator label-1"
                  to="#expenses"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="expenses"
                  data-bs-target="#expenses"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Expenses</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="expenses"
                  >
                    <li className="collapsed-nav-item-title d-none">
                      Expenses
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Bills</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Expenses"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Expenses</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/DebitNotes"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Debit notes</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Vendors"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Vendors</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- parent pages--> */}
            </li>

            <li className="nav-item">
              {/* <!-- label--> */}
              <p className="navbar-vertical-label">Accounting</p>
              <hr className="navbar-vertical-line" />
              {/* <!-- parent pages--> */}
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/ManualJournals"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="file-text"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Manual journals</span>
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/Transations"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Transactions</span>
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/ChartsOfAccount"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="book"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Chart of accounts</span>
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/Assets"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="briefcase"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Assets</span>
                    </span>
                  </div>
                </NavLink>
              </div>
              {/* <!-- parent pages--> */}
            </li>
            <li className="nav-item">
              {/* <!-- label--> */}
              <p className="navbar-vertical-label">Reports</p>
              <hr className="navbar-vertical-line" />
              {/* <!-- parent pages--> */}
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/Report"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="bar-chart-2"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Reports</span>
                    </span>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              {/* <!-- label--> */}
              <p className="navbar-vertical-label">Settings</p>
              <hr className="navbar-vertical-line" />
              {/* <!-- parent pages--> */}
              <div className="nav-item-wrapper">
                <NavLink
                  className="nav-link label-1"
                  to="/Settings"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="settings"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Settings</span>
                    </span>
                  </div>
                </NavLink>
              </div>
            </li>
            {isSuperAdmin &&
              <li className="nav-item">
                {/* <!-- label--> */}
                <p className="navbar-vertical-label">Super Admin</p>
                <hr className="navbar-vertical-line" />
                {/* <!-- parent pages--> */}
                <div className="nav-item-wrapper">
                  <NavLink
                    className="nav-link label-1"
                    to="/Console"
                    role="button"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg></span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Console</span>
                      </span>
                    </div>
                  </NavLink>
                </div>
              </li>}
          </ul>
        </div>
      </div>
      <div className="navbar-vertical-footer">
        <button className="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center">
          <span className="uil uil-left-arrow-to-left fs-0"></span>
          <span className="uil uil-arrow-from-right fs-0"></span>
          <span className="navbar-vertical-footer-text ms-2">
            Collapsed View
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
