import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { AuthLoginActionTypes } from "./types";
import { authLoginApiResponseSuccess, authLoginApiResponseError } from "./actions";
import { postRealLogin } from "../../../constants/RealApi";
import { call, put, takeEvery } from "redux-saga/effects";
import { AuthLoginActionTypes } from "./actionTypes";
import { authLoginApiResponseSuccess, authLoginApiResponseError } from "./actions";
import { postRealLogin } from "../../helpers/api";

function* loginUser(action) {
    try {
        const { user } = action.payload;

        const response = yield call(postRealLogin, {
            email: user.email,
            password: user.password,
        });

        const profile = response?.responseData?.profile;
        if (profile) {
            localStorage.setItem("userData", JSON.stringify(response));
            localStorage.setItem("userUid", JSON.stringify(profile.userUid));
            localStorage.setItem("CheckNotifyId", JSON.stringify(profile.id));
            localStorage.setItem("token", profile.token || "");
            localStorage.setItem("sessionId", profile.sessionId || "");
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
