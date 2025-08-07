import { AccountingActionTypes } from "./types";

// export const ApiResponseSuccess = (actionType, data) => ({
//     type: AccountingActionTypes.API_RESPONSE_SUCCESS,
//     payload: { actionType, data },
// });

// // common error
// export const ApiResponseError = (
//     actionType,
//     error
// ) => ({
//     type: AccountingActionTypes.API_RESPONSE_ERROR,
//     payload: { actionType, error },
// });

// // GET Actions

// export const getTax = () =>
//     getAction(AccountingActionTypes.TAXE);

// export const getManualJournal_3 = () =>
//     getAction(AccountingActionTypes.MANUALJOURNAL_3);

// export const getInvoiceNan = () =>
//     getAction(AccountingActionTypes.INVOICE_NAN);

// export const getBillNan = () =>
//     getAction(AccountingActionTypes.BILL_NAN);

// export const getBankAccount = () =>
//     getAction(AccountingActionTypes.BANKACCOUNT);

// export const getRevenueTotal = () =>
//     getAction(AccountingActionTypes.REVENUE_TOTAL);

// export const getGoal = () =>
//     getAction(AccountingActionTypes.GOAL);

// // Additional FETCH prefixed ones

// export const fetchSocialLogin = () =>
//     getAction(AccountingActionTypes.FETCH_SOCIAL_LOGIN);

// export const fetchSettingGeneral = () =>
//     getAction(AccountingActionTypes.FETCH_SETTING_GENERAL);

// export const fetchSettingPayment = () =>
//     getAction(AccountingActionTypes.FETCH_SETTING_PAYMENT);

// export const fetchSubscriptionTenant = () =>
//     getAction(AccountingActionTypes.FETCH_SUBSCRIPTION_TENANT);

// export const fetchBankAccount = () =>
//     getAction(AccountingActionTypes.FETCH_BANK_ACCOUNT);

// export const fetchSettingLicense = () =>
//     getAction(AccountingActionTypes.FETCH_SETTING_LICENSE);

// export const fetchManualJournal = () =>
//     getAction(AccountingActionTypes.FETCH_MANUAL_JOURNAL);

// export const fetchTransaction = () =>
//     getAction(AccountingActionTypes.FETCH_TRANSACTION);

// export const fetchCurrencyDefault = () =>
//     getAction(AccountingActionTypes.FETCH_CURRENCY_DEFAULT);

// export const fetchChartAccounts = () =>
//     getAction(AccountingActionTypes.FETCH_CHART_ACCOUNTS);

// export const fetchAssets = () =>
//     getAction(AccountingActionTypes.FETCH_ASSETS);

// export const getManualJournal = () => ({
//     type: ManualJournalActionTypes.MANUALJOURNAL,
// });

// export const getManualJournal3 = () => ({
//     type: ManualJournalActionTypes.MANUALJOURNAL_3,
// });

// export const getManualJournal4 = () => ({
//     type: ManualJournalActionTypes.MANUALJOURNAL_4,
// });

// export const getCurrency = () => ({
//     type: ManualJournalActionTypes.CURRENCY,
// });

// export const getVendor = () => ({
//     type: ManualJournalActionTypes.VENDOR,
// });

// export const getTaxe = () => ({
//     type: ManualJournalActionTypes.TAXE,
// });

// export const getCustomer = () => ({
//     type: ManualJournalActionTypes.CUSTOMER,
// });

// export const getChartAccounts = () => ({
//     type: ManualJournalActionTypes.CHARTACCOUNTS,
// });

// export const getTransaction = () => ({
//     type: ManualJournalActionTypes.TRANSACTION,
// });

// export const getAccountType = () => ({
//     type: ChartAccountActionTypes.ACCOUNTTYPE,
// });
// export const getChartAccounts1 = () => ({
//     type: ChartAccountActionTypes.CHARTACCOUNTS_1,
// });


// export const getAssets = () => ({
//     type: AssetActionTypes.ASSETS,
// });

// export const getAssets1 = () => ({
//     type: AssetActionTypes.ASSETS_1,
// });

export const apiResponseSuccess = (actionType, data) => ({
    type: AccountingActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const apiResponseError = (actionType, error) => ({
    type: AccountingActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getManualJournal = () => ({
    type: AccountingActionTypes.MANUALJOURNAL,
});

export const getManualJournal3 = () => ({
    type: AccountingActionTypes.MANUALJOURNAL_3,
});

export const getCurrency = () => ({
    type: AccountingActionTypes.CURRENCY,
});

export const getCurrencyDefault = () => ({
    type: AccountingActionTypes.CURRENCY_DEFAULT,
});

export const getChartAccounts = () => ({
    type: AccountingActionTypes.CHARTACCOUNTS,
});

export const getAccountType = () => ({
    type: AccountingActionTypes.ACCOUNTTYPE,
});

export const getVendor = () => ({
    type: AccountingActionTypes.VENDOR,
});

export const getCustomer = () => ({
    type: AccountingActionTypes.CUSTOMER,
});

export const getTaxe = () => ({
    type: AccountingActionTypes.TAXE,
});

export const getTransactions = () => ({
    type: AccountingActionTypes.TRANSACTION,
});

export const getInvoiceNaN = () => ({
    type: AccountingActionTypes.INVOICE_NAN,
});

export const getBillNaN = () => ({
    type: AccountingActionTypes.BILL_NAN,
});

export const getPayment = () => ({
    type: AccountingActionTypes.PAYMENT,
});

export const getBankAccount = () => ({
});

export const getRevenue = () => ({
    type: AccountingActionTypes.REVENUE,
});

export const getRevenueTotal = () => ({
    type: AccountingActionTypes.REVENUE_TOTAL,
});

export const getGoal = () => ({
    type: AccountingActionTypes.GOAL,
});

export const getAssets = () => ({
    type: AccountingActionTypes.ASSETS,
});