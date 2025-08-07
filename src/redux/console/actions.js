import { ConsoleActionTypes } from "./types";

export const apiResponseSuccessAction = (actionType, data) => ({
    type: ConsoleActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const apiResponseErrorAction = (actionType, error) => ({
    type: ConsoleActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getSubscriptionsTenant3Action = () => ({
    type: ConsoleActionTypes.SUBSCRIPTIONS_TENANT_3,
});

export const getUsersAllAction = () => ({
    type: ConsoleActionTypes.USERS_ALL,
});

export const getStripeAccountAllAction = () => ({
    type: ConsoleActionTypes.STRIPE_ACCOUNT_ALL,
});

export const getRolesAction = () => ({
    type: ConsoleActionTypes.ROLES,
});

export const getUsersAction = () => ({
    type: ConsoleActionTypes.USERS,
});

export const getUsers6Action = () => ({
    type: ConsoleActionTypes.USERS_6_id,
});

export const getPlanAction = () => ({
    type: ConsoleActionTypes.PLAN,
});

export const getSubscriptionsAllAction = () => ({
    type: ConsoleActionTypes.SUBSCRIPTIONS_ALL,
});

export const getCurrencyAction = () => ({
    type: ConsoleActionTypes.CURRENCY,
});

export const getSettingTypeGeneralAction = () => ({
    type: ConsoleActionTypes.SETTING_TYPE_GENERAL,
});

export const getSettingTypePaymentAction = () => ({
    type: ConsoleActionTypes.SETTING_TYPE_PAYMENT,
});

export const getSettingTypeLicenseAction = () => ({
    type: ConsoleActionTypes.SETTING_TYPE_LICENSE,
});

export const getSettingTypeSocialLoginAction = () => ({
    type: ConsoleActionTypes.SETTING_TYPE_SOCIAL_LOGIN,
});

export const getBankAccountAction = () => ({
    type: ConsoleActionTypes.BANKACCOUNT,
});

export const getEnJsonAction = () => ({
    type: ConsoleActionTypes.EN_JSON,
});

export const getSettingTypeEmailAction = () => ({
    type: ConsoleActionTypes.SETTING_TYPE_EMAIL,
});

export const createBankAccountActionAction = (user) => ({
    type: ConsoleActionTypes.CREATEBANKACCOUNT,
    payload: { user },
});

export const getPlanIdAction = () => ({
    type: ConsoleActionTypes.PLAN_ID,
});