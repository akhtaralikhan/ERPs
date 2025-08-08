import { combineReducers } from "redux";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Login from "./auth/login/reducer";
import Register from "./auth/register/reducer";
import SettingsReducer from "./settings/reducer";
import consoleReducer from "./console/reducer";
import Chats from "./chats/reducer";
import reportsReducer from "./reports/reducer";
import salesReducer from "./sales/reducer";
import expensesReducer from "./expenses/reducer";
import dashboardReducer from "./dashboard/reducer";
import bankAccountsReducer from "./bankAccounts/reducer";



export default combineReducers({
    ForgetPassword,
    Login,
    Register,
    SettingsReducer,
    consoleReducer,
    Chats,
    reportsReducer,
    salesReducer,
    expensesReducer,
    dashboardReducer,
    bankAccountsReducer,
});