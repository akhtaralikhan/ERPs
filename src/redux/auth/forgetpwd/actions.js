// common success
import { AuthForgetPassActionTypes } from './types';
// common success
export const authLoginApiResponseSuccess = (actionType, data) => ({
  type: AuthForgetPassActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authLoginApiResponseError = (
  actionType,
  error
) => ({
  type: AuthForgetPassActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const recoverPassword = (user) => {
  return {
    type: AuthForgetPassActionTypes.FORGET_PASSWORD,
    payload: { user },
  };
};
