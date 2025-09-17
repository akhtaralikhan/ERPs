import { expensesActionTypes } from "./types";

const initialState = {
    bills: [],
    payment: [],
    defaultCurrency: {},
    debitNotes: [],
    vendors: [],
    loading: false,
    error: null,
};

const expenses = (state = initialState, action) => {
    switch (action.type) {
        case expensesActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case expensesActionTypes.BILL:
                    return {
                        ...state,
                        bills: action.payload.data,
                        loading: false,
                    };
                case expensesActionTypes.PAYMENT:
                    return {
                        ...state,
                        payment: action.payload.data,
                        loading: false,
                    };
                case expensesActionTypes.DEFAULT_CURRENCY:
                    return {
                        ...state,
                        defaultCurrency: action.payload.data,
                        loading: false,
                    };
                case expensesActionTypes.DEBITNOTES:
                    return {
                        ...state,
                        debitNotes: action.payload.data,
                        loading: false,
                    };
                case expensesActionTypes.VENDOR:
                    return {
                        ...state,
                        vendors: action.payload.data,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case expensesActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };

        case expensesActionTypes.BILL:
        case expensesActionTypes.PAYMENT:
        case expensesActionTypes.DEFAULT_CURRENCY:
        case expensesActionTypes.DEBITNOTES:
        case expensesActionTypes.VENDOR:
            return {
                ...state,
                loading: true,
            };

        default:
            return { ...state };
    }
};

export default expenses;
