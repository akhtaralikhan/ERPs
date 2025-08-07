import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const usersUserIdApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.users_UserId,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const plan_idApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.users_UserId,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const rolesApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.roles,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};



export const allUsersApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.allUsers,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};



export const stripeAccountAllApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.stripeAccountAll,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const subscriptionTenantAllUserApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.subscriptionTenantAllUser,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const getSubscriptionsTenant = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.console.subscriptionTenantUser,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const subscriptionTenantApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.console.subscriptionTenantUser,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const settingTypesLicenceApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypesLicence,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const planApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.plan,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const allSubscriptionApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.allSubscription,

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
        BASE_URL + endPoints.console.currency,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const settingTypesGeneralApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypesGeneral,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const settingTypeEmailApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypeEmail,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const settingTypeSocialLoginApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypeSocialLogin,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const settingTyopePaymentApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTyopePayment,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};


export const createBankAccountApi = async (credentials) => {
    const payload = {
        bankName: credentials.bankName,
        bankHolderName: credentials.bankHolderName,
        accountNumber: credentials.accountNumber,
        balance: credentials.balance,
        pendingBalance: credentials.pendingBalance,
        phone: credentials.phone,
        currencyId: credentials.currencyId,
        createdById: credentials.createdById,
        type: credentials.type,
        address: {
            addressLine1: credentials.address.addressLine1,
            addressLine2: credentials.address.addressLine2,
            zipCode: credentials.address.zipCode,
            city: credentials.address.city,
            country: credentials.address.country,
        },
    };

    const body = JSON.stringify(payload);

    const response = await axios.post(
        commonApiUrl + endPoints.console.createBankAccount,
        body,
        {
            headers: {
                "Content-Type": "application/json",
                publicKey: PublicKey,
            },
        }
    );

    return response.data;
};