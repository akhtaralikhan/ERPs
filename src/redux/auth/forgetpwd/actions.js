// common success
export const authForgetPassApiResponseSuccess = (
  actionType,
  data
) => ({
  type: AuthForgetPassActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const authForgetPassApiResponseError = (
  actionType,
  error
) => ({
  type: AuthForgetPassActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const userForgetPassword = (user) => {
  return {
    type: AuthForgetPassActionTypes.FORGET_PASSWORD,
    payload: user,
  };
};

export const userChangePassword = (newPassword) => {
  return {
    type: AuthForgetPassActionTypes.CHANGE_PASSWORD,
    payload: newPassword,
  };
};
