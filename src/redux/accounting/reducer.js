export const INIT_STATE = {
    accountingData: null,
    error: "",
    loading: false,
    isDataFetched: false,
};

const AccountingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "API_RESPONSE_SUCCESS":
            switch (action.payload.actionType) {
                case "FETCH_ACCOUNTING_DATA":
                    return {
                        ...state,
                        accountingData: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                default:
                    return { ...state };
            }

        case "API_RESPONSE_ERROR":
            switch (action.payload.actionType) {
                case "FETCH_ACCOUNTING_DATA":
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        isDataFetched: false,
                    };
                default:
                    return { ...state };
            }

        case "FETCH_ACCOUNTING_DATA":
            return {
                ...state,
                loading: true,
                isDataFetched: false,
            };

        default:
            return { ...state };
    }
};

export default AccountingReducer;