import { AccountingActionTypes } from "./types";

export const INIT_STATE = {
    SOCIAL_LOGIN: {},
    settingTypeGeneral: {},
    settingTypePayment: {},
    SubsriptionTenant: {},
    bankaccount: {},
    settingTypeLicense: {},
    manualjournal: [],
    transaction: [],
    currencyDefault: {},
    chartaccounts: [],
    assets: [],
    loading: false,
    isDataFetched: false,
    error: "",
};

const AccountingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case AccountingActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case AccountingActionTypes.FETCH_SOCIAL_LOGIN:
                    return {
                        ...state,
                        SOCIAL_LOGIN: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_SETTING_GENERAL:
                    return {
                        ...state,
                        settingTypeGeneral: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_SETTING_PAYMENT:
                    return {
                        ...state,
                        settingTypePayment: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_SUBSCRIPTION_TENANT:
                    return {
                        ...state,
                        SubsriptionTenant: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_BANK_ACCOUNT:
                    return {
                        ...state,
                        bankaccount: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_SETTING_LICENSE:
                    return {
                        ...state,
                        settingTypeLicense: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_MANUAL_JOURNAL:
                    return {
                        ...state,
                        manualjournal: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_TRANSACTION:
                    return {
                        ...state,
                        transaction: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_CURRENCY_DEFAULT:
                    return {
                        ...state,
                        currencyDefault: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_CHART_ACCOUNTS:
                    return {
                        ...state,
                        chartaccounts: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case AccountingActionTypes.FETCH_ASSETS:
                    return {
                        ...state,
                        assets: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                default:
                    return { ...state };
            }

        case AccountingActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                loading: false,
                isDataFetched: false,
                error: action.payload.error,
            };

        case AccountingActionTypes.FETCH_SOCIAL_LOGIN:
        case AccountingActionTypes.FETCH_SETTING_GENERAL:
        case AccountingActionTypes.FETCH_SETTING_PAYMENT:
        case AccountingActionTypes.FETCH_SUBSCRIPTION_TENANT:
        case AccountingActionTypes.FETCH_BANK_ACCOUNT:
        case AccountingActionTypes.FETCH_SETTING_LICENSE:
        case AccountingActionTypes.FETCH_MANUAL_JOURNAL:
        case AccountingActionTypes.FETCH_TRANSACTION:
        case AccountingActionTypes.FETCH_CURRENCY_DEFAULT:
        case AccountingActionTypes.FETCH_CHART_ACCOUNTS:
        case AccountingActionTypes.FETCH_ASSETS:
            return {
                ...state,
                loading: true,
                error: "",
                isDataFetched: false,
            };

        default:
            return { ...state };
    }
};

export default AccountingReducer;
