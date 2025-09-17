import { call, put, takeEvery } from "redux-saga/effects";
import { bankAccountActionTypes } from "./types";
import { bankAccountApi, currenciesApi, currencyDefaultApi, deleteDataApi, editBankAccountApi, editBankDetailsApi } from "../../api/BankAccounts";
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
        yield put(ApiResponseSuccess(bankAccountActionTypes.BANK_ACCOUNT, response.data));
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
        yield put(ApiResponseSuccess(bankAccountActionTypes.CURRENCY_DEFAULT, response.data));
    } catch (error) {
        yield put(ApiResponseError(bankAccountActionTypes.CURRENCY_DEFAULT, error?.response?.data || "Failed"));
    }
}

export function* currencyDefaultSaga() {
    yield takeEvery(bankAccountActionTypes.CURRENCY_DEFAULT, currencyDefault);
}


function* currencies() {

    try {
        const response = yield call(currenciesApi);
        yield put(ApiResponseSuccess(bankAccountActionTypes.CURRENCY, response.data));
    } catch (error) {
        yield put(ApiResponseError(bankAccountActionTypes.CURRENCY, error?.response?.data || "Failed"));
    }
}

export function* currenciesSaga() {
    yield takeEvery(bankAccountActionTypes.CURRENCY, currencies);
}


function* editBankAccount(id) {
    try {

        const response = yield call(editBankAccountApi, id);

        yield put(ApiResponseSuccess(bankAccountActionTypes.EDITBANK_ACCOUNT, response.data));
    } catch (error) {
        yield put(
            ApiResponseError(bankAccountActionTypes.EDITBANK_ACCOUNT, error.response?.data || "edit bank account failed")
        );
    }
}


export function* editBankAccountSaga() {
    yield takeEvery(bankAccountActionTypes.EDITBANK_ACCOUNT, editBankAccount);
}
function* deleteBankAccount(action) {
    try {
        const { userId, endPoint } = action.payload;

        const response = yield call(deleteDataApi, { userId, endPoint });

        yield put(ApiResponseSuccess(bankAccountActionTypes.DELETEBANK_ACCOUNT, response.data));
    } catch (error) {
        console.log("error", error);
    }
}


export function* deleteBankAccountSaga() {
    yield takeEvery(bankAccountActionTypes.DELETEBANK_ACCOUNT, deleteBankAccount);
}

function* editBankDetails(action) {
    try {
        const { user } = action.payload;

        const response = yield call(editBankDetailsApi, user);

        yield put(ApiResponseSuccess(bankAccountActionTypes.EDITBANK_ACCOUNT_DETAILS, response.data));
    } catch (error) {
        yield put(
            ApiResponseError(bankAccountActionTypes.EDITBANK_ACCOUNT_DETAILS, error.response?.data || "edit bank details  failed")
        );
    }
}

export default function* editBankDetailsSaga() {
    yield takeEvery(bankAccountActionTypes.EDITBANK_ACCOUNT_DETAILS, editBankDetails);
}