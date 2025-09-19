// import React,{useEffect, useState} from 'react';
// import { ManageinvoiceData } from '../../assets/data';
// // import './ManageSales.css';
// import List from "list.js";
// import AddPaymentModal from '../../Components/AddPaymentModal';

// const ManualInvoices = () => {

//   const [showModal,setShowModal] = useState(false);
//     useEffect(() => {
//   const options = {
//     valueNames: [
//       "name", "id", "branch", "subTotal", "discount", 
//       "vat", "grandTotal", "paidAmount", "dueAmount", 
//       "createdDate", "status"
//     ],
//     page: 3,
//     pagination: [{
//       paginationClass: "pagination"  // matches <ul class="pagination">
//     }]  
//   };
//     new List("invoice-table", options);
//   }, []);

//   return (
//     <div className='content'>
//       <div className="mb-5">
//         <h2 className='fw-bolder'>Manual Invoice</h2>
//       </div>

//       <div className="card  ">
//         <div className="upper-card d-flex  border-bottom p-4 col-12">
//           <div className="col-6"><h4 className='fw-bold col-6 pt-2'>Invoices</h4></div>
//           <div className="col-6 text-end "><button className='btn btn-primary ' onClick={()=>setShowModal(true)}>+ Add Payment</button>
//           {showModal && <AddPaymentModal showModal={showModal} setShowModal={setShowModal}/>}
//           </div>
//         </div>

//       <div className="search-bars  d-flex justify-content-between  p-4 pb-0 mb-2 ">
//         <div className="start-end-data col-4 d-flex gap-3 ">
//             <div className="start col-6">
//                 <label htmlFor="startDate" className='form-label ' style={{fontSize:"12px"}} >Start Date :</label>
//                 <input type="date" className='form-control' id='startDate' placeholder="dd/mm/yyyy"/>
//             </div>
//             <div className="end col-6">
//                 <label htmlFor="endDate" className='form-label' style={{fontSize:"12px"}}>End Date : </label>
//                 <input type="date" className='form-control' id='endDate' placeholder="dd/mm/yyyy"/>
//             </div>
//         </div>
//         <div className="search-box mb-3 position-lg-relative ">
//         <form className="position-relative">
//             <input className="form-control search-input search form-control-sm mt-4 pt-2 pb-2" type="search" placeholder="Search" aria-label="Search" />
//            <span className="fas fa-search search-box-icon"></span>
//         </form>
//        </div>
//       </div>


