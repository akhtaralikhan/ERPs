import { dashboardTypes } from "./types";

export const INIT_STATE = {
    summary: [],
    monthlyTransactions: {},
    monthlyActivity: {},
    cardReports: [],
    lastInvoice: [],
    lastEstimaytes: [],
    lastBills: [],
    lastTransactions: [],
    defaultCurrency: {},
    totalRevenue: 0,
    report: [],
    lastGoals: [],
    loading: false,
    error: null,
};

const dashboardReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case dashboardTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case dashboardTypes.SUMMARY:
                    return {
                        ...state,
                        summary: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.MONTH_TRANSACTIONS:
                    return {
                        ...state,
                        monthlyTransactions: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.MONTH_ACTIVITY:
                    return {
                        ...state,
                        monthlyActivity: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.CARDREPORTS:
                    return {
                        ...state,
                        cardReports: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.INNOVOICE_LAST:
                    return {
                        ...state,
                        lastInvoice: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.ESTIMATES_LAST:
                    return {
                        ...state,
                        lastEstimaytes: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.BILLS_LAST:
                    return {
                        ...state,
                        lastBills: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.TRANSACTIONS_LAST:
                    return {
                        ...state,
                        lastTransactions: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.CURRENCY_DEFAULT:
                    return {
                        ...state,
                        defaultCurrency: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.REVENUE_TOTAL:
                    return {
                        ...state,
                        totalRevenue: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.INVOICE_REPORT:
                    return {
                        ...state,
                        report: action.payload.data,
                        loading: false,
                    };
                case dashboardTypes.GOALS_LAST:
                    return {
                        ...state,
                        lastGoals: action.payload.data,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case dashboardTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case dashboardTypes.SUMMARY:
                case dashboardTypes.MONTH_TRANSACTIONS:
                case dashboardTypes.MONTH_ACTIVITY:
                case dashboardTypes.CARDREPORTS:
                case dashboardTypes.INNOVOICE_LAST:
                case dashboardTypes.ESTIMATES_LAST:
                case dashboardTypes.BILLS_LAST:
                case dashboardTypes.TRANSACTIONS_LAST:
                case dashboardTypes.CURRENCY_DEFAULT:
                case dashboardTypes.REVENUE_TOTAL:
                case dashboardTypes.INVOICE_REPORT:
                case dashboardTypes.GOALS_LAST:
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case dashboardTypes.SUMMARY:
        case dashboardTypes.MONTH_TRANSACTIONS:
        case dashboardTypes.MONTH_ACTIVITY:
        case dashboardTypes.CARDREPORTS:
        case dashboardTypes.INNOVOICE_LAST:
        case dashboardTypes.ESTIMATES_LAST:
        case dashboardTypes.BILLS_LAST:
        case dashboardTypes.TRANSACTIONS_LAST:
        case dashboardTypes.CURRENCY_DEFAULT:
        case dashboardTypes.REVENUE_TOTAL:
        case dashboardTypes.INVOICE_REPORT:
        case dashboardTypes.GOALS_LAST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        default:
            return { ...state };
    }
};

export default dashboardReducer;
