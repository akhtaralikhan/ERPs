import React, { useState } from "react";
import "./DashboardHome.css";
import SalesChart from "../../../Components/SalesChart";
import InvoiceAnalyticsChart from "../../../Components/InvoiceAnalyticsChart";
import {Link} from 'react-router-dom';
import { invoices,dashboardData } from "../../../assets/data";
import ConnectBank from "../../../Components/ConnectBank";

function DashboardHome() {
  const [isChange, setIsChange] = useState("month");
  
  return (
    <div className="content">
      <div className="mb-5">
        <h2 className="fw-bolder">Dashboard</h2>
      </div>
      <ConnectBank/>
      <div className="row align-items-center g-4">
        <div className="col-12 col-xxl-12">
          <div className="row g-3">
            {dashboardData.map((data, idx) => (
              <div className="col-12 col-md-6" key={idx}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mb-1">
                          {data.title}
                          <span className="rounded-pill badge-phoenix badge-phoenix-warning fs--1 ms-2">
                            {data.change}
                          </span>
                        </h5>
                        <h6 className="text-700">{data.subtitle}</h6>
                      </div>
                      <h4>${data.value}.00</h4>
                    </div>
                    <div className="mt-2">
                      <div className="d-flex  align-items-center">
                        <h6 className="fw-semi-bold flex-1 text-900 mb-0">
                          since last month
                        </h6>
                        <h6 className="fw-semi-bold text-900 flex-1 mb-0 text-end">
                          ${data.value}.00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="bg-200 mb-6 mt-4" />

      <div className="profit-loss row flex-between-center g-3 mb-4">
        <div className="col-auto">
          <h3>Profit & Loss</h3>
          <p className="text-700 lh-sm mb-0">
            Payment received across all channels
          </p>
        </div>
        <div className="col-8 col-sm-4">
          <select
            className="form-select form-select-sm mt-2"
            onChange={(e) => setIsChange(e.target.value)}
            value={isChange}
          >
            <option value="week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </select>
        </div>
      </div>
      <div className="echart" style={{ minHeight: "320px", width: "100%" }}>
        <SalesChart />
      </div>

      <div className="mx-n4 my-5 px-4 mx-lg-n6 px-lg-6 bg-white pt-7  border-y border-300">
        <div>
          <div className="row align-items-end justify-content-between pb-5 g-3">
            <div className="col-auto">
              <h3>Recent invoices</h3>
              </div>
              <div className="col-12 col-md-auto">
                <div className="row g-2 gy-3">
                  <div className="col-auto flex-1">
                    <div className="search-box">
                      <form action="" className="position-relative">
                        <input type="text" className="form-control search-input search form-control-sm"/>
                        <span className="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link 
                    to="/Invoice"
                    className="btn btn-primary"
                    type="button"
                    >
                      View All</Link>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Invoice No.</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
              </thead>
              <tbody>
                {invoices.map((invoice,index)=>(
                  <tr key={index}>
                    <td className="align-middle white-space-nowrap">
                      <a href="/" className="d-flex align-items-center text-900">
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>{invoice?.customerName?.[0]}</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">{invoice.customerName}</h6>
                          <small className="mb-0 ms-3 text-900">{invoice.email}</small>
                        </div>
                      </a>
                    </td>
                    <td className="align-middle white-space-nowrap">{invoice.invoiceNo}</td>
                    <td className="align-middle white-space-nowrap">{invoice.amount}</td>
                    <td className="align-middle white-space-nowrap ">{invoice.dueAmount}</td>
                    <td className="align-middle white-space-nowrap"><span className={`badge ${invoice?.status?.toLowerCase() === "paid"
                      ? "bg-success"
                      : "bg-secondary"
                    }`}>{invoice.paymentStatus}</span>
                    </td>
                    <td className="align-middle white-space-nowrap p-4"><i className="fa fa-eye"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
            <div className="row align-items-center py-1">
              <div className="pagination d-none"></div>
              <div className="col d-flex fs--1">
                <p
                  className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900"
                  data-list-info="data-list-info"
                ></p>
                <Link className="fw-semi-bold" to="/Estimates" data-list-view="*">
                  View all
                  <span
                    className="fas fa-angle-right ms-1"
                    data-fa-transform="down-1"
                  ></span>
                </Link>
                <a
                  className="fw-semi-bold d-none"
                  href="#!"
                  data-list-view="less"
                >
                  View Less
                </a>
              </div>
              <div className="col-auto d-flex">
                <button
                  className="btn btn-link px-1 me-1"
                  type="button"
                  title="Previous"
                  data-list-pagination="prev"
                >
                  <span className="fas fa-chevron-left me-2"></span>Previous
                </button>
                <button
                  className="btn btn-link px-1 ms-1"
                  type="button"
                  title="Next"
                  data-list-pagination="next"
                >
                  Next<span className="fas fa-chevron-right ms-2"></span>
                </button>
              </div>
            </div>
      </div>

      <div className="col-12">
        <div className="card shadow-none border border-300 ">
          <div className="card-header p-4 border-bottom border-300 bg-soft">
            <div className="row g-3 justify-content-between align-center">
              <div className="col-12 col-md">
                <h4 className="text-900 mb-0">
                  Report dataset
                </h4>
              </div>
            </div>
          </div>
          <div>
            <InvoiceAnalyticsChart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
