import { reportsActionTypes } from "./types";

export const apiResponseSuccess = (actionType, data) => ({
  type: reportsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

export const apiResponseError = (actionType, error) => ({
  type: reportsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getProfitAndLossReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_PROFIT_AND_LOSS,
  payload: { startDate, endDate },
});

export const getBalanceSheetReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_BALANCE_SHEET,
  payload: { startDate, endDate },
});

export const getTaxReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_TAX,
  payload: { startDate, endDate },
});

export const getCustomerReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_CUSTOMER,
  payload: { startDate, endDate },
});

export const getVendorReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_VENDOR,
  payload: { startDate, endDate },
});

export const getAccountBalanceReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_ACCOUNT_BALANCE,
  payload: { startDate, endDate },
});

export const getTrialBalanceReport = (date) => ({
  type: reportsActionTypes.REPORT_TRIAL_BALANCE,
  payload: { date },
});

export const getAccountTransactionReport = (startDate, endDate) => ({
  type: reportsActionTypes.REPORT_ACCOUNT_TRANSACTION,
  payload: { startDate, endDate },
});
