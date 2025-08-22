import { bankAccountActionTypes } from "./types";

export const ApiResponseSuccess = (actionType, data) => ({
    type: bankAccountActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

// common error
export const ApiResponseError = (
    actionType,
    error
) => ({
    type: bankAccountActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


export const getDashboardDataSuccess = (data) => ({
    type: bankAccountActionTypes.API_RESPONSE_SUCCESS,
    payload: data,
});

export const getDashboardDataFailure = (error) => ({
    type: bankAccountActionTypes.API_RESPONSE_SUCCESS,
    payload: error,
});


export const getCurrencyDefault = () => ({
    type: bankAccountActionTypes.CURRENCY_DEFAULT,
});


export const getCurrency = () => ({
    type: bankAccountActionTypes.CURRENCY,
});


export const getBankAccountAction = () => ({
    type: bankAccountActionTypes.BANK_ACCOUNT,
});

export const editData = (id) => ({
    type: bankAccountActionTypes.EDITBANK_ACCOUNT,
    payload: id,
});

export const DeleteDataAction = (userId, endPoint) => ({
    type: bankAccountActionTypes.DELETEBANK_ACCOUNT,
    payload: { userId, endPoint },
});

export const editBankAccountDetails = (user) => ({
    type: bankAccountActionTypes.EDITBANK_ACCOUNT_DETAILS,
    payload: { user },
})