// import { call, put, takeEvery } from "redux-saga/effects";
// import { ConsoleActionTypes } from "./types";
import { apiResponseSuccessAction, apiResponseErrorAction } from "./actions";
// import { createBankAccountApi, getSubscriptionsTenant, subscriptionTenantAllUserApi } from "../../api/Console";
import {
    allSubscriptionApi,
    allUsersApi,
    createBankAccountApi,
    currencyApi,
    getSubscriptionsTenant,
    plan_idApi,
    planApi,
    rolesApi,
    settingTyopePaymentApi,
    settingTypeEmailApi,
    settingTypesGeneralApi,
    settingTypesLicenceApi,
    settingTypeSocialLoginApi,
    stripeAccountAllApi,
    // getSubscriptionsTenant,
    subscriptionTenantAllUserApi,
    subscriptionTenantApi,
    usersUserIdApi,
} from "../../api/Console";

import { ConsoleActionTypes } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";


// function* createBankAccount(user) {
//     try {
//         const response = yield call(createBankAccountApi, {
//             bankName: user.bankName,
//             bankHolderName: user.bankHolderName,
//             accountNumber: user.accountNumber,
//             balance: user.balance,
//             pendingBalance: user.pendingBalance,
//             phone: user.phone,
//             currencyId: user.currencyId,
//             createdById: user.createdById,
//             type: user.type,
//             address: {
//                 addressLine1: user.address.addressLine1,
//                 addressLine2: user.address.addressLine2,
//                 zipCode: user.address.zipCode,
//                 city: user.address.city,
//                 country: user.address.country,
//             },
//         });

//         yield put(apiResponseSuccessAction(ConsoleActionTypes.CREATEBANKACCOUNT, response.data));
//     } catch (error) {
//         yield put(
//             apiResponseErrorAction(ConsoleActionTypes.CREATEBANKACCOUNT, error.response?.data || "Faild creating bank account")
//         );
//     }
// }
// export function* createBankAccountSaga() {
//     yield takeEvery(ConsoleActionTypes.CREATEBANKACCOUNT, createBankAccount);
// }

function* getSubscriptionsTenant3() {

    try {
        const response = yield call(getSubscriptionsTenant);
        yield put(apiResponseSuccessAction(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, response.data));
    } catch (error) {
        yield put(apiResponseErrorAction(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, error?.response?.data || "Failed"));
    }
}

export function* getSubscriptionsTenant3Saga() {
    yield takeEvery(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, getSubscriptionsTenant3);
}


