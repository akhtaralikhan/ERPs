import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const billApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.expenses.bill, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response;
};


export const paymentApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.expenses.payment, {
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
        BASE_URL + endPoints.expenses.currencyDefault, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response;
};


export const debitnotesApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.expenses.debitnote, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response;
};


export const vendorApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.expenses.vendor, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response;
};