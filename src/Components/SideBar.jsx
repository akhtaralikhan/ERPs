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
                      <span className="nav-link-text">Super Admin</span>
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
                    <span className="nav-link-text">POS</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="product-services"
                  >
                    <li className="collapsed-nav-item-title d-none">
                      POS
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Product"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Item Cart</span>
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
                          <span className="nav-link-text">Side Invoive</span>
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
              {/* <p className="navbar-vertical-label">Sales & Expenses</p> */}
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
                    <span className="nav-link-text">Manage Sales</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="sale"
                  >
                    <li className="collapsed-nav-item-title d-none">Manage Sales</li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Estimates"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Invoive</span>
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
                          <span className="nav-link-text">Manual Invoice</span>
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
                           Draft Invoice
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
                          <span className="nav-link-text">Quote Invoice</span>
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
                          <span className="nav-link-text">Manage Customer Info</span>
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
                          <span className="nav-link-text">Sales Return Log</span>
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
                  to="#purchase"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="purchase"
                  data-bs-target="#purchase"
                  id="purchase"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Manage Purchase</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="purchase"
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
                          <span className="nav-link-text">Purchases Invoice</span>
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
                          <span className="nav-link-text">Purchases Invoice Draft</span>
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
                          <span className="nav-link-text">Purchases Invoice Quote</span>
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
                          <span className="nav-link-text">Manage Supplier</span>
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
                          <span className="nav-link-text">Purchase Return Log</span>
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
                          <span className="nav-link-text">Manage Supplier</span>
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
                          <span className="nav-link-text">Manage Supplier</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <Link
                  className="nav-link dropdown-indicator collapsed label-1"
                  to="#expenses"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
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
                    <span className="nav-link-text">Manage Expense</span>
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
                          <span className="nav-link-text">Expense Summary</span>
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
                          <span className="nav-link-text">Expense Type</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li> 
                  </ul>
                </div>
              </div>

               <div className="nav-item-wrapper">
                <Link
                  className="nav-link dropdown-indicator collapsed label-1"
                  to="#branch"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="branch"
                  data-bs-target="#branch"
                  id="branch"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Manage Branch</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="branch"
                  >
                    <li className="collapsed-nav-item-title d-none">
                      Branch
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Branch</span>
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
                      <span className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg></span>
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
