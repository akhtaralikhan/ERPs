import axios from 'axios';

export const BASE_URL = 'https://dev-api-billing.potenzer.com/api/';
const PUBLIC_KEY = 'your-public-key';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        publicKey: PUBLIC_KEY,
    },
});

// ✅ Request Interceptor: Automatically attach token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ❌ Response Interceptor (Optional): Global error logging
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('❌ API Error:', error?.response?.data || error.message);
        return Promise.reject(error?.response?.data || error);
    }
);

// ✅ Reusable client function
const apiClient = async ({
    endpoint,
    method = 'GET',
    data = null,
    params = {},
    headers = {},
    isMultipart = false,
}) => {
    const config = {
        url: endpoint,
        method,
        headers: {
            ...(isMultipart
                ? { 'Content-Type': 'multipart/form-data' }
                : { 'Content-Type': 'application/json' }),
            ...headers,
        },
        params,
        ...(data && { data: isMultipart ? data : JSON.stringify(data) }),
    };

    const response = await instance(config);
    return response.data;
};

export default apiClient;

export const getLoggedinUser = () => {
    const user = localStorage.getItem("userData");
    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }
};