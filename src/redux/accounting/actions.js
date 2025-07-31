export const getAccountingData = () => ({
    type: "@@accounting/GET_ACCOUNTING_DATA",
});

export const getAccountingDataSuccess = (data) => ({
    type: "@@accounting/GET_ACCOUNTING_DATA_SUCCESS",
    payload: data,
});

export const deleteAccountingEntry = (entryId) => ({
    type: "@@accounting/DELETE_ACCOUNTING_ENTRY",
    payload: entryId,
});