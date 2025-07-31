const initialState = {
    dashboard: {},
    profitAndLoss: {},
    transactions: {},
    recentInvoice: {},
    shareDataSet: {},
    recentEstimates: {},
    recentBills: {},
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DASHBOARD_DATA':
            return {
                ...state,
                dashboard: action.payload,
            };
        case 'SET_PROFIT_AND_LOSS_DATA':
            return {
                ...state,
                profitAndLoss: action.payload,
            };
        case 'SET_TRANSACTIONS_DATA':
            return {
                ...state,
                transactions: action.payload,
            };
        case 'SET_RECENT_INVOICE_DATA':
            return {
                ...state,
                recentInvoice: action.payload,
            };
        case 'SET_SHARE_DATA_SET':
            return {
                ...state,
                shareDataSet: action.payload,
            };
        case 'SET_RECENT_ESTIMATES':
            return {
                ...state,
                recentEstimates: action.payload,
            };
        case 'SET_RECENT_BILLS':
            return {
                ...state,
                recentBills: action.payload,
            };
        default:
            return state;
    }
}
export default dashboardReducer;