export const ApiResponseSuccess = (actionType, data) => ({
    type: ConsoleActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const ApiResponseError = (actionType, error) => ({
    type: ConsoleActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

function* createBankAccount(user) {
    try {
        const response = yield call(createBankAccountApi, {
            bankName: user.bankName,
            bankHolderName: user.bankHolderName,
            accountNumber: user.accountNumber,
            balance: user.balance,
            pendingBalance: user.pendingBalance,
            phone: user.phone,
            currencyId: user.currencyId,
            createdById: user.createdById,
            type: user.type,
            address: {
                addressLine1: user.address.addressLine1,
                addressLine2: user.address.addressLine2,
                zipCode: user.address.zipCode,
                city: user.address.city,
                country: user.address.country,
            },
        });

        yield put(
            ApiResponseSuccess(ConsoleActionTypes.CREATEBANKACCOUNT, response)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.CREATEBANKACCOUNT,
                error.response?.data || "Faild creating bank account"
            )
        );
    }
}
export function* createBankAccountSaga() {
    yield takeEvery(ConsoleActionTypes.CREATEBANKACCOUNT, createBankAccount);
}

function* subscriptionTenant() {
    try {
        const response = yield call(subscriptionTenantApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* subscriptionTenantSaga() {
    yield takeEvery(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, subscriptionTenant);
}

function* allUsers() {
    try {
        const response = yield call(allUsersApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.USERS_ALL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.USERS_ALL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* allUsersSaga() {
    yield takeEvery(ConsoleActionTypes.USERS_ALL, allUsers);
}

function* stripeAccountAll() {
    try {
        const response = yield call(stripeAccountAllApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.STRIPE_ACCOUNT_ALL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.STRIPE_ACCOUNT_ALL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* stripeAccountAllSaga() {
    yield takeEvery(ConsoleActionTypes.STRIPE_ACCOUNT_ALL, stripeAccountAll);
}

function* subscriptionTenantAllUser() {
    try {
        const response = yield call(subscriptionTenantAllUserApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SUBSCRIPTIONS_ALL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SUBSCRIPTIONS_ALL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* subscriptionTenantAllUserSaga() {
    yield takeEvery(ConsoleActionTypes.SUBSCRIPTIONS_ALL, subscriptionTenantAllUser);
}


function* plan() {
    try {
        const response = yield call(planApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.PLAN, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.PLAN,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* planSaga() {
    yield takeEvery(ConsoleActionTypes.PLAN, plan);
}

function* plan_id() {
    try {
        const response = yield call(plan_idApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.PLAN_ID, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.PLAN_ID,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* planIdSaga() {
    yield takeEvery(ConsoleActionTypes.PLAN_ID, plan_id);
}



function* settingTypeLicense() {
    try {
        const response = yield call(settingTypesLicenceApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SETTING_TYPE_LICENSE, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SETTING_TYPE_LICENSE,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTypeLicenseSaga() {
    yield takeEvery(ConsoleActionTypes.SETTING_TYPE_LICENSE, settingTypeLicense);
}

function* allSubscription() {
    try {
        const response = yield call(allSubscriptionApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SUBSCRIPTIONS_ALL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SUBSCRIPTIONS_ALL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* allSubscriptionSaga() {
    yield takeEvery(ConsoleActionTypes.SUBSCRIPTIONS_ALL, allSubscription);
}

function* currency() {
    try {
        const response = yield call(currencyApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.CURRENCY, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.CURRENCY,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* currencySaga() {
    yield takeEvery(ConsoleActionTypes.CURRENCY, currency);
}


function* settingTypeGeneral() {
    try {
        const response = yield call(settingTypesGeneralApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SETTING_TYPE_GENERAL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SETTING_TYPE_GENERAL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTypeGeneralSaga() {
    yield takeEvery(ConsoleActionTypes.SETTING_TYPE_GENERAL, settingTypeGeneral);
}

function* settingTypeEmail() {
    try {
        const response = yield call(settingTypeEmailApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SETTING_TYPE_EMAIL, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SETTING_TYPE_EMAIL,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTypeEmailSaga() {
    yield takeEvery(ConsoleActionTypes.SETTING_TYPE_EMAIL, settingTypeEmail);
}

function* settingTypeSocialLogin() {
    try {
        const response = yield call(settingTypeSocialLoginApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SETTING_TYPE_SOCIAL_LOGIN, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SETTING_TYPE_SOCIAL_LOGIN,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTypeSocialLoginSaga() {
    yield takeEvery(ConsoleActionTypes.SETTING_TYPE_SOCIAL_LOGIN, settingTypeSocialLogin);
}

function* settingTyopePayment() {
    try {
        const response = yield call(settingTyopePaymentApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.SETTING_TYPE_PAYMENT, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.SETTING_TYPE_PAYMENT,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* settingTyopePaymentSaga() {
    yield takeEvery(ConsoleActionTypes.SETTING_TYPE_PAYMENT, settingTyopePayment);
}


function* roles() {
    try {
        const response = yield call(rolesApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.ROLES, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.ROLES,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* rolesSaga() {
    yield takeEvery(ConsoleActionTypes.ROLES, roles);
}

function* usersUserId() {
    try {
        const response = yield call(usersUserIdApi);
        yield put(
            ApiResponseSuccess(ConsoleActionTypes.USERS_6_id, response?.data)
        );
    } catch (error) {
        yield put(
            ApiResponseError(
                ConsoleActionTypes.USERS_6_id,
                error?.response?.data || "Failed"
            )
        );
    }
}

export function* usersUserIdApiSaga() {
    yield takeEvery(ConsoleActionTypes.USERS_6_id, usersUserId);
}