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












