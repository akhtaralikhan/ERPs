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
    <nav className="navbar navbar-vertical navbar-expand-lg h-100">
      <div className="collapse navbar-collapse pb-5" id="navbarVerticalCollapse">
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
                      <span className="nav-link-text">Business ERP</span>
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
                   <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/ItemCart"
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
                        to="/SideInvoice"
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
                   <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/ManageSales"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Sales</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    {/* <li className="nav-item">
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
                    </li> */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/ManualInvoices"
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
                        to="/DraftInvoice"
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
                        to="/QuoteInvoice"
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
                        to="/customerInfo"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Customer</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/SalesReturn"
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
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  className="nav-link dropdown-indicator label-1"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="purchase"
                  data-bs-target="#purchase"
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
                    
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/PurchaseInvoice"
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
                        to="/PurchaseInvoiceDraft"
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
                        to="/PurchaseInvoiceQuote"
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
                        to="/ManageSupplier"
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
                        to="/PurchaseReturn"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Purchase Return Log</span>
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
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="ManageBranch"
                  data-bs-target="#ManageBranch"
                  onClick={(e) => e.preventDefault()} // stops navigation
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
                    id="ManageBranch"
                  >
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
              <div className="nav-item-wrapper">
                <Link
                  className="nav-link dropdown-indicator collapsed label-1"
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="MangeItem"
                  data-bs-target="#MangeItem"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Manage Item</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="MangeItem"
                  >
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
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Item</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Out Of Stock</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Low In Stock</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Demage Item Details</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Item History</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Warehouse</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="SystemSettings"
                  data-bs-target="#SystemSettings"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">System Settings</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="SystemSettings"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Company Info</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Email Config</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Currency</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Payment Type</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Payment Status</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Customer Type</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Vat Percentage</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Categories</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Unit Of Measure</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Warehouse</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="HumanResources"
                  data-bs-target="#HumanResources"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Human Resources</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="HumanResources"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Attandace </span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Email Config</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Currency</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Payment Type</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Payment Status</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Customer Type</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Vat Percentage</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Categories</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Unit Of Measure</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage Warehouse</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="manageUserRole"
                  data-bs-target="#manageUserRole"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Manage User Role</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="manageUserRole"
                  >
                   <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Manage User Role</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">System Role</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="ManageUser"
                  data-bs-target="#ManageUser"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Manage User</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="ManageUser"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
                            User Management
                          </span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Identity Setting</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Email Setting</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Send Email History </span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Login History</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Audit Logs</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">User Info From Browser</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">JWT Token</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="ItemReport"
                  data-bs-target="#ItemReport"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Item Report</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="ItemReport"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">High In Demand</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text"> Low In Demand </span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Highest Earning</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Lowest Earning </span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="SalesReport"
                  data-bs-target="#SalesReport"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Sales Report</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="SalesReport"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction summary</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Produxt Wise Sale</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction Dretails</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction By Day</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction By Month</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction By Year</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="PurchaseReport"
                  data-bs-target="#PurchaseReport"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Purchase Report</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="PurchaseReport"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Purchases Summary</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Purchase Details</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction By Day</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction By Month</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Transaction By Year</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="ExpenseReport"
                  data-bs-target="#ExpenseReport"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Expense Report</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="ExpenseReport"
                  >
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
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Expense Details</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Expense By Day</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Expense By Month</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Expense By Year</span>
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
                  to="#"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="OtherReport"
                  data-bs-target="#OtherReport"
                  onClick={(e) => e.preventDefault()} // stops navigation
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon">
                      <span className="fas fa-caret-right"></span>
                    </div>
                    <span className="nav-link-icon">
                      <i className="fa-regular fa-credit-card"></i>
                    </span>
                    <span className="nav-link-text">Other Report</span>
                  </div>
                </Link>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="OtherReport"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Summary Report</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Attandace Report</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Bills"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Print Barcode</span>
                        </div>
                      </NavLink>
                      {/* <!-- more inner pages--> */}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;