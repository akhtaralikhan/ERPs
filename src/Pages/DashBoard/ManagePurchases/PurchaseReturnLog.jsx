import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../../Components/DeleteModal";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { salesReturnData } from "../../../assets/data";
import GlobalFilter from "../../../Components/GlobalFilter";
import AddCustomerModal from "../../../Components/Modals/AddCustomerModal";
import { Dropdown } from "react-bootstrap";

const PurchaseReturnLog = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

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
      { Header: "Ref Id", accessor: "refId" },
      { Header: "Invoice No", accessor: "invoiceNo" },
      { Header: "Note", accessor: "note" },
      // { Header: "Sub Total", accessor: "subTotal" },
      // { Header: "Created Date", accessor: "createdDate" },
      // { Header: "Paid Amount", accessor: "paidAmount" },
      // { Header: "Due Amount", accessor: "dueAmount" },
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
      // {
      //   Header: "Status",
      //   accessor: "status",
      //   Cell: ({ value }) => {
      //     const badgeClass =
      //       value === "Paid" ? (
      //         <span class="badge badge-phoenix fs-10 badge-phoenix-success">
      //           <span class="badge-label">{value}</span>
      //           <span
      //             class="ms-1"
      //             data-feather="check"
      //             style={{ height: "12.8px", width: "12.8px" }}
      //           ></span>
      //         </span>
      //       ) : value === "UnPaid" ? (
      //         <span class="badge badge-phoenix fs-10 badge-phoenix-danger">
      //           <span class="badge-label">{value}</span>
      //           <span
      //             class="ms-1"
      //             data-feather="x"
      //             style={{ height: "12.8px", width: "12.8px" }}
      //           ></span>
      //         </span>
      //       ) : (
      //         <span class="badge badge-phoenix fs-10 badge-phoenix-warning">
      //           <span class="badge-label">{value}</span>
      //           <span
      //             class="ms-1"
      //             data-feather="alert-octagon"
      //             style={{ height: "12.8px", width: "12.8px" }}
      //           ></span>
      //         </span>
      //       );

      //     return <span>{badgeClass}</span>;
      //   },
      // },
    ],
    []
  );

  // ✅ React Table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    gotoPage,
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
      data: salesReturnData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter, // ✅ Search
    useSortBy, // ✅ Sorting
    usePagination // ✅ Pagination
  );

  return (
    <div className="content AssetsPageChangecss AssetPaddingChange">
      <div className="marginforsmalldevice RemoveBorder card rounded-0">
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-md-3 px-md-4 mb-md-0 border-bottom gap-3">
          {/* Title and tabs */}
          <div
            className="p-3 row MainRemovePaddingwidth"
            style={{ minWidth: "170px" }}
          >
            <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
              Purchase Return Log
            </h2>
            <div className="AllabsAssets">
              <span className="filterLinks text-dark">
                All <span className="NewChangeColor">(68817)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Suppleir Name <span className="NewChangeColor">(6)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Invoice Number <span className="NewChangeColor">(17)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Approval Status <span className="NewChangeColor">(6,810)</span>
              </span>
            </div>

            {/* Search bar */}
            <div className="d-flex flex-xl-row flex-column">
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
              {/* Filter dropdowns */}
              <div className="d-flex flex-md-row mb-md-4 mb-4 mt-4 DropDownForMobileDevice">
                <Dropdown>
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
                    Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    renderOnMount
                    popperConfig={{ strategy: "fixed" }} // important
                  >
                    <Dropdown.Item>Active</Dropdown.Item>
                    <Dropdown.Item>InActive</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                    style={{
                      borderRadius: "0",
                      fontWeight: 600,
                      fontSize: "14px",
                      width: "200px",
                    }}
                  >
                    ModifiedByUser
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    renderOnMount
                    popperConfig={{ strategy: "fixed" }} // important
                  >
                    <Dropdown.Item>Super Admin</Dropdown.Item>
                    <Dropdown.Item>Admin</Dropdown.Item>
                    <Dropdown.Item>Users</Dropdown.Item>
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
                  <Dropdown.Menu
                    renderOnMount
                    popperConfig={{ strategy: "fixed" }} // important
                  >
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
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                <span className="fas fa-plus me-2"></span>
                Add Customer
              </button>
              {showModal && (
                <AddCustomerModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              )}
            </div>
          </div>

          {/* Export button */}
        </div>

        <div className="table-responsive p-4 px-5 pt-0 NewTableChange">
          {/* ✅ Search */}
          {/* <PurchaseReturnModal /> */}

          <div
            className="table-responsive custom-scroll "
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >
            <table
              {...getTableProps()}
              className="table  table-sm fs--1 mb-0 ConvertUpperCase
          "
              // table align-middle fs-9 mb-0
              style={{ fontSize: "13px" }}
            >
              <thead className="table align-middle text-nowrap fs-9 mb-0 text-uppercase">
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
                            className="border-top-0 pe-3 ps-1"
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
                          <td
                            key={cellKey || cidx}
                            {...cellRest}
                            className="py-2 pe-3"
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
                              // data-bs-toggle="modal"
                              // data-bs-target="#edit-modal"
                              onClick={() => setShowModal(true)}
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
          {/* ✅ Ellipsis-based Pagination (compact version) */}
          <div className="d-flex justify-content-between align-items-center py-2 PAGINATIONS">
            <p
              className="mb-0 text-body fs-9 d-md-block d-none"
              style={{ fontSize: "14px" }}
            >
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

            <ul className="pagination mb-0 mt-2">
              {/* Prev Button */}
              <li className={`page-item ${!canPreviousPage ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => previousPage()}>
                  <span className="fas fa-chevron-left"></span>
                </button>
              </li>

              {(() => {
                const pageNumbers = [];
                const totalPages = pageOptions.length;
                const currentPage = pageIndex + 1; // react-table is 0-based

                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, currentPage + 1);

                // Adjust if near start or end
                if (currentPage === 1) {
                  endPage = Math.min(3, totalPages);
                } else if (currentPage === totalPages) {
                  startPage = Math.max(totalPages - 2, 1);
                }

                // Always show first page
                if (startPage > 1) {
                  pageNumbers.push(
                    <li
                      key={1}
                      className={`page-item ${
                        currentPage === 1 ? "active" : ""
                      }`}
                    >
                      <button className="page-link" onClick={() => gotoPage(0)}>
                        1
                      </button>
                    </li>
                  );
                  if (startPage > 2) {
                    pageNumbers.push(
                      <li key="start-ellipsis" className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    );
                  }
                }

                // Main visible range (only 3 numbers max)
                for (let i = startPage; i <= endPage; i++) {
                  pageNumbers.push(
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => gotoPage(i - 1)}
                      >
                        {i}
                      </button>
                    </li>
                  );
                }

                // Always show last page
                if (endPage < totalPages) {
                  if (endPage < totalPages - 1) {
                    pageNumbers.push(
                      <li key="end-ellipsis" className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    );
                  }
                  pageNumbers.push(
                    <li
                      key={totalPages}
                      className={`page-item ${
                        currentPage === totalPages ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => gotoPage(totalPages - 1)}
                      >
                        {totalPages}
                      </button>
                    </li>
                  );
                }

                return pageNumbers;
              })()}

              {/* Next Button */}
              <li className={`page-item ${!canNextPage ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => nextPage()}>
                  <span className="fas fa-chevron-right"></span>
                </button>
              </li>
            </ul>
          </div>
          <DeleteModal modalId="verticallyCentered" resource="invoices" />
        </div>
      </div>
    </div>
  );
};

export default PurchaseReturnLog;
