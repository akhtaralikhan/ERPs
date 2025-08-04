import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const bankaccountApi = async () => {

    const response = await axios.get(
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

export const currencyDefaultApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.bankaccount.currencyDefault,
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
