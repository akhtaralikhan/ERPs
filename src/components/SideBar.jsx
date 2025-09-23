import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import feather from "feather-icons";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  // const [collapsed, setCollapsed] = useState(false); // collapsed state
  const [flyoutTop, setFlyoutTop] = useState(0);

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

  const Padding_left = collapsed ? "1rem" : "1.75rem";

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
        /* Transition for smooth collapsing */
        .navbar-vertical {
          transition: width 0.3s ease;
        }
        .navbar-vertical.collapsed {
          width: 80px;
        }

        /* Hide text when collapsed */
        .navbar-vertical.collapsed .nav-link-text-wrapper,
        .navbar-vertical.collapsed .navbar-vertical-footer-text,
        .navbar-vertical.collapsed .navbar-vertical-label {
          display: none !important;
        }

        /* Keep icons centered */
        .navbar-vertical .nav-link-icon {
          justify-content: center;
          min-width: 40px;
        }

        /* Disable bootstrap collapse when sidebar is collapsed */
        .navbar-vertical.collapsed .collapse.parent {
          display: none !important;
        }

        /* Flyout menu on hover */
        // .navbar-vertical.collapsed .nav-item-wrapper:hover > .nav-link-text-wrapper {
        //   display: block !important;
        //   position: absolute;
        //   left: 100%;
        //   top: 0;
        //   background: #fff;
        //   box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        //   border-radius: 8px;
        //   min-width: 220px;
        //   z-index: 1050;
        //   padding: 6px 0;
        // }

        .navbar-vertical.collapsed .nav-link-text-wrapper .nav-link {
          padding: 8px 16px;
          white-space: nowrap;
        }
        .navbar-vertical.collapsed .nav-item-wrapper:hover .dropdown-indicator-icon span {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

    .navbar-vertical.navbar-expand-lg .navbar-vertical-content .navbar-nav .nav-link {
        padding-top: .35rem;
        padding-bottom: .35rem;
        padding-left: ${Padding_left};
        margin-left: .75rem;
        margin-right: .75rem;
        border-radius: .5rem;
    }
        /* Flyout label when collapsed */
.navbar-vertical.collapsed .nav-link .nav-flyout-label {
  position: absolute;
  left: 100%; /* show on the right of the sidebar */
    top: 15%;
  transform: translateY(-50%);
  background: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  white-space: nowrap;
  z-index: 2000;
  margin-left: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  display: none; /* hidden until hover */
}

/* Show only on hover of icon */
.navbar-vertical.collapsed .nav-item-wrapper:hover .nav-link .nav-flyout-label {
  display: block;
  padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 16px;
    width: 220px;
    background: #fff;
    margin-left: 16px;
    border-radius: .5rem;
    border: 1px solid var(--phoenix-navbar-vertical-border-color);
}

    .navbar-vertical-collapsed .navbar-vertical.navbar-expand-lg .navbar-vertical-content {
        /* overflow: visible; */
    }

    .transition-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.transition-arrow.rotated {
  transform: rotate(180deg);
}
      .navbar-vertical.navbar-expand-lg .navbar-vertical-footer .uil-arrow-from-right {
         display: block; 
    }

    /* Default expanded sidebar */
.navbar-vertical .navbar-vertical-footer {
  position: fixed;
  width: 15.875rem; /* match expanded width */
  height: 4rem;
  display: flex;
  align-items: center;
  bottom: 0;
  border-top: 1px solid var(--phoenix-navbar-footer-border-color);
  transition: width 0.3s ease;
}

/* Collapsed state */
.navbar-vertical.collapsed .navbar-vertical-footer {
  width: 80px; /* match collapsed width */
}

/* Flyout wrapper */
// .sidebar-flyout {
//   position: absolute;
//   left: 80px; /* match collapsed width */
//   top: 0;
//   background: #fff;
//   border: 1px solid var(--phoenix-navbar-vertical-border-color);
//   border-radius: 8px;
//   min-width: 220px;
//   box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//   z-index: 2000;
//   padding: 8px 0;
//   display: none;
// }

.sidebar-flyout {
  position: fixed;            /* fixed => always overlay */
  left: 80px;                 /* collapsed width ke just baad */
  top: auto;                  /* runtime pe adjust hoga */
  background: #fff;
  border: 1px solid var(--phoenix-navbar-vertical-border-color);
  border-radius: 8px;
  min-width: 220px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 3000;
  padding: 8px 0;
  display: none;
}

/* Show on hover */
// .navbar-vertical.collapsed .nav-item-wrapper:hover > .sidebar-flyout {
//   display: block;
// }

.navbar-vertical.collapsed .nav-item-wrapper:hover > .sidebar-flyout,
.navbar-vertical.collapsed .sidebar-flyout:hover {
  display: block;
}

/* Flyout title */
.sidebar-flyout-title {
  font-weight: 600;
  padding: 6px 16px;
  font-size: 0.875rem;
  color: #333;
}

/* Flyout links */
.sidebar-flyout .nav-link {
  display: block;
  padding: 6px 16px;
  color: #333;
  text-decoration: none;
}
.sidebar-flyout .nav-link:hover {
  background: #f5f5f5;
  color: #007bff;
}

.navbar-vertical .navbar-vertical-line.Flyout {
    display: block;
    // margin: 0px;
    }

    /* Flyout arrow for collapsed sidebar */
.sidebar-flyout:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 1rem;
  height: 1rem;
  background: inherit;
  top: 0.85rem;
  left: -9px;
  transform: rotate(45deg);
  border-bottom-left-radius: 0.125rem;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: var(--phoenix-navbar-vertical-border-color);
}

