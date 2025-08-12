import { bankAccountActionTypes } from "./types";

export const INIT_STATE = {
    bankAccount: [],
    currencyDefault: {},
    editData: {},
    currency: [],
    loading: false,
    isDataFetched: false,
    error: "",
};

const bankAccounts = (state = INIT_STATE, action) => {
    switch (action.type) {
        case bankAccountActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case bankAccountActionTypes.BANK_ACCOUNT:
                    return {
                        ...state,
                        bankAccount: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case bankAccountActionTypes.EDITBANK_ACCOUNT:
                    return {
                        ...state,
                        editData: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };

                case bankAccountActionTypes.CURRENCY_DEFAULT:
                    return {
                        ...state,
                        currencyDefault: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case bankAccountActionTypes.CURRENCY:
                    return {
                        ...state,
                        currency: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    }
                default:
                    return { ...state };
            }

        case bankAccountActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                loading: false,
                isDataFetched: false,
                error: action.payload.error,
            };

        case bankAccountActionTypes.BANK_ACCOUNT:
        case bankAccountActionTypes.CURRENCY_DEFAULT:
        case bankAccountActionTypes.EDITBANK_ACCOUNT:
        case bankAccountActionTypes.CURRENCY:
            return {
                ...state,
                loading: true,
                error: "",
                isDataFetched: false,
            };

        default:
            return { ...state };
    }
};

export default bankAccounts;
