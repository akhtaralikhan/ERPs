import { call, put, takeEvery } from "redux-saga/effects";
import { bankAccountActionTypes } from "./types";
import { bankAccountApi, currencyDefaultApi } from "../../api/BankAccounts";
// import { ApiResponseError, ApiResponseSuccess } from "./actions";

export const ApiResponseSuccess = (actionType, data) => ({
    type: bankAccountActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (
    actionType,
    error
) => ({
    type: bankAccountActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


function* bankAccount() {

    try {
        const response = yield call(bankAccountApi);
        yield put(ApiResponseSuccess(bankAccountActionTypes.BANK_ACCOUNT, response));
    } catch (error) {
        yield put(ApiResponseError(bankAccountActionTypes.BANK_ACCOUNT, error?.response?.data || "Failed"));
    }
}

export function* bankAccountSaga() {
    yield takeEvery(bankAccountActionTypes.BANK_ACCOUNT, bankAccount);
}



function* currencyDefault() {

    try {
        const response = yield call(currencyDefaultApi);
        yield put(ApiResponseSuccess(bankAccountActionTypes.CURRENCY_DEFAULT, response));
    } catch (error) {
        yield put(ApiResponseError(bankAccountActionTypes.CURRENCY_DEFAULT, error?.response?.data || "Failed"));
    }
}

export function* currencyDefaultSaga() {
    yield takeEvery(bankAccountActionTypes.CURRENCY_DEFAULT, currencyDefault);
}

