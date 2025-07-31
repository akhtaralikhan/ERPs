const initialState = {
    UsersAndRoles: [],
    Stripeaccounts: [],
    Pricing: [],
    Subscriptions: [],
    Currencies: [],
    ApplicationPreferences: {},
    UpdateEmailSettings: {},
    SocialLogin: {},
    UpdatePaymentSettings: {},
}

export const consoleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS_AND_ROLES':
            return {
                ...state,
                UsersAndRoles: action.payload,
            };
        case 'SET_STRIPE_ACCOUNTS':
            return {
                ...state,
                Stripeaccounts: action.payload,
            };
        case 'SET_PRICING':
            return {
                ...state,
                Pricing: action.payload,
            };
        case 'SET_SUBSCRIPTIONS':
            return {
                ...state,
                Subscriptions: action.payload,
            };
        case 'SET_CURRENCIES':
            return {
                ...state,
                Currencies: action.payload,
            };
        case 'SET_APPLICATION_PREFERENCES':
            return {
                ...state,
                ApplicationPreferences: action.payload,
            };
        case 'SET_UPDATE_EMAIL_SETTINGS':
            return {
                ...state,
                UpdateEmailSettings: action.payload,
            };
        case 'SET_SOCIAL_LOGIN':
            return {
                ...state,
                SocialLogin: action.payload,
            };
        case 'SET_UPDATE_PAYMENT_SETTINGS':
            return {
                ...state,
                UpdatePaymentSettings: action.payload,
            };
        default:
            return state;
    }
};