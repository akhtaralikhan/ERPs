const initialState = {
    estimates: {},
    invoices: {},
    recurringInvoices: {},
    incomes: {},
    creditNotes: {},
    customers: {},
}
const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SALES_DATA':
            return {
                ...state,
                [action.payload.salesType]: action.payload.data,
            };
        case 'CLEAR_SALES_DATA':
            return {
                ...state,
                [action.payload.salesType]: {},
            };
        default:
            return state;
    }
}
export default salesReducer;