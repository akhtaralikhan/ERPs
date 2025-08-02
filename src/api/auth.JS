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

export const getUsers = (page = 1, limit = 10) =>
    apiClient({
        endpoint: '/users',
        method: 'GET',
        params: { page, limit },
    });


export const updateProfile = (profileData) =>
    apiClient({
        endpoint: '/user/update',
        method: 'PUT',
        data: profileData,
    });


export const deleteUser = (userId) =>
    apiClient({
        endpoint: `/users/${userId}`,
        method: 'DELETE',
    });


export const uploadAvatar = (file) => {
    const formData = new FormData();
    formData.append('avatar', file);

    return apiClient({
        endpoint: '/user/upload-avatar',
        method: 'POST',
        data: formData,
        isMultipart: true,
    });
};


export const fetchWithCustomToken = () =>
    apiClient({
        endpoint: '/admin/data',
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


