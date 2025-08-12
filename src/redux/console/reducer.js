import { ConsoleActionTypes } from "./types";

// export const initialState = {
//     SubscriptionsTenant: {},
//     allUsers: [],
//     subscriptionAllUser_3: [],
//     settingTypeLicense: {},
//     plan: [],
//     allSubscription: [],
//     currency: [],
//     settingTypeGeneral: {},
//     settingTypeEmail: {},
//     settingTypeSocialLogin: {},
//     settingTypePayment: {},
//     loading: false,
//     isDataFetched: false,
//     error: "",
// };

// export const consoleReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ConsoleActionTypes.API_RESPONSE_SUCCESS:
//             switch (action.payload.actionType) {
//                 case ConsoleActionTypes.FETCH_SUBSCRIPTIONS_TENANT:
//                     return {
//                         ...state,
//                         SubscriptionsTenant: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_ALL_USERS:
//                     return {
//                         ...state,
//                         allUsers: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_SUBSCRIPTION_ALL_USER_3:
//                     return {
//                         ...state,
//                         subscriptionAllUser_3: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_SETTING_LICENSE:
//                     return {
//                         ...state,
//                         settingTypeLicense: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_PLAN:
//                     return {
//                         ...state,
//                         plan: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_ALL_SUBSCRIPTION:
//                     return {
//                         ...state,
//                         allSubscription: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_CURRENCY:
//                     return {
//                         ...state,
//                         currency: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_SETTING_GENERAL:
//                     return {
//                         ...state,
//                         settingTypeGeneral: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_SETTING_EMAIL:
//                     return {
//                         ...state,
//                         settingTypeEmail: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_SETTING_SOCIAL_LOGIN:
//                     return {
//                         ...state,
//                         settingTypeSocialLogin: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ConsoleActionTypes.FETCH_SETTING_PAYMENT:
//                     return {
//                         ...state,
//                         settingTypePayment: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 default:
//                     return { ...state };
//             }

//         case ConsoleActionTypes.API_RESPONSE_ERROR:
//             return {
//                 ...state,
//                 loading: false,
//                 isDataFetched: false,
//                 error: action.payload.error,
//             };

//         case ConsoleActionTypes.FETCH_SUBSCRIPTIONS_TENANT:
//         case ConsoleActionTypes.FETCH_ALL_USERS:
//         case ConsoleActionTypes.FETCH_SUBSCRIPTION_ALL_USER_3:
//         case ConsoleActionTypes.FETCH_SETTING_LICENSE:
//         case ConsoleActionTypes.FETCH_PLAN:
//         case ConsoleActionTypes.FETCH_ALL_SUBSCRIPTION:
//         case ConsoleActionTypes.FETCH_CURRENCY:
//         case ConsoleActionTypes.FETCH_SETTING_GENERAL:
//         case ConsoleActionTypes.FETCH_SETTING_EMAIL:
//         case ConsoleActionTypes.FETCH_SETTING_SOCIAL_LOGIN:
//         case ConsoleActionTypes.FETCH_SETTING_PAYMENT:
//             return {
//                 ...state,
//                 loading: true,
//                 isDataFetched: false,
//                 error: "",
//             };

//         default:
//             return state;
//     }
// };

// export default consoleReducer;


export const INIT_STATE = {
    SOCIAL_LOGIN: {},
    settingTypeGeneral: {},
    settingTypePayment: {},
    SubscriptionsTenant: {},
    bankaccount: [],
    settingTypeLicense: {},
    allUsers: [],
    users: [],
    usersById: {},
    plan: [],
    planById: {},
    allSubscription: [],
    currency: [],
    stripeAccount: [],
    roles: [],
    enJson: {},
    settingTypeEmail: {},
    subscriptionAllUser_3: [], // optional, used in old state
    loading: false,
    isDataFetched: false,
    error: "",
};

const Console = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ConsoleActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3:
                    return {
                        ...state,
                        SubscriptionsTenant: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.USERS_ALL:
                    return {
                        ...state,
                        allUsers: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.USERS:
                    return {
                        ...state,
                        users: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.USERS_6_id:
                    return {
                        ...state,
                        usersById: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.STRIPE_ACCOUNT_ALL:
                    return {
                        ...state,
                        stripeAccount: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.ROLES:
                    return {
                        ...state,
                        roles: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.PLAN:
                    return {
                        ...state,
                        plan: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.PLAN_ID:
                    return {
                        ...state,
                        planById: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.SUBSCRIPTIONS_ALL:
                    return {
                        ...state,
                        allSubscription: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.CURRENCY:
                    return {
                        ...state,
                        currency: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.SETTING_TYPE_GENERAL:
                    return {
                        ...state,
                        settingTypeGeneral: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.SETTING_TYPE_EMAIL:
                    return {
                        ...state,
                        settingTypeEmail: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.SETTING_TYPE_SOCIAL_LOGIN:
                    return {
                        ...state,
                        SOCIAL_LOGIN: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.SETTING_TYPE_PAYMENT:
                    return {
                        ...state,
                        settingTypePayment: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.SETTING_TYPE_LICENSE:
                    return {
                        ...state,
                        settingTypeLicense: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.BANKACCOUNT:
                    return {
                        ...state,
                        bankaccount: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.EN_JSON:
                    return {
                        ...state,
                        enJson: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case ConsoleActionTypes.CREATEBANKACCOUNT:
                    return {
                        ...state,
                        bankaccount: [...state.bankaccount, action.payload.data],
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

        case ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3:
        case ConsoleActionTypes.USERS_ALL:
        case ConsoleActionTypes.USERS:
        case ConsoleActionTypes.USERS_6_id:
        case ConsoleActionTypes.STRIPE_ACCOUNT_ALL:
        case ConsoleActionTypes.ROLES:
        case ConsoleActionTypes.PLAN:
        case ConsoleActionTypes.PLAN_ID: // ✅ Add this here for loading state
        case ConsoleActionTypes.SUBSCRIPTIONS_ALL:
        case ConsoleActionTypes.CURRENCY:
        case ConsoleActionTypes.SETTING_TYPE_GENERAL:
        case ConsoleActionTypes.SETTING_TYPE_PAYMENT:
        case ConsoleActionTypes.SETTING_TYPE_LICENSE:
        case ConsoleActionTypes.SETTING_TYPE_SOCIAL_LOGIN:
        case ConsoleActionTypes.SETTING_TYPE_EMAIL:
        case ConsoleActionTypes.BANKACCOUNT:
        case ConsoleActionTypes.EN_JSON:
        case ConsoleActionTypes.CREATEBANKACCOUNT:
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


export default Console;