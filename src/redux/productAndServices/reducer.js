import { editProductData, editServicesData } from "./actions";
import { productAndServicesTypes } from "./types";

export const INIT_STATE = {
    products: [],
    services: [],
    category: [],
    tax: [],
    editProductData: {},
    editServicesData: {},
    loading: false,
    error: null,
    subscriptionTenant: {},
    defaultCurrency: {},
};

const productAndServices = (state = INIT_STATE, action) => {
    switch (action.type) {
        case productAndServicesTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case productAndServicesTypes.GET_PRODUCTS:
                    return {
                        ...state,
                        products: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.GET_SERVICES:
                    return {
                        ...state,
                        services: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.GET_CATERGORY:
                    return {
                        ...state,
                        category: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.GET_TAX:
                    return {
                        ...state,
                        tax: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.EDIT_PRODUCT_DATA:
                    return {
                        ...state,
                        editProductData: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.EDIT_SERVICES_DATA:
                    return {
                        ...state,
                        editServicesData: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.GET_SUBSCRIPTIONS_TENANTS_3:
                    return {
                        ...state,
                        subscriptionTenant: action.payload.data,
                        loading: false,
                    };
                case productAndServicesTypes.GET_DEFAULT_CURRENCY:
                    return {
                        ...state,
                        defaultCurrency: action.payload.data,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case productAndServicesTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case productAndServicesTypes.GET_PRODUCTS:
                case productAndServicesTypes.GET_SERVICES:
                case productAndServicesTypes.GET_SUBSCRIPTIONS_TENANTS_3:
                case productAndServicesTypes.GET_DEFAULT_CURRENCY:
                case productAndServicesTypes.GET_CATERGORY:
                case productAndServicesTypes.GET_TAX:

                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                    };
                default:
                    return { ...state };
            }

        case productAndServicesTypes.GET_PRODUCTS:
        case productAndServicesTypes.GET_SERVICES:
        case productAndServicesTypes.GET_SUBSCRIPTIONS_TENANTS_3:
        case productAndServicesTypes.GET_DEFAULT_CURRENCY:
        case productAndServicesTypes.GET_CATERGORY:
        case productAndServicesTypes.GET_TAX:

            return {
                ...state,
                loading: true,
                error: null,
            };

        default:
            return { ...state };
    }
};

export default productAndServices;
