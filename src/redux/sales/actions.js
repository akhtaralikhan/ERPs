import { salesActionTypes } from "./types";

export const getProposals = () => ({
  type: salesActionTypes.PROPOSALS,
});

export const getTenantsSubscription3 = () => ({
  type: salesActionTypes.TENANTS_SUBSCRIPTION_3,
});

export const getInvoices = () => ({
  type: salesActionTypes.INVOICE,
});

export const getCustomers = () => ({
  type: salesActionTypes.CUSTOMER,
});

export const getCurrency = () => ({
  type: salesActionTypes.CURRENCY,
});

export const getRevenue = () => ({
  type: salesActionTypes.REVENUE,
});

export const getDefaultCurrency = () => ({
  type: salesActionTypes.DEFAULT_CURRENCY,
});

export const getTotalRevenue = () => ({
  type: salesActionTypes.TOTAL_REVENUE,
});

export const getGoals = () => ({
  type: salesActionTypes.GOAL,
});

export const getCreditNotes = () => ({
  type: salesActionTypes.CREDITNOTES,
});

export const editProposalData = (id) => ({
  type: salesActionTypes.EDIT_PROPOSAL_DATA,
  payload: id,
});