import React, { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import DeleteModal from "../../../Components/DeleteModal";
import {
  useTable,
  usePagination,
  useSortBy,
} from "react-table";
import { DepartmentData } from "../../../assets/data";
import AddDepartmentModal from "../../../Components/Modals/AddDepartmentModal";



const Department = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const tabs = [
    { label: "All", count: 68 },
    { label: "Pending payment", count: 3 },
    { label: "Unfulfilled", count: 7 },
    { label: "Completed", count: 60 },
    { label: "Refunded", count: 5 },
    { label: "Failed", count: 2 },
  ];
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "Id" },
      { Header: "Name", accessor: "Name" },
      { Header: "Description", accessor: "Description" },
      { Header: "Created Date", accessor: "CreatedDate" },

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
    state: { pageIndex, },
    pageOptions,

  } = useTable(
    {
      columns,
      data: DepartmentData,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useSortBy,
    usePagination
  );
  return (
    <div className="content">
      <div className="mb-9">
        <h2 className="mb-4">Department List </h2>
        <div className="mb-2 nav nav-links mx-n2 nav">
          {tabs.map((tab) => (
            <div className="nav-item" key={tab.label}>
              <button
                type="button"
                className={`px-2 py-1 nav-link ${activeTab === tab.label ? "active" : ""
                  }`}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.label}{" "}
                <span className="text-body-tertiary fw-semibold">
                  ({tab.count})
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="order-table">
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-auto">
                <div className="search-box">
                  <div className="position-relative">
                    <form className="position-relative">
                      <input
                        className="form-control search-input search form-control-sm py-2 "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <span className="fas fa-search search-box-icon"></span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1 ">
                <div className="btn-group position-static text-nowrap">
                  <div className="btn-group position-static dropdown">
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      data-bs-toggle="dropdown"
                    >
                      Payment status
                      <span className="fas fa-angle-down ms-2"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group position-static dropdown">
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      data-bs-toggle="dropdown"
                    >
                      Fulfilment status
                      <span className="fas fa-angle-down ms-2"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="px-7 flex-shrink-0 btn btn-phoenix-secondary">
                    More filters
                  </button>
                </div>
              </div>
              <div className="col-auto">
                <button className="btn btn-link text-body me-4 px-0">
                  <span className="fas fa-file-export fs-9 me-2"></span>
                  Export
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(true)}
                >
                  <span className="fas fa-plus me-2"></span>
                  Add Item
                </button>
                {showModal && (
                  <AddDepartmentModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table
                {...getTableProps()}
                className="table table-hover align-middle mb-0"
                style={{ fontSize: "14px" }}
              >
                <thead className="bg-white">
                  {headerGroups.map((headerGroup) => {
                    const { key: headerKey, ...headerGroupProps } =
                      headerGroup.getHeaderGroupProps();
                    return (
                      <tr key={headerKey} {...headerGroupProps}>
                        {headerGroup.headers.map((column) => {
                          const { key: columnKey, ...columnProps } =
                            column.getHeaderProps(column.getSortByToggleProps());
                          return (
                            <th
                              key={columnKey}
                              {...columnProps}
                              className="fw-semibold text-uppercase small border-bottom"
                              style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                            >
                              <div className="d-flex align-items-center gap-1">
                                <span>{column.render("Header")}</span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <i className="fas fa-sort-down"></i>
                                  ) : (
                                    <i className="fas fa-sort-up"></i>
                                  )
                                ) : (
                                  <i className="fas fa-sort text-muted"></i>
                                )}
                              </div>
                            </th>
                          );
                        })}
                        <th className="fw-semibold text-uppercase small border-bottom">
                          Actions
                        </th>
                      </tr>
                    );
                  })}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    const { key: rowKey, ...rowProps } = row.getRowProps();
                    return (
                      <tr key={rowKey} {...rowProps}>
                        {row.cells.map((cell) => {
                          const { key: cellKey, ...cellProps } = cell.getCellProps();
                          return (
                            <td key={cellKey} {...cellProps}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                        <td className="pe-3">
                          <div className="dropdown">
                            <button
                              className="btn btn-sm btn-light"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              <i className="fa fa-ellipsis-h"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link className="dropdown-item" to="#!">
                                Edit
                              </Link>
                              <div className="dropdown-divider"></div>
                              <Link
                                className="dropdown-item text-danger"
                                to="#!"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
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
          </div>
        </div>
        <DeleteModal modalId="deleteModal" resource="orders" />
        <div className="d-flex justify-content-between mt-3">
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <div>
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
      </div>
    </div>
  );
};
export default Department;
