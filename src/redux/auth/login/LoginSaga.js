import { call, put, takeEvery } from "redux-saga/effects";
import { authLoginApiResponseSuccess, authLoginApiResponseError } from "./actions";
import { AuthLoginActionTypes } from "./types";
import { loginUserApi } from "../../../api/auth";


function* loginUser(action) {
    console.log("🟢 loginUser saga triggered with:", action.payload.user);
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