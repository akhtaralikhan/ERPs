import { all } from "redux-saga/effects";
import registerSaga from "./auth/register/saga";
import forgetPasswordSaga from "./auth/forgetpwd/saga";
import chatsSaga from "./chats/saga";
import authSaga from "./auth/login/LoginSaga";
import favouriteSaga, { archiveChatSaga, deleteMessageSaga, deleteUserMessagesSaga, getArchiveChatUsersSaga, GetStarredMessageSaga, getUserChatSaga, initiateMsgSaga, PinChatSaga, readMessageSaga, replyMsgSaga, RradAllMessageSaga, starMessageSaga, unArchiveChatSaga, unPinChatSaga, unReadSaga, UnStarMessageSaga, } from "./chats/saga";
import loginSaga from "./auth/login/LoginSaga";
import { AuthLoginActionTypes } from "./auth/login/types";
import { createBankAccountSaga, getSubscriptionsTenant3Saga } from "./console/saga";
import { bankaccountSaga, cardReportSaga, currencyDefaultSaga, invoiceReportSaga, lastBillsSaga, lastEstimatesSaga, lastGoalsSaga, lastInvoiceSaga, lastTransactionsSaga, monthlyActivitySaga, monthlyTransactionSaga, revenueTotalSaga, settingTypeGeneralSaga, settingTypeLicenseSaga, settingTypePaymentSaga, SocialLoginSaga, summarySaga, weekActivitySaga, weekTransactionSaga, yearlyActivitySaga, yearlyTransactionSaga } from "./dashboard/saga";
import editBankDetailsSaga, { bankAccountSaga, currenciesSaga, deleteBankAccountSaga, editBankAccountSaga } from "./bankAccounts/saga";
import editProductDataDetailsSaga, { categorySaga, editProductSaga, productSaga, servicesSaga, taxSaga } from "./productAndServices/saga";
import { creditNoteSaga, currencySaga, customerSaga, goalsSaga, invoiceSaga, proposalSaga, revenueSaga } from "./sales/saga";
import { billSaga, debitNotesSaga, paymentSaga, vendorSaga } from "./expenses/saga";
import registerUserSaga from "./auth/register/saga";

export default function* rootSaga() {
    yield all([
        getSubscriptionsTenant3Saga(),
        bankaccountSaga(),
        summarySaga(),
        SocialLoginSaga(),
        settingTypeGeneralSaga(),
        settingTypePaymentSaga(),
        revenueTotalSaga(),
        monthlyTransactionSaga(),
        yearlyTransactionSaga(),
        weekTransactionSaga(),
        monthlyActivitySaga(),
        yearlyActivitySaga(),
        weekActivitySaga(),
        cardReportSaga(),
        lastInvoiceSaga(),
        lastEstimatesSaga(),
        lastBillsSaga(),
        lastTransactionsSaga(),
        settingTypeLicenseSaga(),
        currencyDefaultSaga(),
        invoiceReportSaga(),
        lastGoalsSaga(),
        bankAccountSaga(),
        editBankAccountSaga(),
        editBankDetailsSaga(),
        deleteBankAccountSaga(),
        currenciesSaga(),
        currencyDefaultSaga(),
        productSaga(),
        servicesSaga(),
        categorySaga(),
        taxSaga(),
        editProductSaga(),
        editProductDataDetailsSaga(),
        proposalSaga(),
        invoiceSaga(),
        currencySaga(),
        customerSaga(),
        goalsSaga(),
        revenueSaga(),
        creditNoteSaga(),
        customerSaga(),
        billSaga(),
        paymentSaga(),
        debitNotesSaga(),
        vendorSaga(),
        createBankAccountSaga(),
        registerUserSaga(),
        loginSaga(),
        forgetPasswordSaga(),
        RradAllMessageSaga(),
        readMessageSaga(),
        starMessageSaga(),
        UnStarMessageSaga(),
        GetStarredMessageSaga(),
        PinChatSaga(),
        unPinChatSaga(),
        getArchiveChatUsersSaga(),
        unReadSaga(),
        unArchiveChatSaga(),
        archiveChatSaga(),
        replyMsgSaga(),
        initiateMsgSaga(),
        deleteUserMessagesSaga(),
        deleteMessageSaga(),
        getUserChatSaga(),
        favouriteSaga(),
        authSaga(),
        registerSaga(),
        forgetPasswordSaga(),
        chatsSaga(),
    ]);
}
