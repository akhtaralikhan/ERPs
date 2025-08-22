import { productAndServicesTypes } from './types';

export const getProducts = () => ({
    type: productAndServicesTypes.GET_PRODUCTS,
});

export const getDefaultCurrency = () => ({
    type: productAndServicesTypes.GET_DEFAULT_CURRENCY,
});

export const getSubscriptionsTenants3 = () => ({
    type: productAndServicesTypes.GET_SUBSCRIPTIONS_TENANTS_3,
});

export const getServices = () => ({
    type: productAndServicesTypes.GET_SERVICES,
});

export const getCatergory = () => ({
    type: productAndServicesTypes.GET_CATERGORY,
});

export const getTax = () => ({
    type: productAndServicesTypes.GET_TAX,
});

export const editProductData = (id) => ({
    type: productAndServicesTypes.EDIT_PRODUCT_DATA,
    payload: id,
});

export const DeleteProductData = (userId) => ({
    type: productAndServicesTypes.DELETE_PRODUCT_DATA,
    payload: userId,
});

export const editProductDataDetails = (user) => ({
    type: productAndServicesTypes.EDIT_PRODUCT_DATA_DETAILS,
    payload: { user },
})

export const createProductData = (user) => ({
    type: productAndServicesTypes.CREATE_PRODUCT_DATA,
    payload: { user },
});

export const createServicesData = (user) => ({
    type: productAndServicesTypes.CREATE_SERVICES_DATA,
    payload: { user },
});

export const editServicesData = (id) => ({
    type: productAndServicesTypes.EDIT_SERVICES_DATA,
    payload: id,
});

export const DeleteServicesData = (userId) => ({
    type: productAndServicesTypes.DELETE_SERVICES_DATA,
    payload: userId,
});

export const editServicesDataDetails = (user) => ({
    type: productAndServicesTypes.EDIT_SERVICES_DATA_DETAILS,
    payload: { user },
})