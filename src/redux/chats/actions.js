
// common success
export const chatsApiResponseSuccess = (actionType, data) => ({
  type: ChatsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const chatsApiResponseError = (actionType, error) => ({
  type: ChatsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getFavourites = () => ({
  type: ChatsActionTypes.GET_FAVOURITES,
});

export const getDirectMessages = () => ({
  type: ChatsActionTypes.GET_DIRECT_MESSAGES,
});

export const getChannels = () => ({
  type: ChatsActionTypes.GET_CHANNELS,
});

export const addContacts = (contacts) => ({
  type: ChatsActionTypes.ADD_CONTACTS,
  payload: contacts,
});

export const changeSelectedChat = (selectedChat) => ({
  type: ChatsActionTypes.CHANGE_SELECTED_CHAT,
  payload: selectedChat,
});

export const getChatUserDetails = (selectedChat) => ({
  type: ChatsActionTypes.GET_CHAT_USER_DETAILS,
  payload: selectedChat,
});

export const getChatUserConversations = (
  userUid
) => ({
  type: ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS,
  payload: userUid,
});

export const addMessageToChatList = (message) => ({
  type: ChatsActionTypes.ADD_MESSAGE_TO_CHAT_LIST,
  payload: message,
});

export const toggleUserDetailsTab = (value) => ({
  type: ChatsActionTypes.TOGGLE_USER_DETAILS_TAB,
  payload: value,
});

export const onSendMessage = (data) => ({
  type: ChatsActionTypes.ON_SEND_MESSAGE,
  payload: data,
});

export const onReplyMessage = (data) => ({
  type: ChatsActionTypes.ON_REPLY_MESSAGE,
  payload: data,
});

export const markMessagesAsRead = () => ({
  type: ChatsActionTypes.READ_MESSAGE,
});

export const readMessage = (id) => ({
  type: ChatsActionTypes.READ_MESSAGE,
  payload: id,
});


export const deleteMessage = (
  messageId
) => ({
  type: ChatsActionTypes.DELETE_MESSAGE,
  payload: messageId,
});

export const readAllChat = (
  messageId, toUserUid
) => ({
  type: ChatsActionTypes.READALL_MESSAGE,
  payload: messageId, toUserUid,
});

export const readChat = () => ({
  type: ChatsActionTypes.READ_MESSAGE,
});

export const unRead = (
  messageId
) => ({
  type: ChatsActionTypes.UNREAD_MESSAGE,
  payload: messageId,
});

export const forwardMessage = (data) => ({
  type: ChatsActionTypes.FORWARD_MESSAGE,
  payload: data,
});

export const deleteUserMessages = (
  userUid,
  msgID
) => ({
  type: ChatsActionTypes.DELETE_USER_MESSAGES,
  payload: { userUid, msgID },
});

export const starChat = (chatID) => ({
  type: ChatsActionTypes.STAR_CHAT,
  payload: chatID,
});

export const UnStarChat = (chatID) => ({
  type: ChatsActionTypes.UNSTAR_CHAT,
  payload: chatID,
});

export const GetStaredChats = (toUserUid) => ({
  type: ChatsActionTypes.GET_STARRED_CHATS,
  payload: toUserUid,
});

export const NewMessageReceived = (message) => ({
  type: ChatsActionTypes.NEW_MESSAGE_RECEIVED,
  payload: message,
});


export const getChannelDetails = (id) => ({
  type: ChatsActionTypes.GET_CHANNEL_DETAILS,
  payload: id,
});

export const toggleFavouriteContact = (id) => ({
  type: ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT,
  payload: id,
});

export const PinnedContact = (msgID) => ({
  type: ChatsActionTypes.GET_PINNED_CONTACT,
  payload: msgID,
});

export const pinContact = (msgID) => ({
  type: ChatsActionTypes.PIN_CONTACT,
  payload: { msgID },
});

export const unPinContact = (msgID) => ({
  type: ChatsActionTypes.UNPIN_CONTACT,
  payload: { msgID },
});


export const getArchiveContact = () => ({
  type: ChatsActionTypes.GET_ARCHIVE_CONTACT,
});

export const ArchiveContact = (msgID) => ({
  type: ChatsActionTypes.ARCHIVE_CONTACT,
  payload: { msgID },
});

export const unArchiveContact = (msgID) => ({
  type: ChatsActionTypes.UNARCHIVE_CONTACT,
  payload: { msgID },
});

export const readConversation = (id) => ({
  type: ChatsActionTypes.READ_CONVERSATION,
  payload: id,
});

export const deleteImage = (
  userId,
  messageId,
  imageId
) => ({
  type: ChatsActionTypes.DELETE_IMAGE,
  payload: { userId, messageId, imageId },
});

