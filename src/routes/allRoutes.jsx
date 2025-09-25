// Auth Pages
import Signin from "../Pages/Auth/Signin";
import SignUp from "../Pages/Auth/SignUp";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
// Dashboard Pages
import DashboardHome from "../Pages/DashBoard/DashboardHome";
import Invoice from "../Pages/DashBoard/ManageSales/Invoice.jsx";
import ItemCart from "../Pages/DashBoard/POS/ItemCart.jsx";
import { superAdmin } from "../constant/Config";
import BusinessERP from "../Pages/DashBoard/BusinessERP/BusinessERP.jsx";
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
import SystemRole from "../Pages/DashBoard/ManageUserRoles/SystemRole.jsx";
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

];

// Conditionally add Console route
if (superAdmin) {
  basePrivateRoutes.push({ path: "/UserProfile/Index", component: <DashboardHome /> });
}

export const privateRoutes = basePrivateRoutes;
