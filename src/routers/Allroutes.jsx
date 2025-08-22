import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import ForgetPassword from "../Pages/Auth/ForgetPassword/ForgetPassword.jsx";
import DashboardHome from "../Pages/Dashboard/DashboardHome";


export const publicRoutes = [
    {path:'/SignIn' , component: <SignIn/>},
    {path:'/SignUp' , component: <SignUp/>},
    {path:'/ForgetPassword' , component: <ForgetPassword/>}
]

export const privateRoutes = [ 
    {path:'/DashboardHome' , component:<DashboardHome/>}
]