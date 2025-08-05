import React, { useEffect } from "react";
import { userData } from "../../constant/Config";
import SalesChart from "../../Components/SalesChart";
import { getSettingTypeLicenseAction, getSubscriptionsTenant3Action } from "../../redux/console/actions";
import { useRedux } from "../../hooks/useRedux";
import { getBankAccount, getMonthActivity, getMonthTransactions, getRevenueTotal, getSettingTypesGeneral, getSettingTypesLicense, getSettingTypesPayment, getSummary, getWeekActivity, getWeekTransactions, getYearActivity, getYearTransactions, socialLoginAction } from "../../redux/dashboard/actions";

const DashboardHome = () => {

  const { dispatch, useAppSelector } = useRedux();

  useEffect(() => {
    // dispatch(getSubscriptionsTenant3Action());
    // dispatch(getSummary())
    // dispatch(getBankAccount())
    // dispatch(socialLoginAction())
    // dispatch(getSettingTypesGeneral())
    // dispatch(getSettingTypesPayment())
    // dispatch(getRevenueTotal())
    // dispatch(getMonthTransactions())
    // dispatch(getYearTransactions())
    // dispatch(getWeekTransactions())
    // dispatch(getMonthActivity())
    // dispatch(getYearActivity())
    // dispatch(getWeekActivity())
    // dispatch(getSettingTypesLicense())

  }, []);

  return (
    <>
      <div className="content">
        <div className="pb-5">
          <div className="row g-4">
            <div className="col-12 col-xxl-12">
              <div className="mb-5">
                <h2 className="mb-2">Dashboard</h2>
              </div>
              <div className="mb-3">
                <div className="card">
                  <div className="row align-items-center p-3">
                    <div className="col-lg-8">
                      <p className="m-0">
                        Connect your Stripe account to receive online payments
                        from your customers.
                      </p>
                      <p className="m-0">
                        Connect your PayPal account to receive online payments
                        from your customers.
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <a href="connect-bank.html">
                        <button
                          className="btn btn-primary me-1 mb-1 text-uppercase w-100"
                          type="button"
                        >
                          Connect your bank account
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center g-4">
                <div className="col-12 col-xxl-12">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-1">
                                Total balance
                                <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs--1 ms-2">
                                  <span className="badge-label">-6.8%</span>
                                </span>
                              </h5>
                              <h6 className="text-700">Last 7 days</h6>
                            </div>
                            <h4>$4.00M</h4>
                          </div>
                          {/* <!-- <div className="d-flex justify-content-center px-4 py-6">
                          <div className="echart-total-orders" style="height:85px;width:115px"></div>
                        </div> --> */}
                          <div className="mt-2">
                            <div className="d-flex align-items-center">
                              <h6 className="text-900 fw-semi-bold flex-1 mb-0">
                                Pending payment
                              </h6>
                              <h6 className="text-900 fw-semi-bold mb-0">
                                $4.00M
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-1">
                                Total invoice
                                <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs--1 ms-2">
                                  <span className="badge-label">+26.5%</span>
                                </span>
                              </h5>
                              <h6 className="text-700">1 This month</h6>
                            </div>
                            <h4>14</h4>
                          </div>
                          {/* <!-- <div className="pb-0 pt-4">
                          <div className="echarts-new-customers" style="height:180px;width:100%;"></div>
                        </div> --> */}
                          <div className="mt-2">
                            <div className="d-flex align-items-center">
                              <h6 className="text-900 fw-semi-bold flex-1 mb-0">
                                since last month
                              </h6>
                              <h6 className="text-900 fw-semi-bold mb-0">0%</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-1">
                                Total customer
                                <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs--1 ms-2">
                                  <span className="badge-label">+26.5%</span>
                                </span>
                              </h5>
                              <h6 className="text-700">0 This month</h6>
                            </div>
                            <h4>2</h4>
                          </div>
                          {/* <!-- <div className="pb-0 pt-4">
                          <div className="echarts-new-customers" style="height:180px;width:100%;"></div>
                        </div> --> */}
                          <div className="mt-2">
                            <div className="d-flex align-items-center">
                              <h6 className="text-900 fw-semi-bold flex-1 mb-0">
                                since last month
                              </h6>
                              <h6 className="text-900 fw-semi-bold mb-0">0%</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-1">
                                Total estimate
                                <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs--1 ms-2">
                                  <span className="badge-label">+26.5%</span>
                                </span>
                              </h5>
                              <h6 className="text-700">0 This month</h6>
                            </div>
                            <h4>7</h4>
                          </div>
                          {/* <!-- <div className="pb-0 pt-4">
                          <div className="echarts-new-customers" style="height:180px;width:100%;"></div>
                        </div> --> */}
                          <div className="mt-2">
                            <div className="d-flex align-items-center">
                              {/* <!-- <div className="bullet-item bg-primary-100 me-2"></div> --> */}
                              <h6 className="text-900 fw-semi-bold flex-1 mb-0">
                                since last month
                              </h6>
                              <h6 className="text-900 fw-semi-bold mb-0">0%</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-200 mb-6 mt-4" />
              <div className="row flex-between-center mb-4 g-3">
                <div className="col-auto">
                  <h3>Profit & Loss</h3>
                  <p className="text-700 lh-sm mb-0">
                    Payment received across all channels
                  </p>
                </div>
                <div className="col-8 col-sm-4">
                  <select
                    className="form-select form-select-sm mt-2"
                    id="select-gross-revenue-month"
                  >
                    <option>Mar 1 - 31, 2022</option>
                    <option>April 1 - 30, 2022</option>
                    <option>May 1 - 31, 2022</option>
                  </select>
                </div>
              </div>
              <div
                className="echart-total-sales-chart"
                style={{ minHeight: "320px", width: "100%" }}
              >
                <SalesChart />
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 col-sm-12">
                  <p className="text-primary m-0">Total income </p>
                  <span className="text-primary">$2911.47</span>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <p className="text-primary m-0">Total expense</p>
                  <span className="text-primary">$719.74</span>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <p className="text-primary m-0">Total profit </p>
                  <span className="text-primary">$2191.73</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 border-y border-300">
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
                          className="form-control search-input search form-control-sm"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a
                      href="transactions.html"
                      className="btn btn-primary"
                      type="button"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive mx-n1 px-1 scrollbar">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aug 6, 2023, 22:55</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-primary">Income</span>
                    </td>
                    <td className="text-primary">$0</td>
                  </tr>
                  <tr>
                    <td>Aug 6, 2023, 22:55</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-warning">Expense</span>
                    </td>
                    <td className="text-primary">$0</td>
                  </tr>
                  <tr>
                    <td>Aug 6, 2023, 22:55</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-info">ManualJournal</span>
                    </td>
                    <td className="text-primary">$0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row align-items-center py-1">
              <div className="pagination d-none"></div>
              <div className="col d-flex fs--1">
                <p
                  className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900"
                  data-list-info="data-list-info"
                ></p>
                <a className="fw-semi-bold" href="#!" data-list-view="*">
                  View all
                  <span
                    className="fas fa-angle-right ms-1"
                    data-fa-transform="down-1"
                  ></span>
                </a>
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
        </div>

        <div className="mx-n4 my-5 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 border-y border-300">
          <div data-list='{"valueNames":["product","customer","rating","review","time"],"page":6}'>
            <div className="row align-items-end justify-content-between pb-5 g-3">
              <div className="col-auto">
                <h3>Recent invoices</h3>
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
                          className="form-control search-input search form-control-sm"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a
                      href="invoice.html"
                      className="btn btn-sm btn-primary"
                      type="button"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive mx-n1 px-1 scrollbar">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920</td>
                    <td>Sep 15, 2023, 15:31</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-secondary">Draft</span>
                    </td>
                    <td>
                      <a href="#?" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920</td>
                    <td>Sep 15, 2023, 15:31</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-success">Paid</span>
                    </td>
                    <td>
                      <a href="#?" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920 </td>
                    <td>Sep 15, 2023, 15:31 </td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-secondary">Approved</span>
                    </td>
                    <td>
                      <a href="#?" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row align-items-center py-1">
              <div className="pagination d-none"></div>
              <div className="col d-flex fs--1">
                <p
                  className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900"
                  data-list-info="data-list-info"
                ></p>
                <a className="fw-semi-bold" href="#!" data-list-view="*">
                  View all
                  <span
                    className="fas fa-angle-right ms-1"
                    data-fa-transform="down-1"
                  ></span>
                </a>
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
        </div>
        <div className="col-12">
          <div
            className="card shadow-none border border-300"
            data-component-card="data-component-card"
          >
            <div className="card-header p-4 border-bottom border-300 bg-soft">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-900 mb-0" data-anchor="data-anchor">
                    Share dataset
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="share-dataset-code">
                <pre className="scrollbar" style={{ maxHeight: "420px" }}>
                  <code className="language-html">
                    {/* <!-- Find the JS file for the following chart at:
                         src/js/charts/echarts/examples/share-dataset-chart.js --> */}
                    {/* <!-- If you are not using gulp based workflow, you can
                         find the transpiled code at:
                         public/assets/js/echarts-example.js -->  */}
                    <div
                      className="echart-share-dataset-chart-example"
                      style={{ minHeight: "500px" }}
                    ></div>
                  </code>
                </pre>
              </div>

              <div className="p-4 code-to-copy">
                {/* <!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/share-dataset-chart.js-->
              <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> */}
                <div
                  className="echart-share-dataset-chart-example"
                  style={{ minHeight: "500px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-n4 my-5 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 border-y border-300">
          <div data-list='{"valueNames":["product","customer","rating","review","time"],"page":6}'>
            <div className="row align-items-end justify-content-between pb-5 g-3">
              <div className="col-auto">
                <h3>Recent estimates </h3>
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
                          className="form-control search-input search form-control-sm"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a
                      href="/Estimates"
                      className="btn btn-sm btn-primary"
                      type="button"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive mx-n1 px-1 scrollbar">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920</td>
                    <td>Sep 15, 2023, 15:31</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-secondary">Draft</span>
                    </td>
                    <td>
                      <a href="#" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920</td>
                    <td>Sep 15, 2023, 15:31</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-success">Paid</span>
                    </td>
                    <td>
                      <a href="#" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920 </td>
                    <td>Sep 15, 2023, 15:31 </td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-secondary">Approved</span>
                    </td>
                    <td>
                      <a href="#" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row align-items-center py-1">
              <div className="pagination d-none"></div>
              <div className="col d-flex fs--1">
                <p
                  className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900"
                  data-list-info="data-list-info"
                ></p>
                <a className="fw-semi-bold" href="#!" data-list-view="*">
                  View all
                  <span
                    className="fas fa-angle-right ms-1"
                    data-fa-transform="down-1"
                  ></span>
                </a>
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
        </div>
        <div className="mx-n4 my-5 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 border-y border-300">
          <div data-list='{"valueNames":["product","customer","rating","review","time"],"page":6}'>
            <div className="row align-items-end justify-content-between pb-5 g-3">
              <div className="col-auto">
                <h3>Recent bills</h3>
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
                          className="form-control search-input search form-control-sm"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a
                      href="bills.html"
                      className="btn btn-sm btn-primary"
                      type="button"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive mx-n1 px-1 scrollbar">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Vendor</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920</td>
                    <td>Sep 15, 2023, 15:31</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-secondary">Draft</span>
                    </td>
                    <td>
                      <a href="#" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920</td>
                    <td>Sep 15, 2023, 15:31</td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-success">Paid</span>
                    </td>
                    <td>
                      <a href="#" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-900"
                        href="#"
                      >
                        <div className="avatar avatar-l">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <div className="">
                          <h6 className="mb-0 ms-3 text-900">
                            Richard Dawkins
                          </h6>
                          <small className="mb-0 ms-3 text-900">
                            Johson@gmail.com
                          </small>
                        </div>
                      </a>
                    </td>
                    <td className="text-primary">$920 </td>
                    <td>Sep 15, 2023, 15:31 </td>
                    <td className="align-middle text-start status">
                      <span className="badge bg-secondary">Approved</span>
                    </td>
                    <td>
                      <a href="#" className="btn btn-md" type="button">
                        <i
                          className="fa-solid fa-eye"
                          data-bs-toggle="modal"
                          data-bs-target="#scrollingLong2"
                        ></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row align-items-center py-1">
              <div className="pagination d-none"></div>
              <div className="col d-flex fs--1">
                <p
                  className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900"
                  data-list-info="data-list-info"
                ></p>
                <a className="fw-semi-bold" href="#!" data-list-view="*">
                  View all
                  <span
                    className="fas fa-angle-right ms-1"
                    data-fa-transform="down-1"
                  ></span>
                </a>
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
        </div>
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
                    <table className="table table-striped table-sm fs--1 mb-0">
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
        <footer className="footer position-absolute">
          <div className="row g-0 justify-content-between align-items-center h-100">
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 mt-2 mt-sm-0 text-900">
                All Right Reserved
                <span className="d-none d-sm-inline-block"></span>
                <span className="d-none d-sm-inline-block mx-1">|</span>
                <br className="d-sm-none" />
                2023 &copy;
                <a className="ms-3" href="#">
                  microhind
                </a>
              </p>
            </div>
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 text-600">v1.13.0</p>
            </div>
          </div>
        </footer>
      </div>
      <div className="support-chat-container">
        <div className="container-fluid support-chat">
          <div className="card bg-white">
            <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom">
              <h5 className="mb-0 d-flex align-items-center gap-2">
                Demo widget
                <span className="fa-solid fa-circle text-success fs--3"></span>
              </h5>
              <div className="btn-reveal-trigger">
                <button
                  className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                  type="button"
                  id="support-chat-dropdown"
                  data-bs-toggle="dropdown"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-ellipsis-h text-900"></span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end py-2"
                  aria-labelledby="support-chat-dropdown"
                >
                  <a className="dropdown-item" href="#!">
                    Request a callback
                  </a>
                  <a className="dropdown-item" href="#!">
                    Search in chat
                  </a>
                  <a className="dropdown-item" href="#!">
                    Show history
                  </a>
                  <a className="dropdown-item" href="#!">
                    Report to Admin
                  </a>
                  <a className="dropdown-item btn-support-chat" href="#!">
                    Close Support
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body chat p-0">
              <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                <div className="text-end mt-6">
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      I need help with something
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      I can’t reorder a product I previously ordered
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      How do I place an order?
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                  <a
                    className="false d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      My payment method not working
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                </div>
                <div className="text-center mt-auto">
                  <div className="avatar avatar-3xl status-online">
                    <img
                      className="rounded-circle border border-3 border-white"
                      src="src/assets/img/team/30.webp"
                      alt=""
                    />
                  </div>
                  <h5 className="mt-2 mb-3">Eric</h5>
                  <p className="text-center text-black mb-0">
                    Ask us anything – we’ll get back to you here or by email
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center gap-2 border-top ps-3 pe-4 py-3">
              <div className="d-flex align-items-center flex-1 gap-3 border rounded-pill px-4">
                <input
                  className="form-control outline-none border-0 flex-1 fs--1 px-0"
                  type="text"
                  placeholder="Write message"
                />
                <label
                  className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
                  htmlFor="supportChatPhotos"
                >
                  <span className="fa-solid fa-image"></span>
                </label>
                <input
                  className="d-none"
                  type="file"
                  accept="image/*"
                  id="supportChatPhotos"
                />
                <label
                  className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
                  htmlFor="supportChatAttachment"
                >
                  <span className="fa-solid fa-paperclip"></span>
                </label>
                <input
                  className="d-none"
                  type="file"
                  id="supportChatAttachment"
                />
              </div>
              <button className="btn p-0 border-0 send-btn">
                <span className="fa-solid fa-paper-plane fs--1"></span>
              </button>
            </div>
          </div>
        </div>
        <button className="btn p-0 border border-200 btn-support-chat">
          <span className="fs-0 btn-text text-primary text-nowrap">
            Chat demo
          </span>
          <span className="fa-solid fa-circle text-success fs--1 ms-2"></span>
          <span className="fa-solid fa-chevron-down text-primary fs-1"></span>
        </button>
      </div>
    </>
  );
};

export default DashboardHome;
