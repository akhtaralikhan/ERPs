import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';

export const loginUserApi = async (credentials) => {
    const payload = {
        email: credentials.email,
        password: credentials.password,
        rememberMe: credentials.rememberMe,
    };

    const body = JSON.stringify(payload);

    const response = await axios.post(
        BASE_URL + endPoints.auth.sigIn,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response;
};

export const RegisterUserApi = async (credentials) => {
    const payload = {
        fullname: credentials.fullname,
        email: credentials.email,
        password: credentials.password,
        agreeTerm: credentials.agreeTerm,
        roleId: credentials.roleId,
        planId: credentials.planId,
        updatedAt: credentials.updatedAt,
        createdAt: credentials.createdAt,
        isActive: credentials.isActive,
    };

    const body = JSON.stringify(payload);

    const response = await axios.post(
        BASE_URL + endPoints.auth.register,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response;
};


export const forgetPswdUserApi = async (credentials) => {
    const payload = {
        email: credentials.email,
        currentUrl: "https://dev-web-billing.potenzer.com",
    };

    const body = JSON.stringify(payload);

    const response = await axios.post(
        BASE_URL + endPoints.auth.forgetPassword,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return response;
};