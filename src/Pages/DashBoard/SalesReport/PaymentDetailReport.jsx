import React, { useState, useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import Dropdown from "react-bootstrap/Dropdown";
import GlobalFilter from "../../../Components/GlobalFilter";
import { PaymentDetailReportData } from "../../../assets/data";

const PaymentDetailReport = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Table columns (only display)
  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "Id", size: 400 },
      { Header: "Payment Id", accessor: "PaymentId" },
      { Header: "Item Id", accessor: "ItemId" },
      { Header: "Item Name", accessor: "ItemName" },
      { Header: "Quantity", accessor: "Quantity" },
      { Header: "Unit Price", accessor: "UnitPrice" },
      { Header: "Total Amount", accessor: "TotalAmount" },
      {
        Header: "Date",
        accessor: "Date",
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
    gotoPage,
    state: { pageIndex, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: PaymentDetailReportData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="content AssetsPageChangecss AssetPaddingChange">
      <div className="marginforsmalldevice RemoveBorder card rounded-0">
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-md-3 px-md-4 mb-md-0 border-bottom gap-3">
          <div className="p-3 row" style={{ minWidth: "170px" }}>
            <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
              Payment Detail Report
            </h2>
            <div
              className="d-flex flex-wrap align-items-center"
              style={{ gap: "35px" }}
            >
              <span className="filterLinks text-dark">
                All <span className="NewChangeColor">(68817)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Executive Desk <span className="NewChangeColor">(6)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Laser Printer <span className="NewChangeColor">(17)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Laptop Stand <span className="NewChangeColor">(6,810)</span>
              </span>
            </div>

            {/* Search + Filters */}
            <div className="d-flex flex-xl-row flex-column">
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
              <div className="d-flex flex-md-row mb-md-4 mb-4 flex-column mt-4">
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
                    Vendor Name
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Complete</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Cancelled</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                    style={{
                      borderRadius: "0 0px 0px 0",
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
            </div>
          </div>
        </div>

        {/* ✅ Table */}
        <div className="table-responsive p-4 px-5 pt-0">
          <div className="table-responsive custom-scroll">
            <table
              {...getTableProps()}
              className="table  table-sm fs--1 mb-0 ConvertUpperCase"
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ✅ Pagination */}
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

            <ul className="pagination mb-0 mt-2">
              <li className={`page-item ${!canPreviousPage ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => previousPage()}>
                  <span className="fas fa-chevron-left"></span>
                </button>
              </li>

              {(() => {
                const pageNumbers = [];
                const totalPages = pageOptions.length;
                const currentPage = pageIndex + 1;

                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, currentPage + 1);

                if (currentPage === 1) {
                  endPage = Math.min(3, totalPages);
                } else if (currentPage === totalPages) {
                  startPage = Math.max(totalPages - 2, 1);
                }

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

              <li className={`page-item ${!canNextPage ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => nextPage()}>
                  <span className="fas fa-chevron-right"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailReport;
