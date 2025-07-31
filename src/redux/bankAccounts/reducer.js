const initialState = {
    bankDetails: {},
};

const bankAccountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BANK_DETAILS':
            return {
                ...state,
                bankDetails: action.payload,
            };
        case 'CLEAR_BANK_DETAILS':
            return {
                ...state,
                bankDetails: {},
            };
        default:
            return state;
    }
}
export default bankAccountsReducer;
