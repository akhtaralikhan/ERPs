import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { AuthRegisterActionTypes } from "./types";
import {
  authRegisterApiResponseSuccess,
  authRegisterApiResponseError,
} from "./actions";


function* registerUserApi(action) {
  try {
    const { user } = action.payload;

    const response = yield call(loginUserApi, user);

    if (response) {
      localStorage.setItem("userData", JSON.stringify(response));
      localStorage.setItem("token", response.data.token || "");
    }

    yield put(authLoginApiResponseSuccess(AuthLoginActionTypes.LOGIN_USER, response));
  } catch (error) {
    yield put(
      authLoginApiResponseError(AuthLoginActionTypes.LOGIN_USER, error.response?.data || "Login failed")
    );
  }
}

export default function* loginSaga() {
  yield takeEvery(AuthLoginActionTypes.LOGIN_USER, loginUser);
}
