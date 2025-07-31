const initialState = {
    ProfitAndLoss: {},
    BalanceSheet: {},
    TaxesReport: {},
    SalesByCustomer: {},
    PurchaseByVendor: {},
    AccountBalances: {},
    TrialBalances: {},
    AccountTransactions: {},
}

const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REPORT_DATA':
            return {
                ...state,
                [action.payload.reportType]: action.payload.data,
            };
        case 'CLEAR_REPORT_DATA':
            return {
                ...state,
                [action.payload.reportType]: {},
            };
        default:
            return state;
    }
}
export default reportsReducer;