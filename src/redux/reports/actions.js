import { reportsActionTypes } from "./types";

// ✅ Common API response success
export const apiResponseSuccess = (actionType, data) => ({
  type: reportsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// ❌ Common API response error
export const apiResponseError = (actionType, error) => ({
  type: reportsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

// 📊 Profit & Loss Report
export const getProfitAndLossReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_PROFIT_AND_LOSS,
  payload: { startDate, endDate },
});

// 📊 Balance Sheet Report
export const getBalanceSheetReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_BALANCE_SHEET,
  payload: { startDate, endDate },
});

// 📊 Tax Report
export const getTaxReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_TAX,
  payload: { startDate, endDate },
});

// 📊 Customer Report
export const getCustomerReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_CUSTOMER,
  payload: { startDate, endDate },
});

// 📊 Vendor Report
export const getVendorReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_VENDOR,
  payload: { startDate, endDate },
});

// 📊 Account Balance Report
export const getAccountBalanceReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_ACCOUNT_BALANCE,
  payload: { startDate, endDate },
});

// 📊 Trial Balance Report
export const getTrialBalanceReport = (date) => ({
  type: reportsActionTypes.REPORT_TRIAL_BALANCE,
  payload: { date },
});

// 📊 Account Transaction Report
export const getAccountTransactionReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_ACCOUNT_TRANSACTION,
  payload: { startDate, endDate },
});
