// Auth Pages
import SignUp from "../Pages/Auth/SignUp";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
// Dashboard Pages
import DashboardHome from "../Pages/DashBoard/DashboardHome";
// import PosInvoice from "../pages/Dashboard/PosInvoice";
import BankAccounts from "../Pages/DashBoard/BusinessERP/BusinessERP.jsx";
import Invoice from "../Pages/DashBoard/ManageSales/Invoice.jsx";
import ItemCart from "../Pages/DashBoard/POS/ItemCart.jsx";
import PurchaseInvoiceDraft from "../Pages/DashBoard/PurchaseInvoiceDraft.jsx";
import PurchaseInvoiceQuote from "../pages/Dashboard/PurchaseInvoiceQuote";
import Assets from "../Pages/DashBoard/Assets.jsx";
import Signin from "../Pages/Auth/Signin";
import { superAdmin } from "../constant/Config";
import BusinessERP from "../Pages/DashBoard/BusinessERP/BusinessERP.jsx";
import ManageSales from '../Pages/DashBoard/ManageSales/ManageSales.jsx'
import PurchaseReturn from "../Pages/DashBoard/PurchaseReturn.jsx";
import ExpenseSummary from "../Pages/DashBoard/ManageExpense/ExpenseSummary.jsx";
import ExpensesType from "../Pages/DashBoard/ManageExpense/ExpenseType.jsx";
import ManageBranch from "../Pages/DashBoard/ManageBranch/ManageBranch.jsx";
import Item from "../Pages/DashBoard/ManageItem/Item.jsx";
import LowInStock from "../Pages/DashBoard/ManageItem/LowInStock.jsx";
import ItemHistory from "../Pages/DashBoard/ManageItem/ItemHistory.jsx";
import ManageWareHouse from "../Pages/DashBoard/ManageItem/ManageWarehouse.jsx";
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
import SystemRoles from "../Pages/DashBoard/ManageUserRoles/SystemRole.jsx";
import ManualInvoice from "../Pages/DashBoard/ManageSales/ManualInvoice.jsx";
import DraftInvoice from "../Pages/DashBoard/ManageSales/DraftInvoice.jsx";
import QuoteInvoice from "../Pages/DashBoard/ManageSales/QuoteInvoice.jsx";
import CustomerInfo from "../Pages/DashBoard/ManageSales/CustomerInfo.jsx";
import PurchaseInvoice from "../Pages/DashBoard/ManagePurchases/PurchaseInvoice.jsx";
import PurchaseDraftInvoice from "../Pages/DashBoard/ManagePurchases/PurchaseDraftInvoice.jsx";
import PurchaseQuoteInvoice from "../Pages/DashBoard/ManagePurchases/PurchaseQuoteInvoice.jsx";
import ManageSupplier from "../Pages/DashBoard/ManagePurchases/ManageSupplier.jsx";
import PurchaseReturnLog from "../Pages/DashBoard/ManagePurchases/PurchaseReturnLog.jsx";
import SalesReturnLog from "../Pages/DashBoard/ManageSales/SalesReturnLog.jsx";
import OutOfStock from "../Pages/DashBoard/ManageItem/OutOfStock.jsx";
import DamageItemDetails from "../Pages/DashBoard/ManageItem/DamageItemDetails.jsx";
import UnitOfMeasure from "../Pages/DashBoard/SystemSettings/UnitOfMeasure.jsx";
import SideInvoice from "../Pages/DashBoard/POS/SideInvoice.jsx";

export const publicRoutes = [
  { path: "/Signin", component: <Signin /> },
  { path: "/SignUp", component: <SignUp /> },
  { path: "/ForgetPassword", component: <ForgetPassword /> },
];

