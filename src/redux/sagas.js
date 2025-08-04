import { all } from "redux-saga/effects";
import registerSaga from "./auth/register/saga";
import forgetPasswordSaga from "./auth/forgetpwd/saga";
import chatsSaga from "./chats/saga";
import authSaga from "./auth/login/LoginSaga";
import favouriteSaga, { archiveChatSaga, deleteMessageSaga, deleteUserMessagesSaga, getArchiveChatUsersSaga, GetStarredMessageSaga, getUserChatSaga, initiateMsgSaga, PinChatSaga, readMessageSaga, replyMsgSaga, RradAllMessageSaga, starMessageSaga, unArchiveChatSaga, unPinChatSaga, unReadSaga, UnStarMessageSaga, } from "./chats/saga";
import loginSaga from "./auth/login/LoginSaga";
import {createBankAccountSaga, getSubscriptionsTenant3Saga} from "./console/saga";

export default function* rootSaga() {
    yield all([
        getSubscriptionsTenant3Saga(),
        createBankAccountSaga(),
        loginSaga(),
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
