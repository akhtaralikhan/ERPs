import { getSubscriptionsTenant, settingTypesLicenceApi } from "../../api/Console";
import { call, put, takeEvery } from "redux-saga/effects";
import { bankaccountApi, billsLastApi, cardReportsApi, currencyDefaultApi, estimatesLastApi, goalsLastApi, innovoiceLastApi, invoiceReportApi, monthActivityApi, monthTransactionsApi, paymentApi, revenueTotalApi, settingTypesGeneralApi, socialLoginApi, summaryApi, transactionsLastApi, weekActivityApi, weekTransactionsApi, yearActivityApi, yearTransactionsApi } from "../../api/Dashboard";
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
        yield put(ApiResponseSuccess(dashboardTypes.SUMMARY, response.data));
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
        yield put(ApiResponseSuccess(dashboardTypes.BANKACCOUNT, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.BANKACCOUNT, error?.response?.data || "Failed"));
    }
}

export function* bankaccountSaga() {
    yield takeEvery(dashboardTypes.BANKACCOUNT, bankaccount);
}

function* SocialLogin() {
    try {
        const response = yield call(socialLoginApi);
        yield put(ApiResponseSuccess(dashboardTypes.SOCIAL_LOGIN, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.SOCIAL_LOGIN, error?.response?.data || "Failed"));
    }
}
export function* SocialLoginSaga() {
    yield takeEvery(dashboardTypes.SOCIAL_LOGIN, SocialLogin);
}


function* settingTypeGeneral() {
    try {
        const response = yield call(settingTypesGeneralApi);
        yield put(ApiResponseSuccess(dashboardTypes.SETTING_TYPES_GENERAL, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.SETTING_TYPES_GENERAL, error?.response?.data || "Failed"));
    }
}
export function* settingTypeGeneralSaga() {
    yield takeEvery(dashboardTypes.SETTING_TYPES_GENERAL, settingTypeGeneral);
}


function* settingTypePayment() {
    try {
        const response = yield call(paymentApi);
        yield put(ApiResponseSuccess(dashboardTypes.SETTING_TYPES_PAYMENT, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.SETTING_TYPES_PAYMENT, error?.response?.data || "Failed"));
    }
}
export function* settingTypePaymentSaga() {
    yield takeEvery(dashboardTypes.SETTING_TYPES_PAYMENT, settingTypePayment);
}


function* revenueTotal() {
    try {
        const response = yield call(revenueTotalApi);
        yield put(ApiResponseSuccess(dashboardTypes.REVENUE_TOTAL, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.REVENUE_TOTAL, error?.response?.data || "Failed"));
    }
}
export function* revenueTotalSaga() {
    yield takeEvery(dashboardTypes.REVENUE_TOTAL, revenueTotal);
};


function* monthlyTransaction() {
    try {
        const response = yield call(monthTransactionsApi);
        yield put(ApiResponseSuccess(dashboardTypes.MONTH_TRANSACTIONS, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.MONTH_TRANSACTIONS, error?.response?.data || "Failed"));
    }
}
export function* monthlyTransactionSaga() {
    yield takeEvery(dashboardTypes.MONTH_TRANSACTIONS, monthlyTransaction);
};


function* yearlyTransaction() {
    try {
        const response = yield call(yearTransactionsApi);
        yield put(ApiResponseSuccess(dashboardTypes.YEAR_TRANSACTIONS, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.YEAR_TRANSACTIONS, error?.response?.data || "Failed"));
    }
}
export function* yearlyTransactionSaga() {
    yield takeEvery(dashboardTypes.YEAR_TRANSACTIONS, yearlyTransaction);
};


function* weekTransaction() {
    try {
        const response = yield call(weekTransactionsApi);
        yield put(ApiResponseSuccess(dashboardTypes.WEEK_TRANSACTIONS, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.WEEK_TRANSACTIONS, error?.response?.data || "Failed"));
    }
}
export function* weekTransactionSaga() {
    yield takeEvery(dashboardTypes.WEEK_TRANSACTIONS, weekTransaction);
};


function* monthlyActivity() {
    try {
        const response = yield call(monthActivityApi);
        yield put(ApiResponseSuccess(dashboardTypes.MONTH_ACTIVITY, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.MONTH_ACTIVITY, error?.response?.data || "Failed"));
    }
}
export function* monthlyActivitySaga() {
    yield takeEvery(dashboardTypes.MONTH_ACTIVITY, monthlyActivity);
};


