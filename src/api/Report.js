import axios from 'axios';
import { token } from '../constant/Config';
import { endPoints } from './Urls';
import { BASE_URL } from './apiCore';


export const currencyDefaultApi = async () => {

    const response = await axios.get(BASE_URL +endPoints.reports.currencyDefault,
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

    const response = await axios.get(BASE_URL +ndPoints.reports.getReportsDataOfCustomeDate,
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


// 📌 Profit and Loss
export const profitAndLossApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.profitAndLoss(start, end),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};

// 📌 Account Transaction
export const accountTransactionApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.accountTransaction(start, end),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};


export const trialBalanceApi = async (date) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.trialBalance(date),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};

// 📌 Account Balance
export const accountBalanceApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.accountBalance(start, end),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};

// 📌 Vendor Report
export const vendorReportApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.vendorReport(start, end) ,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};

// 📌 Customer Report
export const customerReportApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.customerReport(start, end) ,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};

// 📌 Tax Report
export const taxReportApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.taxReport(start, end) ,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};

// 📌 Balance Sheet
export const balanceSheetApi = async (start, end) => {
    const response = await axios.get(
        BASE_URL + endPoints.reports.balanceSheet(start, end) ,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ token }`,
            },
        }
    );
return response;
};