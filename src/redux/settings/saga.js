import {
    categoryApi,
    comapnyTenantApi,
    currency10Api,
    currencyApi,
    planApi,
    rolesApi,
    settingTypeGeneralApi,
    settingTypeLicenseApi,
    subscriptionTenantAllUserApi,
    subscriptionTenantApi,
    taxeApi,
    users3Api,
    usersApi,
} from "../../api/Settings";
import { SettingsActionTypes } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";

export const ApiResponseSuccess = (actionType, data) => ({
    type: SettingsActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (actionType, error) => ({
    type: SettingsActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

function* comapnyTenant() {
    try {
        const response = yield call(comapnyTenantApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.COMPANY_TENANT_3, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.COMPANY_TENANT_3,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* comapnyTenantSaga() {
    yield takeEvery(SettingsActionTypes.COMPANY_TENANT_3, comapnyTenant);
}

// function* Company() {
//     try {
//         const response = yield call(CompanyApi);
//         yield put(
//             ApiResponseSuccess(SettingsActionTypes.COMPANY, response?.data)
//         );
//     } catch (error) {
//         yield put(
//             ApiResponseError(
//                 SettingsActionTypes.COMPANY,
//                 error?.response?.data || "Failed"
//             )
//         );
//     }
// }

// export function* CompanySaga() {
//     yield takeEvery(SettingsActionTypes.COMPANY, Company);
// }

function* users() {
    try {
        const response = yield call(usersApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.USERS, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.USERS,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* usersSaga() {
    yield takeEvery(SettingsActionTypes.USERS, users);
}

function* subscriptionTenant() {
    try {
        const response = yield call(subscriptionTenantApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.SUBSCRIPTIONS_TENANT_3, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.SUBSCRIPTIONS_TENANT_3,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* subscriptionTenantSaga() {
    yield takeEvery(SettingsActionTypes.SUBSCRIPTIONS_TENANT_3, subscriptionTenant);
}

function* subscriptionTenantAllUser() {
    try {
        const response = yield call(subscriptionTenantAllUserApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.SUBSCRIPTIONS_ALL_USER_3, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.SUBSCRIPTIONS_ALL_USER_3,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* subscriptionTenantAllUserSaga() {
    yield takeEvery(SettingsActionTypes.SUBSCRIPTIONS_ALL_USER_3, subscriptionTenantAllUser);
}

function* plan() {
    try {
        const response = yield call(planApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.PLAN, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.PLAN,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* planSaga() {
    yield takeEvery(SettingsActionTypes.PLAN, plan);
}

function* category() {
    try {
        const response = yield call(categoryApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.CATEGORY, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.CATEGORY,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* categorySaga() {
    yield takeEvery(SettingsActionTypes.CATEGORY, category);
}

function* taxe() {
    try {
        const response = yield call(taxeApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.TAXE, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.TAXE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* taxeSaga() {
    yield takeEvery(SettingsActionTypes.TAXE, taxe);
}

function* users3() {
    try {
        const response = yield call(users3Api);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.USERS_3, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.USERS_3,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* users3Saga() {
    yield takeEvery(SettingsActionTypes.USERS_3, users3);
}

function* currency() {
    try {
        const response = yield call(currencyApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.CURRENCY, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.CURRENCY,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* currencySaga() {
    yield takeEvery(SettingsActionTypes.CURRENCY, currency);
}

// function* currency10() {
//     try {
//         const response = yield call(currency10Api);
//         yield put(
//             ApiResponseSuccess(SettingsActionTypes.CURRENCY_10, response?.data)
//         );
//     } catch (error) {
//         yield put(
//             ApiResponseError(
//                 SettingsActionTypes.CURRENCY_10,
//                 error?.response?.data || "Failed"
//             )
//         );
//     }
// }

// export function* currency10Saga() {
//     yield takeEvery(SettingsActionTypes.CURRENCY_10, currency10);
// }

function* settingTypeLicense() {
    try {
        const response = yield call(settingTypeLicenseApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.SETTING_TYPES_LICENSE, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.SETTING_TYPES_LICENSE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTypeLicenseSaga() {
    yield takeEvery(SettingsActionTypes.SETTING_TYPES_LICENSE, settingTypeLicense);
}


function* settingTypeGeneral() {
    try {
        const response = yield call(settingTypeGeneralApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.SETTING_TYPE_GENERAL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.SETTING_TYPE_GENERAL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTypeGeneralSaga() {
    yield takeEvery(SettingsActionTypes.SETTING_TYPE_GENERAL, settingTypeGeneral);
}


function* roles() {
    try {
        const response = yield call(rolesApi);
        yield put(
            ApiResponseSuccess(SettingsActionTypes.ROLES, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                SettingsActionTypes.ROLES,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* rolesSaga() {
    yield takeEvery(SettingsActionTypes.ROLES, roles);
}