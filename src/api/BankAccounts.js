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
