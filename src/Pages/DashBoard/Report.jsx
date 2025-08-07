import React, { useEffect } from "react";
import { useRedux } from "../../hooks/useRedux";
import {
  getAccountBalanceReport,
  getAccountTransactionReport,
  getBalanceSheetReport,
  getCustomerReport,
  getProfitAndLossReport,
  getTaxReport,
  getTrialBalanceReport,
  getVendorReport,
} from "../../redux/reports/actions";
import { getCurrencyDefault } from "../../redux/bankAccounts/actions";

const Report = () => {
  const { dispatch, useAppSelector } = useRedux();

  const startDate = "2025-06-01";
  const endDate = "2025-08-31";
  const trailbalanceDate = "2025-08-06";

  useEffect(() => {
    dispatch(getProfitAndLossReport(startDate, endDate));
    dispatch(getCurrencyDefault());
    dispatch(getBalanceSheetReport(startDate, endDate));
    dispatch(getTaxReport(startDate, endDate));
    dispatch(getCustomerReport(startDate, endDate));
    dispatch(getVendorReport(startDate, endDate));
    dispatch(getAccountBalanceReport(startDate, endDate));
    dispatch(getTrialBalanceReport(trailbalanceDate));
    dispatch(getAccountTransactionReport(startDate, endDate));
  }, [startDate, endDate]);


  return (
    <>
      <div className="content">
        <div className="pb-5">
          <div className="row g-4">
            <div className="col-12 col-xxl-12">
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
              <div className="mb-5">
                <h4>Reports</h4>
              </div>
              <div className="row">
                <div className="col-sm-auto">
                  <div
                    className="sticky-top"
                    style={{ marginTop: "-72px", paddingTop: "72px" }}
                  >
                    <div className="nav flex-column nav-pills" id="v-pills">
                      <a className="nav-link ps-0 ps-sm-3" href="#Profit-loss">
                        Profit & loss
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#Balance-sheet"
                      >
                        Balance sheet
                      </a>
                      <a className="nav-link ps-0 ps-sm-3" href="#Taxes-report">
                        Taxes report
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#Sales-by-customer"
                      >
                        Sales by customer
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#Purchase-by-vendor"
                      >
                        Purchase by vendor
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#Account-balances"
                      >
                        Account balances
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#Trial-balances"
                      >
                        Trial balances
                      </a>
                      <a
                        className="nav-link ps-0 ps-sm-3"
                        href="#Account-transactions"
                      >
                        Account transactions
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div id="Profit-loss" className="card mb-3">
                    <div className="card-header">
                      <h3>Profit & Loss</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Account</th>
                              <th className="text-end" scope="col">
                                Total amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="text-primary">Incomes</th>
                              <th className="text-end"></th>
                            </tr>
                            <tr>
                              <th scope="row">Other income</th>
                              <th className="text-end">$0.00</th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row">Total income</th>
                              <th className="text-end">$0.00</th>
                            </tr>
                            <tr>
                              <th className="text-primary">
                                Cost of good sold
                              </th>
                              <th className="text-end"></th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row">Total cost of good sold</th>
                              <th className="text-end">$0.00</th>
                            </tr>

                            <tr>
                              <th scope="row"></th>
                              <th className="d-flex justify-content-between align-items-center table-primary">
                                <span>Gross profit</span>
                                <span>$0.00</span>
                              </th>
                            </tr>
                            <tr>
                              <th className="text-primary">
                                Operating expense
                              </th>
                              <th className="text-end"></th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row">Total operating expense</th>
                              <th className="text-end">$0.00</th>
                            </tr>

                            <tr>
                              <th scope="row"></th>
                              <th className="d-flex justify-content-between align-items-center table-primary">
                                <span>Net profit</span>
                                <span>$0.00</span>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Balance-sheet" className="card mb-3">
                    <div className="card-header">
                      <h3>Balance sheet</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Account</th>
                              <th className="text-end" scope="col">
                                Total amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-primary">
                              <th className="text-secondary">Assets</th>
                              <th className="text-end"></th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">
                                Money in Transit
                              </th>
                              <th className="text-end text-secondary"></th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Transferts</th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr>
                              <th className="text-secondary">
                                Total Money in Transit
                              </th>
                              <th className="text-end">$0.00</th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Total Assets</th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Taxes-report" className="card p-5 mb-3">
                    <div className="text-center">
                      <h3>Taxes report</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Account</th>
                              <th className="text-end" scope="col">
                                Total amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <!-- <tr className="table-primary">
                                                        <th className="text-secondary">Assets</th>
                                                        <th className="text-end"></th>
                                                    </tr>
                                                    <tr className="table-primary">
                                                        <th scope="row text-secondary">Money in Transit</th>
                                                        <th className="text-end text-secondary"></th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row text-secondary">Transferts</th>
                                                        <th className="text-end text-secondary">$0.00</th>
                                                    </tr> --> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Sales-by-customer" className="card p-5 mb-3">
                    <div className="text-center">
                      <h3>Sales by customer</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Customer</th>
                              <th className="text-end" scope="col">
                                Total invoice
                              </th>
                              <th className="text-end" scope="col">
                                Paid invoice
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row text-secondary">Johnson</th>
                              <th className="text-end text-secondary">
                                $535.00
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">Total invoice</th>
                              <th className="text-end text-secondary">
                                $535.00
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Purchase-by-vendor" className="card p-5 mb-3">
                    <div className="text-center">
                      <h3>Purchase by vendor</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Vendor</th>
                              <th className="text-end" scope="col">
                                Total purchase
                              </th>
                              <th className="text-end" scope="col">
                                Paid purchase
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row text-secondary">test</th>
                              <th className="text-end text-secondary">
                                $20900.00
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">Total invoice</th>
                              <th className="text-end text-secondary">
                                $20900.00
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Account-balances" className="card p-5 mb-3">
                    <div className="text-center">
                      <h3>Account balances</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Account</th>
                              <th className="text-end" scope="col">
                                Starting balance
                              </th>
                              <th className="text-end" scope="col">
                                Debit
                              </th>
                              <th className="text-end" scope="col">
                                Credit
                              </th>
                              <th className="text-end" scope="col">
                                Ending balance
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-primary">
                              <th scope="row text-secondary" colSpan="5">
                                Assets
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Inventory</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Invest</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Bank account</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Transferts</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">Total assets</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row" colSpan="5">
                                Liabilities & Credit Cards
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Amortization</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>

                            <tr className="table-primary">
                              <th scope="row text-secondary">
                                Total liabilities & credit cards
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row" colSpan="5">
                                Income
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Total income</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Trial-balances" className="card p-5 mb-3">
                    <div className="text-center">
                      <h3>Trial balances</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Account</th>
                              <th className="text-end" scope="col">
                                Debit
                              </th>
                              <th className="text-end" scope="col">
                                Credit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-primary">
                              <th scope="row text-secondary" colSpan="3">
                                Assets
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Inventory</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Invest</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Bank account</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Transferts</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">Total assets</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row" colSpan="5">
                                Liabilities & Credit Cards
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Amortization</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>

                            <tr className="table-primary">
                              <th scope="row text-secondary">
                                Total liabilities & credit cards
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row" colSpan="5">
                                Income
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Total income</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="Account-transactions" className="card p-5 mb-3">
                    <div className="text-center">
                      <h3>Account transactions</h3>
                    </div>
                    <div className="card-body">
                      <label className="form-label p-0" htmlFor="datepicker">
                        Date Range
                      </label>

                      <input
                        className="form-control "
                        id=""
                        type="date"
                        placeholder="dd/mm/yyyy"
                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                      />
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-rotate-right me-3"></i>
                          Refresh
                        </button>
                        <button
                          className="btn btn-primary text-uppercase me-1 mb-1"
                          type="button"
                        >
                          <i className="fa fa-solid fa-download me-3"></i>
                          Download
                        </button>
                      </div>
                      <div className="report-table">
                        <table className="table mt-4">
                          <thead>
                            <tr className="bg-primary">
                              <th scope="col">Account</th>
                              <th className="text-end" scope="col">
                                Description
                              </th>
                              <th className="text-end" scope="col">
                                Debit
                              </th>
                              <th className="text-end" scope="col">
                                Credit
                              </th>
                              <th className="text-end" scope="col">
                                Balance
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-primary">
                              <th scope="row text-secondary" colSpan="5">
                                Bank Service Charges
                              </th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary" colSpan="4">
                                Starting balance
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">
                                Jan 27, 2023, 15:42
                              </th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $18.42
                              </th>
                              <th className="text-end text-secondary">
                                $-18.42
                              </th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">Ending balance</th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary">
                                $-18.42
                              </th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary" colSpan="5">
                                Other income
                              </th>
                            </tr>
                            <tr className="table-primary">
                              <th scope="row text-secondary">
                                Starting balances
                              </th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">
                                Feb 15, 2023, 22:25
                              </th>
                              <th className="text-end text-secondary"></th>
                              <th className="text-end text-secondary">
                                $368.51
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">
                                Aug 6, 2023, 22:55
                              </th>
                              <th className="text-end text-secondary">Ttt</th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $368.51
                              </th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row" colSpan="5">
                                Liabilities & Credit Cards
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Amortization</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>

                            <tr className="table-primary">
                              <th scope="row text-secondary">
                                Total liabilities & credit cards
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                            <tr style={{ height: "20px" }}></tr>
                            <tr className="table-primary">
                              <th scope="row" colSpan="5">
                                Income
                              </th>
                            </tr>
                            <tr>
                              <th scope="row text-secondary">Total income</th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                              <th className="text-end text-secondary">$0.00</th>
                              <th className="text-end text-secondary">
                                $318.42
                              </th>
                              <th className="text-end text-secondary">
                                $-318.42
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-200 mb-6 mt-4" />
              <footer className="footer position-absolute">
                <div className="row g-0 justify-content-between align-items-center h-100">
                  <div className="col-12 col-sm-auto text-center">
                    <p className="mb-0 mt-2 mt-sm-0 text-900">
                      All Right Reserved
                      <span className="d-none d-sm-inline-block"></span>
                      <span className="d-none d-sm-inline-block mx-1">|</span>
                      <br className="d-sm-none" />
                      2023 &copy;
                      <a className="mx-1" href="#">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
