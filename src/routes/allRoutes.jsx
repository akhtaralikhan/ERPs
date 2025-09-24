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
import ExpenseSummary from "../Pages/DashBoard/ManageExpense/ExpenseSummary.jsx";
import ExpensesType from "../Pages/DashBoard/ManageExpense/ExpenseType.jsx";
import ManageBranch from "../Pages/DashBoard/ManageBranch/ManageBranch.jsx";
import Item from "../Pages/DashBoard/ManageItem/Item.jsx";
import LowInStock from "../Pages/DashBoard/ManageItem/LowInStock.jsx";
import ItemHistory from "../Pages/DashBoard/ManageItem/ItemHistory.jsx";
import ManageWareHouse from "../Pages/DashBoard/ManageItem/ManageWarehouse.jsx";
import DamageItem from "../Pages/DashBoard/ManageItem/DamageItemDetail.jsx";
import CompanyInfo from "../Pages/DashBoard/SystemSettings/CompanyInfo.jsx";
import EmailConfig from "../Pages/DashBoard/SystemSettings/EmailConfig.jsx";
import ManageCurrency from "../Pages/DashBoard/SystemSettings/ManageCurrency.jsx";
import PaymentType from "../Pages/DashBoard/SystemSettings/PaymentType.jsx";
import PaymentStatus from "../Pages/DashBoard/SystemSettings/PaymentStatus.jsx";
import CustomerType from "../Pages/DashBoard/SystemSettings/CustomerType.jsx";
import VatPercentage from "../Pages/DashBoard/SystemSettings/VatPercentage.jsx";
import Categories from "../Pages/DashBoard/SystemSettings/Categories.jsx";
import Attendence from "../Pages/DashBoard/HumanResource/Attendence.jsx";
import ManageEmployee from "../Pages/DashBoard/HumanResource/ManageEmployee.jsx";
import Designation from "../Pages/DashBoard/HumanResource/Designation.jsx";
import SubDepartment from "../Pages/DashBoard/HumanResource/SubDepartment.jsx";
import Department from "../Pages/DashBoard/HumanResource/Department.jsx";
import ManageUserRoles from "../Pages/DashBoard/ManageUserRoles/ManageUserRoles.jsx";
import SystemRole from "../Pages/DashBoard/ManageUserRoles/SystemRole.jsx";
import ProductMainGroup from "../Pages/DashBoard/Assets.jsx";
import UserManagement from "../Pages/DashBoard/ManageUser/UserManagement.jsx";
import SendEmailHistory from "../Pages/DashBoard/ManageUser/SendEmailHistory.jsx";
import LoginHistory from "../Pages/DashBoard/ManageUser/LoginHistory.jsx";
import AuditLogs from "../Pages/DashBoard/ManageUser/AuditLogs.jsx";
import UserInfoFromBrowser from "../Pages/DashBoard/ManageUser/UserInfoFromBrowser.jsx";
import RefreshToken from "../Pages/DashBoard/ManageUser/RefreshToken.jsx";
import HighInDemand from "../Pages/DashBoard/ItemReports/HighInDemand.jsx";
import LowInDemand from "../Pages/DashBoard/ItemReports/LowInDemand.jsx";
import HighestEarning from "../Pages/DashBoard/ItemReports/HighestEarning.jsx";
import LowestEarning from "../Pages/DashBoard/ItemReports/LowestEarning.jsx";
import PaymentSummaryReport from "../Pages/DashBoard/SalesReport/PaymentSummaryReport.jsx";
import ProductWiseSale from "../Pages/DashBoard/SalesReport/ProductWiseSale.jsx";
import PaymentDetailReport from "../Pages/DashBoard/SalesReport/PaymentDetailReport.jsx";
import TransactionByDay from "../Pages/DashBoard/SalesReport/TransactionByDay.jsx";
import TransactionByMonth from "../Pages/DashBoard/SalesReport/TransactionByMonth.jsx";
import TransactionByYear from "../Pages/DashBoard/SalesReport/TransactionByYear.jsx";
import PurchasesSummary from "../Pages/DashBoard/PurchasesReport/PurchasesSummary.jsx";
import PurchasesDetail from "../Pages/DashBoard/PurchasesReport/PurchasesDetail.jsx";
import PurchasesTransactionByDay from "../Pages/DashBoard/PurchasesReport/PurchasesTransactionByDay.jsx";
import PurchasesTransactionByMonth from "../Pages/DashBoard/PurchasesReport/PurchasesTransactionByMonth.jsx";
import PurchasesTransactionByYear from "../Pages/DashBoard/PurchasesReport/PurchasesTransactionByYear.jsx";
import ExpenseSummaryReport from "../Pages/DashBoard/ExpenseReport/ExpenseSummaryReport.jsx";
import ExpenseDetailsReport from "../Pages/DashBoard/ExpenseReport/ExpenseDetailsReport.jsx";
import ExpenseByDay from "../Pages/DashBoard/ExpenseReport/ExpenseByDay.jsx";
import ExpenseByMonth from "../Pages/DashBoard/ExpenseReport/ExpenseByMonth.jsx";
import ExpenseByYear from "../Pages/DashBoard/ExpenseReport/ExpenseByYear.jsx";
import SummaryReport from "../Pages/DashBoard/OtherReports/SummaryReport.jsx";
import AttendanceReport from "../Pages/DashBoard/OtherReports/AttendanceReport.jsx";
import EmailSetting from "../Pages/DashBoard/ManageUser/EmailSetting.jsx";
import IdentitySetting from "../Pages/DashBoard/ManageUser/IdentitySetting.jsx";
import PrintBarcode from "../Pages/DashBoard/OtherReports/PrintBarcode.jsx";

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
  { path: "/Payment/Index", component: <ProductMainGroup /> },
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
  { path: "/ExpenseSummary/Index", component: <ExpenseSummary /> },
  { path: "/ExpenseType/Index", component: <ExpensesType /> },

  // manage branch
  { path: "/Branch/Index", component: <ManageBranch /> },

  // manage items
  { path: "/Items/Index", component: <Item /> },
  // here will come out of stock item page which is denied access
  { path: "/Items/LowInStockItem", component: <LowInStock /> },
  { path: "/DamageItemDetails/Index", component: <DamageItem /> },
  { path: "/ItemsHistory/Index", component: <ItemHistory /> },
  { path: "/Warehouse/Index", component: <ManageWareHouse /> },

  // system settings
  { path: "/CompanyInfo/Index", component: <CompanyInfo /> },
  { path: "/EmailConfig/Index", component: <EmailConfig /> },
  { path: "/Currency/Index", component: <ManageCurrency /> },
  { path: "/PaymentType/Index", component: <PaymentType /> },
  { path: "/PaymentStatus/Index", component: <PaymentStatus /> },
  { path: "/CustomerType/Index", component: <CustomerType /> },
  { path: "/VatPercentage/Index", component: <VatPercentage /> },
  { path: "/Categories/Index", component: <Categories /> },
  // here will come unit of measure page denied access

  //human resource
  { path: "/Attendance/Index", component: <Attendence /> },
  { path: "/Employee/Index", component: <ManageEmployee /> },
  { path: "/Designation/Index", component: <Designation /> },
  { path: "/Department/Index", component: <Department /> },
  { path: "/SubDepartment/Index", component: <SubDepartment /> }, // access denied
  // sub department access denied

  // manage user roles
  { path: "/ManageUserRoles/Index", component: <ManageUserRoles /> },
  { path: "/SystemRole/Index", component: <SystemRole /> },

  // manage user 
  { path: "/UserManagement/Index", component: <UserManagement /> },
  { path: "/IdentitySetting/Index", component: <IdentitySetting /> },
  { path: "/EmailSetting/Index", component: <EmailSetting /> },
  { path: "/SendEmailHistory/Index", component: <SendEmailHistory /> },
  { path: "/LoginHistory/Index", component: <LoginHistory /> },
  { path: "/AuditLogs/Index", component: <AuditLogs /> },
  { path: "/UserInfoFromBrowser/Index", component: <UserInfoFromBrowser /> },
  { path: "/RefreshToken/Index", component: <RefreshToken /> },

  // item reports
  { path: "/SalesReport/HighInDemand", component: <HighInDemand /> },
  { path: "/SalesReport/LowInDemand", component: <LowInDemand /> },
  { path: "/SalesReport/HighestEarning", component: <HighestEarning /> },
  { path: "/SalesReport/LowestEarning", component: <LowestEarning /> },

  // SALE REPORTS
  { path: "/SalesReport/PaymentSummaryReport", component: <PaymentSummaryReport /> },
  { path: "/SalesReport/ProductWiseSale", component: <ProductWiseSale /> },
  { path: "/SalesReport/PaymentDetailReport", component: <PaymentDetailReport /> },
  { path: "/SalesReport/TransactionByDay", component: <TransactionByDay /> },
  { path: "/SalesReport/TransactionByMonth", component: <TransactionByMonth /> },
  { path: "/SalesReport/TransactionByYear", component: <TransactionByYear /> },

  // PURCHASE REPORTS
  { path: "/PurchasesReport/PurchasesSummary", component: <PurchasesSummary /> },
  { path: "/PurchasesReport/PurchasesDetail", component: <PurchasesDetail /> },
  { path: "/PurchasesReport/PurchasesTransactionByDay", component: <PurchasesTransactionByDay /> },
  { path: "/PurchasesReport/PurchasesTransactionByMonth", component: <PurchasesTransactionByMonth /> },
  { path: "/PurchasesReport/PurchasesTransactionByYear", component: <PurchasesTransactionByYear /> },

  // EXPENSE REPORTS
  { path: "/ExpenseReport/ExpenseSummaryReport", component: <ExpenseSummaryReport /> },
  { path: "/ExpenseReport/ExpenseDetailsReport", component: <ExpenseDetailsReport /> },
  { path: "/ExpenseReport/ExpenseByDay", component: <ExpenseByDay /> },
  { path: "/ExpenseReport/ExpenseByMonth", component: <ExpenseByMonth /> },
  { path: "/ExpenseReport/ExpenseByYear", component: <ExpenseByYear /> },

  // OTHER REPORTS
  { path: "/SalesReport/SummaryReport", component: <SummaryReport /> },
  { path: "/SalesReport/AttendanceReport", component: <AttendanceReport /> },
  { path: "/SalesReport/PrintBarcode", component: <PrintBarcode /> },
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
