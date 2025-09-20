// Auth Pages
import SignUp from "../Pages/Auth/SignUp";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
// Dashboard Pages
import DashboardHome from "../Pages/DashBoard/DashboardHome";
// import PosInvoice from "../pages/Dashboard/PosInvoice";
import SideInvoice from "../Pages/DashBoard/SideInvoices.js/SideInvoice.jsx";
// import Estimates from "../pages/Dashboard/Estimates";
import BankAccounts from "../Pages/DashBoard/BusinessERP/BusinessERP.jsx";
import Invoice from "../Pages/DashBoard/ManualInvoices.jsx";
import QuoteInvoice from "../pages/Dashboard/QuoteInvoice.jsx";
import CustomerInfo from "../Pages/DashBoard/CustomerInfo.jsx";
import ItemCart from "../Pages/DashBoard/POS/ItemCart.jsx";
import PurchaseInvoiceDraft from "../Pages/DashBoard/PurchaseInvoiceDraft.jsx";
import PurchaseInvoiceQuote from "../pages/Dashboard/PurchaseInvoiceQuote";
import Assets from "../Pages/DashBoard/Assets.jsx";
// import ManualJournals from "../pages/Dashboard/ManualJournals";
// import Transations from "../pages/Dashboard/Transations";
// import ChartsOfAccount from "../pages/Dashboard/ChartsOfAccount";
// import Assets from "../pages/Dashboard/Assets";
// import Report from "../pages/Dashboard/Report";
// import Settings from "../pages/Dashboard/Settings";
// import Console from "../pages/Dashboard/Console";
// import ConnectBank from "../pages/Dashboard/ConnectBank";
import Signin from "../Pages/Auth/Signin";
import { superAdmin } from "../constant/Config";
import BusinessERP from "../Pages/DashBoard/BusinessERP/BusinessERP.jsx";
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
  // { path: "/BusinessERP/Index", component: <BusinessERP /> },
  // POS
  { path: "/ItemCart/Index", component: <ItemCart /> },
  { path: "/ItemCart/ItemCartSideInvoice", component: <ItemCart /> },
  // manage sales
  { path: "/Payment/Index", component: <DashboardHome /> },
  { path: "/PaymentManual/Index", component: <DashboardHome /> },
  { path: "/PaymentDraft/Index", component: <DashboardHome /> },
  { path: "/PaymentQuote/Index", component: <DashboardHome /> },
  { path: "/CustomerInfo/Index", component: <DashboardHome /> },
  { path: "/ReturnLog/SalesReturnIndex", component: <DashboardHome /> },

  // manage Purchases
  { path: "/PurchasesPayment/Index", component: <DashboardHome /> },
  { path: "/PurchasesPaymentDraft/Index", component: <DashboardHome /> },
  { path: "/PurchasesPaymentQuote/Index", component: <DashboardHome /> },
  { path: "/Supplier/Index", component: <DashboardHome /> },
  { path: "/ReturnLog/PurchaseReturnIndex", component: <DashboardHome /> },
  //manage expense 
  { path: "/ExpenseSummary/Index", component: <DashboardHome /> },
  { path: "/ExpenseType/Index", component: <DashboardHome /> },

  // manage branch
  { path: "/Branch/Index", component: <DashboardHome /> },

  // manage items
  { path: "/Items/Index", component: <DashboardHome /> },
  // here will come out of stock item page which is denied access
  { path: "/Items/LowInStockItem", component: <DashboardHome /> },
  { path: "/DamageItemDetails/Index", component: <DashboardHome /> },
  { path: "/ItemsHistory/Index", component: <DashboardHome /> },
  { path: "/Warehouse/Index", component: <DashboardHome /> },
  // system settings
  { path: "/CompanyInfo/Index", component: <DashboardHome /> },
  { path: "/EmailConfig/Index", component: <DashboardHome /> },
  { path: "/Currency/Index", component: <DashboardHome /> },
  { path: "/PaymentType/Index", component: <DashboardHome /> },
  { path: "/PaymentStatus/Index", component: <DashboardHome /> },
  { path: "/CustomerType/Index", component: <DashboardHome /> },
  { path: "/VatPercentage/Index", component: <DashboardHome /> },
  { path: "/Categories/Index", component: <DashboardHome /> },
  // here will come unit of measure page denied access

  //human resource
  { path: "/Attendance/Index", component: <DashboardHome /> },
  { path: "/Employee/Index", component: <DashboardHome /> },
  { path: "/Designation/Index", component: <DashboardHome /> },
  { path: "/Department/Index", component: <DashboardHome /> },
  // sub department access denied

  // manage user roles
  { path: "/ManageUserRoles/Index", component: <DashboardHome /> },
  { path: "/SystemRole/Index", component: <DashboardHome /> },

  // manage user 
  { path: "/UserManagement/Index", component: <DashboardHome /> },
  { path: "/IdentitySetting/Index", component: <DashboardHome /> },
  { path: "/EmailSetting/Index", component: <DashboardHome /> },
  { path: "/SendEmailHistory/Index", component: <DashboardHome /> },
  { path: "/LoginHistory/Index", component: <DashboardHome /> },
  { path: "/AuditLogs/Index", component: <DashboardHome /> },
  { path: "/UserInfoFromBrowser/Index", component: <DashboardHome /> },
  { path: "/RefreshToken/Index", component: <DashboardHome /> },

  // item reports
  { path: "/SalesReport/HighInDemand", component: <DashboardHome /> },
  { path: "/SalesReport/LowInDemand", component: <DashboardHome /> },
  { path: "/SalesReport/HighestEarning", component: <DashboardHome /> },
  { path: "/SalesReport/LowestEarning", component: <DashboardHome /> },

  // SALE REPORTS
  { path: "/SalesReport/PaymentSummaryReport", component: <DashboardHome /> },
  { path: "/SalesReport/ProductWiseSale", component: <DashboardHome /> },
  { path: "/SalesReport/PaymentDetailReport", component: <DashboardHome /> },
  { path: "/SalesReport/TransactionByDay", component: <DashboardHome /> },
  { path: "/SalesReport/TransactionByMonth", component: <DashboardHome /> },
  { path: "/SalesReport/TransactionByYear", component: <DashboardHome /> },

  // PURCHASE REPORTS
  { path: "/PurchasesReport/PurchasesSummary", component: <DashboardHome /> },
  { path: "/PurchasesReport/PurchasesDetail", component: <DashboardHome /> },
  { path: "/PurchasesReport/PurchasesTransactionByDay", component: <DashboardHome /> },
  { path: "/PurchasesReport/PurchasesTransactionByMonth", component: <DashboardHome /> },
  { path: "/PurchasesReport/PurchasesTransactionByYear", component: <DashboardHome /> },

  // EXPENSE REPORTS
  { path: "/ExpenseReport/ExpenseSummaryReport", component: <DashboardHome /> },
  { path: "/ExpenseReport/ExpenseDetailsReport", component: <DashboardHome /> },
  { path: "/ExpenseReport/ExpenseByDay", component: <DashboardHome /> },
  { path: "/ExpenseReport/ExpenseByMonth", component: <DashboardHome /> },
  { path: "/ExpenseReport/ExpenseByYear", component: <DashboardHome /> },

  // OTHER REPORTS
  { path: "/SalesReport/SummaryReport", component: <DashboardHome /> },
  { path: "/SalesReport/AttendanceReport", component: <DashboardHome /> },
  { path: "/SalesReport/PrintBarcode", component: <DashboardHome /> },
  // DONE

  { path: "/", component: <DashboardHome /> },
  // { path: "/PosInvoice", component: <PosInvoice /> },
  { path: "/SideInvoice", component: <SideInvoice /> },
  // { path: "/Estimates", component: <Estimates /> },
  { path: "/BankAccounts", component: <BankAccounts /> }, // UNSTYLED 
  { path: "/Invoice", component: <Invoice /> }, // UNSTYLED SAME
  { path: "/DraftInvoice", component: <DraftInvoice /> }, // UNSTYLED SAME
  { path: "/QuoteInvoice", component: <QuoteInvoice /> }, // UNSTYLED SAME
  { path: "/CustomerInfo", component: <CustomerInfo /> }, // UNSTYLED
  { path: "/SalesReturn", component: <SalesReturn /> }, // UNSTYLED
  { path: "/PurchaseReturn", component: <PurchaseReturn /> }, // UNSTYLED
  { path: "/PurchaseInvoiceDraft", component: <PurchaseInvoiceDraft /> },// UNSTYLED
  { path: "/PurchaseInvoiceQuote", component: <PurchaseInvoiceQuote /> }, // UNSTYLED
  { path: "/Assets", component: <Assets /> }, // NOT THAT GOOD 
  // { path: "/ManualJournals", component: <ManualJournals /> },
  // { path: "/Transations", component: <Transations /> },
  // { path: "/ChartsOfAccount", component: <ChartsOfAccount /> },
  // { path: "/Assets", component: <Assets /> },
  // { path: "/Report", component: <Report /> },
  // { path: "/Settings", component: <Settings /> },
  // { path: "/ConnectBank", component: <ConnectBank /> },
  { path: "/ManageSales", component: <ManageSales /> },
  { path: "/ManualInvoices", component: <ManualInvoices /> },
  { path: "/PurchaseInvoice", component: <PurchaseInvoice /> },
];

// Conditionally add Console route
if (superAdmin) {
  basePrivateRoutes.push({ path: "/UserProfile/Index", component: <DashboardHome /> });
}

export const privateRoutes = basePrivateRoutes;
