import { call, put, takeEvery } from "redux-saga/effects";
import { authLoginApiResponseSuccess, authLoginApiResponseError } from "./actions";
import { AuthLoginActionTypes } from "./types";
import { loginUserApi } from "../../../api/auth.JS";
function* loginUser(action) {
    try {
        const { user } = action.payload;

        // ✅ Pass credentials as a single object
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
