import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';

export const proposalsApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.proposal,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const tenantsSubscription3Api = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.subscriptionTenant,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const invoiceApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.invoice,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const customerApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.customer,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const currencyApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.currency,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const revenueApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.revenue,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const defaultCurrencyApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.currencyDefault,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const totalRevenueApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.totalRevenue,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
export const goalApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.goal,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const creditnotesApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.creditnote,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const editProposalApi = async (userId) => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.proposal + `/${userId.payload}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const deleteProposalApi = async (userId) => {

    const response = await axios.get(
        BASE_URL + endPoints.sales.proposal + `/${userId.payload}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const editProposalDataDetailsApi = async (credentials) => {
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
        BASE_URL + endPoints.sales.proposal,
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


export const createProposalDataDetailsApi = async (credentials) => {
    const payload = {

        name: credentials.name,
        sku: credentials.sku,
        salePrice: credentials.salePrice,
        purchasePrice: credentials.purchasePrice,
        categoryId: credentials.categoryId,
        taxId: credentials.taxId,
        description: credentials.description,
        createdById: credentials.createdById,
    };

    const body = JSON.stringify(payload);

    const response = await axios.post(
        BASE_URL + endPoints.sales.proposal,
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


