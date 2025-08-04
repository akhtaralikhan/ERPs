import { getSubscriptionsTenant } from "../../api/Console";
import { call, put, takeEvery } from "redux-saga/effects";
import { bankaccountApi, summaryApi } from "../../api/Dashboard";
import { dashboardTypes } from "./types";

export const ApiResponseSuccess = (actionType, data) => ({
    type: dashboardTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (
    actionType,
    error
) => ({
    type: dashboardTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


function* summary() {

    try {
        const response = yield call(summaryApi);
        yield put(ApiResponseSuccess(dashboardTypes.SUMMARY, response));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.SUMMARY, error?.response?.data || "Failed"));
    }
}

export function* summarySaga() {
    yield takeEvery(dashboardTypes.SUMMARY, summary);
}


function* bankaccount() {

    try {
        const response = yield call(bankaccountApi);
        yield put(ApiResponseSuccess(dashboardTypes.BANKACCOUNT, response));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.BANKACCOUNT, error?.response?.data || "Failed"));
    }
}

export function* bankaccountSaga() {
    yield takeEvery(dashboardTypes.BANKACCOUNT, bankaccount);
}
