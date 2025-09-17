import { call, put, takeEvery } from "redux-saga/effects";
import { authLoginApiResponseSuccess, authLoginApiResponseError } from "./actions";
import { AuthForgetPassActionTypes } from "./types";
import { forgetPswdUserApi } from "../../../api/auth";


function* forgetPassword(action) {
  try {
    const { user } = action.payload;

    const response = yield call(forgetPswdUserApi, user);

    yield put(authLoginApiResponseSuccess(AuthForgetPassActionTypes.FORGET_PASSWORD, response.data));
  } catch (error) {
    yield put(
      authLoginApiResponseError(AuthForgetPassActionTypes.FORGET_PASSWORD, error.response?.data || "Forget pasasword failed")
    );
  }
}

export default function* forgetPasswordSaga() {
  yield takeEvery(AuthForgetPassActionTypes.FORGET_PASSWORD, forgetPassword);
}