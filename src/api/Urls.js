// fake API URLs for a web application
export const endPoints = {
    auth: {
        sigIn: "auth/sign-in",
        register: "/auth/register",
        forgetPassword: "/auth/forget-password",
    },
    sales: {
        getSalesData: "/sales/data",
        createSale: "/sales/create",
    },
    expenses: {
        getExpensesData: "/expenses/data",
        createExpense: "/expenses/create",
    },
    accounts: {
        getAccountsData: "/accounts/data",
        createAccount: "/accounts/create",
    },
    reports: {
        getReportsData: "/reports/data",
    },
    settings: {
        getSettingsData: "/settings/data",
        updateSettings: "/settings/update",
    },
    dashboard: {
        getDashboardData: "/dashboard/data",
    },
    chats: {
        getChatMessages: "/chats/messages",
        sendMessage: "/chats/send-message",
    },
}