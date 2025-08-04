import { call, put, takeEvery } from "redux-saga/effects";
import { ConsoleActionTypes } from "./types";
import { apiResponseSuccessAction, apiResponseErrorAction } from "./actions";
import { createBankAccountApi, getSubscriptionsTenant, subscriptionTenantAllUserApi } from "../../api/Console";


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

        yield put(apiResponseSuccessAction(ConsoleActionTypes.CREATEBANKACCOUNT, response));
    } catch (error) {
        yield put(
            apiResponseErrorAction(ConsoleActionTypes.CREATEBANKACCOUNT, error.response?.data || "Faild creating bank account")
        );
    }
}
export function* createBankAccountSaga() {
    yield takeEvery(ConsoleActionTypes.CREATEBANKACCOUNT, createBankAccount);
}

function* getSubscriptionsTenant3() {

    try {
        const response = yield call(getSubscriptionsTenant);
        yield put(apiResponseSuccessAction(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, response));
    } catch (error) {
        yield put(apiResponseErrorAction(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, error?.response?.data || "Failed"));
    }
}

export function* getSubscriptionsTenant3Saga() {
    yield takeEvery(ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3, getSubscriptionsTenant3);
}
