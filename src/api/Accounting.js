import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const manualJournalApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.manualjournal,
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


export const transactionApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.transaction,
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


export const currencyDefaultApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.currencyDefault,
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


export const chartAccountsApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.chartaccounts,
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


export const vendorApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.vendor, //check 
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


export const taxeApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.taxe, //reamaining
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


export const asssetApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.assets,
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


export const customerApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.accounting.customer,
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
