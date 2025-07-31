// Auth Pages
import SignUp from "../pages/Auth/SignUp";
import ForgetPassword from "../pages/Auth/ForgetPassword";

// Dashboard Pages
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Product from "../pages/Dashboard/Product";
import Services from "../pages/Dashboard/Services";
import Estimates from "../pages/Dashboard/Estimates";
import BankAccounts from "../pages/Dashboard/BankAccounts";
import Invoice from "../pages/Dashboard/Invoice";
import RecurringInvoice from "../pages/Dashboard/RecurringInvoice";
import Income from "../pages/Dashboard/Income";
import CreditNotes from "../pages/Dashboard/CreditNotes";
import Customer from "../pages/Dashboard/Customer";
import Bills from "../pages/Dashboard/Bills";
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
import Signin from "../pages/Auth/Signin";

export const publicRoutes = [
  { path: "/Signin", component: <Signin /> },
  { path: "/SignUp", component: <SignUp /> },
  { path: "/ForgetPassword", component: <ForgetPassword /> },
];
export const privateRoutes = [
  { path: "/", component: <DashboardHome /> },
  { path: "/Product", component: <Product /> },
  { path: "/Services", component: <Services /> },
  { path: "/Estimates", component: <Estimates /> },
  { path: "/BankAccounts", component: <BankAccounts /> },
  { path: "/Invoice", component: <Invoice /> },
  { path: "/RecurringInvoice", component: <RecurringInvoice /> },
  { path: "/Incomes", component: <Income /> },
  { path: "/CreditNotes", component: <CreditNotes /> },
  { path: "/Customer", component: <Customer /> },
  { path: "/Bills", component: <Bills /> },
  { path: "/Expenses", component: <Expenses /> },
  { path: "/DebitNotes", component: <DebitNotes /> },
  { path: "/Vendors", component: <Vendors /> },
  { path: "/ManualJournals", component: <ManualJournals /> },
  { path: "/Transations", component: <Transations /> },
  { path: "/ChartsOfAccount", component: <ChartsOfAccount /> },
  { path: "/Assets", component: <Assets /> },
  { path: "/Report", component: <Report /> },
  { path: "/Settings", component: <Settings /> },
  { path: "/Console", component: <Console /> },
  { path: "/ConnectBank", component: <ConnectBank /> },
];