import { AuthLoginActionTypes } from './types';
// common success
export const authLoginApiResponseSuccess = (actionType, data) => ({
  type: AuthLoginActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authLoginApiResponseError = (
  actionType,
  error
) => ({
  type: AuthLoginActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const loginUser = (user) => {
  return {
    type: AuthLoginActionTypes.LOGIN_USER,
    payload: { user },
  };
};

export const logoutUser = () => {
  return {
    type: AuthLoginActionTypes.LOGOUT_USER,
  };
};

export const socialLogin = (data, type) => {
  return {
    type: AuthLoginActionTypes.SOCIAL_LOGIN,
    payload: { data, type },
  };
};