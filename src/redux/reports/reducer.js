// import { ReportsActionTypes } from "./types";

// const initialState = {
//     currencyDefault: {},
//     customeDateReport: [],
//     loading: false,
//     isDataFetched: false,
//     error: "",
// };

// const reportsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ReportsActionTypes.API_RESPONSE_SUCCESS:
//             switch (action.payload.actionType) {
//                 case ReportsActionTypes.FETCH_CURRENCY_DEFAULT:
//                     return {
//                         ...state,
//                         currencyDefault: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 case ReportsActionTypes.FETCH_CUSTOM_DATE_REPORT:
//                     return {
//                         ...state,
//                         customeDateReport: action.payload.data,
//                         loading: false,
//                         isDataFetched: true,
//                     };
//                 default:
//                     return { ...state };
//             }

//         case ReportsActionTypes.API_RESPONSE_ERROR:
//             return {
//                 ...state,
//                 loading: false,
//                 isDataFetched: false,
//                 error: action.payload.error,
//             };

//         case ReportsActionTypes.FETCH_CURRENCY_DEFAULT:
//         case ReportsActionTypes.FETCH_CUSTOM_DATE_REPORT:
//             return {
//                 ...state,
//                 loading: true,
//                 isDataFetched: false,
//                 error: "",
//             };

//         default:
//             return state;
//     }
// };

// export default reportsReducer;

import { reportsActionTypes } from "./types";

const initialState = {
    currencyDefault: {},
    customerDateReport: [],
    reportTax: [],
    reportProfitandloss: [],
    reportBalancesheet: [],
    reportVendor: [],
    reportAccountbalance: [],
    reportTrialbalance: [],
    reportAccounttransaction: [],
    loading: false,
    isDataFetched: false,
    error: "",
};

const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case reportsActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case reportsActionTypes.CURRENCY_DEFAULT:
                    return {
                        ...state,
                        currencyDefault: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_PROFIT_AND_LOSS:
                    return {
                        ...state,
                        reportProfitandloss: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_BALANCE_SHEET:
                    return {
                        ...state,
                        reportBalancesheet: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_TAX:
                    return {
                        ...state,
                        reportTax: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_CUSTOMER:
                    return {
                        ...state,
                        customerDateReport: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_VENDOR:
                    return {
                        ...state,
                        reportVendor: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_ACCOUNT_BALANCE:
                    return {
                        ...state,
                        reportAccountbalance: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_TRIAL_BALANCE:
                    return {
                        ...state,
                        reportTrialbalance: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case reportsActionTypes.REPORT_ACCOUNT_TRANSACTION:
                    return {
                        ...state,
                        reportAccounttransaction: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                default:
                    return { ...state };
            }

        case reportsActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                loading: false,
                isDataFetched: false,
                error: action.payload.error,
            };

        // Handle loading state for each request
        case reportsActionTypes.CURRENCY_DEFAULT:
        case reportsActionTypes.REPORT_PROFIT_AND_LOSS:
        case reportsActionTypes.REPORT_BALANCE_SHEET:
        case reportsActionTypes.REPORT_TAX:
        case reportsActionTypes.REPORT_CUSTOMER:
        case reportsActionTypes.REPORT_VENDOR:
        case reportsActionTypes.REPORT_ACCOUNT_BALANCE:
        case reportsActionTypes.REPORT_TRIAL_BALANCE:
        case reportsActionTypes.REPORT_ACCOUNT_TRANSACTION:
            return {
                ...state,
                loading: true,
                isDataFetched: false,
                error: "",
            };

        default:
            return state;
    }
};

export default reportsReducer;