//     <div className="div table-responsive p-4 pt-0" id='invoice-table'>
//       <table className='table table-hover  table-sm fs-9 mb-0' style={{fontSize:"13px"}}>
//         <thead>
//           <tr className='bg-light fs-9 cursor-pointer'>
//             <th className='border-top sort position-relative' data-sort="id">Id</th>
//             <th className='border-top sort position-relative' data-sort="name">Customer</th>
//             <th className='border-top sort position-relative' data-sort="branch">Branch</th>
//             <th className='border-top sort position-relative' data-sort="subTotal">Sub Total</th>
//             <th className='border-top sort position-relative' data-sort="discount">Discount</th>
//             <th className='border-top sort position-relative' data-sort="vat">VAT</th>
//             <th className='border-top sort position-relative' data-sort="grandTotal">Grand Total</th>
//             <th className='border-top sort position-relative' data-sort="paidAmount">Paid Amount</th>
//             <th className='border-top sort position-relative' data-sort="dueAmount">Due Amount</th>
//             <th className='border-top sort position-relative' data-sort="createdDate">Created Date</th>
//             <th className='border-top' data-sort="status">Status</th>
//             <th className='border-top' >Actions</th>
//           </tr>
//         </thead>
//         <tbody className='list'>
//           {ManageinvoiceData.map((invoiceData,index)=>(
//            <tr key={index}>
//              <td className="id">{invoiceData.id}</td>
//              <td className='name'>{invoiceData.customer}</td>
//              <td className="branch">{invoiceData.branch}</td>
//              <td className="subTotal">{invoiceData.subTotal}</td>
//              <td className="discount">{invoiceData.discount}</td>
//              <td className="vat">{invoiceData.vat}</td>
//              <td className="grandTotal">{invoiceData.grandTotal}</td>
//              <td className="paidAmount">{invoiceData.paidAmount}</td>
//              <td className="dueAmount">{invoiceData.dueAmount}</td>
//              <td className="createdDate">{invoiceData.createdDate}</td>
//              <td><span className='badge badge-phoenix badge-phoenix-primary'>{invoiceData.status}</span></td>
//              <td className='cursor-pointer ps-4'>...</td>
//            </tr>
//           ))}
//         </tbody>
//       </table>
//          <div class="d-flex flex-between-center pt-3">
//           <div class="pagination listjs-pagination d-none"></div>
//           <p class="mb-0 fs-9">
//             <span class="d-none d-sm-inline-block" data-list-info="data-list-info"></span>
//             <span class="d-none d-sm-inline-block"> &mdash; </span>
//             <a class="fw-semibold " style={{fontSize:"14px"}} href="#!" data-list-view="*">
//               View all
//               <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
//             </a><a class="fw-semibold d-none" href="#!" data-list-view="less">
//               View Less
//               <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
//             </a>
//           </p>
//           <div class="d-flex">
//             <button class="btn btn-sm btn-primary" type="button" data-list-pagination="prev"><span>Previous</span></button>
//             <button class="btn btn-sm btn-primary px-4 ms-2" type="button" data-list-pagination="next"><span>Next</span></button>
//           </div>
//           </div>
//       </div>
//   </div>
//       <hr className='mt-5 mb-5'/>

//     <div className=" col-12 d-flex  justify-content-between gap-4">
//         <div className="table-responsive col-6">
//           <h4 className='mb-2'>Cash flow before refunds</h4>
//       <table className="table  table-hover fs-9" border="1" style={{fontSize:'12px'}}>
//         <tbody>
//           <tr>
//               <th style={{width:"40%",background:"#67C090"}} className='border-end flash-effect text-white flash-effect' >Due Amount</th>
//               <td><label id="ReportDueAmount">5557.84</label></td>
//           </tr>
//           <tr>
//               <th className='border-end  text-white flash-effect flash-effect' style={{background:"#67C090"}}>Paid Amount</th>
//               <td><label id="ReportPaidAmount">0.00</label></td>
//           </tr>
//           <tr>
//               <th className='border-end  text-white flash-effect' style={{background:"#67C090"}}>Changed Amount</th>
//               <td><label id="ReportChangedAmount">0.00</label></td>
//           </tr>
//           <tr>
//               <th className='border-end  text-white flash-effect' style={{background:"#67C090"}}>Grand Total</th>
//               <td><label id="ReportGrandTotalCashflow">5557.84</label></td>
//           </tr>
//           </tbody>
//       </table>
//       </div>
//       <div className="table-responsive col-6">
//         <h4 className='mb-2'>Total takings this Period</h4>
//       <table className="table  table-hover " border="1" style={{fontSize:"12px"}}>
//         <tbody>
//           <tr>
//               <th style={{width:"40%"}} className='border-end bg-info text-white flash-effect'>Sub Total</th>
//               <td><label id="ReportDueAmount">5557.84</label></td>
//           </tr>
//           <tr>
//               <th className='border-end bg-info text-white flash-effect'>Discount Amount</th>
//               <td><label id="ReportPaidAmount">0.00</label></td>
//           </tr>
//           <tr>
//               <th className='border-end bg-info text-white flash-effect'>Vat Amount</th>
//               <td><label id="ReportChangedAmount">0.00</label></td>
//           </tr>
//           <tr>
//               <th className='border-end bg-info text-white flash-effect'>Grand Total</th>
//               <td><label id="ReportGrandTotalCashflow">5557.84</label></td>
//           </tr>
//           </tbody>
//       </table>
//       </div>
//       </div>
//    </div>

//   )
// }

// export default ManualInvoices;


