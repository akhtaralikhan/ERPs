import { AccountingActionTypes } from "./types";

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
