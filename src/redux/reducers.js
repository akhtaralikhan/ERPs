import { combineReducers } from "redux";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Login from "./auth/login/reducer";
import Register from "./auth/register/reducer";
import Settings from "./settings/reducer";
import console from "./console/reducer";
import Chats from "./chats/reducer";
import reports from "./reports/reducer";
import sales from "./sales/reducer";
import expenses from "./expenses/reducer";
import dashboard from "./dashboard/reducer";
import bankAccounts from "./bankAccounts/reducer";
import productAndServices from "./productAndServices/reducer";
import Accounting from "./accounting/reducer";



export default combineReducers({
    ForgetPassword,
    Login,
    Register,
    dashboard,
    bankAccounts,
    productAndServices,
    sales,
    expenses,
    Accounting,
    reports,
    Settings,
    console,
    Chats,
});