import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import DeleteModal from '../../Components/DeleteModal';
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { ManageinvoiceData } from '../../assets/data';
// import "./ManageSales.css";
import GlobalFilter from "../../Components/GlobalFilter";
import AddPaymentModal from "../../Components/AddPaymentModal";

const ManualInvoices = () => {
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
      data: ManageinvoiceData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter, // ✅ Search
    useSortBy, // ✅ Sorting
    usePagination // ✅ Pagination
  );

  const displayedRows = showAll ? rows : page;

  return (
    <div className="content">
      <div className="mb-5">
        <h2 className="fw-bolder">Invoices</h2>
      </div>
      <ul className="nav nav-links mb-3 mb-lg-2 mx-n3 ">
        <li className="nav-item">
          <a href="" className="nav-link active">
            <span>All</span>
            <span className="text-body-tertiary fw-semibold">(6817)</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link ">
            <span>Pending payment </span>
            <span className="text-body-tertiary fw-semibold">(6)</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link ">
            <span>Unfulfilled </span>
            <span className="text-body-tertiary fw-semibold">(17)</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link ">
            <span>Completed </span>
            <span className="text-body-tertiary fw-semibold">(6810)</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link ">
            <span>Refunded</span>
            <span className="text-body-tertiary fw-semibold">(8)</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link ">
            <span>Failed</span>
            <span className="text-body-tertiary fw-semibold">(2)</span>
          </a>
        </li>
      </ul>
      <div className="order-table">
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-auto">
              {/* <div className="search-box">
                <div className="position-relative">
                  <form className="position-relative">
                    <input
                      className="form-control search-input search form-control-sm py-2  "
                      type="search"
                      placeholder="Search Orders"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon"></span>
                  </form>
                </div>
              </div> */}
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
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
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
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
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
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
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                <span className="fas fa-plus me-2"></span>
                Add Payment
              </button>
              {showModal && <AddPaymentModal showModal={showModal} setShowModal={setShowModal} />}
            </div>
          </div>
        </div>
        <div
          className="mx-n4 px04 mx-lg-n6 px-lg-6 bg-body-emp border-top border-bottom border-translucent position-relative top-1"
          style={{ background: "rgba(255,255,255,1)" }}
        >
          <div className="table-responsive">
            {/* ✅ Search */}

            <table
              {...getTableProps()}
              className="table table-hover table-sm fs-9 mb-0"
              style={{ fontSize: "13px" }}
            >
              <thead>
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
                            style={{ cursor: "pointer" }}
                            className=""
                          >
                            <span className="d-flex align-items-center">
                              {column.render("Header")}
                              <span
                                className="ms-2 "
                                style={{ marginTop: "-1px" }}
                              >
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <i
                                      className="fas fa-sort-down "
                                      style={{ fontSize: "9px" }}
                                    ></i>
                                  ) : (
                                    <i
                                      className="fas fa-sort-up "
                                      style={{ fontSize: "9px" }}
                                    ></i>
                                  )
                                ) : (
                                  <i
                                    className="fas fa-sort text-muted"
                                    style={{ fontSize: "9px" }}
                                  ></i>
                                )}
                              </span>
                            </span>
                          </th>
                        );
                      })}
                      <th className="">Actions</th>
                    </tr>
                  );
                })}
              </thead>

              <tbody {...getTableBodyProps()}>
                {displayedRows.map((row) => {
                  prepareRow(row);
                  const { key: rowKey, ...rowProps } = row.getRowProps();
                  return (
                    <tr key={rowKey} {...rowProps}>
                      {row.cells.map((cell) => {
                        const { key: cellKey, ...cellProps } =
                          cell.getCellProps();
                        return (
                          <td
                            key={cellKey}
                            {...cellProps}
                            className={`py-3 align-middle ${cell.column.id === "id"
                                ? "text-primary id-hover"
                                : ""
                              }`}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}

                      <td className="align-middle white-space-nowrap pe-0">
                        <div className="font-sans-serif btn-reveal-trigger position-static">
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
              <DeleteModal modalId="verticallyCentered" resource="invoices" />
            </table>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualInvoices;
