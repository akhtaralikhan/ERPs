import { SettingsActionTypes } from "./types";

export const apiResponseSuccess = (actionType, data) => ({
  type: SettingsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

export const apiResponseError = (actionType, error) => ({
  type: SettingsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getCompanyTenant3 = () => ({
  type: SettingsActionTypes.COMPANY_TENANT_3,
});

export const getCompany = () => ({
  type: SettingsActionTypes.COMPANY,
});

export const getSubscriptionsTenant3 = () => ({
  type: SettingsActionTypes.SUBSCRIPTIONS_TENANT_3,
});

export const getUsers = () => ({
  type: SettingsActionTypes.USERS,
});

export const getRoles = () => ({
  type: SettingsActionTypes.ROLES,
});

export const getUsers7 = () => ({
  type: SettingsActionTypes.USERS_7,
});

export const getCurrency = () => ({
  type: SettingsActionTypes.CURRENCY,
});

export const getCurrency10 = () => ({
  type: SettingsActionTypes.CURRENCY_10,
});

export const getInvoiceCustomizationTenant3 = () => ({
  type: SettingsActionTypes.INVOICE_CUSTOMIZATION_TENANT_3,
});

export const getUploaderCustomization10Images = () => ({
  type: SettingsActionTypes.UPLOADER_CUSTOMIZATION_10_IMAGES,
});

export const getSubscriptionsAllUser3 = () => ({
  type: SettingsActionTypes.SUBSCRIPTIONS_ALL_USER_3,
});

export const getSettingTypesLicense = () => ({
  type: SettingsActionTypes.SETTING_TYPE_LICENSE,
});

export const getPlan = () => ({
  type: SettingsActionTypes.PLAN,
});

export const getCategory = () => ({
  type: SettingsActionTypes.CATEGORY,
});

export const getTaxe6 = () => ({
  type: SettingsActionTypes.TAXE_6,
});

export const getTaxe = () => ({
  type: SettingsActionTypes.TAXE,
});

export const getProfile = () => ({
  type: SettingsActionTypes.PROFILE,
});

export const getUsers3 = () => ({
  type: SettingsActionTypes.USERS_3,
});

export const getSettingTypeGeneral = () => ({
  type: SettingsActionTypes.SETTING_TYPE_GENERAL,
});

export const getSettingTypeSocialLogin = () => ({
  type: SettingsActionTypes.SETTING_TYPE_SOCIAL_LOGIN,
});
