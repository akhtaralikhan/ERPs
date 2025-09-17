import { expensesActionTypes } from "./types";

// Get Bills
export const getBills = () => ({
    type: expensesActionTypes.BILL,
});

// Get Payments
export const getPayments = () => ({
    type: expensesActionTypes.PAYMENT,
});

// Get Default Currency
export const getDefaultCurrency = () => ({
    type: expensesActionTypes.DEFAULT_CURRENCY,
});

// Get Debit Notes
export const getDebitNotes = () => ({
    type: expensesActionTypes.DEBITNOTES,
});

// Get Vendors
export const getVendors = () => ({
    type: expensesActionTypes.VENDOR,
});
