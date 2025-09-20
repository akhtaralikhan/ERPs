import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../Components/DeleteDataModal";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { ManageinvoiceData } from "../../assets/data";
import GlobalFilter from "../../Components/GlobalFilter";
// import AddPaymentModal from "../../../Components/AddPaymentModal";
import Dropdown from "react-bootstrap/Dropdown";

const ProductMainGroup = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // ✅ Table columns
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id", size: 400 },
      {
        Header: "Customer",
        accessor: "customer",
        Cell: ({ row }) => (
          <a
            href="/"
            className="d-flex align-items-center text-900 text-center"
          >
            <div className="avatar avatar-l">
              {row.original.customerImg ? (
                <img
                  src={row.original.customerImg}
                  alt={row.original.customer}
                  className="rounded-circle"
                // style={{ width: "30px", height: "30px", objectFit: "cover" }}
                />
              ) : (
                <div className="avatar-name rounded-circle avatar-m">
                  <span>{row.original.customer?.[0]}</span>
                </div>
              )}
            </div>
            <div>
              <h6 className="mb-0 text-center ms-3 text-900">
                {row.original.customer}
              </h6>
            </div>
          </a>
        ),
      },
      { Header: "Branch", accessor: "branch" },
      { Header: "Sub Total", accessor: "subTotal" },
      { Header: "Discount", accessor: "discount" },
      { Header: "VAT", accessor: "vat" },
      { Header: "Grand Total", accessor: "grandTotal" },
      { Header: "Paid Amount", accessor: "paidAmount" },
      { Header: "Due Amount", accessor: "dueAmount" },
      {
        Header: "Created Date",
        accessor: "createdDate",
        Cell: ({ value }) => {
          return new Date(value).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            // year:"numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          const badgeClass =
            value === "Paid" ? (
              <span class="badge badge-phoenix fs-10 badge-phoenix-success">
                <span class="badge-label">{value}</span>
                <span
                  class="ms-1"
                  data-feather="check"
                  style={{ height: "12.8px", width: "12.8px" }}
                ></span>
              </span>
            ) : value === "UnPaid" ? (
              <span class="badge badge-phoenix fs-10 badge-phoenix-danger">
                <span class="badge-label">{value}</span>
                <span
                  class="ms-1"
                  data-feather="x"
                  style={{ height: "12.8px", width: "12.8px" }}
                ></span>
              </span>
            ) : (
              <span class="badge badge-phoenix fs-10 badge-phoenix-warning">
                <span class="badge-label">{value}</span>
                <span
                  class="ms-1"
                  data-feather="alert-octagon"
                  style={{ height: "12.8px", width: "12.8px" }}
                ></span>
              </span>
            );

          return <span>{badgeClass}</span>;
        },
      },
    ],
    []
  );

  // ✅ React Table instance
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
    pageOptions,
    gotoPage, // <-- add this here
    state: { pageIndex, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: ManageinvoiceData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );


  return (
    <div className="content">
      <div className="card rounded-0">
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-3 px-4 mb-0 border-bottom gap-3 ">
          {/* Title and tabs */}
          <div className=" p-3 row" style={{ minWidth: "170px" }}>
            <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
              Purchase Return
            </h2>
            <div
              className="d-flex flex-wrap align-items-center"
              style={{ gap: "35px" }}
            >
              <span className="filterLinks text-dark">
                All <span className="NewChangeColor">(68817)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Vendor Name <span className="NewChangeColor">(6)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Return Type <span className="NewChangeColor">(17)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Approval Status <span className="NewChangeColor">(6,810)</span>
              </span>
            </div>

            {/* Search bar */}
            <div className=" d-flex flex-xl-row mt-5 flex-column ">
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
              {/* Filter dropdowns */}
              <div className="d-flex flex-md-row mb-md-4 mb-4 flex-column ms-4">
                <Dropdown className="">
                  <Dropdown.Toggle
                    variant="light"
                    className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                    style={{
                      borderRadius: "8px 0 0 8px",
                      fontWeight: 600,
                      fontSize: "14px",
                      width: "200px",
                    }}
                  >
                    Vendor Name
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Complete</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Cancelled</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="">
                  <Dropdown.Toggle
                    variant="light"
                    className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                    style={{
                      borderRadius: "0px",
                      fontWeight: 600,
                      fontSize: "14px",
                      width: "200px",
                    }}
                  >
                    Return Type
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Ready to Pickup</Dropdown.Item>
                    <Dropdown.Item>Completed</Dropdown.Item>
                    <Dropdown.Item>Partially Fulfilled</Dropdown.Item>
                    <Dropdown.Item>Cancelled</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                    style={{
                      borderRadius: "0 8px 8px 0",
                      fontWeight: 600,
                      fontSize: "14px",
                      width: "200px",
                    }}
                  >
                    More filters
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Date</Dropdown.Item>
                    <Dropdown.Item>Delivery Type</Dropdown.Item>
                    <Dropdown.Item>Exported</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="">
              <div className="btn btn-light ps-0 fw-bold">
                <i className="fa-solid fa-file-export me-2"></i>
                Export
              </div>
              {/* Add order button */}
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                <span className="fas fa-plus me-2"></span>
                Add Payment
              </button>
              {showModal && <AddPaymentModal showModal={showModal} setShowModal={setShowModal} />}
            </div>
          </div>

          {/* Export button */}
        </div>

        <div className="table-responsive p-4 px-5 pt-0">
          {/* ✅ Search */}
          {/* <PurchaseReturnModal /> */}

          <div className="table-responsive custom-scroll ">
            <table
              {...getTableProps()}
              className="table align-middle fs-9 mb-0"
              style={{ fontSize: "13px" }}
            >
              <thead className="table align-middle text-nowrap fs-9 mb-0">
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
                      <th>Actions</th>
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
                          <td className="py-2" key={cellKey || cidx}
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
          <div className="d-flex justify-content-between align-items-center py-2">
            <p className="mb-0 text-body fs-9" style={{ fontSize: "14px" }}>
              Page {pageIndex + 1} of {pageOptions.length}
              <a
                href="#!"
                className="ms-3"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "View less" : "View all"}{" "}
                <span className="fas fa-angle-right"></span>
              </a>
            </p>
            <ul className="pagination mb-0 mt-2 align-align-items-center  ">
              <li
                className={`page-item ${!canPreviousPage ? "disabled" : ""}`}
              >
                <p className="page-link" onClick={() => previousPage()}>
                  <span className="fas fa-angle-left"></span>
                </p>
              </li>
              {pageOptions.map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${pageIndex === i ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => gotoPage(i)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${!canNextPage ? "disabled" : ""}`}>
                <p className="page-link" onClick={() => nextPage()}>
                  <span className="fas fa-angle-right"></span>
                </p>
              </li>
            </ul>
          </div>
          <DeleteModal modalId="verticallyCentered" resource="invoices" />
        </div>
      </div>
    </div>
  );
};
export default ProductMainGroup;