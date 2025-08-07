import { SettingsActionTypes } from "./types";

// const initialState = {
//     companyTenant: {},
//     users: [],
//     SubscriptionsTenant: {},
//     currencyDefault: [],
//     SubscriptionallUsers: [],
//     settingTypeLicense: {},
//     plan: [],
//     category: [],
//     taxe: [],
//     users_3: {},

// }

// const SettingsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_COMPANY_PROFILE':
//             return {
//                 ...state,
//                 CompanyProfile: action.payload,
//             };
//         case 'SET_USERS_ROLES':
//             return {
//                 ...state,
//                 UsersRoles: action.payload,
//             };
//         case 'SET_CURRENCIES':
//             return {
//                 ...state,
//                 Currencies: action.payload,
//             };
//         case 'SET_INVOICE_CUSTOMIZATION':
//             return {
//                 ...state,
//                 InvoiceCustomization: action.payload,
//             };
//         case 'SET_SUBSCRIPTIONS':
//             return {
//                 ...state,
//                 Subscriptions: action.payload,
//             };
//         case 'SET_PRICINGS':
//             return {
//                 ...state,
//                 Pricings: action.payload,
//             };
//         case 'SET_CATEGORIES':
//             return {
//                 ...state,
//                 Categories: action.payload,
//             };
//         case 'SET_TAXES':
//             return {
//                 ...state,
//                 taxes: action.payload,
//             };
//         case 'SET_USER_PROFILE':
//             return {
//                 ...state,
//                 UserProfile: action.payload,
//             };
//         case 'SET_SOCIAL_LOGIN':
//             return {
//                 ...state,
//                 SocialLogin: action.payload,
//             };
//         case 'SET_PAYMENT_SETTINGS':
//             return {
//                 ...state,
//                 PaymentSettings: action.payload,
//             };
//         case 'SET_EMAIL_SETTINGS':
//             return {
//                 ...state,
//                 EmailSettings: action.payload,
//             };
//         case 'SET_APPLICATION_PREFERENCES':
//             return {
//                 ...state,
//                 ApplicationPreferences: action.payload,
//             };
//         case 'CLOSE_ACCOUNT':
//             return {
//                 ...state,
//                 CloseAccount: action.payload
//             }
//         default:
//             return state;
//     }
// }
// export default SettingsReducer;

const initialState = {
    companyTenant: {},
    users: [],
    SubscriptionsTenant: {},
    customizationTenant_3: {},
    invoiceCustomization: {},
    currency: [],
    roles: [],
    currencyDefault: [],
    SubscriptionallUsers: [],
    settingTypeLicense: {},
    plan: [],
    category: [],
    taxe: [],
    users_3: {},
    users_profile: {},
    error: null,
};

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SettingsActionTypes.API_RESPONSE_SUCCESS: {
            const { actionType, data } = action.payload;

            switch (actionType) {
                case SettingsActionTypes.COMPANY_TENANT_3:
                case SettingsActionTypes.COMPANY:
                    return { ...state, companyTenant: data };

                case SettingsActionTypes.USERS:
                    return { ...state, users: data };

                case SettingsActionTypes.SUBSCRIPTIONS_TENANT_3:
                    return { ...state, SubscriptionsTenant: data };

                case SettingsActionTypes.INVOICE_CUSTOMIZATION_TENANT_3:
                    return { ...state, invoiceCustomization: data };

                case SettingsActionTypes.CURRENCY:
                    return { ...state, currency: data };

                case SettingsActionTypes.ROLES:
                    return { ...state, roles: data };

                case SettingsActionTypes.CURRENCY_10:
                    return { ...state, currencyDefault: data };

                case SettingsActionTypes.SUBSCRIPTIONS_ALL_USER_3:
                    return { ...state, SubscriptionallUsers: data };

                case SettingsActionTypes.SETTING_TYPES_LICENSE:
                    return { ...state, settingTypeLicense: data };

                case SettingsActionTypes.PLAN:
                    return { ...state, plan: data };

                case SettingsActionTypes.CATEGORY:
                case SettingsActionTypes.CATEGORY_9:
                    return { ...state, category: data };

                case SettingsActionTypes.TAXE:
                case SettingsActionTypes.TAXE_6:
                    return { ...state, taxe: data };

                case SettingsActionTypes.USERS_3:
                    return { ...state, users_3: data };

                case SettingsActionTypes.PROFILE:
                    return { ...state, users_profile: data };

                case SettingsActionTypes.SETTING_TYPE_GENERAL:
                    return { ...state, settingTypeGeneral: data };

                case SettingsActionTypes.SETTING_TYPE_SOCIAL_LOGIN:
                    return { ...state, settingTypeSocialLogin: data };

                case SettingsActionTypes.UPLOADER_CUSTOMIZATION_10_IMAGES:
                    return { ...state, customizationTenant_3: data };

                default:
                    return state;
            }
        }

        case SettingsActionTypes.API_RESPONSE_ERROR: {
            const { actionType, error } = action.payload;
            console.error(Error in `${actionType}:`, error);
            return {
                ...state,
                error,
            };
        }

        default:
            return state;
    }
};

export default SettingsReducer;