import React, { useEffect, useMemo, useState } from "react";
import SalesChart from "../../Components/SalesChart";
import InvoiceAnalyticsChart from "../../Components/InvoiceAnalyticsChart";
import { Link } from "react-router-dom";
import ChatBot from "../../Components/ChatBot";
import { Container, Row, Col, Card, Nav, Navbar, Form } from "react-bootstrap";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement } from "chart.js";
import TopCoupons, { PayingVsNonPaying } from "../../Components/Charts";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import DeleteModal from "../../Components/DeleteModal";
import ProductTable, { RecentEstimates, NewTable } from "../../Components/MainDashboardTables";

ChartJS.register(
  Title, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement
);

const lastTransactions = [
  {
    date: "2025-09-01T10:30:00",
    category: "Income",
    amount: 2500.0
  },
  {
    date: "2025-09-02T15:45:00",
    category: "Expense",
    amount: 1200.5
  },
  {
    date: "2025-09-03T09:10:00",
    category: "Income",
    amount: 4800.0
  },
  {
    date: "2025-09-04T19:20:00",
    category: "Expense",
    amount: 650.75
  },
  {
    date: "2025-09-05T14:00:00",
    category: "Transfer",
    amount: 1000.0
  }
];
const lastInvoice = [
  {
    customer: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com"
    },
    totalAmount: 2500.0,
    invoiceDate: "2025-09-01T10:30:00",
    status: "Paid"
  },
  {
    customer: {
      name: "Michael Smith",
      email: "michael.smith@example.com"
    },
    totalAmount: 1200.75,
    invoiceDate: "2025-09-03T15:45:00",
    status: "Unpaid"
  },
  {
    customer: {
      name: "Sophia Lee",
      email: "sophia.lee@example.com"
    },
    totalAmount: 3100.5,
    invoiceDate: "2025-09-04T09:10:00",
    status: "Paid"
  },
  {
    customer: {
      name: "Daniel Brown",
      email: "daniel.brown@example.com"
    },
    totalAmount: 800.0,
    invoiceDate: "2025-09-05T19:20:00",
    status: "Unpaid"
  },
  {
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com"
    },
    totalAmount: 4500.25,
    invoiceDate: "2025-09-06T14:00:00",
    status: "Paid"
  }
];
const lastEstimates = [
  {
    customer: {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com"
    },
    totalAmount: 2200.0,
    issueDate: "2025-09-01T09:30:00",
    status: "Sent"
  },
  {
    customer: {
      name: "James Wilson",
      email: "james.wilson@example.com"
    },
    totalAmount: 1500.5,
    issueDate: "2025-09-02T14:15:00",
    status: "Draft"
  },
  {
    customer: {
      name: "Isabella Taylor",
      email: "isabella.taylor@example.com"
    },
    totalAmount: 3700.0,
    issueDate: "2025-09-03T11:45:00",
    status: "Accepted"
  },
  {
    customer: {
      name: "Ethan Clark",
      email: "ethan.clark@example.com"
    },
    totalAmount: 950.75,
    issueDate: "2025-09-04T16:20:00",
    status: "Declined"
  },
  {
    customer: {
      name: "Charlotte Lewis",
      email: "charlotte.lewis@example.com"
    },
    totalAmount: 5000.0,
    issueDate: "2025-09-05T13:00:00",
    status: "Sent"
  }
];
const lastBills = [
  {
    vendor: {
      name: "Tech Supplies Ltd",
      email: "billing@techsupplies.com"
    },
    totalAmount: 3200.0,
    billDate: "2025-09-01T10:30:00",
    status: "Paid"
  },
  {
    vendor: {
      name: "Office Essentials Inc",
      email: "invoices@officeessentials.com"
    },
    totalAmount: 1250.5,
    billDate: "2025-09-02T15:45:00",
    status: "Pending"
  },
  {
    vendor: {
      name: "Global Logistics",
      email: "finance@globallogistics.com"
    },
    totalAmount: 4875.75,
    billDate: "2025-09-03T09:10:00",
    status: "Overdue"
  },
  {
    vendor: {
      name: "Fresh Foods Wholesale",
      email: "accounts@freshfoods.com"
    },
    totalAmount: 950.0,
    billDate: "2025-09-04T19:20:00",
    status: "Paid"
  },
  {
    vendor: {
      name: "Creative Design Studio",
      email: "billing@creativedesign.com"
    },
    totalAmount: 2780.25,
    billDate: "2025-09-05T14:00:00",
    status: "Draft"
  }
];
const monthlyTransactions = {
  "chartLabel": [
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    ""
  ],
  "linesData": [
    [12000, 15000, 17000, 14000, 18000, 20000, 22000],   // Expenses
    [18000, 22000, 25000, 23000, 26000, 28000, 30000],   // Income
    [6000, 7000, 8000, 9000, 8000, 8000, 8000]           // Profit
  ]
}
const summary = [
  {
    "title": "Total income",
    "value": 660000
  },
  {
    "title": "Total expense",
    "value": 60000
  },
  {
    "title": "Total profit",
    "value": 600000
  }
]
const report = [
  {
    "value": 1.0,
    "name": "Paid"
  },
  {
    "value": 2.0,
    "name": "Unpaid"
  },
  {
    "value": 2.0,
    "name": "Draft"
  },
  {
    "value": 0.0,
    "name": "Sent"
  },
  {
    "value": 2.0,
    "name": "Overdue"
  }
]



