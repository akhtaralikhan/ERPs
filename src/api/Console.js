import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const usersUserIdApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.users_UserId,
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



export const allUsersApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.allUsers,
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



export const stripeAccountAllApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.stripeAccountAll,
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

export const subscriptionTenantAllUserApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.subscriptionTenantAllUser,
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

export const settingTypesLicenceApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypesLicence,
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

export const planApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.plan,
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

export const allSubscriptionApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.allSubscription,
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

export const currencyApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.currency,
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

export const settingTypesGeneralApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypesGeneral,
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


export const settingTypeEmailApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypeEmail,
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


export const settingTypeSocialLoginApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTypeSocialLogin,
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


export const settingTyopePaymentApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.console.settingTyopePayment,
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
