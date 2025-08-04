import { ReportsActionTypes } from "./types";

const initialState = {
    currencyDefault: {},
    customeDateReport: [],
    loading: false,
    isDataFetched: false,
    error: "",
};

const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ReportsActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case ReportsActionTypes.FETCH_CURRENCY_DEFAULT:
                    return {
                        ...state,
                        currencyDefault: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                case ReportsActionTypes.FETCH_CUSTOM_DATE_REPORT:
                    return {
                        ...state,
                        customeDateReport: action.payload.data,
                        loading: false,
                        isDataFetched: true,
                    };
                default:
                    return { ...state };
            }

        case ReportsActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                loading: false,
                isDataFetched: false,
                error: action.payload.error,
            };

        case ReportsActionTypes.FETCH_CURRENCY_DEFAULT:
        case ReportsActionTypes.FETCH_CUSTOM_DATE_REPORT:
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
