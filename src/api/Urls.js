import { userData } from "../constant/Config";

// fake API URLs for a web application
export const endPoints = {
    auth: {
        sigIn: "auth/sign-in",
        register: "auth",
        forgetPassword: "auth/send-recovery-link",
    },
    dashboard: {
        transactionSummary: "dashboard/transactions/summary",
        MonthlyTransaction: "dashboard/transactions/period/month",
        mothlyActivity: "dashboard/activity/period/month",
        settingTypesLicence: "setting/type/LICENSE",
        subscriptionTenant: `Subscriptions/tenant/${userData.id}`,
        bankaccount: "bankaccount",
        settingTypesGeneral: "setting/type/GENERAL",
        cardReport: "dashboard/card-reports",
        lastEstimates: "dashboard/estimates/last",
        lastTransaction: "dashboard/transactions/last",
        lastInvoice: "dashboard/invoices/last",
        lastBills: "dashboard/bills/last",
        currencyDefault: "currency/default",
        invoiceReport: "dashboard/invoice/report",
        totalRevenue: "api/revenue/total",
        lastGoals: "dashboard/goals/last",

    },
    bankaccount: {
        bankaccount: "bankaccount",
        currencyDefault: "currency/default",
    },
    productAndServices: {
        product: "product",
        currencyDefault: "currency/default",
        subscriptionTenant: `Subscriptions/tenant/${userData.id}`,
        service: "service",
    },
    sales: {
        proposal: "proposal",
        subscriptionTenant: `Subscriptions/tenant/${userData.id}`,
        invoice: "invoice",
        customer: "customer",
        currency: "currency",
        totalRevenue: "revenue/total",
        currencyDefault: "currency/default",
        revenue: "revenue",
        goal: "goal",
        creditnote: "creditnote",
    },
    expenses: {
        bill: "bill",
        payment: "payment",
        currencyDefault: "currency/default",
        debitnote: "debitnote",
        vendor: "vendor",
    },
    accounting: {
        manualjournal: "manualjournal",
        transaction: "transaction",
        currencyDefault: "currency/default",
        chartaccounts: "chartaccounts",
        assets: "assets",
        vendor: "vendor",
        taxe: "taxe",
        customer: "customer"
    },
    reports: {
        currencyDefault: "currency/default",
        // getReportsDataOfCustomeDate: `report/profit-and-loss/start-at/${startDate}/end-at/${endDate}`, //gotta make this dynamic
    },
    settings: {
        comapnyTenant: `company/tenant/${userData.id}`,
        users: "users",
        subscriptionTenant: `Subscriptions/tenant/${userData.id}`,
        currency: "currency",
        subscriptionTenantAllUser: `Subscriptions/all/user/${userData.id}`,
        settingTypeLicense: "setting/type/LICENSE",
        plan: "plan",
        category: "category",
        taxe: "taxe",
    },
    console: {
        users_UserId: `users/${userData.id}`,
        allUsers: "users/all",
        stripeAccountAll: "stripe/account/all",
        subscriptionTenantAllUser: `Subscriptions/all/user/${userData.id}`,
        subscriptionTenantUser: `Subscriptions/tenant/${userData.id}`,
        settingTypesLicence: "setting/type/LICENSE",
        plan: "plan",
        allSubscription: "Subscriptions/all",
        currency: "currency",
        settingTypesGeneral: "setting/type/GENERAL",
        settingTypeEmail: "setting/type/EMAIL",
        settingTypeSocialLogin: "setting/type/SOCIAL_LOGIN",
        settingTyopePayment: "setting/type/PAYMENT",
        createBankAccount: "bankaccount"
    },
    chats: {
        getChatMessages: "/chats/messages",
        sendMessage: "/chats/send-message",
    },
}