import axios from 'axios';
import { token } from '../constant/Config';
import { BASE_URL } from './apiCore';
import { endPoints } from './Urls';


export const fetchDashboardDataApi = async () => {

    const response = await axios.get(
        BASE_URL + endPoints.auth.sigIn,
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

export const summaryApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.transactionSummary,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
}

export const monthActivityApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.monthActivityApi,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const monthTransactionsApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.MonthlyTransaction,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const bankaccountApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.bankaccount,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const subscriptionTenant3Api = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.subscriptionTenant,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const settingTypesLicenseApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.settingTypesLicence,
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
        BASE_URL + endPoints.dashboard.settingTypesGeneral,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const cardreportsApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.cardReport,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const innovoiceLastApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.lastInvoice,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const estimatesLastApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.lastEstimates,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const billsLastApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.lastBills,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const transactionsLastApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.lastTransaction,
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
        BASE_URL + endPoints.dashboard.currencyDefault,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const revenueTotalApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.totalRevenue,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const invoiceReportApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.invoiceReport,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};

export const goalsLastApi = async () => {
    const response = await axios.get(
        BASE_URL + endPoints.dashboard.lastGoals,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response;
};
