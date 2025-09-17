import { AuthRegisterActionTypes } from "./types";
// common success
export const authRegisterApiResponseSuccess = (
  actionType,
  data
) => ({
  type: AuthRegisterActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authRegisterApiResponseError = (
  actionType,
  error
) => ({
  type: AuthRegisterActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const registerUser = (user) => {
  return {
    type: AuthRegisterActionTypes.REGISTER_USER,
    payload: { user },
  };
};