const DashboardHome = () => {
  // chart select option
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Completed",
        data: [12, 19, 14, 17, 20, 15, 18],
        backgroundColor: "#0d6efd",
      },
      {
        label: "Pending Payment",
        data: [10, 12, 8, 9, 11, 7, 6],
        backgroundColor: "#cfe2ff",
      },
    ],
  };

  const lineData = {
    labels: ["01 May", "02 May", "03 May", "04 May", "05 May", "06 May", "07 May"],
    datasets: [
      {
        label: "New Customers",
        data: [20, 25, 22, 30, 28, 35, 40],
        fill: false,
        borderColor: "#0d6efd",
        tension: 0.3,
      },
    ],
  };
  // react table transactions
  const columns = useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      { Header: "Category", accessor: "category" },
      { Header: "Amount", accessor: "amount" },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, globalFilter },
    pageOptions,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: lastTransactions,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const [isSelected, setIsSelected] = useState("month");
  // searches 
  // trasactions search 
  const [searchTransaction, setSearchTransaction] = useState("");

  const filteredLastTransactions = lastTransactions?.filter(transaction =>
    transaction?.category?.toLowerCase().includes(searchTransaction.toLowerCase()) ||
    transaction?.date?.toLowerCase().includes(searchTransaction.toLowerCase())
  );

  // recent invoices search
  const [searchInvoice, setSearchInvoice] = useState("");

  const filteredLastInvoices = lastInvoice?.filter(invoice =>
    invoice?.customer?.name?.toLowerCase().includes(searchInvoice.toLowerCase()) ||
    invoice?.customer?.email?.toLowerCase().includes(searchInvoice.toLowerCase())
  );

  // estimates search
  const [searchTerm, setSearchTerm] = useState("");

  const filteredlastEstimates = lastEstimates?.filter(lastEstimate =>
    lastEstimate?.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lastEstimate?.customer?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // last bills search
  const [searchBill, setSearchBill] = useState("");

  const filteredlastBills = lastBills?.filter(lastBill =>
    lastBill?.vendor?.name?.toLowerCase().includes(searchBill.toLowerCase()) ||
    lastBill?.vendor?.email?.toLowerCase().includes(searchBill.toLowerCase())
  );

  return (
    <>
      <div className="content">
        <div className="card rounded-0 border-x-0 border-y-0">
          <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-3 px-4 mb-0 gap-3 ">
            {/* Title and tabs */}
            <div className="p-2 p-md-3 row w-100">
              <h2 className="fw-bolder mb-1" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
                Main Dashboard
              </h2>
              <p className="mb-5 fs-1">Here’s what’s going on at your business right now</p>
              <div className="d-flex gap-4 flex-wrap">
                <div className="d-flex">
                  <div>
                    <i className="fa-solid fa-circle-plus text-success fs-3 mt-2 me-3"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: "clamp(0.95rem, 2.3vw, 1.25rem)" }}>60 New Products</p>
                    <label className="form-label ps-0">Added This Month</label>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4 d-flex">
                  <div>
                    <i className="fa-solid fa-user-plus text-info fs-3 mt-2 me-3"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: "clamp(0.95rem, 2.3vw, 1.25rem)" }}>1000+ New Customer</p>
                    <label className="form-label ps-0">Joined This Month</label>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4 d-flex">
                  <div>
                    <i className="fa-solid fa-globe text-danger fs-3 mt-2 me-3"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: "clamp(0.95rem, 2.3vw, 1.25rem)" }}>30+ Countries</p>
                    <label className="form-label ps-0">Use Our Services</label>
                  </div>
                </div>
              </div>
            </div>
            {/* chart  */}
            <div className="d-flex w-100 border-top  pt-5 justify-content-between mb-4 g-3 flex-wrap">
              <div className="col-auto">
                <h3>Profit & Loss</h3>
                <p className="text-700 lh-sm mb-0">
                  Payment received across all channels
                </p>
              </div>
              <div className="col-12 col-sm-4 col-lg-3">
                <select
                  className="form-select form-select-sm mt-2 mt-sm-0"
                  id="select-gross-revenue-month"
                  value={isSelected}
                  onChange={(e) => setIsSelected(e.target.value)}
                >
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
            <div className="container px-0">
              <div className="w-100">
                <SalesChart chartLabel={monthlyTransactions?.chartLabel || []} linesData={monthlyTransactions?.linesData || []} />
              </div>
            </div>
            <div className="row w-100 g-3">
              {summary?.map((item, index) => (
                <div className="col-12 col-md-4 text-center" key={index}>
                  <p className=" m-0">{item?.title}</p>
                  <span className="ChangePaginationColor">${item?.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card rounded-0 border-x-0">
          <div className="p-5">
            <div className="row g-4">
              <div className="col-12 col-xxl-12">
                <div className="mb-5">
                </div>
                <Container fluid>
                  {/* Navbar */}
                  <Row className="mt-2 g-3">
                    {/* Total Orders */}
                    <Col md={12} lg={6}>
                      <Card className="p-3 border-0">
                        <h6>Total Orders <span className="text-warning">-6.8%</span></h6>
                        <h3>16,247</h3>
                        <Bar data={barData} options={{ plugins: { legend: { display: false } } }} height={100} />
                        <div className="d-flex justify-content-between mt-2">
                          <small className="ChangePaginationColor">Completed 52%</small>
                          <small className="ChangePaginationColor">Pending 48%</small>
                        </div>
                      </Card>
                    </Col>

                    {/* New Customers */}
                    <Col md={12} lg={6} >
                      <Card className="p-3 border-0">
                        <h6>New Customers <span className="text-success">+26.5%</span></h6>
                        <h3>356</h3>
                        <Line data={lineData} options={{ plugins: { legend: { display: false } } }} height={100} />
                      </Card>
                    </Col>

                    {/* Top Coupons */}
                    <Col md={12} lg={6}>
                      <TopCoupons />
                    </Col>

                    {/* Paying vs Non Paying */}
                    <Col md={12} lg={6} className="d-flex justify-content-center align-items-center" >
                      <PayingVsNonPaying />
                    </Col>
                  </Row>
                </Container>

              </div>
            </div>
          </div>
          {/* last transaction  */}
          <div className="p-3 p-md-5 bg-white border-y border-300">
            <div data-list='{"valueNames":["product","customer","rating","review","time"],"page":6}'>
              <div className="row align-items-end justify-content-between pb-5 g-3">
                <div className="col-auto">
                  <h3>Transactions</h3>
                </div>
                <div className="col-12 col-md-auto">
                  <div className="row g-2 gy-3">
                    <div className="col-auto flex-1">
                      <div className="search-box">
                        <form
                          className="position-relative"
                          data-bs-toggle="search"
                          data-bs-display="static"
                        >
                          <input
                            className="form-control search-input search form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTransaction}
                            onChange={(e) => setSearchTransaction(e.target.value)}
                          />
                          <span className="fas fa-search search-box-icon"></span>
                        </form>
                      </div>
                    </div>
                    <div className="col-auto">
                      <Link
                        to="/"
                        className="btn btn-outline-info"
                        type="button"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive p-4 px-0  pt-0">
                {/* ✅ Search */}

                <div className="table-responsive custom-scroll ">
                  <table
                    {...getTableProps()}
                    className="table align-middle fs-9 mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    <thead className="table align-middle border-top text-nowrap fs-9 mb-0">
                      {headerGroups.map((headerGroup, idx) => {
                        const { key: headerKey, ...headerRest } =
                          headerGroup.getHeaderGroupProps();
                        return (
                          <tr key={headerKey || idx} {...headerRest}>
                            {headerGroup.headers.map((column, idx) => {
                              const { key: colKey, ...colRest } =
                                column.getHeaderProps(column.getSortByToggleProps());
                              return (
                                <th
                                  key={colKey || idx}
                                  {...colRest}
                                  style={{
                                    cursor: "pointer",
                                    fontSize: "14.5px",
                                    paddingTop: "16px",
                                    paddingBottom: "16px",
                                  }}
                                  className="border-top-0"
                                >
                                  {column.render("Header")}
                                  <span>
                                    {column.isSorted ? (
                                      column.isSortedDesc ? (
                                        <i
                                          className="fa-solid fa-sort-up text-body-tertiary"
                                          style={{ fontSize: "10px" }}
                                        ></i>
                                      ) : (
                                        <i
                                          className="fa-solid fa-sort-down text-body-tertiary"
                                          style={{ fontSize: "10px" }}
                                        ></i>
                                      )
                                    ) : (
                                      <i
                                        className="fa-solid fa-sort text-body-tertiary"
                                        style={{ fontSize: "10px" }}
                                      ></i>
                                    )}
                                  </span>
                                </th>
                              );
                            })}
                            <th className="">Actions</th>
                          </tr>
                        );
                      })}
                    </thead>

                    <tbody
                      {...getTableBodyProps()}
                      className="table align-middle text-nowrap fs-9 mb-0"
                    >
                      {page.map((row, idx) => {
                        prepareRow(row);
                        const { key: rowKey, ...rowRest } = row.getRowProps();

                        return (
                          <tr key={rowKey || idx} {...rowRest}>
                            {row.cells.map((cell, cidx) => {
                              const { key: cellKey, ...cellRest } =
                                cell.getCellProps();
                              return (
                                <td key={cellKey || cidx}
                                  {...cellRest}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}

                            <td className="align-middle white-space-nowrap pe-0">
                              <div className="font-sans-serif btn-reveal-trigger position-static p-0">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs--2"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <i className="fa fa-ellipsis fs--2"></i>
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
                                    data-bs-toggle="modal"
                                    data-bs-target="#verticallyCentered"
                                  >
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* ✅ Pagination controls */}
                <div className="d-flex justify-content-between mt-3">
                  <span className="ChangePaginationColor">
                    Page {pageIndex + 1} of {pageOptions.length}
                  </span>
                  <div className="d-flex flex-wrap gap-2 justify-content-start justify-content-md-end">
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <DeleteModal modalId="verticallyCentered" resource="invoices" />
              </div>

            </div>
          </div>

          {/* last estimate */}
          <ProductTable />
          {/* <div className="col-12 p-5">
            <div
              className="card shadow-none border border-300"
              data-component-card="data-component-card"
            >
              <div className="card-header p-4 border-bottom border-300 bg-soft">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-900 mb-0" data-anchor="data-anchor">
                      Report dataset
                    </h4>
                  </div>
                </div>
              </div>
              <div className="">
                <InvoiceAnalyticsChart data={report} />
              </div>
            </div>
          </div> */}

          {/* recent estimates  */}
          <RecentEstimates />
          {/* recent bills  */}
          <NewTable />

          {/* //   <!-- transection all modal --> */}
          <div
            className="modal fade bd-example-modal-xl"
            id="scrollingLong2"
            tabIndex={-1}
            aria-labelledby="scrollingLongModalLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="">
                    <h5 className="modal-title" id="scrollingLongModalLabel2">
                      Invoice
                    </h5>
                    <p>
                      <strong>Reference</strong>: #INV25
                    </p>
                  </div>
                  <button
                    className="btn p-1"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="fas fa-times fs--1"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    className="card theme-wizard mb-5"
                    data-theme-wizard="data-theme-wizard"
                  >
                    <div className="card-header bg-100 pt-3 pb-2 border-bottom-0">
                      <ul className="nav justify-content-between nav-wizard">
                        <li className="nav-item">
                          <a
                            className="nav-link active fw-semi-bold"
                            href="#bootstrap-wizard-validation-tab1"
                            data-bs-toggle="tab"
                            data-wizard-step="1"
                          >
                            <div className="text-center d-inline-block">
                              <span className="nav-item-circle-parent">
                                <span className="nav-item-circle">
                                  <span className="fas fa-check"></span>
                                </span>
                              </span>
                              <span className="d-none d-md-block mt-1 fs--1">
                                Approve
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fw-semi-bold"
                            href="#bootstrap-wizard-validation-tab3"
                            data-bs-toggle="tab"
                            data-wizard-step="3"
                          >
                            <div className="text-center d-inline-block">
                              <span className="nav-item-circle-parent">
                                <span className="nav-item-circle">2</span>
                              </span>
                              <span className="d-none d-md-block mt-1 fs--1">
                                Send
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fw-semi-bold"
                            href="#bootstrap-wizard-validation-tab4"
                            data-bs-toggle="tab"
                            data-wizard-step="4"
                          >
                            <div className="text-center d-inline-block">
                              <span className="nav-item-circle-parent">
                                <span className="nav-item-circle">
                                  <span className="fas fa-check"></span>
                                </span>
                              </span>
                              <span className="d-none d-md-block mt-1 fs--1">
                                Pay
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-end border-bottom pb-3">
                    <h4>Your payment #3</h4>
                    <p>
                      Status: <span className="badge bg-success">Paid</span>
                    </p>
                    <button
                      className="btn btn-secondary ms-2 text-uppercase"
                      type="button"
                      disabled="disabled"
                    >
                      <span className="fa far fa-file-alt me-2"></span>Payment
                    </button>
                  </div>
                  <div className="text-end py-3">
                    <button
                      className="btn btn-primary ms-2 text-uppercase"
                      type="button"
                    >
                      <span className="fa far fa-paper-plane me-2"></span>Resend
                      Invoice
                    </button>
                    <button
                      className="btn btn-primary ms-2 text-uppercase"
                      type="button"
                    >
                      <span className="fa far fa-paper-plane me-2"></span>Send
                      Receip
                    </button>
                    <button
                      className="btn btn-primary ms-2 text-uppercase"
                      type="button"
                    >
                      <span className="fa far fa-eye me-2"></span>Customer Preview
                    </button>
                    <button
                      className="btn btn-primary ms-2 text-uppercase"
                      type="button"
                    >
                      <span className="fa fa-solid fa-print me-2"></span>Print
                    </button>
                    <button
                      className="btn btn-primary ms-2 text-uppercase"
                      type="button"
                    >
                      <span className="fa fas fa-arrow-down me-2"></span>Download
                    </button>
                  </div>

                  <div className="w-100">
                    <h4>Products & Services *</h4>
                    <div
                      className="table-responsive mt-5"
                      style={{ overflowX: "hidden" }}
                    >
                      <table className="table  table-sm fs--1 mb-0">
                        <thead>
                          <tr>
                            <th className="sort border-top" data-sort="name">
                              Items
                            </th>
                            <th className="sort border-top" data-sort="age">
                              Category
                            </th>
                            <th
                              className="sort align-middle pe-0 border-top"
                              scope="col"
                            >
                              Quantity
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
                              Tax
                            </th>
                            <th
                              className="sort align-middle pe-0 border-top"
                              scope="col"
                            >
                              Discount (%)
                            </th>
                            <th
                              className="sort align-middle pe-0 border-top"
                              scope="col"
                            >
                              Total price
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <td className="align-middle">abc</td>
                            <td className="align-middle">a</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">10</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">30</td>
                            <td className="align-middle">200</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="my-5 d-flex justify-content-end w-100">
                        <div className="w-25">
                          <div className="row">
                            <div className="col-6">
                              <p>Sub total:</p>
                            </div>
                            <div className="col-6">
                              <p>0</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <p>Discount:</p>
                            </div>
                            <div className="col-6">
                              <p>0</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <p>Tax:</p>
                            </div>
                            <div className="col-6">
                              <p>0</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <p>
                                <strong>Total price:</strong>
                              </p>
                            </div>
                            <div className="col-6">
                              <p>0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-primary" type="button">
                    Okay
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
          {/* //   <!-- transection all modal --> */}
        </div>
      </div >
      <ChatBot />
    </>
  );
};

export default DashboardHome;
