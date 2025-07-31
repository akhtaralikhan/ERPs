import { call, put, takeEvery } from "redux-saga/effects";
import { archiveUser, deleteMsg, deleteUserChat, getArchiveList, getMessageList, GetStarredUserMsg, getUserConversation, initiateChat, PinUserChat, replyChat, starUserMsg, unArchiveUser, unPinUserChat, unReadUserMsg, UnStarUserMsg } from "../../constants/RealApi";
import { ChatsActionTypes } from "./types";
import { chatsApiResponseError, chatsApiResponseSuccess } from "../chats/actions";


function* getFavourites() {
    try {
        const response = yield call(getMessageList);

        const favouriteList = response?.responseData || [];

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.GET_FAVOURITES, favouriteList)
        );

    } catch (error) {
        yield put(
            chatsApiResponseError(ChatsActionTypes.GET_FAVOURITES, error.response?.data || "Failed to fetch favourites")
        );
    }
}
export default function* favouriteSaga() {
    yield takeEvery(ChatsActionTypes.GET_FAVOURITES, getFavourites);
}



function* getChatUserConversations({ payload }) {
    if (!payload || typeof payload !== "string") return;

    try {
        const response = yield call(getUserConversation, { userUid: payload });
        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS, response)
        );
    } catch (error) {
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS,
                error.response?.data || "Failed to fetch user chat conversations"
            )
        );
    }
}


export function* getUserChatSaga() {
    yield takeEvery(ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS, getChatUserConversations);
};

function* deleteMessage({ payload }) {
    try {
        const response = yield call(deleteMsg, { messageId: payload });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.DELETE_MESSAGE, response)
        );
    } catch (error) {
        console.error("Error in deleteMessage saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.DELETE_MESSAGE,
                error || "Error in deleteMessage saga:"
            )
        );
    }
}

export function* deleteMessageSaga() {
    yield takeEvery(ChatsActionTypes.DELETE_MESSAGE, deleteMessage);
};


function* deleteUserMessages({ payload }) {
    try {
        const { userUid, msgID } = payload;

        const response = yield call(deleteUserChat, {
            userUid,
            msgID,
        });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.DELETE_USER_MESSAGES, response)
        );
    } catch (error) {
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.DELETE_USER_MESSAGES,
                error || "Error in deleteUserMessages saga"
            )
        );
    }
}

export function* deleteUserMessagesSaga() {
    yield takeEvery(ChatsActionTypes.DELETE_USER_MESSAGES, deleteUserMessages);
}


function* initiateMsg({ payload }) {
    try {
        const { msg, userUid } = payload;
        const response = yield call(initiateChat, { msg, userUid });

        yield put(chatsApiResponseSuccess(ChatsActionTypes.ON_SEND_MESSAGE, response));
    } catch (error) {
        yield put(chatsApiResponseError(ChatsActionTypes.ON_SEND_MESSAGE, error));
    }
}

export function* initiateMsgSaga() {
    yield takeEvery(ChatsActionTypes.ON_SEND_MESSAGE, initiateMsg);
}

function* replyMsg({ payload }) {
    try {
        const { msg, msgID } = payload;

        const response = yield call(replyChat, { msg, msgID });

        yield put(chatsApiResponseSuccess(ChatsActionTypes.ON_REPLY_MESSAGE, response));
    } catch (error) {
        yield put(chatsApiResponseError(ChatsActionTypes.ON_REPLY_MESSAGE, error));
    }
}

export function* replyMsgSaga() {
    yield takeEvery(ChatsActionTypes.ON_REPLY_MESSAGE, replyMsg);
}


function* archiveChat({ payload }) {
    try {
        const { msgID } = payload;

        const response = yield call(archiveUser, { msgID });

        yield put(chatsApiResponseSuccess(ChatsActionTypes.ARCHIVE_CONTACT, response));
    } catch (error) {
        yield put(chatsApiResponseError(ChatsActionTypes.ARCHIVE_CONTACT, error));
    }
}

export function* archiveChatSaga() {
    yield takeEvery(ChatsActionTypes.ARCHIVE_CONTACT, archiveChat);
}


function* unArchiveChat({ payload }) {
    try {
        const { msgID } = payload;

        const response = yield call(unArchiveUser, { msgID });

        yield put(chatsApiResponseSuccess(ChatsActionTypes.UNARCHIVE_CONTACT, response));
    } catch (error) {
        yield put(chatsApiResponseError(ChatsActionTypes.UNARCHIVE_CONTACT, error));
    }
}

export function* unArchiveChatSaga() {
    yield takeEvery(ChatsActionTypes.UNARCHIVE_CONTACT, unArchiveChat);
}


