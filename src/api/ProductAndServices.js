import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const getProductsApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.product,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const getDefaultCurrencyApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.currencyDefault,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const getSubscriptionsTenants3Api = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.subscriptionTenant,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const getServicesApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.service,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const getCategoryApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.category,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const getTaxApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.taxe,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const editProductApi = async (userId) => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.product + `/${userId.payload}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const deleteProductApi = async (userId) => {

    const response = await axios.get(
        BASE_URL + endPoints.productAndServices.product + `/${userId.payload}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const editProductDataDetailsApi = async (credentials) => {
    const payload = {

        name: credentials.name,
        sku: credentials.sku,
        salePrice: credentials.salePrice,
        purchasePrice: credentials.purchasePrice,
        categoryId: credentials.categoryId,
        taxId: credentials.taxId,
        description: credentials.description,
        createdById: credentials.createdById,
        id: credentials.id,
    };

    const body = JSON.stringify(payload);

    const response = await axios.put(
        BASE_URL + endPoints.productAndServices.product,
        body,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};













