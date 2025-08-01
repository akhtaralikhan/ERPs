import { boolean } from "yup";

const initialState = {
    CompanyProfile: {},
    UsersRoles: [],
    Currencies: [],
    InvoiceCustomization: {},
    Subscriptions: [],
    Pricings: [],
    Categories: [],
    taxes: [],
    UserProfile: {},
    SocialLogin: {},
    PaymentSettings: {},
    EmailSettings: {},
    ApplicationPreferences: {},
    CloseAccount: false,
}

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMPANY_PROFILE':
            return {
                ...state,
                CompanyProfile: action.payload,
            };
        case 'SET_USERS_ROLES':
            return {
                ...state,
                UsersRoles: action.payload,
            };
        case 'SET_CURRENCIES':
            return {
                ...state,
                Currencies: action.payload,
            };
        case 'SET_INVOICE_CUSTOMIZATION':
            return {
                ...state,
                InvoiceCustomization: action.payload,
            };
        case 'SET_SUBSCRIPTIONS':
            return {
                ...state,
                Subscriptions: action.payload,
            };
        case 'SET_PRICINGS':
            return {
                ...state,
                Pricings: action.payload,
            };
        case 'SET_CATEGORIES':
            return {
                ...state,
                Categories: action.payload,
            };
        case 'SET_TAXES':
            return {
                ...state,
                taxes: action.payload,
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                UserProfile: action.payload,
            };
        case 'SET_SOCIAL_LOGIN':
            return {
                ...state,
                SocialLogin: action.payload,
            };
        case 'SET_PAYMENT_SETTINGS':
            return {
                ...state,
                PaymentSettings: action.payload,
            };
        case 'SET_EMAIL_SETTINGS':
            return {
                ...state,
                EmailSettings: action.payload,
            };
        case 'SET_APPLICATION_PREFERENCES':
            return {
                ...state,
                ApplicationPreferences: action.payload,
            };
        case 'CLOSE_ACCOUNT':
            return {
                ...state,
                CloseAccount: action.payload
            }
        default:
            return state;
    }
}
export default SettingsReducer;