function* yearlyActivity() {
    try {
        const response = yield call(yearActivityApi);
        yield put(ApiResponseSuccess(dashboardTypes.YEAR_ACTIVITY, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.YEAR_ACTIVITY, error?.response?.data || "Failed"));
    }
}
export function* yearlyActivitySaga() {
    yield takeEvery(dashboardTypes.YEAR_ACTIVITY, yearlyActivity);
};


function* weekActivity() {
    try {
        const response = yield call(weekActivityApi);
        yield put(ApiResponseSuccess(dashboardTypes.WEEK_ACTIVITY, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.WEEK_ACTIVITY, error?.response?.data || "Failed"));
    }
}
export function* weekActivitySaga() {
    yield takeEvery(dashboardTypes.WEEK_ACTIVITY, weekActivity);
};


function* settingTypeLicense() {
    try {
        const response = yield call(settingTypesLicenceApi);
        yield put(ApiResponseSuccess(dashboardTypes.SETTING_TYPES_LICENSE, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.SETTING_TYPES_LICENSE, error?.response?.data || "Failed"));
    }
}
export function* settingTypeLicenseSaga() {
    yield takeEvery(dashboardTypes.SETTING_TYPES_LICENSE, settingTypeLicense);
};


function* cardReport() {
    try {
        const response = yield call(cardReportsApi);
        yield put(ApiResponseSuccess(dashboardTypes.CARDREPORTS, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.CARDREPORTS, error?.response?.data || "Failed"));
    }
}
export function* cardReportSaga() {
    yield takeEvery(dashboardTypes.CARDREPORTS, cardReport);
};


function* lastInvoice() {
    try {
        const response = yield call(innovoiceLastApi);
        yield put(ApiResponseSuccess(dashboardTypes.INNOVOICE_LAST, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.INNOVOICE_LAST, error?.response?.data || "Failed"));
    }
}
export function* lastInvoiceSaga() {
    yield takeEvery(dashboardTypes.INNOVOICE_LAST, lastInvoice);
};


function* lastEstimates() {
    try {
        const response = yield call(estimatesLastApi);
        yield put(ApiResponseSuccess(dashboardTypes.ESTIMATES_LAST, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.ESTIMATES_LAST, error?.response?.data || "Failed"));
    }
}
export function* lastEstimatesSaga() {
    yield takeEvery(dashboardTypes.ESTIMATES_LAST, lastEstimates);
};


function* lastBills() {
    try {
        const response = yield call(billsLastApi);
        yield put(ApiResponseSuccess(dashboardTypes.BILLS_LAST, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.BILLS_LAST, error?.response?.data || "Failed"));
    }
}
export function* lastBillsSaga() {
    yield takeEvery(dashboardTypes.BILLS_LAST, lastBills);
};


function* lastTransactions() {
    try {
        const response = yield call(transactionsLastApi);
        yield put(ApiResponseSuccess(dashboardTypes.TRANSACTIONS_LAST, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.TRANSACTIONS_LAST, error?.response?.data || "Failed"));
    }
}
export function* lastTransactionsSaga() {
    yield takeEvery(dashboardTypes.TRANSACTIONS_LAST, lastTransactions);
};


function* currencyDefault() {
    try {
        const response = yield call(currencyDefaultApi);
        yield put(ApiResponseSuccess(dashboardTypes.CURRENCY_DEFAULT, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.CURRENCY_DEFAULT, error?.response?.data || "Failed"));
    }
}
export function* currencyDefaultSaga() {
    yield takeEvery(dashboardTypes.CURRENCY_DEFAULT, currencyDefault);
};


function* invoiceReport() {
    try {
        const response = yield call(invoiceReportApi);
        yield put(ApiResponseSuccess(dashboardTypes.INVOICE_REPORT, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.INVOICE_REPORT, error?.response?.data || "Failed"));
    }
}
export function* invoiceReportSaga() {
    yield takeEvery(dashboardTypes.INVOICE_REPORT, invoiceReport);
};


function* lastGoals() {
    try {
        const response = yield call(goalsLastApi);
        yield put(ApiResponseSuccess(dashboardTypes.GOALS_LAST, response.data));
    } catch (error) {
        yield put(ApiResponseError(dashboardTypes.GOALS_LAST, error?.response?.data || "Failed"));
    }
}
export function* lastGoalsSaga() {
    yield takeEvery(dashboardTypes.GOALS_LAST, lastGoals);
};
