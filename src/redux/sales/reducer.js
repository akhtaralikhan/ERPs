import { salesActionTypes } from "./types";

const initialState = {
  proposals: [],
  tenantSubscription: {},
  invoice: [],
  customers: [],
  currency: [],
  revenue: [],
  defaultCurrency: {},
  totalRevenue: 0,
  goal: [],
  creditnote: [],
  loading: false,
  error: null,
};

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case salesActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case salesActionTypes.PROPOSALS:
          return {
            ...state,
            proposals: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.TENANTS_SUBSCRIPTION_3:
          return {
            ...state,
            tenantSubscription: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.INVOICE:
          return {
            ...state,
            invoice: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.CUSTOMER:
          return {
            ...state,
            customers: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.CURRENCY:
          return {
            ...state,
            currency: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.REVENUE:
          return {
            ...state,
            revenue: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.DEFAULT_CURRENCY:
          return {
            ...state,
            defaultCurrency: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.TOTAL_REVENUE:
          return {
            ...state,
            totalRevenue: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.GOAL:
          return {
            ...state,
            goal: action.payload.data,
            loading: false,
            error: null,
          };
        case salesActionTypes.CREDITNOTES:
          return {
            ...state,
            creditnote: action.payload.data,
            loading: false,
            error: null,
          };
        default:
          return { ...state };
      }

    case salesActionTypes.API_RESPONSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case salesActionTypes.PROPOSALS:
    case salesActionTypes.TENANTS_SUBSCRIPTION_3:
    case salesActionTypes.INVOICE:
    case salesActionTypes.CUSTOMER:
    case salesActionTypes.CURRENCY:
    case salesActionTypes.REVENUE:
    case salesActionTypes.DEFAULT_CURRENCY:
    case salesActionTypes.TOTAL_REVENUE:
    case salesActionTypes.GOAL:
    case salesActionTypes.CREDITNOTES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return { ...state };
  }
};

export default salesReducer;
