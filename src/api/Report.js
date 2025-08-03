import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const currencyDefaultApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.reports.currencyDefault,
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



export const getReportsDataOfCustomeDateApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.reports.getReportsDataOfCustomeDate,
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

