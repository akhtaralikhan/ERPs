import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { AuthRegisterActionTypes } from "./types";
import {
  authRegisterApiResponseSuccess,
  authRegisterApiResponseError,
} from "./actions";


function* registerUser(action) {
  try {
    const { user } = action.payload;

    const response = yield call(loginUserApi, user);

    if (response) {
      localStorage.setItem("userData", JSON.stringify(response));
      localStorage.setItem("token", response.data.token || "");
    }

    yield put(authRegisterApiResponseSuccess(AuthRegisterActionTypes.REGISTER_USER, response));
  } catch (error) {
    yield put(
      authRegisterApiResponseError(AuthRegisterActionTypes.REGISTER_USER, error.response?.data || "Login failed")
    );
  }
}

export default function* registerUserSaga() {
  yield takeEvery(AuthRegisterActionTypes.REGISTER_USER, registerUser);
}
