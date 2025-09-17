import { ChatsActionTypes } from './types';

export const INIT_STATE = {
    favourites: [],
    directMessages: [],
    channels: [],
    selectedChat: null,
    chatUserDetails: {},
    chatUserConversations: {},
    isOpenUserDetails: false,
    channelDetails: {},
    archiveContacts: [],
    pinnedContacts: [],
    isPinnedChat: false,
    starredMessageList: {},
};


const Chats = (state = INIT_STATE, action) => {

    switch (action.type) {
        case ChatsActionTypes.NEW_MESSAGE_RECEIVED:
            const message = action.payload;
            const existingMessages =
                state.chatUserConversations.responseData?.chatList || [];

            return {
                ...state,
                chatUserConversations: {
                    ...state.chatUserConversations,
                    responseData: {
                        ...state.chatUserConversations.responseData,
                        chatList: [...existingMessages, message],
                    },
                },
            };

        case ChatsActionTypes.READ_MESSAGE: {
            const prevList = state.chatUserConversations?.responseData?.chatList || [];

            const updatedList = prevList.map((msg) => {
                console.log("Updating isRead for msgID", msg.isRead, "=>", true);
                return { ...msg, isRead: true };
            });

            return {
                ...state,
                chatUserConversations: {
                    ...state.chatUserConversations,
                    responseData: {
                        ...state.chatUserConversations.responseData,
                        chatList: [...updatedList],
                    },
                },
            };
        }

        case ChatsActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case ChatsActionTypes.GET_FAVOURITES:
                    return {
                        ...state,
                        favourites: action.payload.data,
                        isFavouritesFetched: true,
                        getFavouritesLoading: false,
                    };
                case ChatsActionTypes:
                    return {
                        ...state,
                        favourites: action.payload.data,
                        isFavouritesFetched: true,
                        getFavouritesLoading: false,
                    };

                case ChatsActionTypes.GET_DIRECT_MESSAGES:
                    return {
                        ...state,
                        directMessages: action.payload.data,
                        isDirectMessagesFetched: true,
                        getDirectMessagesLoading: false,
                        isContactsAdded: false,
                    };
                case ChatsActionTypes.GET_PINNED_CONTACT:
                    return {
                        ...state,
                        directMessages: action.payload.data,
                        isPinnedMessagesFetched: true,
                        getPinnedMessagesLoading: false,
                        isPinnedAdded: false,
                    };
                case ChatsActionTypes.GET_STARRED_CHATS:
                    return {
                        ...state,
                        starredMessageList: action.payload.data,
                        isSatrMessagesFetched: true,
                        getStarMessagesLoading: false,
                        isStarAdded: true,
                    };
                case ChatsActionTypes.STAR_CHAT:
                    return {
                        ...state,
                        isStarAdded: true,
                    }

                case ChatsActionTypes.GET_CHANNELS:
                    return {
                        ...state,
                        channels: action.payload.data,
                        isChannelsFetched: true,
                        getChannelsLoading: false,
                        isChannelCreated: false,
                    };
                case ChatsActionTypes.ADD_CONTACTS:
                    return {
                        ...state,
                        isContactsAdded: true,
                        addContactsLoading: false,
                    };
                case ChatsActionTypes.CREATE_CHANNEL:
                    return {
                        ...state,
                        isChannelCreated: true,
                        createChannelLoading: false,
                    };
                case ChatsActionTypes.GET_CHAT_USER_DETAILS:
                    return {
                        ...state,
                        chatUserDetails: action.payload.data,
                        isUserDetailsFetched: true,
                        getUserDetailsLoading: false,
                    };
                case ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS:
                    return {
                        ...state,
                        chatUserConversations: action.payload.data,
                        isUserConversationsFetched: true,
                        getUserConversationsLoading: false,
                        isUserMessageSent: false,
                        isMessageDeleted: false,
                        isMessageForwarded: false,
                    };
                case ChatsActionTypes.ADD_MESSAGE_TO_CHAT_LIST:
                    return {
                        ...state,
                        chatUserConversations: {
                            ...state.chatUserConversations,
                            responseData: {
                                ...(state.chatUserConversations?.responseData || {}),
                                chatList: [
                                    ...(state.chatUserConversations?.responseData?.chatList || []),
                                    action.payload,
                                ],
                            },
                        },
                    };
                case ChatsActionTypes.ON_SEND_MESSAGE:
                    return {
                        ...state,
                        isUserMessageSent: true,
                    };
                case ChatsActionTypes.RECEIVE_MESSAGE_FROM_USER:
                    return {
                        ...state,
                        chatUserConversations: action.payload.data,
                    };
                case ChatsActionTypes.DELETE_MESSAGE:
                    return {
                        ...state,
                        isMessageDeleted: true,
                    };
                case ChatsActionTypes.UNREAD_MESSAGE:
                    return {
                        ...state,
                        isMessageUnread: true,
                    };
                case ChatsActionTypes.FORWARD_MESSAGE:
                    return {
                        ...state,
                        isMessageForwarded: true,
                    };
                case ChatsActionTypes.DELETE_USER_MESSAGES:
                    return {
                        ...state,
                        isUserMessagesDeleted: true,
                    };
                case ChatsActionTypes.GET_CHANNEL_DETAILS:
                    return {
                        ...state,
                        chatUserDetails: { ...action.payload.data, isChannel: true },
                        isChannelDetailsFetched: true,
                        getUserDetailsLoading: false,
                    };
                case ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT:
                    return {
                        ...state,
                        isFavouriteContactToggled: true,
                    };
                case ChatsActionTypes.GET_ARCHIVE_CONTACT:
                    return {
                        ...state,
                        archiveContacts: action.payload.data,
                        isArchiveContactFetched: true,
                        isContactArchiveToggled: false,
                    };
                case ChatsActionTypes.ARCHIVE_CONTACT:
                    return {
                        ...state,
                        isContactArchiveToggled: true,
                    };
                case ChatsActionTypes.DELETE_IMAGE:
                    return {
                        ...state,
                        isImageDeleted: true,
                    };

                case ChatsActionTypes.ARCHIVE_CONTACT:
                    return {
                        ...state,
                        isArchive: true,
                    };
                case ChatsActionTypes.UNARCHIVE_CONTACT:
                    return {
                        ...state,
                        isArchive: true,
                    };

                default:
                    return { ...state };
            }
        case ChatsActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case ChatsActionTypes.GET_FAVOURITES:
                    return {
                        ...state,
                        isFavouritesFetched: false,
                        getFavouritesLoading: false,
                    };
                case ChatsActionTypes.GET_DIRECT_MESSAGES:
                    return {
                        ...state,
                        isDirectMessagesFetched: false,
                        getDirectMessagesLoading: false,
                    };
                case ChatsActionTypes.GET_PINNED_CONTACT:
                    return {
                        ...state,
                        isPinnedMessagesFetched: false,
                        getPinnedMessagesLoading: false,
                    };
                case ChatsActionTypes.GET_STARRED_CHATS:
                    return {
                        ...state,
                        isSatrMessagesFetched: false,
                        getStarMessagesLoading: false,
                        isStarAdded: false,
                    };
                case ChatsActionTypes.STAR_CHAT:
                    return {
                        ...state,
                        isStarAdded: false,
                    }
                case ChatsActionTypes.GET_CHANNELS:
                    return {
                        ...state,
                        isChannelsFetched: false,
                        getChannelsLoading: false,
                    };
                case ChatsActionTypes.ADD_CONTACTS:
                    return {
                        ...state,
                        isContactsAdded: false,
                        addContactsLoading: false,
                    };
                case ChatsActionTypes.CREATE_CHANNEL:
                    return {
                        ...state,
                        isChannelCreated: false,
                        createChannelLoading: false,
                    };
                case ChatsActionTypes.GET_CHAT_USER_DETAILS:
                    return {
                        ...state,
                        isUserDetailsFetched: false,
                        getUserDetailsLoading: false,
                    };
                case ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS:
                    return {
                        ...state,
                        chatUserConversations: {},
                        isUserConversationsFetched: false,
                        getUserConversationsLoading: false,
                        isUserMessageSent: false,
                    };
                case ChatsActionTypes.ON_SEND_MESSAGE:
                    return {
                        ...state,
                        isUserMessageSent: false,
                    };
                case ChatsActionTypes.DELETE_MESSAGE:
                    return {
                        ...state,
                        isMessageDeleted: false,
                    };
                case ChatsActionTypes.UNREAD_MESSAGE:
                    return {
                        ...state,
                        isMessageUnread: false,
                    };
                case ChatsActionTypes.FORWARD_MESSAGE:
                    return {
                        ...state,
                        isMessageForwarded: false,
                    };
                case ChatsActionTypes.DELETE_USER_MESSAGES:
                    return {
                        ...state,
                        isUserMessagesDeleted: false,
                    };
                case ChatsActionTypes.GET_CHANNEL_DETAILS:
                    return {
                        ...state,
                        isChannelDetailsFetched: false,
                        getUserDetailsLoading: false,
                    };
                case ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT:
                    return {
                        ...state,
                        isFavouriteContactToggled: false,
                    };
                case ChatsActionTypes.GET_ARCHIVE_CONTACT:
                    return {
                        ...state,
                        isArchiveContactFetched: false,
                    };
                case ChatsActionTypes.ARCHIVE_CONTACT:
                    return {
                        ...state,
                        isContactArchiveToggled: false,
                    };
                case ChatsActionTypes.DELETE_IMAGE:
                    return {
                        ...state,
                        isImageDeleted: true,
                    };

                case ChatsActionTypes.ARCHIVE_CONTACT:
                    return {
                        ...state,
                        isArchive: false,
                    };
                case ChatsActionTypes.UNARCHIVE_CONTACT:
                    return {
                        ...state,
                        isArchive: false,
                    };
                default:
                    return { ...state };
            }
        case ChatsActionTypes.GET_FAVOURITES: {
            return {
                ...state,
                getFavouritesLoading: true,
                isFavouritesFetched: false,
            };
        }
        case ChatsActionTypes.GET_DIRECT_MESSAGES:
            return {
                ...state,
                isDirectMessagesFetched: false,
                getDirectMessagesLoading: true,
            };
        case ChatsActionTypes.GET_PINNED_CONTACT:
            return {
                ...state,
                isPinnedMessagesFetched: false,
                getPinnedMessagesLoading: true,
            };
        case ChatsActionTypes.GET_STARRED_CHATS:
            return {
                ...state,
                isSatrMessagesFetched: false,
                getStarMessagesLoading: false,
                isStarAdded: false,
            };
        case ChatsActionTypes.STAR_CHAT:
            return {
                ...state,
                isStarAdded: false,
            }
        case ChatsActionTypes.GET_CHANNELS:
            return {
                ...state,
                isChannelsFetched: false,
                getChannelsLoading: true,
            };
        case ChatsActionTypes.ADD_CONTACTS:
            return {
                ...state,
                isContactsAdded: false,
                addContactsLoading: true,
            };
        case ChatsActionTypes.CREATE_CHANNEL:
            return {
                ...state,
                isChannelCreated: false,
                createChannelLoading: true,
            };
        case ChatsActionTypes.CHANGE_SELECTED_CHAT:
            return {
                ...state,
                selectedChat: action.payload,
            };
        case ChatsActionTypes.GET_CHAT_USER_DETAILS:
            return {
                ...state,
                isUserDetailsFetched: false,
                getUserDetailsLoading: true,
            };
        case ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS:
            return {
                ...state,
                isUserConversationsFetched: false,
                getUserConversationsLoading: true,
                isUserMessageSent: false,
            };
        case ChatsActionTypes.TOGGLE_USER_DETAILS_TAB:
            return {
                ...state,
                isOpenUserDetails: action.payload,
            };
        case ChatsActionTypes.ON_SEND_MESSAGE:
            return {
                ...state,
                isUserMessageSent: false,
            };
        case ChatsActionTypes.DELETE_MESSAGE:
            return {
                ...state,
                isMessageDeleted: false,
            };
        case ChatsActionTypes.UNREAD_MESSAGE:
            return {
                ...state,
                isMessageUnread: false,
            };
        case ChatsActionTypes.FORWARD_MESSAGE:
            return {
                ...state,
                isMessageForwarded: false,
            };
        case ChatsActionTypes.DELETE_USER_MESSAGES:
            return {
                ...state,
                isUserMessagesDeleted: false,
            };
        case ChatsActionTypes.GET_CHANNEL_DETAILS:
            return {
                ...state,
                isChannelDetailsFetched: false,
                getUserDetailsLoading: true,
            };
        case ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT:
            return {
                ...state,
                isFavouriteContactToggled: false,
            };
        case ChatsActionTypes.GET_ARCHIVE_CONTACT:
            return {
                ...state,
                isArchiveContactFetched: false,
            };
        case ChatsActionTypes.ARCHIVE_CONTACT:
            return {
                ...state,
                isArchive: false,
            };
        case ChatsActionTypes.UNARCHIVE_CONTACT:
            return {
                ...state,
                isArchive: false,
            };
        case ChatsActionTypes.DELETE_IMAGE:
            return {
                ...state,
                isImageDeleted: false,
            };
        default:
            return { ...state };
    }
};

export default Chats;
