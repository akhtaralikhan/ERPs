// Auth Pages
import SignUp from "../Pages/Auth/SignUp";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
// Dashboard Pages
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome.jsx";
import PosInvoice from "../pages/Dashboard/PosInvoice";
import SideInvoice from "../Pages/DashBoard/SideInvoices.js/SideInvoice.jsx";
import Estimates from "../pages/Dashboard/Estimates";
import BankAccounts from "../pages/Dashboard/BankAccount/BankAccounts";
import Invoice from "../Pages/DashBoard/ManualInvoices.jsx";
import RecurringInvoice from "../Pages/DashBoard/DraftInvoice.jsx";
import Income from "../pages/Dashboard/Income";
import CreditNotes from "../pages/Dashboard/CreditNotes";
import Customer from "../pages/Dashboard/Customer";
import ItemCart from "../Pages/DashBoard/ItemCart/ItemCart.jsx";
import Expenses from "../pages/Dashboard/Expenses";
import DebitNotes from "../pages/Dashboard/DebitNotes";
import Vendors from "../pages/Dashboard/Vendors";
import ManualJournals from "../pages/Dashboard/ManualJournals";
import Transations from "../pages/Dashboard/Transations";
import ChartsOfAccount from "../pages/Dashboard/ChartsOfAccount";
import Assets from "../pages/Dashboard/Assets";
import Report from "../pages/Dashboard/Report";
import Settings from "../pages/Dashboard/Settings";
import Console from "../pages/Dashboard/Console";
import ConnectBank from "../pages/Dashboard/ConnectBank";
import Signin from "../Pages/Auth/Signin";
import { superAdmin } from "../constant/Config";
import ManageSales from '../Pages/DashBoard/ManageSales/ManageSales.jsx'
import ManualInvoices from "../Pages/DashBoard/ManualInvoices.jsx";
import DraftInvoice from '../Pages/DashBoard/DraftInvoice'

export const publicRoutes = [
  { path: "/Signin", component: <Signin /> },
  { path: "/SignUp", component: <SignUp /> },
  { path: "/ForgetPassword", component: <ForgetPassword /> },
];

const basePrivateRoutes = [
  { path: "/", component: <DashboardHome /> },
  { path: "/PosInvoice", component: <PosInvoice /> },
  { path: "/SideInvoice", component: <SideInvoice /> },
  { path: "/Estimates", component: <Estimates /> },
  { path: "/BankAccounts", component: <BankAccounts /> },
  { path: "/Invoice", component: <Invoice /> },
  { path: "/DraftInvoice", component: <DraftInvoice /> },
  { path: "/Incomes", component: <Income /> },
  { path: "/CreditNotes", component: <CreditNotes /> },
  { path: "/Customer", component: <Customer /> },
  { path: "/ItemCart", component: <ItemCart /> },
  { path: "/Expenses", component: <Expenses /> },
  { path: "/DebitNotes", component: <DebitNotes /> },
  { path: "/Vendors", component: <Vendors /> },
  { path: "/ManualJournals", component: <ManualJournals /> },
  { path: "/Transations", component: <Transations /> },
  { path: "/ChartsOfAccount", component: <ChartsOfAccount /> },
  { path: "/Assets", component: <Assets /> },
  { path: "/Report", component: <Report /> },
  { path: "/Settings", component: <Settings /> },
  { path: "/ConnectBank", component: <ConnectBank /> }, 
  { path: "/ManageSales", component: <ManageSales /> }, 
  { path: "/ManualInvoices", component: <ManualInvoices /> }, 
  
  
];

// Conditionally add Console route
if (superAdmin) {
  basePrivateRoutes.push({ path: "/Console", component: <Console /> });
}

export const privateRoutes = basePrivateRoutes;
