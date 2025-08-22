import { call, put, takeEvery } from "redux-saga/effects";
import { productAndServicesTypes } from "./types";
import { createProductDataDetailsApi, deleteProductApi, editProductApi, editProductDataDetailsApi, getCategoryApi, getProductsApi, getServicesApi, getTaxApi } from "../../api/ProductAndServices";

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
        yield put(ApiResponseSuccess(productAndServicesTypes.GET_PRODUCTS, response.data));
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
        yield put(ApiResponseSuccess(productAndServicesTypes.GET_SERVICES, response.data));
    } catch (error) {
        yield put(ApiResponseError(productAndServicesTypes.GET_SERVICES, error?.response?.data || "Failed"));
    }
}

export function* servicesSaga() {
    yield takeEvery(productAndServicesTypes.GET_SERVICES, services);
}


function* category() {

    try {
        const response = yield call(getCategoryApi);
        yield put(ApiResponseSuccess(productAndServicesTypes.GET_CATERGORY, response.data));
    } catch (error) {
        yield put(ApiResponseError(productAndServicesTypes.GET_CATERGORY, error?.response?.data || "Failed"));
    }
}

export function* categorySaga() {
    yield takeEvery(productAndServicesTypes.GET_CATERGORY, category);
}


function* tax() {

    try {
        const response = yield call(getTaxApi);
        yield put(ApiResponseSuccess(productAndServicesTypes.GET_TAX, response.data));
    } catch (error) {
        yield put(ApiResponseError(productAndServicesTypes.GET_TAX, error?.response?.data || "Failed"));
    }
}

export function* taxSaga() {
    yield takeEvery(productAndServicesTypes.GET_TAX, tax);
}



function* editProduct(id) {
    try {

        const response = yield call(editProductApi, id);

        yield put(ApiResponseSuccess(productAndServicesTypes.EDIT_PRODUCT_DATA, response.data));
    } catch (error) {
        yield put(
            ApiResponseError(productAndServicesTypes.EDIT_PRODUCT_DATA, error.response?.data || "edit bank account failed")
        );
    }
}

export function* editProductSaga() {
    yield takeEvery(productAndServicesTypes.EDIT_PRODUCT_DATA, editProduct);
}

function* deleteProduct(userId) {
    try {

        const response = yield call(deleteProductApi, userId);

        yield put(ApiResponseSuccess(productAndServicesTypes.DELETE_PRODUCT_DATA, response.data));
    } catch (error) {
        console.log("error", error);

    }
}

export function* deleteProductSaga() {
    yield takeEvery(productAndServicesTypes.DELETE_PRODUCT_DATA, deleteProduct);
}

function* editProductDataDetails(action) {
    try {
        const { user } = action.payload;

        const response = yield call(editProductDataDetailsApi, user);

        yield put(ApiResponseSuccess(productAndServicesTypes.EDIT_PRODUCT_DATA_DETAILS, response.data));
    } catch (error) {
        yield put(
            ApiResponseError(productAndServicesTypes.EDIT_PRODUCT_DATA_DETAILS, error.response?.data || "edit bank details  failed")
        );
    }
}

export  function* editProductDataDetailsSaga() {
    yield takeEvery(productAndServicesTypes.EDIT_PRODUCT_DATA_DETAILS, editProductDataDetails);
}



function* createProductDataDetails(action) {
    try {
        const { user } = action.payload;

        const response = yield call(createProductDataDetailsApi, user);

        yield put(ApiResponseSuccess(productAndServicesTypes.CREATE_PRODUCT_DATA, response.data));
    } catch (error) {
        yield put(
            ApiResponseError(productAndServicesTypes.CREATE_PRODUCT_DATA, error.response?.data || "edit bank details  failed")
        );
    }
}

export  function* createProductSaga() {
    yield takeEvery(productAndServicesTypes.CREATE_PRODUCT_DATA, createProductDataDetails);
}