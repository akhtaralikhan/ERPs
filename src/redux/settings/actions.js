import { SettingsActionTypes } from "./types";

// ✅ Common API Response Success
export const apiResponseSuccess = (actionType, data) => ({
  type: SettingsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// ❌ Common API Response Error
export const apiResponseError = (actionType, error) => ({
  type: SettingsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

// 🏢 Get Company Tenant
export const getCompanyTenant3 = () => ({
  type: SettingsActionTypes.COMPANY_TENANT_3,
});

// 🏢 Get Company Info
export const getCompany = () => ({
  type: SettingsActionTypes.COMPANY,
});

// 📦 Get Subscriptions (Tenant 3)
export const getSubscriptionsTenant3 = () => ({
  type: SettingsActionTypes.SUBSCRIPTIONS_TENANT_3,
});

// 👤 Get Users
export const getUsers = () => ({
  type: SettingsActionTypes.USERS,
});

// 👥 Get Roles
export const getRoles = () => ({
  type: SettingsActionTypes.ROLES,
});

// 👤 Get Users_7
export const getUsers7 = () => ({
  type: SettingsActionTypes.USERS_7,
});

// 💱 Get Currency
export const getCurrency = () => ({
  type: SettingsActionTypes.CURRENCY,
});

// 💱 Get Currency_4
export const getCurrency4 = () => ({
  type: SettingsActionTypes.CURRENCY_4,
});

// 🧾 Get Invoice Customization for Tenant 3
export const getInvoiceCustomizationTenant3 = () => ({
  type: SettingsActionTypes.INVOICE_CUSTOMIZATION_TENANT_3,
});

// 🖼️ Get Image Uploader Customization
export const getUploaderCustomization10Images = () => ({
  type: SettingsActionTypes.UPLOADER_CUSTOMIZATION_10_IMAGES,
});

// 📦 Get All Users' Subscriptions (Tenant 3)
export const getSubscriptionsAllUser3 = () => ({
  type: SettingsActionTypes.SUBSCRIPTIONS_ALL_USER_3,
});

// 📃 Get License Settings
export const getSettingTypeLicense = () => ({
  type: SettingsActionTypes.SETTING_TYPE_LICENSE,
});

// 🗂️ Get Plan
export const getPlan = () => ({
  type: SettingsActionTypes.PLAN,
});

// 📁 Get Category
export const getCategory = () => ({
  type: SettingsActionTypes.CATEGORY,
});

// 🧾 Get Taxe_6
export const getTaxe6 = () => ({
  type: SettingsActionTypes.TAXE_6,
});

// 🧾 Get Taxe
export const getTaxe = () => ({
  type: SettingsActionTypes.TAXE,
});

// 👤 Get Profile
export const getProfile = () => ({
  type: SettingsActionTypes.PROFILE,
});

// 👤 Get Users_3
export const getUsers3 = () => ({
  type: SettingsActionTypes.USERS_3,
});

// ⚙️ Get General Settings
export const getSettingTypeGeneral = () => ({
  type: SettingsActionTypes.SETTING_TYPE_GENERAL,
});

// 🔐 Get Social Login Settings
export const getSettingTypeSocialLogin = () => ({
  type: SettingsActionTypes.SETTING_TYPE_SOCIAL_LOGIN,
});
