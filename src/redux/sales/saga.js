import { call, put, takeEvery } from "redux-saga/effects";
import { salesActionTypes } from "./types";
import { creditnotesApi, currencyApi, customerApi, goalApi, invoiceApi, proposalsApi, revenueApi, totalRevenueApi } from "../../api/Sales";

export const ApiResponseSuccess = (actionType, data) => ({
    type: salesActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (
    actionType,
    error
) => ({
    type: salesActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


function* proposal() {

    try {
        const response = yield call(proposalsApi);
        yield put(ApiResponseSuccess(salesActionTypes.PROPOSALS, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.PROPOSALS, error?.response?.data || "Failed"));
    }
}

export function* proposalSaga() {
    yield takeEvery(salesActionTypes.PROPOSALS, proposal);
}


function* invoice() {

    try {
        const response = yield call(invoiceApi);
        yield put(ApiResponseSuccess(salesActionTypes.INVOICE, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.INVOICE, error?.response?.data || "Failed"));
    }
}

export function* invoiceSaga() {
    yield takeEvery(salesActionTypes.INVOICE, invoice);
}


function* currency() {

    try {
        const response = yield call(currencyApi);
        yield put(ApiResponseSuccess(salesActionTypes.CURRENCY, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.CURRENCY, error?.response?.data || "Failed"));
    }
}

export function* currencySaga() {
    yield takeEvery(salesActionTypes.CURRENCY, currency);
}


function* customer() {

    try {
        const response = yield call(customerApi);
        yield put(ApiResponseSuccess(salesActionTypes.CUSTOMER, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.CUSTOMER, error?.response?.data || "Failed"));
    }
}

export function* customerSaga() {
    yield takeEvery(salesActionTypes.CUSTOMER, customer);
}

function* goals() {

    try {
        const response = yield call(goalApi);
        yield put(ApiResponseSuccess(salesActionTypes.GOAL, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.GOAL, error?.response?.data || "Failed"));
    }
}

export function* goalsSaga() {
    yield takeEvery(salesActionTypes.GOAL, goals);
}

function* revenueTotal() {

    try {
        const response = yield call(totalRevenueApi);
        yield put(ApiResponseSuccess(salesActionTypes.TOTAL_REVENUE, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.TOTAL_REVENUE, error?.response?.data || "Failed"));
    }
}

export function* revenueTotalSaga() {
    yield takeEvery(salesActionTypes.TOTAL_REVENUE, revenueTotal);
}

function* revenue() {

    try {
        const response = yield call(revenueApi);
        yield put(ApiResponseSuccess(salesActionTypes.REVENUE, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.REVENUE, error?.response?.data || "Failed"));
    }
}

export function* revenueSaga() {
    yield takeEvery(salesActionTypes.REVENUE, revenue);
}

function* creditNote() {

    try {
        const response = yield call(creditnotesApi);
        yield put(ApiResponseSuccess(salesActionTypes.CREDITNOTES, response.data));
    } catch (error) {
        yield put(ApiResponseError(salesActionTypes.CREDITNOTES, error?.response?.data || "Failed"));
    }
}

export function* creditNoteSaga() {
    yield takeEvery(salesActionTypes.CREDITNOTES, creditNote);
}

// function* customer() {

//     try {
//         const response = yield call(customerApi);
//         yield put(ApiResponseSuccess(salesActionTypes.CUSTOMER, response.data));
//     } catch (error) {
//         yield put(ApiResponseError(salesActionTypes.CUSTOMER, error?.response?.data || "Failed"));
//     }
// }

// export function* customerSaga() {
//     yield takeEvery(salesActionTypes.CUSTOMER, customer);
// }