const basePrivateRoutes = [
  { path: "/", component: <DashboardHome /> },
  { path: "/BusinessERP/Index", component: <BusinessERP /> },
  // POS
  { path: "/ItemCart/Index", component: <ItemCart /> },
  { path: "/ItemCart/ItemCartSideInvoice", component: <SideInvoice /> },
  // manage sales
  { path: "/Payment/Index", component: <Invoice /> },
  { path: "/PaymentManual/Index", component: <ManualInvoice /> },
  { path: "/PaymentDraft/Index", component: <DraftInvoice /> },
  { path: "/PaymentQuote/Index", component: <QuoteInvoice /> },
  { path: "/CustomerInfo/Index", component: <CustomerInfo /> },
  { path: "/ReturnLog/SalesReturnIndex", component: <SalesReturnLog /> },

  // manage Purchases
  { path: "/PurchasesPayment/Index", component: <PurchaseInvoice /> },
  { path: "/PurchasesPaymentDraft/Index", component: <PurchaseDraftInvoice /> },
  { path: "/PurchasesPaymentQuote/Index", component: <PurchaseQuoteInvoice /> },
  { path: "/Supplier/Index", component: <ManageSupplier /> },
  { path: "/ReturnLog/PurchaseReturnIndex", component: <PurchaseReturnLog /> },

  //manage expense 
  { path: "/ExpenseSummary/Index", component: <ExpenseSummary /> },
  { path: "/ExpenseType/Index", component: <ExpensesType /> },

  // manage branch
  { path: "/Branch/Index", component: <ManageBranch /> },

  // manage items
  { path: "/Items/Index", component: <Item /> },
  { path: "/Items/OutOfStockItem", component: <OutOfStock /> }, //  denied access
  { path: "/Items/LowInStockItem", component: <LowInStock /> },
  { path: "/DamageItemDetails/Index", component: <DamageItemDetails /> },
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
  { path: "/UnitOfMeasure/Index", component: <UnitOfMeasure /> },// denied access

  //human resource
  { path: "/Attendance/Index", component: <Attendence /> },
  { path: "/Employee/Index", component: <ManageEmployee /> },
  { path: "/Designation/Index", component: <Designation /> },
  { path: "/Department/Index", component: <Department /> },
  { path: "/SubDepartment/Index", component: <SubDepartment /> }, // access denied
  // sub department access denied

  // manage user roles
  { path: "/ManageUserRoles/Index", component: <ManageUserRoles /> },
  { path: "/SystemRole/Index", component: <SystemRoles /> },

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
  // { path: "/SideInvoice", component: <SideInvoice /> },
  // { path: "/Estimates", component: <Estimates /> },
  { path: "/BankAccounts", component: <BankAccounts /> }, // UNSTYLED 
  { path: "/Invoice", component: <Invoice /> }, // UNSTYLED SAME
  { path: "/PurchaseReturn", component: <PurchaseReturn /> }, // UNSTYLED
  // { path: "/PurchaseInvoiceDraft", component: <PurchaseInvoiceDraft /> },// UNSTYLED
  // { path: "/PurchaseInvoiceQuote", component: <PurchaseInvoiceQuote /> }, // UNSTYLED
  { path: "/Assets", component: <Assets /> }, // NOT THAT GOOD 
  // { path: "/ManualJournals", component: <ManualJournals /> },
  // { path: "/Transations", component: <Transations /> },
  // { path: "/ChartsOfAccount", component: <ChartsOfAccount /> },
  // { path: "/Assets", component: <Assets /> },
  // { path: "/Report", component: <Report /> },
  // { path: "/Settings", component: <Settings /> },
  // { path: "/ConnectBank", component: <ConnectBank /> },
  { path: "/ManageSales", component: <ManageSales /> },
  // { path: "/ManualInvoices", component: <ManualInvoices /> },
  // { path: "/PurchaseInvoice", component: <PurchaseInvoice /> },
];

// Conditionally add Console route
if (superAdmin) {
  basePrivateRoutes.push({ path: "/UserProfile/Index", component: <DashboardHome /> });
}

export const privateRoutes = basePrivateRoutes;
