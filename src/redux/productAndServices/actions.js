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
