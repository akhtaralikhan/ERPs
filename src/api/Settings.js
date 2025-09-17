import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const comapnyTenantApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.settings.comapnyTenant,
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



export const usersApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.settings.users,
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



export const subscriptionTenantApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.settings.subscriptionTenant,
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
        BASE_URL + endPoints.settings.subscriptionTenantAllUser,
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



export const settingTypeLicenseApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.settings.settingTypeLicenseApi,
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
        BASE_URL + endPoints.settings.plan,
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



export const categoryApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.settings.category,
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
        BASE_URL + endPoints.settings.taxe,
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

