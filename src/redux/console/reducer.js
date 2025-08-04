import { ConsoleActionTypes } from "./types";

export const initialState = {
    SubscriptionsTenant: {},
    allUsers: [],
    subscriptionAllUser_3: [],
    settingTypeLicense: {},
    plan: [],
    allSubscription: [],
    currency: [],
    settingTypeGeneral: {},
    settingTypeEmail: {},
    settingTypeSocialLogin: {},
    settingTypePayment: {},
    loading: false,
    isDataFetched: false,
    error: "",
};

export const consoleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ConsoleActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case ConsoleActionTypes.FETCH_SUBSCRIPTIONS_TENANT:
                    return {
                        ...state,
                        SubscriptionsTenant: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_ALL_USERS:
                    return {
                        ...state,
                        allUsers: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_SUBSCRIPTION_ALL_USER_3:
                    return {
                        ...state,
                        subscriptionAllUser_3: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_SETTING_LICENSE:
                    return {
                        ...state,
                        settingTypeLicense: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_PLAN:
                    return {
                        ...state,
                        plan: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_ALL_SUBSCRIPTION:
                    return {
                        ...state,
                        allSubscription: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_CURRENCY:
                    return {
                        ...state,
                        currency: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_SETTING_GENERAL:
                    return {
                        ...state,
                        settingTypeGeneral: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_SETTING_EMAIL:
                    return {
                        ...state,
                        settingTypeEmail: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_SETTING_SOCIAL_LOGIN:
                    return {
                        ...state,
                        settingTypeSocialLogin: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ConsoleActionTypes.FETCH_SETTING_PAYMENT:
                    return {
                        ...state,
                        settingTypePayment: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                default:
                    return { ...state };
            }

        case ConsoleActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                loading: false,
                isDataFetched: false,
                error: action.payload.error,
            };

        case ConsoleActionTypes.FETCH_SUBSCRIPTIONS_TENANT:
        case ConsoleActionTypes.FETCH_ALL_USERS:
        case ConsoleActionTypes.FETCH_SUBSCRIPTION_ALL_USER_3:
        case ConsoleActionTypes.FETCH_SETTING_LICENSE:
        case ConsoleActionTypes.FETCH_PLAN:
        case ConsoleActionTypes.FETCH_ALL_SUBSCRIPTION:
        case ConsoleActionTypes.FETCH_CURRENCY:
        case ConsoleActionTypes.FETCH_SETTING_GENERAL:
        case ConsoleActionTypes.FETCH_SETTING_EMAIL:
        case ConsoleActionTypes.FETCH_SETTING_SOCIAL_LOGIN:
        case ConsoleActionTypes.FETCH_SETTING_PAYMENT:
            return {
                ...state,
                loading: true,
                isDataFetched: false,
                error: "",
            };

        default:
            return state;
    }
};

export default consoleReducer;
