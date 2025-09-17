import {
    accountTypeApi,
    asssetApi,
    bankaccountApi,
    chartAccountsApi,
    currencyApi,
    currencyDefaultApi,
    customerApi,
    getBillNaNApi,
    goalApi,
    InvoiceNaNApi,
    manualJournalApi,
    paymentApi,
    revenueApi,
    revenueTotalApi,
    taxeApi,
    transactionApi,
    vendorApi,
} from "../../api/Accounting";
import { AccountingActionTypes } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";

export const ApiResponseSuccess = (actionType, data) => ({
    type: AccountingActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (actionType, error) => ({
    type: AccountingActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

function* manualjournal() {
    try {
        const response = yield call(manualJournalApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.MANUALJOURNAL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.MANUALJOURNAL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* manualjournalSaga() {
    yield takeEvery(AccountingActionTypes.MANUALJOURNAL, manualjournal);
}

function* transaction() {
    try {
        const response = yield call(transactionApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.TRANSACTION, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.TRANSACTION,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* transactionSaga() {
    yield takeEvery(AccountingActionTypes.TRANSACTION, transaction);
}

function* currencyDefault() {
    try {
        const response = yield call(currencyDefaultApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.CURRENCY_DEFAULT, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.CURRENCY_DEFAULT,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* currencyDefaultSaga() {
    yield takeEvery(AccountingActionTypes.CURRENCY_DEFAULT, currencyDefault);
}

function* chartAccounts() {
    try {
        const response = yield call(chartAccountsApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.CHARTACCOUNTS, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.CHARTACCOUNTS,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* chartAccountsSaga() {
    yield takeEvery(AccountingActionTypes.CHARTACCOUNTS, chartAccounts);
}

function* vendor() {
    try {
        const response = yield call(vendorApi);
        yield put(ApiResponseSuccess(AccountingActionTypes.VENDOR, response?.data));
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.VENDOR,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* vendorSaga() {
    yield takeEvery(AccountingActionTypes.VENDOR, vendor);
}

function* taxe() {
    try {
        const response = yield call(taxeApi);
        yield put(ApiResponseSuccess(AccountingActionTypes.TAXE, response?.data));
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.TAXE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* taxeSaga() {
    yield takeEvery(AccountingActionTypes.TAXE, taxe);
}

function* assset() {
    try {
        const response = yield call(asssetApi);
        yield put(ApiResponseSuccess(AccountingActionTypes.ASSETS, response?.data));
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.ASSETS,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* asssetSaga() {
    yield takeEvery(AccountingActionTypes.ASSETS, assset);
}

function* customer() {
    try {
        console.log("transaction journal saga called");
        const response = yield call(customerApi);
        console.log("transaction journal API response:", response);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.CUSTOMER, response?.data)
        );
    } catch (error) {
        console.log("transaction journal API error:", error);
        yield put(
            ApiResponseError(
                AccountingActionTypes.CUSTOMER,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* customerSaga() {
    yield takeEvery(AccountingActionTypes.CUSTOMER, customer);
}

function* invoiceNaN() {
    try {
        const response = yield call(InvoiceNaNApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.INVOICE_NAN, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.INVOICE_NAN,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* invoiceNaNSaga() {
    yield takeEvery(AccountingActionTypes.INVOICE_NAN, invoiceNaN);
}

function* billNaN() {
    try {
        const response = yield call(getBillNaNApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.BILL_NAN, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.BILL_NAN,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* billNaNSaga() {
    yield takeEvery(AccountingActionTypes.BILL_NAN, billNaN);
}

function* currency() {
    try {
        const response = yield call(currencyApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.CURRENCY, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.CURRENCY,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* currencySaga() {
    yield takeEvery(AccountingActionTypes.CURRENCY, currency);
}

function* accountType() {
    try {
        const response = yield call(accountTypeApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.ACCOUNTTYPE, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.ACCOUNTTYPE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* accountTypeSaga() {
    yield takeEvery(AccountingActionTypes.ACCOUNTTYPE, accountType);
}

function* payment() {
    try {
        const response = yield call(paymentApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.PAYMENT, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.PAYMENT,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* paymentSaga() {
    yield takeEvery(AccountingActionTypes.PAYMENT, payment);
}

function* bankaccount() {
    try {
        const response = yield call(bankaccountApi);
        yield put(ApiResponseSuccess(AccountingActionTypes.BANKACCOUNT, response));
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.BANKACCOUNT,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* bankaccountSaga() {
    yield takeEvery(AccountingActionTypes.BANKACCOUNT, bankaccount);
}

function* revenue() {
    try {
        const response = yield call(revenueApi);
        yield put(ApiResponseSuccess(AccountingActionTypes.REVENUE, response));
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.REVENUE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* revenueSaga() {
    yield takeEvery(AccountingActionTypes.REVENUE, revenue);
}

function* revenueTotal() {
    try {
        const response = yield call(revenueTotalApi);
        yield put(
            ApiResponseSuccess(AccountingActionTypes.REVENUE_TOTAL, response)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.REVENUE_TOTAL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* revenueTotalSaga() {
    yield takeEvery(AccountingActionTypes.REVENUE_TOTAL, revenueTotal);
}

function* goal() {
    try {
        const response = yield call(goalApi);
        yield put(ApiResponseSuccess(AccountingActionTypes.GOAL, response));
    } catch (error) {
        yield put(
            ApiResponseError(
                AccountingActionTypes.GOAL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* goalSaga() {
    yield takeEvery(AccountingActionTypes.GOAL, goal);
}