html:not(.navbar-vertical-collapsed) .navbar-vertical .navbar-vertical-content::-webkit-scrollbar { 
    display: none;

}

      `}
      </style>
      <nav
        className={`sidebar navbar navbar-vertical navbar-expand-lg ${collapsed ? "collapsed" : ""
          }`}
      >
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          {/* <!-- scrollbar removed--> */}
          <div className="navbar-vertical-content">
            <div className="Huzaifa">
              <ul className="navbar-nav flex-column" id="navbarVerticalNav">
                <li className="nav-item">
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <NavLink className="nav-link label-1" to="/" role="button">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon">
                          <span data-feather="pie-chart"></span>
                        </span>

                        {/* normal inline text if not collapsed */}
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Main Dashboard</span>
                          </span>
                        )}
                      </div>
                    </NavLink>

                    {/* 👇 yahan flyout version paste karo */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <NavLink to="/" className="nav-link">
                          Main Dashboard
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <NavLink
                      className="nav-link label-1"
                      to="/BusinessERP/Index"
                      role="button"
                      data-bs-toggle=""
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon">
                          <span data-feather="check-square"></span>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Business ERP </span>
                          </span>
                        )}
                      </div>
                    </NavLink>

                    {/* 👇 yahan flyout version paste karo */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <NavLink to="/BusinessERP/Index" className="nav-link">
                          Business ERP
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="POS"
                      data-bs-target="#POS"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <span data-feather="shopping-bag"></span>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text">
                            POS
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="POS"
                      >
                        <li className="collapsed-nav-item-title d-none">
                          POS
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ItemCart/Index">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text">Item Cart</span>
                            </div>
                          </NavLink>
                          {/* <!-- more inner pages--> */}
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ItemCart/ItemCartSideInvoice">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text">Side Invoice</span>
                            </div>
                          </NavLink>
                          {/* <!-- more inner pages--> */}
                        </li>
                      </ul>
                    </div>
                    {/* collapsed flyout (hover) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">
                          POS
                        </div>
                        <NavLink className="nav-link" to="/ItemCart/Index">
                          Item Cart
                        </NavLink>
                        <NavLink className="nav-link" to="/ItemCart/ItemCartSideInvoice">
                          Side Invoice
                        </NavLink>
                      </div>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  {/* <!-- label--> */}
                  <p className="navbar-vertical-label">Management</p>
                  <hr className="navbar-vertical-line" />
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="sale"
                      data-bs-target="#sale"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Manage Sales</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="sale"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Payment/Index">
                            Invoice
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/PaymentManual/Index">
                            Manual Invoice
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/PaymentDraft/Index">
                            Draft Invoice
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/PaymentQuote/Index">
                            Quote Invoice
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/CustomerInfo/Index">
                            Manage Customer Info
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ReturnLog/SalesReturnIndex">
                            Sales Return Log
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Manage Sales</div>
                        <NavLink className="nav-link" to="/Payment/Index">
                          Invoice
                        </NavLink>
                        <NavLink className="nav-link" to="/PaymentManual/Index">
                          Manual Invoice
                        </NavLink>
                        <NavLink className="nav-link" to="/PaymentDraft/Index">
                          Draft Invoice
                        </NavLink>
                        <NavLink className="nav-link" to="/PaymentQuote/Index">
                          Quote Invoice
                        </NavLink>
                        <NavLink className="nav-link" to="/CustomerInfo/Index">
                          Manage Customer Info
                        </NavLink>
                        <NavLink className="nav-link" to="/ReturnLog/SalesReturnIndex">
                          Sales Return Log
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to="#expenses"
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="expenses"
                      data-bs-target="#expenses"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Manage Purchases</span>
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="expenses"
                      >
                        <li className="collapsed-nav-item-title d-none">
                          Manage Purchases
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            to="/PurchasesPayment/Index"
                            data-bs-toggle=""
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text">Purchase Invoice</span>
                            </div>
                          </NavLink>
                          {/* <!-- more inner pages--> */}
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            to="/PurchasesPaymentDraft/Index"
                            data-bs-toggle=""
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text">Purchase Invoice Draft</span>
                            </div>
                          </NavLink>
                          {/* <!-- more inner pages--> */}
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            to="/PurchasesPaymentQuote/Index"
                            data-bs-toggle=""
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text">Purchase Invoice Quote</span>
                            </div>
                          </NavLink>
                          {/* <!-- more inner pages--> */}
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            to="/Supplier/Index"
                            data-bs-toggle=""
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text">Manage Supplier</span>
                            </div>
                          </NavLink>
                          {/* <!-- more inner pages--> */}
                        </li>
                        <li className="nav-item ps-3">
                          <NavLink
                            className="nav-link"
                            to="/ReturnLog/PurchaseReturnIndex"
                            data-bs-toggle=""
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              Prchase Return Log
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Manage Purchases</div>
                        <NavLink className="nav-link" to="/PurchasesPayment/Index">
                          Purchase Invoice
                        </NavLink>
                        <NavLink className="nav-link" to="/PurchasesPaymentDraft/Index">
                          Purchase Invoice Draft
                        </NavLink>
                        <NavLink className="nav-link" to="/PurchasesPaymentQuote/Index">
                          Purchase Invoice Quote
                        </NavLink>
                        <NavLink className="nav-link" to="/Supplier/Index">
                          Manage Supplier
                        </NavLink>
                        <NavLink className="nav-link" to="/ReturnLog/PurchaseReturnIndex">
                          Purchase Return Log
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ManageExpense"
                      data-bs-target="#ManageExpense"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Manage Expenses</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ManageExpense"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ExpenseSummary/Index">
                            Expenses Summary
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ExpenseType/Index">
                            Expenses Type
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Manage Expenses</div>
                        <NavLink className="nav-link" to="/ExpenseSummary/Index">
                          Expenses Summary
                        </NavLink>
                        <NavLink className="nav-link" to="/ExpenseType/Index">
                          Expenses Type
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ManageBranch"
                      data-bs-target="#ManageBranch"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Manage Branch</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ManageBranch"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Branch/Index">
                            Branch
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Manage Branch</div>
                        <NavLink className="nav-link" to="/Branch/Index">
                          Branch
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ManageItems"
                      data-bs-target="#ManageItems"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Manage Items</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ManageItems"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Items/Index">
                            Item
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Items/OutOfStockItem">
                            Out Of Stock
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Items/LowInStockItem">
                            Low In Stock
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/DamageItemDetails/Index">
                            Damage Item Details
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ItemsHistory/Index">
                            Item History
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Warehouse/Index">
                            Manage Warehouse
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Manage Items</div>
                        <NavLink className="nav-link" to="/Items/Index">
                          Item
                        </NavLink>
                        <NavLink className="nav-link" to="/Items/OutOfStockItem">
                          Out Of Stock
                        </NavLink>
                        <NavLink className="nav-link" to="/Items/LowInStockItem">
                          Low In Stock
                        </NavLink>
                        <NavLink className="nav-link" to="/DamageItemDetails/Index">
                          Damage Item Details
                        </NavLink>
                        <NavLink className="nav-link" to="/ItemsHistory/Index">
                          Item History
                        </NavLink>
                        <NavLink className="nav-link" to="/Warehouse/Index">
                          Manage Warehouse
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="SystemSettings"
                      data-bs-target="#SystemSettings"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">System Settings</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="SystemSettings"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/CompanyInfo/Index">
                            Company Info
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/EmailConfig/Index">
                            Email Config
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Currency/Index">
                            Manage Currency
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/PaymentType/Index">
                            Payment Type
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/PaymentStatus/Index">
                            Payment Status
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/CustomerType/Index">
                            Customer Type
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Categories/Index">
                            Categories
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                            Unit Of Measures
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/VatPercentage/Index">
                            Vat Percentage
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">System Settings</div>

                        <NavLink className="nav-link" to="/CompanyInfo/Index">
                          Company Info
                        </NavLink>
                        <NavLink className="nav-link" to="/EmailConfig/Index">
                          Email Config
                        </NavLink>
                        <NavLink className="nav-link" to="/Currency/Index">
                          Manage Currency
                        </NavLink>
                        <NavLink className="nav-link" to="/PaymentType/Index">
                          Payment Type
                        </NavLink>
                        <NavLink className="nav-link" to="/PaymentStatus/Index">
                          Payment Status
                        </NavLink>
                        <NavLink className="nav-link" to="/CustomerType/Index">
                          Customer Type
                        </NavLink>
                        <NavLink className="nav-link" to="/Categories/Index">
                          Categories
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                          Unit Of Measures
                        </NavLink>
                        <NavLink className="nav-link" to="/VatPercentage/Index">
                          Vat Percentage
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="HumanResource"
                      data-bs-target="#HumanResource"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Human Resource</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="HumanResource"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Attendance/Index">
                            Attandance
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Employee/Index">
                            Manage Employee
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Designation/Index">
                            Designation
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Department/Index">
                            Department
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                            Sub Department
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Human Resource</div>

                        <NavLink className="nav-link" to="/Attendance/Index">
                          Attandance
                        </NavLink>
                        <NavLink className="nav-link" to="/Employee/Index">
                          Manage Employee
                        </NavLink>
                        <NavLink className="nav-link" to="/Designation/Index">
                          Designation
                        </NavLink>
                        <NavLink className="nav-link" to="/Department/Index">
                          Department
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                          Sub Department
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ManageUserRoles"
                      data-bs-target="#ManageUserRoles"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">
                              Manage User Roles</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ManageUserRoles"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/ManageUserRoles/Index">
                            Manage User Roles
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/SystemRole/Index">
                            System Roles
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">
                          Manage User Roles</div>
                        <NavLink className="nav-link" to="/ManageUserRoles/Index">
                          Manage User Roles
                        </NavLink>
                        <NavLink className="nav-link" to="/SystemRole/Index">
                          System Roles
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ManageUser"
                      data-bs-target="#ManageUser"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Manage User</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ManageUser"
                      >
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/UserManagement/Index">
                            User Management
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/IdentitySetting/Index">
                            Identity Settings
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/EmailSetting/Index">
                            Email Settings
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/SendEmailHistory/Index">
                            Send Email History
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/LoginHistory/Index">
                            Login History
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/AuditLogs/Index" >
                            Audit Logs
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/UserInfoFromBrowser/Index">
                            User Info From Browser
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/RefreshToken/Index">
                            JWT Token
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Manage User</div>
                        <NavLink className="nav-link" to="/UserManagement/Index">
                          User Management
                        </NavLink>
                        <NavLink className="nav-link" to="/IdentitySetting/Index">
                          Identity Settings
                        </NavLink>
                        <NavLink className="nav-link" to="/EmailSetting/Index">
                          Email Settings
                        </NavLink>
                        <NavLink className="nav-link" to="/SendEmailHistory/Index">
                          Send Email History
                        </NavLink>
                        <NavLink className="nav-link" to="/LoginHistory/Index">
                          Login History
                        </NavLink>
                        <NavLink className="nav-link" to="/AuditLogs/Index" >
                          Audit Logs
                        </NavLink>
                        <NavLink className="nav-link" to="/UserInfoFromBrowser/Index">
                          User Info From Browser
                        </NavLink>
                        <NavLink className="nav-link" to="/RefreshToken/Index">
                          JWT Token
                        </NavLink>
                      </div>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  {/* <!-- label--> */}
                  <p className="navbar-vertical-label">Reports</p>
                  <hr className="navbar-vertical-line" />
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ItemReports"
                      data-bs-target="#ItemReports"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Item Reports</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ItemReports"
                      >
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/HighInDemand">
                            High In Demand
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/LowInDemand">
                            Low In Demand
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/HighestEarning">
                            Highest Earning
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/LowestEarning">
                            Lowest Earning
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Item Reports</div>
                        <NavLink className="nav-link" to="/SalesReport/HighInDemand">
                          High In Demand
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/LowInDemand">
                          Low In Demand
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/HighestEarning">
                          Highest Earning
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/LowestEarning">
                          Lowest Earning
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="SalesReport"
                      data-bs-target="#SalesReport"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Sales Reports</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="SalesReport"
                      >
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/PaymentSummaryReport">
                            Transactions Summary
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/ProductWiseSale">
                            Product Wise Sales
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/PaymentDetailReport">
                            Transactions Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/TransactionByDay">
                            Transactions By Day
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/TransactionByMonth">
                            Transactions By Month
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/TransactionByYear">
                            Transactions By Year
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Sales Reports</div>
                        <NavLink className="nav-link" to="/SalesReport/PaymentSummaryReport">
                          Transactions Summary
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/ProductWiseSale">
                          Product Wise Sales
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/PaymentDetailReport">
                          Transactions Details
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/TransactionByDay">
                          Transactions By Day
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/TransactionByMonth">
                          Transactions By Month
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/TransactionByYear">
                          Transactions By Year
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="PurchaseReports"
                      data-bs-target="#PurchaseReports"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Purchase Reports</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="PurchaseReports"
                      >
                        <li>
                          <NavLink className="nav-link" to="/PurchasesReport/PurchasesSummary">
                            Purchase Summary
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/PurchasesReport/PurchasesDetail">
                            Purchase Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/PurchasesReport/PurchasesTransactionByDay">
                            Transactions By Day
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/PurchasesReport/PurchasesTransactionByMonth">
                            Transactions By Month
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/PurchasesReport/PurchasesTransactionByYear">
                            Transactions By Year
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Purchase Reports</div>
                        <NavLink className="nav-link" to="/PurchasesReport/PurchasesSummary">
                          Purchase Summary
                        </NavLink>
                        <NavLink className="nav-link" to="/PurchasesReport/PurchasesDetail">
                          Purchase Details
                        </NavLink>
                        <NavLink className="nav-link" to="/PurchasesReport/PurchasesTransactionByDay">
                          Transactions By Day
                        </NavLink>
                        <NavLink className="nav-link" to="/PurchasesReport/PurchasesTransactionByMonth">
                          Transactions By Month
                        </NavLink>
                        <NavLink className="nav-link" to="/PurchasesReport/PurchasesTransactionByYear">
                          Transactions By Year
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="ExpenseReport"
                      data-bs-target="#ExpenseReport"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Expenses Reports</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="ExpenseReport"
                      >
                        <li>
                          <NavLink className="nav-link" to="/ExpenseReport/ExpenseSummaryReport">
                            Expenses Summary
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/ExpenseReport/ExpenseDetailsReport">
                            Expenses Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/ExpenseReport/ExpenseByDay">
                            Expenses By Day
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/ExpenseReport/ExpenseByMonth">
                            Expenses By Month
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/ExpenseReport/ExpenseByYear">
                            Expenses By Year
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Expenses Reports</div>
                        <NavLink className="nav-link" to="/ExpenseReport/ExpenseSummaryReport">
                          Expenses Summary
                        </NavLink>
                        <NavLink className="nav-link" to="/ExpenseReport/ExpenseDetailsReport">
                          Expenses Details
                        </NavLink>
                        <NavLink className="nav-link" to="/ExpenseReport/ExpenseByDay">
                          Expenses By Day
                        </NavLink>
                        <NavLink className="nav-link" to="/ExpenseReport/ExpenseByMonth">
                          Expenses By Month
                        </NavLink>
                        <NavLink className="nav-link" to="/ExpenseReport/ExpenseByYear">
                          Expenses By Year
                        </NavLink>
                      </div>
                    )}
                  </div>
                  {/* <!-- parent pages--> */}
                  <div
                    className="nav-item-wrapper"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                    }}
                  >
                    <Link
                      className="nav-link dropdown-indicator label-1"
                      to=""
                      role="button"
                      data-bs-toggle={collapsed ? "" : "collapse"}
                      aria-expanded="true"
                      aria-controls="OtherReport"
                      data-bs-target="#OtherReport"
                    >
                      <div className="d-flex align-items-center">
                        {!collapsed && (
                          <div className="dropdown-indicator-icon">
                            <span className="fas fa-caret-right"></span>
                          </div>
                        )}
                        <span className="nav-link-icon">
                          <i className="fa-regular fa-credit-card"></i>
                        </span>
                        {!collapsed && (
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Other Reports</span>
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* normal expanded submenu */}
                    <div className="parent-wrapper label-1">
                      <ul
                        className="nav collapse parent"
                        data-bs-parent="#navbarVerticalCollapse"
                        id="OtherReport"
                      >
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/SummaryReport">
                            Summary Report
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/AttendanceReport">
                            Attandance Report
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/SalesReport/PrintBarcode">
                            Print Barcode
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* flyout version (only shows when collapsed & hovered) */}
                    {collapsed && (
                      <div
                        className="sidebar-flyout"
                        style={{ top: `${flyoutTop}px` }}
                      >
                        <div className="sidebar-flyout-title">Other Reports</div>
                        <NavLink className="nav-link" to="/SalesReport/SummaryReport">
                          Summary Report
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/AttendanceReport">
                          Attandance Report
                        </NavLink>
                        <NavLink className="nav-link" to="/SalesReport/PrintBarcode">
                          Print Barcode
                        </NavLink>
                      </div>
                    )}
                  </div>
                </li>

                {isSuperAdmin && (
                  <li className="nav-item">
                    {/* <!-- label--> */}
                    <p className="navbar-vertical-label">Super Admin</p>
                    <hr className="navbar-vertical-line" />
                    {/* <!-- parent pages--> */}
                    <div
                      className="nav-item-wrapper"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setFlyoutTop(rect.top); // yahan se flyoutTop update hoga
                      }}
                    >
                      <NavLink
                        className="nav-link label-1"
                        to="/UserProfile/Index"
                        role="button"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px" // bigger than 16
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-codepen"
                            >
                              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                              <line x1="12" y1="22" x2="12" y2="15.5"></line>
                              <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                              <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                              <line x1="12" y1="2" x2="12" y2="8.5"></line>
                            </svg>
                          </span>
                          <span className="nav-link-text-wrapper">
                            <span className="nav-link-text">Super Admin</span>
                          </span>
                        </div>
                      </NavLink>
                      {/* 👇 yahan flyout version paste karo */}
                      {collapsed && (
                        <div
                          className="sidebar-flyout"
                          style={{ top: `${flyoutTop}px` }}
                        >
                          <NavLink to="/UserProfile/Index" className="nav-link">
                            Super Admin
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-vertical-footer">
          <button
            className="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <span className="uil uil-arrow-from-right fs-0"></span>
            ) : (
              <span className="uil uil-left-arrow-to-left fs-0"></span>
            )}

            {!collapsed && (
              <span className="navbar-vertical-footer-text ms-2">
                Collapsed View
              </span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;