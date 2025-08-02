export const getDashboardData = () => ({
    type: dashboardTypes.FETCH_DASHBOARD_DATA,
});

export const getDashboardDataSuccess = (data) => ({
    type: dashboardTypes.FETCH_DASHBOARD_DATA_SUCCESS,
    payload: data,
});

export const getDashboardDataFailure = (error) => ({
    type: dashboardTypes.FETCH_DASHBOARD_DATA_FAILURE,
    payload: error,
});

export const updateDashboardFilters = (filters) => ({
    type: dashboardTypes.UPDATE_DASHBOARD_FILTERS,
    payload: filters,
});

export const resetDashboardState = () => ({
    type: dashboardTypes.RESET_DASHBOARD_STATE,
});

export const getSignin = () => ({
    type: dashboardTypes.SIGNIN,
});

export const getSummary = () => ({
    type: dashboardTypes.SUMMARY,
});

export const getMonthActivity = () => ({
    type: dashboardTypes.MONTH_ACTIVITY,
});

export const getMonthTransactions = () => ({
    type: dashboardTypes.MONTH_TRANSACTIONS,
});

export const getBankAccount = () => ({
    type: dashboardTypes.BANKACCOUNT,
});

export const getSubscriptionTenant3 = () => ({
    type: dashboardTypes.SUBSCRIPTION_TENANT_3,
});

export const getSettingTypesLicense = () => ({
    type: dashboardTypes.SETTING_TYPES_LICENSE,
});

export const getSettingTypesGeneral = () => ({
    type: dashboardTypes.SETTING_TYPES_GENERAL,
});

export const getCardReports = () => ({
    type: dashboardTypes.CARDREPORTS,
});

export const getInnovoiceLast = () => ({
    type: dashboardTypes.INNOVOICE_LAST,
});

export const getEstimatesLast = () => ({
    type: dashboardTypes.ESTIMATES_LAST,
});

export const getBillsLast = () => ({
    type: dashboardTypes.BILLS_LAST,
});

export const getTransactionsLast = () => ({
    type: dashboardTypes.TRANSACTIONS_LAST,
});

export const getCurrencyDefault = () => ({
    type: dashboardTypes.CURRENCY_DEFAULT,
});

export const getRevenueTotal = () => ({
    type: dashboardTypes.REVENUE_TOTAL,
});

export const getInvoiceReport = () => ({
    type: dashboardTypes.INVOICE_REPORT,
});

export const getGoalsLast = () => ({
    type: dashboardTypes.GOALS_LAST,
});