function* PinChat({ payload }) {
    try {
        const { msgID } = payload;

        const response = yield call(PinUserChat, { msgID });

        yield put(chatsApiResponseSuccess(ChatsActionTypes.PIN_CONTACT, response));
    } catch (error) {
        yield put(chatsApiResponseError(ChatsActionTypes.PIN_CONTACT, error));
    }
}

export function* PinChatSaga() {
    yield takeEvery(ChatsActionTypes.PIN_CONTACT, PinChat);
}


function* unPinChat({ payload }) {
    try {
        const { msgID } = payload;

        const response = yield call(unPinUserChat, { msgID });

        yield put(chatsApiResponseSuccess(ChatsActionTypes.UNPIN_CONTACT, response));
    } catch (error) {
        yield put(chatsApiResponseError(ChatsActionTypes.UNPIN_CONTACT, error));
    }
}

export function* unPinChatSaga() {
    yield takeEvery(ChatsActionTypes.UNPIN_CONTACT, unPinChat);
}

function* RradAllMessage({ payload }) {
    try {
        const response = "";
        // yield call(readUserMsg, { messageId: payload });

        // yield put(
        //     chatsApiResponseSuccess(ChatsActionTypes.READ_MESSAGE, response)
        // );
    } catch (error) {
        console.error("Error in read all saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.READ_MESSAGE,
                error || "Error in read all saga:"
            )
        );
    }
}

export function* RradAllMessageSaga() {
    yield takeEvery(ChatsActionTypes.READ_MESSAGE, RradAllMessage);
};

function* readMessage({ payload }) {
    try {
        const response = yield call(readMessage, { messageId: payload });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.UNREAD_MESSAGE, response)
        );
    } catch (error) {
        console.error("Error in deleteMessage saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.UNREAD_MESSAGE,
                error || "Error in deleteMessage saga:"
            )
        );
    }
}

export function* readMessageSaga() {
    yield takeEvery(ChatsActionTypes.UNREAD_MESSAGE, readMessage);
};

function* unReadMessage({ payload }) {
    try {
        const response = yield call(unReadUserMsg, { messageId: payload });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.UNREAD_MESSAGE, response)
        );
    } catch (error) {
        console.error("Error in deleteMessage saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.UNREAD_MESSAGE,
                error || "Error in deleteMessage saga:"
            )
        );
    }
}

export function* unReadSaga() {
    yield takeEvery(ChatsActionTypes.UNREAD_MESSAGE, unReadMessage);
};

function* starMessage({ payload }) {
    try {
        const response = yield call(starUserMsg, { messageId: payload });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.STAR_CHAT, response)
        );
    } catch (error) {
        console.error("Error in star saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.STAR_CHAT,
                error || "Error in star saga:"
            )
        );
    }
}

export function* starMessageSaga() {
    yield takeEvery(ChatsActionTypes.STAR_CHAT, starMessage);
};

function* UnStarMessage({ payload }) {
    try {
        const response = yield call(UnStarUserMsg, { messageId: payload });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.UNSTAR_CHAT, response)
        );
    } catch (error) {
        console.error("Error in UnStarMessage saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.UNSTAR_CHAT,
                error || "Error in UnStarMessage saga:"
            )
        );
    }
}

export function* UnStarMessageSaga() {
    yield takeEvery(ChatsActionTypes.UNSTAR_CHAT, UnStarMessage);
};

function* GetStarredMessage({ payload }) {
    try {
        const response = yield call(GetStarredUserMsg, { toUserUid: payload });

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.GET_STARRED_CHATS, response)
        );
    } catch (error) {
        console.error("Error in get star mesage saga:", error);
        yield put(
            chatsApiResponseError(
                ChatsActionTypes.GET_STARRED_CHATS,
                error || "Error in get star mesage saga:"
            )
        );
    }
}

export function* GetStarredMessageSaga() {
    yield takeEvery(ChatsActionTypes.GET_STARRED_CHATS, GetStarredMessage);
};

function* getArchiveChatUsers() {
    try {
        const response = yield call(getArchiveList);

        const archiveList = response?.responseData || [];

        yield put(
            chatsApiResponseSuccess(ChatsActionTypes.GET_ARCHIVE_CONTACT, archiveList)
        );

    } catch (error) {
        yield put(
            chatsApiResponseError(ChatsActionTypes.GET_ARCHIVE_CONTACT, error.response?.status || "Failed to fetch favourites")
        );
    }
}
export function* getArchiveChatUsersSaga() {
    yield takeEvery(ChatsActionTypes.GET_ARCHIVE_CONTACT, getArchiveChatUsers);
}
