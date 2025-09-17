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
import QuoteInvoice from "../pages/Dashboard/QuoteInvoice.jsx";
import CustomerInfo from "../Pages/DashBoard/CustomerInfo.jsx";
import ItemCart from "../Pages/DashBoard/ItemCart/ItemCart.jsx";
import PurchaseInvoiceDraft from "../Pages/DashBoard/PurchaseInvoiceDraft.jsx";
import PurchaseInvoiceQuote from "../pages/Dashboard/PurchaseInvoiceQuote";
import ManageSupplier from "../Pages/DashBoard/ManageSupplier.jsx";
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
import SalesReturn from "../Pages/DashBoard/SalesReturn.jsx";
import PurchaseInvoice from "../Pages/DashBoard/PurchaseInvoice.jsx";
import PurchaseReturn from "../Pages/DashBoard/PurchaseReturn.jsx";

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
  { path: "/QuoteInvoice", component: <QuoteInvoice /> },
  { path: "/CustomerInfo", component: <CustomerInfo /> },
  { path: "/SalesReturn", component: <SalesReturn /> },
  { path: "/PurchaseReturn", component: <PurchaseReturn /> },
  { path: "/ItemCart", component: <ItemCart /> },
  { path: "/PurchaseInvoiceDraft", component: <PurchaseInvoiceDraft /> },
  { path: "/PurchaseInvoiceQuote", component: <PurchaseInvoiceQuote /> },
  { path: "/ManageSupplier", component: <ManageSupplier /> },
  { path: "/ManualJournals", component: <ManualJournals /> },
  { path: "/Transations", component: <Transations /> },
  { path: "/ChartsOfAccount", component: <ChartsOfAccount /> },
  { path: "/Assets", component: <Assets /> },
  { path: "/Report", component: <Report /> },
  { path: "/Settings", component: <Settings /> },
  { path: "/ConnectBank", component: <ConnectBank /> }, 
  { path: "/ManageSales", component: <ManageSales /> }, 
  { path: "/ManualInvoices", component: <ManualInvoices /> }, 
  { path: "/PurchaseInvoice", component: <PurchaseInvoice /> }, 
  
  
];

// Conditionally add Console route
if (superAdmin) {
  basePrivateRoutes.push({ path: "/Console", component: <Console /> });
}

export const privateRoutes = basePrivateRoutes;
