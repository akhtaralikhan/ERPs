import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const bankAccountApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.bankaccount.bankaccount,
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
        BASE_URL + endPoints.bankaccount.currencyDefault,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const currenciesApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.bankaccount.currency,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const editBankAccountApi = async (id) => {
    const response = await axios.get(
        BASE_URL + endPoints.bankaccount.bankaccount + `/${id.payload}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const deleteBankAccountApi = async (userId) => {
    const response = await axios.delete(
        BASE_URL + endPoints.bankaccount.bankaccount + `/${userId.payload}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};



export const editBankDetailsApi = async (credentials) => {
    const payload = {
        bankName: credentials.bankName,
        bankHolderName: credentials.bankHolderName,
        accountNumber: credentials.accountNumber,
        balance: credentials.balance,
        pendingBalance: credentials.pendingBalance,
        phone: credentials.phone,
        currencyId: credentials.currencyId,
        address: {
            addressLine1: credentials.addressLine1,
            addressLine2: credentials.addressLine2,
            zipCode: credentials.zipCode,
            city: credentials.city,
            country: credentials.country
        },
        createdById: credentials.createdById,
        stripeAccountId: null,
        type: "Manual",
        id: credentials.id
    };

    const body = JSON.stringify(payload);

    const response = await axios.put(
        BASE_URL + endPoints.bankaccount.bankaccount,
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
