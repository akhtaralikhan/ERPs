import { call, put, takeEvery } from "redux-saga/effects";
import { expensesActionTypes } from "./types";
import { creditnotesApi, currencyApi, customerApi, goalApi, invoiceApi, proposalsApi, revenueApi, totalRevenueApi } from "../../api/Sales";
import { billApi, debitnotesApi, paymentApi, vendorApi } from "../../api/Expenses";

export const ApiResponseSuccess = (actionType, data) => ({
    type: expensesActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (
    actionType,
    error
) => ({
    type: expensesActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


function* bill() {

    try {
        const response = yield call(billApi);
        yield put(ApiResponseSuccess(expensesActionTypes.BILL, response.data));
    } catch (error) {
        yield put(ApiResponseError(expensesActionTypes.BILL, error?.response?.data || "Failed"));
    }
}

export function* billSaga() {
    yield takeEvery(expensesActionTypes.BILL, bill);
}

function* payment() {

    try {
        const response = yield call(paymentApi);
        yield put(ApiResponseSuccess(expensesActionTypes.PAYMENT, response.data));
    } catch (error) {
        yield put(ApiResponseError(expensesActionTypes.PAYMENT, error?.response?.data || "Failed"));
    }
}

export function* paymentSaga() {
    yield takeEvery(expensesActionTypes.PAYMENT, payment);
}


function* debitNotes() {

    try {
        const response = yield call(debitnotesApi);
        yield put(ApiResponseSuccess(expensesActionTypes.DEBITNOTES, response.data));
    } catch (error) {
        yield put(ApiResponseError(expensesActionTypes.DEBITNOTES, error?.response?.data || "Failed"));
    }
}

export function* debitNotesSaga() {
    yield takeEvery(expensesActionTypes.DEBITNOTES, debitNotes);
}



function* vendor() {

    try {
        const response = yield call(vendorApi);
        yield put(ApiResponseSuccess(expensesActionTypes.VENDOR, response.data));
    } catch (error) {
        yield put(ApiResponseError(expensesActionTypes.VENDOR, error?.response?.data || "Failed"));
    }
}

export function* vendorSaga() {
    yield takeEvery(expensesActionTypes.VENDOR, vendor);
}

