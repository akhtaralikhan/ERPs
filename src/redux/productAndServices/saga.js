import { call, put, takeEvery } from "redux-saga/effects";
import { productAndServicesTypes } from "./types";
import { getProductsApi, getServicesApi } from "../../api/ProductAndServices";

export const ApiResponseSuccess = (actionType, data) => ({
    type: productAndServicesTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (
    actionType,
    error
) => ({
    type: productAndServicesTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});


function* product() {

    try {
        const response = yield call(getProductsApi);
        yield put(ApiResponseSuccess(productAndServicesTypes.GET_PRODUCTS, response));
    } catch (error) {
        yield put(ApiResponseError(productAndServicesTypes.GET_PRODUCTS, error?.response?.data || "Failed"));
    }
}

export function* productSaga() {
    yield takeEvery(productAndServicesTypes.GET_PRODUCTS, product);
}


function* services() {

    try {
        const response = yield call(getServicesApi);
        yield put(ApiResponseSuccess(productAndServicesTypes.GET_SERVICES, response));
    } catch (error) {
        yield put(ApiResponseError(productAndServicesTypes.GET_SERVICES, error?.response?.data || "Failed"));
    }
}

export function* servicesSaga() {
    yield takeEvery(productAndServicesTypes.GET_SERVICES, services);
}