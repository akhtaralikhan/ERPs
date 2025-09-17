import {
    profitAndLossApi,
    balanceSheetApi,
    taxReportApi,
    customerReportApi,
    vendorReportApi,
    accountBalanceApi,
    accountTransactionApi,
    trialBalanceApi,
    currencyDefaultApi,
} from "../../api/Report";
import { reportsActionTypes } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";

export const ApiResponseSuccess = (actionType, data) => ({
    type: reportsActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (actionType, error) => ({
    type: reportsActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

function* profitAndLoss(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(profitAndLossApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_PROFIT_AND_LOSS,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_PROFIT_AND_LOSS,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* profitAndLossSaga() {
    yield takeEvery(reportsActionTypes.REPORT_PROFIT_AND_LOSS, profitAndLoss);
}

function* currencyDefault() {
    try {
        const response = yield call(currencyDefaultApi);
        console.log("transaction journal API response:", response);

        yield put(
            ApiResponseSuccess(reportsActionTypes.CURRENCY_DEFAULT, response?.data)
        );
    } catch (error) {
        console.log("transaction journal API error:", error);

        yield put(
            ApiResponseError(
                reportsActionTypes.CURRENCY_DEFAULT,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* currencyDefaultSaga() {
    yield takeEvery(reportsActionTypes.REPORT_PROFIT_AND_LOSS, currencyDefault);
}

function* balanceSheet(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(balanceSheetApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_BALANCE_SHEET,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_BALANCE_SHEET,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* balanceSheetSaga() {
    yield takeEvery(reportsActionTypes.REPORT_BALANCE_SHEET, balanceSheet);
}

function* taxReport(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(taxReportApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_TAX,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_TAX,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* taxReportSaga() {
    yield takeEvery(reportsActionTypes.REPORT_TAX, taxReport);
}

function* CustomerReport(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(customerReportApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_CUSTOMER,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_CUSTOMER,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* CustomerReportSaga() {
    yield takeEvery(reportsActionTypes.REPORT_CUSTOMER, CustomerReport);
}

function* vendorReport(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(vendorReportApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_VENDOR,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_VENDOR,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* vendorReportSaga() {
    yield takeEvery(reportsActionTypes.REPORT_VENDOR, vendorReport);
}

function* AccountBalanceReport(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(accountBalanceApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_ACCOUNT_BALANCE,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_ACCOUNT_BALANCE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* AccountBalanceReportSaga() {
    yield takeEvery(reportsActionTypes.REPORT_ACCOUNT_BALANCE, AccountBalanceReport);
}

function* trialBalance(action) {
    try {
        const { trailbalanceDate } = action.payload;
        const response = yield call(trialBalanceApi, trailbalanceDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_TRIAL_BALANCE,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_TRIAL_BALANCE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* trialBalanceSaga() {
    yield takeEvery(reportsActionTypes.REPORT_TRIAL_BALANCE, trialBalance);
}

function* accountTransaction(action) {
    try {
        const { startDate, endDate } = action.payload;
        const response = yield call(accountTransactionApi, startDate, endDate);

        yield put(
            ApiResponseSuccess(
                reportsActionTypes.REPORT_ACCOUNT_TRANSACTION,
                response?.data
            )
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                reportsActionTypes.REPORT_ACCOUNT_TRANSACTION,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* accountTransactionSaga() {
    yield takeEvery(reportsActionTypes.REPORT_ACCOUNT_TRANSACTION, accountTransaction);
}