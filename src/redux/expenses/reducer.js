const initialState = {
    bills: {},
    expenses: {},
    debitNotes: {},
    vendors: {},
}

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPENSES_DATA':
            return {
                ...state,
                [action.payload.expenseType]: action.payload.data,
            };
        case 'CLEAR_EXPENSES_DATA':
            return {
                ...state,
                [action.payload.expenseType]: {},
            };
        default:
            return state;
    }
}
export default expensesReducer;