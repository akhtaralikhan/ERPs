export const invoices = [
  {
    sl: 1,
    invoiceNo: "INV2",
    customerName: "Walk in Customer",
    email: "walkin@123",
    amount: 260.61,
    paidAmount: 0,
    dueAmount: 260.61,
    paymentStatus: "Unpaid",
    invoiceDate: "Friday, 13 May 2022 16:10:03",
    action: "Print"
  },
  {
    sl: 2,
    invoiceNo: "INV1",
    customerName: "Walk in Customer",
    email: "walkin@123",
    amount: 906.61,
    paidAmount: 0,
    dueAmount: 906.61,
    paymentStatus: "Unpaid",
    invoiceDate: "Friday, 13 May 2022 16:09:18",
    action: "Print"
  }
];
export const dashboardData = [
  {
    title: "Invoice Today",
    value: 0,
    change: "-6.8%", // added style like 2nd image
    subtitle: "Last 7 days",
  },
  {
    title: "Invoice This Month",
    value: 3,
    change: "+26.5%",
    subtitle: "since last month",
  },
  {
    title: "Sales Today",
    value: 0,
    change: "0%",
    subtitle: "Today",
  },
  {
    title: "Sales This Month",
    value: 0,
    change: "0%",
    subtitle: "since last month",
  },
  {
    title: "Total Item",
    value: 25,
    change: "0%",
    subtitle: "Current stock",
  },
  {
    title: "Total Item Quantity",
    value: 5108,
    change: "0%",
    subtitle: "In warehouse",
  },
  {
    title: "Low Items",
    value: 0,
    change: "0%",
    subtitle: "Threshold alert",
  },
  {
    title: "Out of Stock",
    value: 0,
    change: "0%",
    subtitle: "Unavailable",
  },
  {
    title: "Due Invoice",
    value: 2,
    change: "+26.5%",
    subtitle: "Pending payment",
  },
  // Extra stats from 2nd image
  {
    title: "Total Balance",
    value: "$4.00M",
    change: "-6.8%",
    subtitle: "Last 7 days (Pending payment)",
  },
  {
    title: "Total Invoice",
    value: 14,
    change: "+26.5%",
    subtitle: "since last month",
  },
  {
    title: "Total Customer",
    value: 2,
    change: "+26.5%",
    subtitle: "since last month",
  },
  {
    title: "Total Estimate",
    value: 7,
    change: "+26.5%",
    subtitle: "since last month",
  },
];
export const groceryData = [
  { id: 1, title: "Curd", description: "Fresh red apples from the farm.", image: "/src/assets/img/bg/curd.jpg", price: 120 },
  { id: 2, title: "Olive", description: "health thing.", image: "/src/assets/img/bg/olive.jpg", price: 60 },
  { id: 3, title: "Apple", description: "Juicy oranges full of vitamin C.", image: "/src/assets/img/bg/applee.png", price: 90 },
  { id: 5, title: "Honey", description: "Fresh farm Honey.", image: "/src/assets/img/bg/honey.jpg", price: 40 },
  { id: 4, title: "Bananas", description: "Organic red tomatoes.", image: "/src/assets/img/bg/banana.jpg", price: 50 },
  { id: 6, title: "Onions", description: "Healthy and fresh onions.", image: "/src/assets/img/bg/onions.jpg", price: 45 },
  { id: 7, title: "Carrots", description: "Crunchy and sweet carrots.", image: "/src/assets/img/bg/carrot.jpg", price: 70 },
  { id: 8, title: "Spinach", description: "Fresh green spinach leaves.", image: "/src/assets/img/bg/spinach.jpg", price: 30 },
  { id: 9, title: "Broccoli", description: "Healthy broccoli florets.", image: "/src/assets/img/bg/broccoli.jpg", price: 110 },
  { id: 11, title: "Milk", description: "Fresh cow milk.", image: "/src/assets/img/bg/milk.jpg", price: 60 },
  { id: 12, title: "Cheese", description: "Tasty cheddar cheese.", image: "/src/assets/img/bg/cheese.jpg", price: 250 },
  { id: 13, title: "Eggs", description: "Farm fresh eggs.", image: "/src/assets/img/bg/eggs.jpg", price: 70 },
];
export const ManageinvoiceData = [
  {
    "id": "INV1",
    "customer": "Walk in Customer",
    "branch": "Main Branch",
    "subTotal": 840,
    "discount": 0,
    "vat": 66.61,
    "grandTotal": 906.61,
    "paidAmount": 0,
    "dueAmount": 906.61,
    "createdDate": "5/13/2022",
    "status": "UnPaid",
    // "customerImg":"/src/assets/img/bg/girl.jpg"
  },
  {
    "id": "INV2",
    "customer": "Walk in Customer",
    "branch": "Main Branch",
    // "customerImg":"/src/assets/img/bg/man.jpg",
    "subTotal": 840,
    "discount": 0,
    "vat": 66.61,
    "grandTotal": 906.61,
    "paidAmount": 0,
    "dueAmount": 906.61,
    "createdDate": "5/13/2022",
    "status": "Paid"
  },
  {
    "id": "INV2",
    "customer": "Walk in Customer",
    "branch": "Main Branch",
    "subTotal": 252,
    "discount": 0,
    "vat": 8.61,
    "grandTotal": 260.61,
    "paidAmount": 0,
    "dueAmount": 260.61,
    // "customerImg":"/src/assets/img/bg/boy.jpg",
    "createdDate": "5/13/2022",
    "status": "UnPaid"
  },
  {
    "id": "INV3",
    "customer": "John Doe",
    "branch": "Main Branch",
    // "customerImg":"/src/assets/img/bg/banana.jpg",
    "subTotal": 1200,
    "discount": 50,
    "vat": 115,
    "grandTotal": 1265,
    "paidAmount": 500,
    "dueAmount": 765,
    "createdDate": "5/14/2022",
    "status": "Partial"
  },
  {
    "id": "INV4",
    "customer": "dane Smith",
    "branch": "Branch A",
    "subTotal": 500,
    "discount": 20,
    "vat": 45,
    "grandTotal": 525,
    "paidAmount": 525,
    "dueAmount": 0,
    // "customerImg":"/src/assets/img/bg/banana.jpg",
    "createdDate": "5/15/2022",
    "status": "Paid"
  },
  {
    "id": "INV5",
    // "customerImg":"/src/assets/img/bg/banana.jpg",
    "customer": "Michael Johnson",
    "branch": "Branch B",
    "subTotal": 300,
    "discount": 0,
    "vat": 27,
    "grandTotal": 327,
    "paidAmount": 0,
    "dueAmount": 327,
    "createdDate": "5/15/2022",
    "status": "UnPaid"
  }
]
export const customerInfo = [
  {
    "id": 1,
    "customer": "John Doe",
    "companyName": "Tech Solutions Ltd.",
    "type": "Normal",
    "phone": "+14155552671",
    "email": "john.doe@example.com",
    "billingAddress": "New York, USA",
    "createdDate": "2023-02-20"
  },
  {
    "id": 2,
    "customer": "Jane Smith",
    "companyName": "Global Enterprises",
    "type": "Normal",
    "phone": "+447911123456",
    "email": "jane.smith@example.com",
    "billingAddress": "London, UK",
    "createdDate": "2023-02-20"
  },
  {
    "id": 3,
    "customer": "Carlos Lopez",
    "companyName": "Innovate Corp",
    "type": "Premium",
    "phone": "+5215512345678",
    "email": "carlos.lopez@example.com",
    "billingAddress": "Mexico City, Mexico",
    "createdDate": "2023-02-20"
  },
  {
    "id": 4,
    "customer": "Ayesha Khan",
    "companyName": "ABC Limited",
    "type": "Normal",
    "phone": "+923001112233",
    "email": "ayesha.khan@example.com",
    "billingAddress": "Karachi, Pakistan",
    "createdDate": "2023-02-20"
  },
  {
    "id": 5,
    "customer": "Michael Johnson",
    "companyName": "XYZ Solutions",
    "type": "Normal",
    "phone": "+16135550000",
    "email": "michael.johnson@example.com",
    "billingAddress": "Toronto, Canada",
    "createdDate": "2023-02-20"
  },
  {
    "id": 6,
    "customer": "Sophia Lee",
    "companyName": "Bright Future Inc.",
    "type": "Premium",
    "phone": "+821012345678",
    "email": "sophia.lee@example.com",
    "billingAddress": "Seoul, South Korea",
    "createdDate": "2023-02-20"
  },
  {
    "id": 7,
    "customer": "David Brown",
    "companyName": "FutureTech",
    "type": "Normal",
    "phone": "+33123456789",
    "email": "david.brown@example.com",
    "billingAddress": "Paris, France",
    "createdDate": "2023-02-20"
  }
]
export const salesReturnData = [
  {
    id: 1,
    refId: "REF-1001",
    invoiceNo: "INV-2023-001",
    customer: "John Doe",
    note: "First order payment",
    createdDate: "2023-02-20"
  },
  {
    id: 2,
    refId: "REF-1002",
    invoiceNo: "INV-2023-002",
    customer: "Jane Smith",
    note: "Monthly subscription",
    createdDate: "2023-02-21"
  },
  {
    id: 3,
    refId: "REF-1003",
    invoiceNo: "INV-2023-003",
    customer: "Carlos Lopez",
    note: "Annual plan purchase",
    createdDate: "2023-02-22"
  },
  {
    id: 4,
    refId: "REF-1004",
    invoiceNo: "INV-2023-004",
    customer: "Ayesha Khan",
    note: "Software license renewal",
    createdDate: "2023-02-23"
  },
  {
    id: 5,
    refId: "REF-1005",
    invoiceNo: "INV-2023-005",
    customer: "Michael Johnson",
    note: "Product upgrade",
    createdDate: "2023-02-24"
  }
];
export const purchaseReturnData = [
  {
    id: 1,
    refId: "REF-1001",
    invoiceNo: "INV-2023-001",
    customer: "John Doe",
    note: "First order payment",
    createdDate: "2023-02-20"
  },
  {
    id: 2,
    refId: "REF-1002",
    invoiceNo: "INV-2023-002",
    customer: "Jane Smith",
    note: "Monthly subscription",
    createdDate: "2023-02-21"
  },
  {
    id: 3,
    refId: "REF-1003",
    invoiceNo: "INV-2023-003",
    customer: "Carlos Lopez",
    note: "Annual plan purchase",
    createdDate: "2023-02-22"
  },
  {
    id: 4,
    refId: "REF-1004",
    invoiceNo: "INV-2023-004",
    customer: "Ayesha Khan",
    note: "Software license renewal",
    createdDate: "2023-02-23"
  },
  {
    id: 5,
    refId: "REF-1005",
    invoiceNo: "INV-2023-005",
    customer: "Michael Johnson",
    note: "Product upgrade",
    createdDate: "2023-02-24"
  }
];
export const purchaseInvoiceData = [
  {
    "id": "PINV5",
    "supplier": "Walk in Supplier",
    "subTotal": 9700,
    "discount": 0,
    "vat": 429.5,
    "grandTotal": 10129.5,
    "paidAmount": 0,
    "dueAmount": 10129.5,
    "createdDate": "10/7/2022",
    "status": "UnPaid"
  },
  {
    "id": "PINV4",
    "supplier": "Walk in Supplier",
    "subTotal": 13700,
    "discount": 0,
    "vat": 864.5,
    "grandTotal": 14564.5,
    "paidAmount": 0,
    "dueAmount": 14564.5,
    "createdDate": "10/7/2022",
    "status": "UnPaid"
  },
  {
    "id": "PINV3",
    "supplier": "Walk in Supplier",
    "subTotal": 108000,
    "discount": 0,
    "vat": 48600,
    "grandTotal": 156600,
    "paidAmount": 0,
    "dueAmount": 156600,
    "createdDate": "10/7/2022",
    "status": "UnPaid"
  },
  {
    "id": "PINV2",
    "supplier": "Walk in Supplier",
    "subTotal": 700,
    "discount": 0,
    "vat": 24.5,
    "grandTotal": 724.5,
    "paidAmount": 0,
    "dueAmount": 724.5,
    "createdDate": "10/7/2022",
    "status": "UnPaid"
  },
  {
    "id": "PINV1",
    "supplier": "Walk in Supplier",
    "subTotal": 52200,
    "discount": 0,
    "vat": 7302,
    "grandTotal": 59502,
    "paidAmount": 59502,
    "dueAmount": 0,
    "createdDate": "10/7/2022",
    "status": "Paid"
  }
];
export const manageSupplier = [
  {
    id: 1,
    name: "Unilever",
    contactPerson: "TBD",
    email: "dev@gmail.com",
    phone: "01699000",
    address: "Dhaka",
    createdDate: "2023-02-20"
  },
  {
    id: 2,
    name: "PHP",
    contactPerson: "TBD",
    email: "dev@gmail.com",
    phone: "01699000",
    address: "Dhaka",
    createdDate: "2023-02-20"
  },
  {
    id: 3,
    name: "Microsoft",
    contactPerson: "TBD",
    email: "dev@gmail.com",
    phone: "01699000",
    address: "USA",
    createdDate: "2023-02-20"
  },
  {
    id: 4,
    name: "Amazon",
    contactPerson: "TBD",
    email: "dev@gmail.com",
    phone: "01699000",
    address: "USA",
    createdDate: "2023-02-20"
  },
  {
    id: 5,
    name: "Google",
    contactPerson: "TBD",
    email: "dev@gmail.com",
    phone: "01699000",
    address: "USA",
    createdDate: "2023-02-20"
  },
  {
    id: 6,
    name: "Common Supplier",
    contactPerson: "TBD",
    email: "dev@gmail.com",
    phone: "01699000",
    address: "Dhaka",
    createdDate: "2023-02-20"
  },
  {
    id: 7,
    name: "Walk in Supplier",
    contactPerson: "TBD",
    email: "walkin@gmail.com",
    phone: "01699000",
    address: "Washington",
    createdDate: "2023-02-20"
  }
];
export const PaymentTypeData = [
  {
    "Id": 7,
    "Name": "Other",
    "Description": "Other",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 6,
    "Name": "Debit Card",
    "Description": "Debit Card",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 5,
    "Name": "Credit Card",
    "Description": "Credit Card",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "Name": "Mobile-Banking",
    "Description": "Mobile-Banking",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "Name": "POS",
    "Description": "POS",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "Name": "Bank",
    "Description": "Bank",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 1,
    "Name": "Cash",
    "Description": "Cash",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  }
]
export const AttendenceData = [
  {
    "Id": 25,
    "Employee": "Ms Merry",
    "CheckIn": "Saturday, February 25, 2023 9:00 AM",
    "CheckOut": "Saturday, February 25, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/25\/2023",
    "ModifiedDate": "2\/25\/2023"
  },
  {
    "Id": 24,
    "Employee": "Ms Merry",
    "CheckIn": "Friday, February 24, 2023 9:00 AM",
    "CheckOut": "Friday, February 24, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/24\/2023",
    "ModifiedDate": "2\/24\/2023"
  },
  {
    "Id": 23,
    "Employee": "Ms Merry",
    "CheckIn": "Thursday, February 23, 2023 9:00 AM",
    "CheckOut": "Thursday, February 23, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/23\/2023",
    "ModifiedDate": "2\/23\/2023"
  },
  {
    "Id": 22,
    "Employee": "Ms Merry",
    "CheckIn": "Wednesday, February 22, 2023 9:00 AM",
    "CheckOut": "Wednesday, February 22, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/22\/2023",
    "ModifiedDate": "2\/22\/2023"
  },
  {
    "Id": 21,
    "Employee": "Ms Merry",
    "CheckIn": "Tuesday, February 21, 2023 9:00 AM",
    "CheckOut": "Tuesday, February 21, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/21\/2023",
    "ModifiedDate": "2\/21\/2023"
  },
  {
    "Id": 20,
    "Employee": "Mr Alex",
    "CheckIn": "Saturday, February 25, 2023 9:00 AM",
    "CheckOut": "Saturday, February 25, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/25\/2023",
    "ModifiedDate": "2\/25\/2023"
  },
  {
    "Id": 19,
    "Employee": "Mr Alex",
    "CheckIn": "Friday, February 24, 2023 9:00 AM",
    "CheckOut": "Friday, February 24, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/24\/2023",
    "ModifiedDate": "2\/24\/2023"
  },
  {
    "Id": 18,
    "Employee": "Mr Alex",
    "CheckIn": "Thursday, February 23, 2023 9:00 AM",
    "CheckOut": "Thursday, February 23, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/23\/2023",
    "ModifiedDate": "2\/23\/2023"
  },
  {
    "Id": 17,
    "Employee": "Mr Alex",
    "CheckIn": "Wednesday, February 22, 2023 9:00 AM",
    "CheckOut": "Wednesday, February 22, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/22\/2023",
    "ModifiedDate": "2\/22\/2023"
  },
  {
    "Id": 16,
    "Employee": "Mr Alex",
    "CheckIn": "Tuesday, February 21, 2023 9:00 AM",
    "CheckOut": "Tuesday, February 21, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/21\/2023",
    "ModifiedDate": "2\/21\/2023"
  },
  {
    "Id": 15,
    "Employee": "Mr Hasan",
    "CheckIn": "Saturday, February 25, 2023 9:00 AM",
    "CheckOut": "Saturday, February 25, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/25\/2023",
    "ModifiedDate": "2\/25\/2023"
  },
  {
    "Id": 14,
    "Employee": "Mr Hasan",
    "CheckIn": "Friday, February 24, 2023 9:00 AM",
    "CheckOut": "Friday, February 24, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/24\/2023",
    "ModifiedDate": "2\/24\/2023"
  },
  {
    "Id": 13,
    "Employee": "Mr Hasan",
    "CheckIn": "Thursday, February 23, 2023 9:00 AM",
    "CheckOut": "Thursday, February 23, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/23\/2023",
    "ModifiedDate": "2\/23\/2023"
  },
  {
    "Id": 12,
    "Employee": "Mr Hasan",
    "CheckIn": "Wednesday, February 22, 2023 9:00 AM",
    "CheckOut": "Wednesday, February 22, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/22\/2023",
    "ModifiedDate": "2\/22\/2023"
  },
  {
    "Id": 11,
    "Employee": "Mr Hasan",
    "CheckIn": "Tuesday, February 21, 2023 9:00 AM",
    "CheckOut": "Tuesday, February 21, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/21\/2023",
    "ModifiedDate": "2\/21\/2023"
  },
  {
    "Id": 10,
    "Employee": "Mr Bond",
    "CheckIn": "Saturday, February 25, 2023 9:00 AM",
    "CheckOut": "Saturday, February 25, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/25\/2023",
    "ModifiedDate": "2\/25\/2023"
  },
  {
    "Id": 9,
    "Employee": "Mr Bond",
    "CheckIn": "Friday, February 24, 2023 9:00 AM",
    "CheckOut": "Friday, February 24, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/24\/2023",
    "ModifiedDate": "2\/24\/2023"
  },
  {
    "Id": 8,
    "Employee": "Mr Bond",
    "CheckIn": "Thursday, February 23, 2023 9:00 AM",
    "CheckOut": "Thursday, February 23, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/23\/2023",
    "ModifiedDate": "2\/23\/2023"
  },
  {
    "Id": 7,
    "Employee": "Mr Bond",
    "CheckIn": "Wednesday, February 22, 2023 9:00 AM",
    "CheckOut": "Wednesday, February 22, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/22\/2023",
    "ModifiedDate": "2\/22\/2023"
  },
  {
    "Id": 6,
    "Employee": "Mr Bond",
    "CheckIn": "Tuesday, February 21, 2023 9:00 AM",
    "CheckOut": "Tuesday, February 21, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/21\/2023",
    "ModifiedDate": "2\/21\/2023"
  },
  {
    "Id": 5,
    "Employee": "Mr Tom",
    "CheckIn": "Saturday, February 25, 2023 9:00 AM",
    "CheckOut": "Saturday, February 25, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/25\/2023",
    "ModifiedDate": "2\/25\/2023"
  },
  {
    "Id": 4,
    "Employee": "Mr Tom",
    "CheckIn": "Friday, February 24, 2023 9:00 AM",
    "CheckOut": "Friday, February 24, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/24\/2023",
    "ModifiedDate": "2\/24\/2023"
  },
  {
    "Id": 3,
    "Employee": "Mr Tom",
    "CheckIn": "Thursday, February 23, 2023 9:00 AM",
    "CheckOut": "Thursday, February 23, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/23\/2023",
    "ModifiedDate": "2\/23\/2023"
  },
  {
    "Id": 2,
    "Employee": "Mr Tom",
    "CheckIn": "Wednesday, February 22, 2023 9:00 AM",
    "CheckOut": "Wednesday, February 22, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/22\/2023",
    "ModifiedDate": "2\/22\/2023"
  },
  {
    "Id": 1,
    "Employee": "Mr Tom",
    "CheckIn": "Tuesday, February 21, 2023 9:00 AM",
    "CheckOut": "Tuesday, February 21, 2023 6:00 PM",
    "StayTime": "09:00:00",
    "CreatedDate": "2\/21\/2023",
    "ModifiedDate": "2\/21\/2023"
  }
]
export const BranchData = [
  {
    Id: 6,
    Name: "Branch Five",
    ContactPerson: "Person 05",
    Phone: "123456789",
    Address: "Parish, French",
    CreatedDate: "2/20/2023",
  },
  {
    Id: 5,
    Name: "Branch Four",
    ContactPerson: "Person 04",
    Phone: "123456789",
    Address: "Leipzig, Germany",
    CreatedDate: "2/20/2023",
  },
  {
    Id: 4,
    Name: "Branch Three",
    ContactPerson: "Person 03",
    Phone: "123456789",
    Address: "Frankfurt, Germany",
    CreatedDate: "2/20/2023",
  },
  {
    Id: 3,
    Name: "Branch Two",
    ContactPerson: "Person 02",
    Phone: "123456789",
    Address: "Munich, Germany",
    CreatedDate: "2/20/2023",
  },
  {
    Id: 2,
    Name: "Branch One",
    ContactPerson: "Person 01",
    Phone: "123456789",
    Address: "Hamburg, Germany",
    CreatedDate: "2/20/2023",
  },
  {
    Id: 1,
    Name: "Main Branch",
    ContactPerson: "Admin",
    Phone: "123456789",
    Address: "Berlin, Germany",
    CreatedDate: "2/20/2023",
  }
]
export const ExpenseSummaryData = [
  {
    "Id": 5,
    "Title": "Regular",
    "GrandTotal": 68000,
    "PaidAmount": 0,
    "DueAmount": 0,
    "Currency": "US Dollar",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 4,
    "Title": "Regular",
    "GrandTotal": 12000,
    "PaidAmount": 0,
    "DueAmount": 0,
    "Currency": "US Dollar",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 3,
    "Title": "Regular",
    "GrandTotal": 8000,
    "PaidAmount": 0,
    "DueAmount": 0,
    "Currency": "US Dollar",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 2,
    "Title": "Regular",
    "GrandTotal": 25000,
    "PaidAmount": 0,
    "DueAmount": 0,
    "Currency": "US Dollar",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 1,
    "Title": "Regular",
    "GrandTotal": 17500,
    "PaidAmount": 0,
    "DueAmount": 0,
    "Currency": "US Dollar",
    "CreatedDate": "2/20/2023"
  }
]
export const ExpenseTypeData = [
  {
    "Id": 10,
    "Name": "Common Expense",
    "Description": "Common Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 9,
    "Name": "House Rent",
    "Description": "House Rent Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 8,
    "Name": "Employee Bonus",
    "Description": "Employee Bonus Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 7,
    "Name": "Office Tour",
    "Description": "Office Tour Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 6,
    "Name": "Transport Cost",
    "Description": "Transport Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 5,
    "Name": "Food Cost",
    "Description": "Food Cost Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "Name": "Buy New Product",
    "Description": "Buy New Product Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "Name": "Office Maintenance",
    "Description": "Office Maintenance Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "Name": "Staff Salary",
    "Description": "Staff Salary Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 1,
    "Name": "General Expense",
    "Description": "General Expense",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  }
]
export const ItemData = [
  {
    "Id": 25,
    "Name": "Steel Water Bottle",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/s2ultra.jpg",
    "Barcode": "ITM676222",
    "Category": "Steels",
    "Supplier": "Walk in Supplier",
    "Measure": "piece",
    "Cost": 160,
    "SellPrice": 168,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 24,
    "Name": "Jonsonlotion",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/travelcamera.jpg",
    "Barcode": "ITM504650",
    "Category": "Beauty and Cosmetics",
    "Supplier": "Walk in Supplier",
    "Measure": "piece",
    "Cost": 240,
    "SellPrice": 257,
    "Quantity": 150,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 23,
    "Name": "Tomato",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/monitor.jpg",
    "Barcode": "ITM585822",
    "Category": "Vegetables",
    "Supplier": "Walk in Supplier",
    "Measure": "piece",
    "Cost": 30,
    "SellPrice": 31.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 22,
    "Name": "Icecream",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/iphone.jpg",
    "Barcode": "ITM179775",
    "Category": "Freezer",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 220,
    "SellPrice": 231,
    "Quantity": 50,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 21,
    "Name": "Cocacoal",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ruifish.jpg",
    "Barcode": "ITM442471",
    "Category": "Beverages",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 90,
    "SellPrice": 94.5,
    "Quantity": 500,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 20,
    "Name": "Milk",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/s2ultra.jpg",
    "Barcode": "ITM297551",
    "Category": "Dairy Products",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 70,
    "SellPrice": 73.5,
    "Quantity": 298,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 19,
    "Name": "Orange",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/travelcamera.jpg",
    "Barcode": "ITM934237",
    "Category": "Fruits",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 150,
    "SellPrice": 157.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 18,
    "Name": "Rui Fish",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/monitor.jpg",
    "Barcode": "ITM575128",
    "Category": "Meat & Fish",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 500,
    "SellPrice": 525,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 17,
    "Name": "Xiaomi 9 Pro",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/iphone.jpg",
    "Barcode": "ITM892546",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 900,
    "SellPrice": 945,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 16,
    "Name": "Olive oil",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ruifish.jpg",
    "Barcode": "ITM485072",
    "Category": "Beauty and Cosmetic",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 170,
    "SellPrice": 178.5,
    "Quantity": 370,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 15,
    "Name": "Water Hitter",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/s2ultra.jpg",
    "Barcode": "ITM246727",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 800,
    "SellPrice": 840,
    "Quantity": 300,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 14,
    "Name": "Coffee Mug",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/travelcamera.jpg",
    "Barcode": "ITM694889",
    "Category": "Fruits",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 120,
    "SellPrice": 126,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 13,
    "Name": "Travel Camera",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/monitor.jpg",
    "Barcode": "ITM502742",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 1600,
    "SellPrice": 1680,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 12,
    "Name": "Gaming Laptop",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/iphone.jpg",
    "Barcode": "ITM663528",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 95000,
    "SellPrice": 99750,
    "Quantity": 50,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 11,
    "Name": "Samsung Galaxy",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ruifish.jpg",
    "Barcode": "ITM214840",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 850,
    "SellPrice": 892.5,
    "Quantity": 270,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 10,
    "Name": "iPhone 14",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/s2ultra.jpg",
    "Barcode": "ITM785450",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 1200,
    "SellPrice": 1260,
    "Quantity": 300,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 9,
    "Name": "TV Remote",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/travelcamera.jpg",
    "Barcode": "ITM752880",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 200,
    "SellPrice": 210,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 8,
    "Name": "RAM",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/monitor.jpg",
    "Barcode": "ITM968894",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 1190,
    "SellPrice": 1249.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 7,
    "Name": "External Hard Drive",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/iphone.jpg",
    "Barcode": "ITM159753",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 400,
    "SellPrice": 420,
    "Quantity": 80,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 6,
    "Name": "Multi-plug",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ruifish.jpg",
    "Barcode": "ITM478422",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 550,
    "SellPrice": 577.5,
    "Quantity": 70,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 5,
    "Name": "Power-supply",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/s2ultra.jpg",
    "Barcode": "ITM324849",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 550,
    "SellPrice": 577.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 4,
    "Name": "Mother-board",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/travelcamera.jpg",
    "Barcode": "ITM412645",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 1150,
    "SellPrice": 1207.5,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 3,
    "Name": "Monitor",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/monitor.jpg",
    "Barcode": "ITM299099",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 1110,
    "SellPrice": 1165.5,
    "Quantity": 500,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 2,
    "Name": "Laptop",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/iphone.jpg",
    "Barcode": "ITM900985",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 550,
    "SellPrice": 577.5,
    "Quantity": 300,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 1,
    "Name": "HDD",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ruifish.jpg",
    "Barcode": "ITM820479",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "Cost": 500,
    "SellPrice": 525,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  }
]
export const LowInStockData = [
  {
    "Id": 22,
    "Name": "Icecream",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/xiaomi9.jpg",
    "SKU": "SKU232572",
    "Category": "Freezer",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 220,
    "SellPrice": 231,
    "Quantity": 50,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 6,
    "Name": "Multi-plug",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/icecream.jpg",
    "SKU": "SKU195015",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 550,
    "SellPrice": 577.5,
    "Quantity": 70,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 8,
    "Name": "RAM",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ssd.jpg",
    "SKU": "SKU388441",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 1190,
    "SellPrice": 1249.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 9,
    "Name": "TV Remote",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/steelwaterbottle.jpg",
    "SKU": "SKU960904",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 200,
    "SellPrice": 210,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 5,
    "Name": "Power-supply",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/tomato.jpg",
    "SKU": "SKU180262",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 550,
    "SellPrice": 577.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 13,
    "Name": "Travel Camera",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/xiaomi9.jpg",
    "SKU": "SKU730871",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 1600,
    "SellPrice": 1680,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 14,
    "Name": "Coffee Mug",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/icecream.jpg",
    "SKU": "SKU125708",
    "Category": "Fruits",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 120,
    "SellPrice": 126,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 18,
    "Name": "Rui Fish",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ssd.jpg",
    "SKU": "SKU200373",
    "Category": "Meat & Fish",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 500,
    "SellPrice": 525,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 19,
    "Name": "Orange",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/steelwaterbottle.jpg",
    "SKU": "SKU810052",
    "Category": "Fruits",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 150,
    "SellPrice": 157.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 23,
    "Name": "Tomato",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/tomato.jpg",
    "SKU": "SKU423598",
    "Category": "Vegetables",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 30,
    "SellPrice": 31.5,
    "Quantity": 100,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 24,
    "Name": "Jonsonlotion",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/xiaomi9.jpg",
    "SKU": "SKU947395",
    "Category": "Beauty and Cosmetic",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 340,
    "SellPrice": 357,
    "Quantity": 150,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 25,
    "Name": "Steel Water Bottle",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/icecream.jpg",
    "SKU": "SKU467345",
    "Category": "Steels",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 160,
    "SellPrice": 168,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 12,
    "Name": "Xiaomi TV",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ssd.jpg",
    "SKU": "SKU719703",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 1590,
    "SellPrice": 1669.5,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 17,
    "Name": "Xiaomi 9 Pro",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/steelwaterbottle.jpg",
    "SKU": "SKU408397",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 900,
    "SellPrice": 945,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 4,
    "Name": "Mother-board",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/tomato.jpg",
    "SKU": "SKU011887",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 1150,
    "SellPrice": 1207.5,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 1,
    "Name": "HDD",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/xiaomi9.jpg",
    "SKU": "SKU985942",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 500,
    "SellPrice": 525,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 7,
    "Name": "SSD",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/icecream.jpg",
    "SKU": "SKU957834",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 2290,
    "SellPrice": 2404.5,
    "Quantity": 200,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 11,
    "Name": "S22 Ultra",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ssd.jpg",
    "SKU": "SKU852091",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 850,
    "SellPrice": 892.5,
    "Quantity": 270,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 20,
    "Name": "Milk",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/steelwaterbottle.jpg",
    "SKU": "SKU787371",
    "Category": "Dairy Products",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 70,
    "SellPrice": 73.5,
    "Quantity": 298,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 15,
    "Name": "Water Hitter",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/tomato.jpg",
    "SKU": "SKU954264",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 800,
    "SellPrice": 840,
    "Quantity": 300,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 10,
    "Name": "iPhone 14",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/xiaomi9.jpg",
    "SKU": "SKU231695",
    "Category": "Electronics",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 1200,
    "SellPrice": 1260,
    "Quantity": 300,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 2,
    "Name": "Laptop",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/icecream.jpg",
    "SKU": "SKU550090",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 550,
    "SellPrice": 577.5,
    "Quantity": 300,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 16,
    "Name": "Olive oil",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/ssd.jpg",
    "SKU": "SKU058712",
    "Category": "Beauty and Cosmetic",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 170,
    "SellPrice": 178.5,
    "Quantity": 370,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 21,
    "Name": "Cocacoal",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/steelwaterbottle.jpg",
    "SKU": "SKU153757",
    "Category": "Beverages",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 90,
    "SellPrice": 94.5,
    "Quantity": 500,
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 3,
    "Name": "Monitor",
    "Image": "https://businesserp.microhind.com/upload/DefaultItem/tomato.jpg",
    "SKU": "SKU300887",
    "Category": "IT",
    "Supplier": "Walk in Supplier",
    "Measure": "Piece",
    "CostPrice": 1110,
    "SellPrice": 1165.5,
    "Quantity": 500,
    "CreatedDate": "2/20/2023"
  }
]
export const DamageItemData = [
  {
    id: 5,
    itemId: 105,
    totalDamageItem: 3,
    reasonOfDamage: "Water Leakage",
    createdDate: "2025-09-10",
  },
  {
    id: 4,
    itemId: 104,
    totalDamageItem: 2,
    reasonOfDamage: "Fire Accident",
    createdDate: "2025-09-15",
  },
  {
    id: 3,
    itemId: 103,
    totalDamageItem: 5,
    reasonOfDamage: "Handling Error",
    createdDate: "2025-09-18",
  },
  {
    id: 2,
    itemId: 102,
    totalDamageItem: 1,
    reasonOfDamage: "Fall",
    createdDate: "2025-09-23",
  },
  {
    id: 1,
    itemId: 101,
    totalDamageItem: 4,
    reasonOfDamage: "Transport Damage",
    createdDate: "2025-09-25",
  },

]
export const ItemHistoryData = [

  {
    "Id": 1,
    "ItemId": "History-1",
    "ItemName": "Hdd",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-HDD",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 2,
    "ItemId": "History-2",
    "ItemName": "Monitor",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Monitor",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 3,
    "ItemId": "History-3",
    "ItemName": "Mother Board",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Mother Board",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 4,
    "ItemId": "History-4",
    "ItemName": "Laptop",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Laptop",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 5,
    "ItemId": "History-5",
    "ItemName": "Power Supply",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Power Supply",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 6,
    "ItemId": "History-6",
    "ItemName": "Multi Plug",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Multi Plug",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 7,
    "ItemId": "History-7",
    "ItemName": "SsD",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-SsD",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 8,
    "ItemId": "History-8",
    "ItemName": "RAM",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-RAM",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 9,
    "ItemId": "History-9",
    "ItemName": "TV Remote",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-TV Remote",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 10,
    "ItemId": "History-10",
    "ItemName": "Iphone 14",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Iphone 14",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 11,
    "ItemId": "History-11",
    "ItemName": "S22 Ultra",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-S22 Ultra",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 12,
    "ItemId": "History-12",
    "ItemName": "Xiomi-TV",
    "UnitPrice": 1500,
    "SellPrice": 1590,
    "OldUnitPrice": 1500,
    "OldQuantity": 100,
    "NewQuantity": 100,
    "TranQuantity": 0,
    "Action": "Create New Item-Xiomi-TV",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 13,
    "ItemId": "History-13",
    "ItemName": "Travel Camera ",
    "UnitPrice": 1600,
    "SellPrice": 1625,
    "OldUnitPrice": 1600,
    "OldQuantity": 100,
    "NewQuantity": 100,
    "TranQuantity": 0,
    "Action": "Create New Item-Travel Camera",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 14,
    "ItemId": "History-14",
    "ItemName": "Coffee Mug",
    "UnitPrice": 220,
    "SellPrice": 226,
    "OldUnitPrice": 220,
    "OldQuantity": 100,
    "NewQuantity": 100,
    "TranQuantity": 0,
    "Action": "Create New Item-Cofee-Mug",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 15,
    "ItemId": "History-15",
    "ItemName": "Water-Hitter",
    "UnitPrice": 800,
    "SellPrice": 845,
    "OldUnitPrice": 800,
    "OldQuantity": 300,
    "NewQuantity": 300,
    "TranQuantity": 0,
    "Action": "Create New Item-Water Hitter",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 16,
    "ItemId": "History-16",
    "ItemName": "Olive-oil",
    "UnitPrice": 370,
    "SellPrice": 378.5,
    "OldUnitPrice": 370,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Olive-oil",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 17,
    "ItemId": "History-17",
    "ItemName": "Xiomi 9 Pro",
    "UnitPrice": 900,
    "SellPrice": 925,
    "OldUnitPrice": 900,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Xiomi 9 Pro",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 18,
    "ItemId": "History-18",
    "ItemName": "RuiFish",
    "UnitPrice": 500,
    "SellPrice": 525,
    "OldUnitPrice": 500,
    "OldQuantity": 100,
    "NewQuantity": 100,
    "TranQuantity": 0,
    "Action": "Create New Item-RuiFish",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 19,
    "ItemId": "History-19",
    "ItemName": "Orange",
    "UnitPrice": 150,
    "SellPrice": 157.5,
    "OldUnitPrice": 150,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Orange",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 20,
    "ItemId": "History-20",
    "ItemName": "Milk",
    "UnitPrice": 70,
    "SellPrice": 73.5,
    "OldUnitPrice": 70,
    "OldQuantity": 300,
    "NewQuantity": 300,
    "TranQuantity": 0,
    "Action": "Create New Item-Milk",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 21,
    "ItemId": "History-21",
    "ItemName": "Cocacoal",
    "UnitPrice": 90,
    "SellPrice": 94.5,
    "OldUnitPrice": 90,
    "OldQuantity": 500,
    "NewQuantity": 500,
    "TranQuantity": 0,
    "Action": "Create New Item-Cocacoal",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 22,
    "ItemId": "History-22",
    "ItemName": "Ice Cream",
    "UnitPrice": 220,
    "SellPrice": 231,
    "OldUnitPrice": 220,
    "OldQuantity": 50,
    "NewQuantity": 50,
    "TranQuantity": 0,
    "Action": "Create New Item-Icecream",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 23,
    "ItemId": "History-23",
    "ItemName": "Tomato",
    "UnitPrice": 30,
    "SellPrice": 31.5,
    "OldUnitPrice": 30,
    "OldQuantity": 100,
    "NewQuantity": 100,
    "TranQuantity": 0,
    "Action": "Create New Item-Tomato",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 24,
    "ItemId": "History-24",
    "ItemName": "Jonsonlotion",
    "UnitPrice": 340,
    "SellPrice": 357,
    "OldUnitPrice": 340,
    "OldQuantity": 150,
    "NewQuantity": 150,
    "TranQuantity": 0,
    "Action": "Create New Item-Jonsonlotion",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 25,
    "ItemId": "History-25",
    "ItemName": "Steel Water Bottle",
    "UnitPrice": 160,
    "SellPrice": 168,
    "OldUnitPrice": 160,
    "OldQuantity": 200,
    "NewQuantity": 200,
    "TranQuantity": 0,
    "Action": "Create New Item-Steel Water Bottle",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 26,
    "ItemId": "History-24",
    "ItemName": "Jonsonlotion",
    "UnitPrice": 340,
    "SellPrice": 357,
    "OldUnitPrice": 340,
    "OldQuantity": 150,
    "NewQuantity": 150,
    "TranQuantity": 0,
    "Action": "Update Item information only-Jonsonlotion",
    "CreatedDate": "2/20/2023"
  },
  {
    "Id": 27,
    "ItemId": "History-20",
    "ItemName": "Milk",
    "UnitPrice": 70,
    "SellPrice": 73.5,
    "OldUnitPrice": 70,
    "OldQuantity": 300,
    "NewQuantity": 298,
    "TranQuantity": 2,
    "Action": "Delete new sell. Invoice Id: INV3",
    "CreatedDate": "2/20/2023"
  }
]
export const ManageWarehouseData = [
  {
    "Id": 5,
    "Name": "Paris , France",
    "Description": "TBD",
    "CreatedDate": "2/20/2023",
    "ModifiedDate": "2/20/2023",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "Name": "Dhaka, Bangladesh",
    "Description": "TBD",
    "CreatedDate": "2/20/2023",
    "ModifiedDate": "2/20/2023",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "Name": "Berlin, Germany",
    "Description": "TBD",
    "CreatedDate": "2/20/2023",
    "ModifiedDate": "2/20/2023",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "Name": "California, USA",
    "Description": "TBD",
    "CreatedDate": "2/20/2023",
    "ModifiedDate": "2/20/2023",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 1,
    "Name": "Chittagone, Bangladesh",
    "Description": "TBD",
    "CreatedDate": "2/20/2023",
    "ModifiedDate": "2/20/2023",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  }
]
export const DepartmentData = [
  {
    "Id": 5,
    "Name": "Legal",
    "Description": "Procurement Department",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 4,
    "Name": "Procurement",
    "Description": "Procurement Department",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 3,
    "Name": "Finance",
    "Description": "Finance Department",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 2,
    "Name": "HR",
    "Description": "HR Department",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 1,
    "Name": "IT",
    "Description": "IT Department",
    "CreatedDate": "2023-02-20"
  }
]
export const ManageEmployeeData = [
  {
    "Id": 5,
    "EmployeeId": 935180,
    "FirstName": "Ms",
    "LastName": "Merry",
    "DateOfBirth": "1994-02-20",
    "Designation": "Head Of Engineering",
    "Department": "IT"
  },
  {
    "Id": 4,
    "EmployeeId": 899245,
    "FirstName": "Mr",
    "LastName": "Alex",
    "DateOfBirth": "1995-02-20",
    "Designation": "Software Engineer",
    "Department": "IT"
  },
  {
    "Id": 3,
    "EmployeeId": 871420,
    "FirstName": "Mr",
    "LastName": "Hasan",
    "DateOfBirth": "1996-02-20",
    "Designation": "Software Engineer",
    "Department": "IT"
  },
  {
    "Id": 2,
    "EmployeeId": 257316,
    "FirstName": "Mr",
    "LastName": "Bond",
    "DateOfBirth": "1997-02-20",
    "Designation": "Software Engineer",
    "Department": "IT"
  },
  {
    "Id": 1,
    "EmployeeId": 931963,
    "FirstName": "Mr",
    "LastName": "Tom",
    "DateOfBirth": "1998-02-20",
    "Designation": "Project Manager",
    "Department": "IT"
  }
]
export const DesignationData = [
  {
    "Id": 1,
    "Name": "Project Manager",
    "Description": "Employee Job Designation",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 2,
    "Name": "Software Engineer",
    "Description": "Employee Job Designation",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 3,
    "Name": "Head of Engineering",
    "Description": "Employee Job Designation",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 4,
    "Name": "Software Architect",
    "Description": "Employee Job Designation",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 5,
    "Name": "QA Engineer",
    "Description": "Employee Job Designation",
    "CreatedDate": "2023-02-20"
  },
  {
    "Id": 6,
    "Name": "DevOps Engineer",
    "Description": "Employee Job Designation",
    "CreatedDate": "2023-02-20"
  }
]

export const ManageUserData = [
  {
    id: 1,
    name: "General",
    description: "User Role: General",
    createdDate: "2023-02-20T10:00:00",
  },
  {
    id: 2,
    name: "Admin",
    description: "User Role: Admin",
    createdDate: "2023-02-20T12:00:00",
  },
];

export const SendEmailHistoryData = [
  {
    id: 1,
    InvoiceId: "INV-1001",
    SenderEmail: "admin@example.com",
    ReceiverEmail: "user1@example.com",
    Result: "Sent",
    createdDate: "2023-02-20T10:00:00",
    CreatedBy: "System",
  },
  {
    id: 2,
    InvoiceId: "INV-1002",
    SenderEmail: "support@example.com",
    ReceiverEmail: "user2@example.com",
    Result: "Failed",
    createdDate: "2023-02-21T14:30:00",
    CreatedBy: "Admin",
  },
  {
    id: 3,
    InvoiceId: "INV-1003",
    SenderEmail: "noreply@example.com",
    ReceiverEmail: "user3@example.com",
    Result: "Sent",
    createdDate: "2023-02-22T09:15:00",
    CreatedBy: "System",
  },
  {
    id: 4,
    InvoiceId: "INV-1004",
    SenderEmail: "hr@example.com",
    ReceiverEmail: "user4@example.com",
    Result: "Sent",
    createdDate: "2023-02-23T16:45:00",
    CreatedBy: "HR Manager",
  },
  {
    id: 5,
    InvoiceId: "INV-1005",
    SenderEmail: "alerts@example.com",
    ReceiverEmail: "user5@example.com",
    Result: "Pending",
    createdDate: "2023-02-24T11:20:00",
    CreatedBy: "System",
  },
  {
    id: 6,
    InvoiceId: "INV-1006",
    SenderEmail: "info@example.com",
    ReceiverEmail: "user6@example.com",
    Result: "Sent",
    createdDate: "2023-02-25T08:50:00",
    CreatedBy: "Support Team",
  },
];


export const LoginHistoryData = [
  {
    id: 1,
    UserName: "john_doe",
    LoginTime: "2023-02-20T09:00:00",
    LogoutTime: "2023-02-20T10:30:00",
    DurationMin: 90,
    PublicIP: "192.168.1.10",
    Latitude: "40.7128",
    Longitude: "-74.0060",
    Browser: "Chrome",
    OS: "Windows 10",
    Device: "Desktop",
    Action: "Login",
    ActionStatus: "Success",
    createdDate: "2023-02-20T09:00:00",
  },
  {
    id: 2,
    UserName: "jane_smith",
    LoginTime: "2023-02-21T14:15:00",
    LogoutTime: "2023-02-21T15:00:00",
    DurationMin: 45,
    PublicIP: "192.168.1.20",
    Latitude: "34.0522",
    Longitude: "-118.2437",
    Browser: "Firefox",
    OS: "macOS Ventura",
    Device: "Laptop",
    Action: "Login",
    ActionStatus: "Success",
    createdDate: "2023-02-21T14:15:00",
  },
  {
    id: 3,
    UserName: "michael89",
    LoginTime: "2023-02-22T08:45:00",
    LogoutTime: "2023-02-22T09:10:00",
    DurationMin: 25,
    PublicIP: "192.168.1.30",
    Latitude: "51.5074",
    Longitude: "-0.1278",
    Browser: "Edge",
    OS: "Windows 11",
    Device: "Tablet",
    Action: "Login",
    ActionStatus: "Failed",
    createdDate: "2023-02-22T08:45:00",
  },
  {
    id: 4,
    UserName: "sarah_w",
    LoginTime: "2023-02-23T11:20:00",
    LogoutTime: "2023-02-23T13:00:00",
    DurationMin: 100,
    PublicIP: "192.168.1.40",
    Latitude: "48.8566",
    Longitude: "2.3522",
    Browser: "Safari",
    OS: "iOS 16",
    Device: "iPhone",
    Action: "Login",
    ActionStatus: "Success",
    createdDate: "2023-02-23T11:20:00",
  },
  {
    id: 5,
    UserName: "alex_k",
    LoginTime: "2023-02-24T16:00:00",
    LogoutTime: "2023-02-24T16:30:00",
    DurationMin: 30,
    PublicIP: "192.168.1.50",
    Latitude: "35.6895",
    Longitude: "139.6917",
    Browser: "Opera",
    OS: "Linux Ubuntu",
    Device: "Desktop",
    Action: "Login",
    ActionStatus: "Timeout",
    createdDate: "2023-02-24T16:00:00",
  },
  {
    id: 6,
    UserName: "emma_r",
    LoginTime: "2023-02-25T07:40:00",
    LogoutTime: "2023-02-25T09:00:00",
    DurationMin: 80,
    PublicIP: "192.168.1.60",
    Latitude: "55.7558",
    Longitude: "37.6173",
    Browser: "Chrome",
    OS: "Android 13",
    Device: "Mobile",
    Action: "Login",
    ActionStatus: "Success",
    createdDate: "2023-02-25T07:40:00",
  },
];

export const AuditLogsData = [
  {
    id: 1003,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774798}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 1002,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774799}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 1001,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774800}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 1000,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774801}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 999,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774802}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 998,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774803}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 997,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774804}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 996,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774805}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 995,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774806}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 994,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRolesDetails",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 993,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ManageUserRoles",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 992,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ExpenseSummary",
    PrimaryKey: '{"Id":-9223372036854774806}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 991,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "UserInfoFromBrowser",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 990,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "LoginHistory",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 989,
    UserId: "admin@gmail.com",
    Type: "Update",
    TableName: "ExpenseSummary",
    PrimaryKey: '{"Id":15}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 988,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ExpenseDetails",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 987,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "ExpenseSummary",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 986,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "UserInfoFromBrowser",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 985,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "LoginHistory",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-19T00:00:00",
  },
  {
    id: 984,
    UserId: "admin@gmail.com",
    Type: "Create",
    TableName: "Payment",
    PrimaryKey: '{"Id":-9223372036854774807}',
    DateTime: "2025-09-18T00:00:00",
  },
];

export const UserInfoFromBrowserData = [
  {
    id: 1,
    BrowserUniqueID: "BRW-001-XYZ",
    Lat: "19.0760",
    Long: "72.8777",
    TimeZone: "Asia/Kolkata",
    BrowserMajor: "119",
    BrowserName: "Chrome",
    createdDate: "2025-09-19T10:15:00",
  },
  {
    id: 2,
    BrowserUniqueID: "BRW-002-ABC",
    Lat: "28.7041",
    Long: "77.1025",
    TimeZone: "Asia/Kolkata",
    BrowserMajor: "118",
    BrowserName: "Edge",
    createdDate: "2025-09-19T11:25:00",
  },
  {
    id: 3,
    BrowserUniqueID: "BRW-003-PQR",
    Lat: "40.7128",
    Long: "-74.0060",
    TimeZone: "America/New_York",
    BrowserMajor: "117",
    BrowserName: "Firefox",
    createdDate: "2025-09-19T22:05:00",
  },
  {
    id: 4,
    BrowserUniqueID: "BRW-004-MNO",
    Lat: "51.5074",
    Long: "-0.1278",
    TimeZone: "Europe/London",
    BrowserMajor: "120",
    BrowserName: "Safari",
    createdDate: "2025-09-18T08:30:00",
  },
  {
    id: 5,
    BrowserUniqueID: "BRW-005-DEF",
    Lat: "35.6895",
    Long: "139.6917",
    TimeZone: "Asia/Tokyo",
    BrowserMajor: "121",
    BrowserName: "Opera",
    createdDate: "2025-09-18T14:10:00",
  },
];

// ✅ New mock data for RefreshToken table
export const RefreshTokenData = [
  {
    id: 1,
    UserEmail: "john.doe@example.com",
    Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-001",
    JwtId: "JWT-001-XYZ",
    IsUsed: false,
    IsRevorked: false,
    AddedDate: "2025-09-18T10:20:00",
    ExpiryDate: "2025-09-25T10:20:00",
  },
  {
    id: 2,
    UserEmail: "alice.smith@example.com",
    Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-002",
    JwtId: "JWT-002-ABC",
    IsUsed: true,
    IsRevorked: false,
    AddedDate: "2025-09-17T14:45:00",
    ExpiryDate: "2025-09-24T14:45:00",
  },
  {
    id: 3,
    UserEmail: "mark.jones@example.com",
    Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-003",
    JwtId: "JWT-003-PQR",
    IsUsed: false,
    IsRevorked: true,
    AddedDate: "2025-09-16T09:10:00",
    ExpiryDate: "2025-09-23T09:10:00",
  },
  {
    id: 4,
    UserEmail: "emma.brown@example.com",
    Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-004",
    JwtId: "JWT-004-MNO",
    IsUsed: true,
    IsRevorked: true,
    AddedDate: "2025-09-15T18:30:00",
    ExpiryDate: "2025-09-22T18:30:00",
  },
  {
    id: 5,
    UserEmail: "david.wilson@example.com",
    Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-005",
    JwtId: "JWT-005-DEF",
    IsUsed: false,
    IsRevorked: false,
    AddedDate: "2025-09-14T12:05:00",
    ExpiryDate: "2025-09-21T12:05:00",
  },
];


export const HighInDemandData = [
  {
    SL: 1,
    ItemName: "Ballpoint Pen (Blue)",
    Total: 120,
  },
  {
    SL: 2,
    ItemName: "A4 Notebook (200 pages)",
    Total: 95,
  },
  {
    SL: 3,
    ItemName: "Marker Set (Pack of 6)",
    Total: 80,
  },
  {
    SL: 4,
    ItemName: "Stapler Machine",
    Total: 65,
  },
  {
    SL: 5,
    ItemName: "Highlighter (Pack of 5)",
    Total: 50,
  },
  {
    SL: 6,
    ItemName: "Gel Pen (Black)",
    Total: 140,
  },
  {
    SL: 7,
    ItemName: "Sticky Notes (Pack of 3)",
    Total: 110,
  },
  {
    SL: 8,
    ItemName: "Drawing Book (A3 Size)",
    Total: 70,
  },
  {
    SL: 9,
    ItemName: "Calculator (Scientific)",
    Total: 45,
  },
  {
    SL: 10,
    ItemName: "Eraser (Non-Dust)",
    Total: 130,
  },
];

export const LowInDemandData = [
  {
    SL: 1,
    ItemName: "Glue Stick",
    Total: 5,
  },
  {
    SL: 2,
    ItemName: "Sketch Pen (Pack of 12)",
    Total: 8,
  },
  {
    SL: 3,
    ItemName: "Ring Binder",
    Total: 12,
  },
  {
    SL: 4,
    ItemName: "Correction Fluid",
    Total: 15,
  },
  {
    SL: 5,
    ItemName: "Punching Machine",
    Total: 10,
  },
  {
    SL: 6,
    ItemName: "Compass Set",
    Total: 7,
  },
  {
    SL: 7,
    ItemName: "Clipboard",
    Total: 6,
  },
  {
    SL: 8,
    ItemName: "Drawing Board (A2 Size)",
    Total: 9,
  },
  {
    SL: 9,
    ItemName: "Staple Pins (Pack of 1000)",
    Total: 11,
  },
  {
    SL: 10,
    ItemName: "Colored Paper Sheets",
    Total: 13,
  },
];

export const HighestEarningData = [
  {
    SL: 1,
    ItemName: "Premium Office Chair",
    Total: 1200,
  },
  {
    SL: 2,
    ItemName: "Executive Desk",
    Total: 950,
  },
  {
    SL: 3,
    ItemName: "Laser Printer",
    Total: 870,
  },
  {
    SL: 4,
    ItemName: "Laptop Stand",
    Total: 760,
  },
  {
    SL: 5,
    ItemName: "Ergonomic Keyboard",
    Total: 720,
  },
  {
    SL: 6,
    ItemName: "Noise-Cancelling Headphones",
    Total: 680,
  },
  {
    SL: 7,
    ItemName: "Projector",
    Total: 640,
  },
  {
    SL: 8,
    ItemName: "Filing Cabinet",
    Total: 600,
  },
  {
    SL: 9,
    ItemName: "High-Resolution Monitor",
    Total: 580,
  },
  {
    SL: 10,
    ItemName: "Whiteboard (Magnetic)",
    Total: 550,
  },
];


export const LowestEarningData = [
  {
    SL: 1,
    ItemName: "Stapler",
    Total: 50,
  },
  {
    SL: 2,
    ItemName: "Paper Clips (Box)",
    Total: 65,
  },
  {
    SL: 3,
    ItemName: "Sticky Notes",
    Total: 80,
  },
  {
    SL: 4,
    ItemName: "Correction Pen",
    Total: 95,
  },
  {
    SL: 5,
    ItemName: "Ballpoint Pens (Pack of 10)",
    Total: 110,
  },
  {
    SL: 6,
    ItemName: "Desk Calendar",
    Total: 130,
  },
  {
    SL: 7,
    ItemName: "Highlighter",
    Total: 145,
  },
  {
    SL: 8,
    ItemName: "Eraser",
    Total: 160,
  },
  {
    SL: 9,
    ItemName: "Sharpener",
    Total: 175,
  },
  {
    SL: 10,
    ItemName: "Ruler (Plastic)",
    Total: 190,
  },
];

export const PaymentSummaryData = [
  {
    Id: 1,
    CustomerName: "John Doe",
    Discount: 10,
    VAT: 5,
    SubTotal: 100,
    GrandTotal: 95,
    PaidAmount: 50,
    DueAmount: 45,
    Status: false,
    createdDate: "2025-09-21T09:30:00",
  },
  {
    Id: 2,
    CustomerName: "Jane Smith",
    Discount: 5,
    VAT: 8,
    SubTotal: 120,
    GrandTotal: 123,
    PaidAmount: 100,
    DueAmount: 23,
    Status: false,
    createdDate: "2025-09-20T15:45:00",
  },
  {
    Id: 3,
    CustomerName: "Michael Johnson",
    Discount: 0,
    VAT: 12,
    SubTotal: 80,
    GrandTotal: 92,
    PaidAmount: 92,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-19T11:20:00",
  },
  {
    Id: 4,
    CustomerName: "Emily Davis",
    Discount: 15,
    VAT: 10,
    SubTotal: 150,
    GrandTotal: 145,
    PaidAmount: 100,
    DueAmount: 45,
    Status: false,
    createdDate: "2025-09-18T13:10:00",
  },
  {
    Id: 5,
    CustomerName: "William Brown",
    Discount: 8,
    VAT: 6,
    SubTotal: 200,
    GrandTotal: 198,
    PaidAmount: 198,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-17T10:00:00",
  },
  {
    Id: 6,
    CustomerName: "Sophia Wilson",
    Discount: 12,
    VAT: 5,
    SubTotal: 130,
    GrandTotal: 123,
    PaidAmount: 100,
    DueAmount: 23,
    Status: false,
    createdDate: "2025-09-16T14:50:00",
  },
  {
    Id: 7,
    CustomerName: "James Taylor",
    Discount: 0,
    VAT: 7,
    SubTotal: 90,
    GrandTotal: 97,
    PaidAmount: 97,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-15T09:15:00",
  },
  {
    Id: 8,
    CustomerName: "Olivia Martinez",
    Discount: 5,
    VAT: 8,
    SubTotal: 110,
    GrandTotal: 113,
    PaidAmount: 50,
    DueAmount: 63,
    Status: false,
    createdDate: "2025-09-14T16:30:00",
  },
  {
    Id: 9,
    CustomerName: "Benjamin Anderson",
    Discount: 10,
    VAT: 10,
    SubTotal: 140,
    GrandTotal: 140,
    PaidAmount: 140,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-13T12:40:00",
  },
  {
    Id: 10,
    CustomerName: "Emma Thomas",
    Discount: 8,
    VAT: 5,
    SubTotal: 125,
    GrandTotal: 122,
    PaidAmount: 60,
    DueAmount: 62,
    Status: false,
    createdDate: "2025-09-12T11:25:00",
  },
];

export const PurchasesSummaryData = [
  {
    Id: 1,
    CustomerName: "ABC Suppliers",
    Discount: 12,
    VAT: 5,
    SubTotal: 500,
    GrandTotal: 490,
    PaidAmount: 300,
    DueAmount: 190,
    Status: false, // ❌ UnPaid
    createdDate: "2025-09-21T10:30:00",
  },
  {
    Id: 2,
    CustomerName: "XYZ Wholesalers",
    Discount: 5,
    VAT: 10,
    SubTotal: 800,
    GrandTotal: 810,
    PaidAmount: 810,
    DueAmount: 0,
    Status: true, // ✅ Paid
    createdDate: "2025-09-20T14:15:00",
  },
  {
    Id: 3,
    CustomerName: "FreshMart Traders",
    Discount: 8,
    VAT: 6,
    SubTotal: 350,
    GrandTotal: 348,
    PaidAmount: 200,
    DueAmount: 148,
    Status: false,
    createdDate: "2025-09-19T09:00:00",
  },
  {
    Id: 4,
    CustomerName: "Global Stationery",
    Discount: 10,
    VAT: 7,
    SubTotal: 600,
    GrandTotal: 597,
    PaidAmount: 597,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-18T16:45:00",
  },
  {
    Id: 5,
    CustomerName: "Sunrise Distributors",
    Discount: 15,
    VAT: 8,
    SubTotal: 1000,
    GrandTotal: 993,
    PaidAmount: 500,
    DueAmount: 493,
    Status: false,
    createdDate: "2025-09-17T11:20:00",
  },
  {
    Id: 6,
    CustomerName: "Mega Supplies Co.",
    Discount: 0,
    VAT: 12,
    SubTotal: 450,
    GrandTotal: 504,
    PaidAmount: 504,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-16T15:10:00",
  },
  {
    Id: 7,
    CustomerName: "Prime Office Supplies",
    Discount: 7,
    VAT: 9,
    SubTotal: 700,
    GrandTotal: 728,
    PaidAmount: 400,
    DueAmount: 328,
    Status: false,
    createdDate: "2025-09-15T12:50:00",
  },
  {
    Id: 8,
    CustomerName: "NextGen Traders",
    Discount: 6,
    VAT: 5,
    SubTotal: 300,
    GrandTotal: 299,
    PaidAmount: 299,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-14T13:25:00",
  },
  {
    Id: 9,
    CustomerName: "BrightMart Enterprises",
    Discount: 10,
    VAT: 10,
    SubTotal: 950,
    GrandTotal: 950,
    PaidAmount: 600,
    DueAmount: 350,
    Status: false,
    createdDate: "2025-09-13T17:40:00",
  },
  {
    Id: 10,
    CustomerName: "Alpha Distributors",
    Discount: 4,
    VAT: 8,
    SubTotal: 400,
    GrandTotal: 408,
    PaidAmount: 408,
    DueAmount: 0,
    Status: true,
    createdDate: "2025-09-12T10:05:00",
  },
];

export const ExpenseSummaryReportData = [
  {
    Id: 1,
    Title: "Office Rent",
    GrandTotal: 2500,
    PaidAmount: 2500,
    DueAmount: 0,
    Currency: "USD",
    createdDate: "2025-09-21T09:30:00",
  },
  {
    Id: 2,
    Title: "Electricity Bill",
    GrandTotal: 450,
    PaidAmount: 300,
    DueAmount: 150,
    Currency: "USD",
    createdDate: "2025-09-20T11:15:00",
  },
  {
    Id: 3,
    Title: "Internet Services",
    GrandTotal: 120,
    PaidAmount: 120,
    DueAmount: 0,
    Currency: "USD",
    createdDate: "2025-09-19T14:45:00",
  },
  {
    Id: 4,
    Title: "Stationery Supplies",
    GrandTotal: 600,
    PaidAmount: 400,
    DueAmount: 200,
    Currency: "USD",
    createdDate: "2025-09-18T10:20:00",
  },
  {
    Id: 5,
    Title: "Employee Travel",
    GrandTotal: 950,
    PaidAmount: 500,
    DueAmount: 450,
    Currency: "USD",
    createdDate: "2025-09-17T16:40:00",
  },
  {
    Id: 6,
    Title: "Software Subscriptions",
    GrandTotal: 300,
    PaidAmount: 300,
    DueAmount: 0,
    Currency: "USD",
    createdDate: "2025-09-16T12:10:00",
  },
  {
    Id: 7,
    Title: "Cleaning Services",
    GrandTotal: 200,
    PaidAmount: 100,
    DueAmount: 100,
    Currency: "USD",
    createdDate: "2025-09-15T15:30:00",
  },
  {
    Id: 8,
    Title: "Marketing & Ads",
    GrandTotal: 1200,
    PaidAmount: 700,
    DueAmount: 500,
    Currency: "USD",
    createdDate: "2025-09-14T18:25:00",
  },
  {
    Id: 9,
    Title: "Insurance Premium",
    GrandTotal: 800,
    PaidAmount: 800,
    DueAmount: 0,
    Currency: "USD",
    createdDate: "2025-09-13T09:50:00",
  },
  {
    Id: 10,
    Title: "Miscellaneous",
    GrandTotal: 400,
    PaidAmount: 200,
    DueAmount: 200,
    Currency: "USD",
    createdDate: "2025-09-12T11:05:00",
  },
];

export const ExpenseDetailsReportData = [
  {
    Id: 1,
    ExpenseType: "Office Rent",
    Description: "Monthly office rental payment",
    Quantity: 1,
    UnitPrice: 2500,
    TotalPrice: 2500,
    createdDate: "2025-09-21T09:30:00",
  },
  {
    Id: 2,
    ExpenseType: "Electricity Bill",
    Description: "Monthly electricity usage",
    Quantity: 1,
    UnitPrice: 450,
    TotalPrice: 450,
    createdDate: "2025-09-20T11:15:00",
  },
  {
    Id: 3,
    ExpenseType: "Internet Services",
    Description: "Fiber internet subscription",
    Quantity: 1,
    UnitPrice: 120,
    TotalPrice: 120,
    createdDate: "2025-09-19T14:45:00",
  },
  {
    Id: 4,
    ExpenseType: "Stationery Supplies",
    Description: "Pens, paper, markers, notebooks",
    Quantity: 10,
    UnitPrice: 60,
    TotalPrice: 600,
    createdDate: "2025-09-18T10:20:00",
  },
  {
    Id: 5,
    ExpenseType: "Employee Travel",
    Description: "Taxi, train & flight reimbursements",
    Quantity: 5,
    UnitPrice: 190,
    TotalPrice: 950,
    createdDate: "2025-09-17T16:40:00",
  },
  {
    Id: 6,
    ExpenseType: "Software Subscriptions",
    Description: "Monthly SaaS tools",
    Quantity: 3,
    UnitPrice: 100,
    TotalPrice: 300,
    createdDate: "2025-09-16T12:10:00",
  },
  {
    Id: 7,
    ExpenseType: "Cleaning Services",
    Description: "Office cleaning and sanitation",
    Quantity: 4,
    UnitPrice: 50,
    TotalPrice: 200,
    createdDate: "2025-09-15T15:30:00",
  },
  {
    Id: 8,
    ExpenseType: "Marketing & Ads",
    Description: "Online campaigns and promotions",
    Quantity: 6,
    UnitPrice: 200,
    TotalPrice: 1200,
    createdDate: "2025-09-14T18:25:00",
  },
  {
    Id: 9,
    ExpenseType: "Insurance Premium",
    Description: "Annual office insurance fee",
    Quantity: 1,
    UnitPrice: 800,
    TotalPrice: 800,
    createdDate: "2025-09-13T09:50:00",
  },
  {
    Id: 10,
    ExpenseType: "Miscellaneous",
    Description: "Unplanned small expenses",
    Quantity: 4,
    UnitPrice: 100,
    TotalPrice: 400,
    createdDate: "2025-09-12T11:05:00",
  },
];



export const ProductWiseSaleData = [
  {
    Id: 1,
    SalesDate: "2025-09-21T09:30:00",
    Item: "Premium Office Chair",
    InvoiceNo: "INV-1001",
    CustomerName: "John Doe",
    UnitPrice: 300,
    Quantity: 2,
    Discount: 10,
    VAT: 5,
    Total: 570,
  },
  {
    Id: 2,
    SalesDate: "2025-09-20T15:45:00",
    Item: "Executive Desk",
    InvoiceNo: "INV-1002",
    CustomerName: "Jane Smith",
    UnitPrice: 450,
    Quantity: 1,
    Discount: 5,
    VAT: 8,
    Total: 463,
  },
  {
    Id: 3,
    SalesDate: "2025-09-19T11:20:00",
    Item: "Laser Printer",
    InvoiceNo: "INV-1003",
    CustomerName: "Michael Johnson",
    UnitPrice: 400,
    Quantity: 1,
    Discount: 0,
    VAT: 12,
    Total: 448,
  },
  {
    Id: 4,
    SalesDate: "2025-09-18T13:10:00",
    Item: "Laptop Stand",
    InvoiceNo: "INV-1004",
    CustomerName: "Emily Davis",
    UnitPrice: 120,
    Quantity: 2,
    Discount: 15,
    VAT: 10,
    Total: 228,
  },
  {
    Id: 5,
    SalesDate: "2025-09-17T10:00:00",
    Item: "Ergonomic Keyboard",
    InvoiceNo: "INV-1005",
    CustomerName: "William Brown",
    UnitPrice: 90,
    Quantity: 3,
    Discount: 8,
    VAT: 6,
    Total: 280,
  },
  {
    Id: 6,
    SalesDate: "2025-09-16T14:50:00",
    Item: "Noise-Cancelling Headphones",
    InvoiceNo: "INV-1006",
    CustomerName: "Sophia Wilson",
    UnitPrice: 150,
    Quantity: 2,
    Discount: 12,
    VAT: 5,
    Total: 264,
  },
  {
    Id: 7,
    SalesDate: "2025-09-15T09:15:00",
    Item: "Projector",
    InvoiceNo: "INV-1007",
    CustomerName: "James Taylor",
    UnitPrice: 500,
    Quantity: 1,
    Discount: 0,
    VAT: 7,
    Total: 535,
  },
  {
    Id: 8,
    SalesDate: "2025-09-14T16:30:00",
    Item: "Filing Cabinet",
    InvoiceNo: "INV-1008",
    CustomerName: "Olivia Martinez",
    UnitPrice: 200,
    Quantity: 1,
    Discount: 5,
    VAT: 8,
    Total: 206,
  },
  {
    Id: 9,
    SalesDate: "2025-09-13T12:40:00",
    Item: "High-Resolution Monitor",
    InvoiceNo: "INV-1009",
    CustomerName: "Benjamin Anderson",
    UnitPrice: 320,
    Quantity: 1,
    Discount: 10,
    VAT: 10,
    Total: 320,
  },
  {
    Id: 10,
    SalesDate: "2025-09-12T11:25:00",
    Item: "Whiteboard (Magnetic)",
    InvoiceNo: "INV-1010",
    CustomerName: "Emma Thomas",
    UnitPrice: 100,
    Quantity: 2,
    Discount: 8,
    VAT: 5,
    Total: 194,
  },
];

export const AttendanceReportData = [
  {
    Id: 25,
    Employee: "Ms Merry",
    CheckIn: "2023-02-25T09:00:00",
    CheckOut: "2023-02-25T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-25",
  },
  {
    Id: 24,
    Employee: "Ms Merry",
    CheckIn: "2023-02-24T09:00:00",
    CheckOut: "2023-02-24T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-24",
  },
  {
    Id: 23,
    Employee: "Ms Merry",
    CheckIn: "2023-02-23T09:00:00",
    CheckOut: "2023-02-23T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-23",
  },
  {
    Id: 22,
    Employee: "Ms Merry",
    CheckIn: "2023-02-22T09:00:00",
    CheckOut: "2023-02-22T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-22",
  },
  {
    Id: 21,
    Employee: "Ms Merry",
    CheckIn: "2023-02-21T09:00:00",
    CheckOut: "2023-02-21T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-21",
  },
  {
    Id: 20,
    Employee: "Mr Alex",
    CheckIn: "2023-02-25T09:00:00",
    CheckOut: "2023-02-25T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-25",
  },
  {
    Id: 19,
    Employee: "Mr Alex",
    CheckIn: "2023-02-24T09:00:00",
    CheckOut: "2023-02-24T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-24",
  },
  {
    Id: 18,
    Employee: "Mr Alex",
    CheckIn: "2023-02-23T09:00:00",
    CheckOut: "2023-02-23T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-23",
  },
  {
    Id: 17,
    Employee: "Mr Alex",
    CheckIn: "2023-02-22T09:00:00",
    CheckOut: "2023-02-22T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-22",
  },
  {
    Id: 16,
    Employee: "Mr Alex",
    CheckIn: "2023-02-21T09:00:00",
    CheckOut: "2023-02-21T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-21",
  },
  {
    Id: 15,
    Employee: "Mr Hasan",
    CheckIn: "2023-02-25T09:00:00",
    CheckOut: "2023-02-25T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-25",
  },
  {
    Id: 14,
    Employee: "Mr Hasan",
    CheckIn: "2023-02-24T09:00:00",
    CheckOut: "2023-02-24T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-24",
  },
  {
    Id: 13,
    Employee: "Mr Hasan",
    CheckIn: "2023-02-23T09:00:00",
    CheckOut: "2023-02-23T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-23",
  },
  {
    Id: 12,
    Employee: "Mr Hasan",
    CheckIn: "2023-02-22T09:00:00",
    CheckOut: "2023-02-22T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-22",
  },
  {
    Id: 11,
    Employee: "Mr Hasan",
    CheckIn: "2023-02-21T09:00:00",
    CheckOut: "2023-02-21T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-21",
  },
  {
    Id: 10,
    Employee: "Mr Bond",
    CheckIn: "2023-02-25T09:00:00",
    CheckOut: "2023-02-25T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-25",
  },
  {
    Id: 9,
    Employee: "Mr Bond",
    CheckIn: "2023-02-24T09:00:00",
    CheckOut: "2023-02-24T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-24",
  },
  {
    Id: 8,
    Employee: "Mr Bond",
    CheckIn: "2023-02-23T09:00:00",
    CheckOut: "2023-02-23T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-23",
  },
  {
    Id: 7,
    Employee: "Mr Bond",
    CheckIn: "2023-02-22T09:00:00",
    CheckOut: "2023-02-22T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-22",
  },
  {
    Id: 6,
    Employee: "Mr Bond",
    CheckIn: "2023-02-21T09:00:00",
    CheckOut: "2023-02-21T18:00:00",
    StayTime: "09:00:00",
    CreatedDate: "2023-02-21",
  },
];


export const PaymentDetailReportData = [
  {
    Id: 1,
    PaymentId: "PAY-2001",
    ItemId: "ITM-101",
    ItemName: "Premium Office Chair",
    Quantity: 2,
    UnitPrice: 300,
    TotalAmount: 600,
    Date: "2025-09-21T09:30:00",
  },
  {
    Id: 2,
    PaymentId: "PAY-2002",
    ItemId: "ITM-102",
    ItemName: "Executive Desk",
    Quantity: 1,
    UnitPrice: 450,
    TotalAmount: 450,
    Date: "2025-09-20T15:45:00",
  },
  {
    Id: 3,
    PaymentId: "PAY-2003",
    ItemId: "ITM-103",
    ItemName: "Laser Printer",
    Quantity: 1,
    UnitPrice: 400,
    TotalAmount: 400,
    Date: "2025-09-19T11:20:00",
  },
  {
    Id: 4,
    PaymentId: "PAY-2004",
    ItemId: "ITM-104",
    ItemName: "Laptop Stand",
    Quantity: 2,
    UnitPrice: 120,
    TotalAmount: 240,
    Date: "2025-09-18T13:10:00",
  },
  {
    Id: 5,
    PaymentId: "PAY-2005",
    ItemId: "ITM-105",
    ItemName: "Ergonomic Keyboard",
    Quantity: 3,
    UnitPrice: 90,
    TotalAmount: 270,
    Date: "2025-09-17T10:00:00",
  },
  {
    Id: 6,
    PaymentId: "PAY-2006",
    ItemId: "ITM-106",
    ItemName: "Noise-Cancelling Headphones",
    Quantity: 2,
    UnitPrice: 150,
    TotalAmount: 300,
    Date: "2025-09-16T14:50:00",
  },
  {
    Id: 7,
    PaymentId: "PAY-2007",
    ItemId: "ITM-107",
    ItemName: "Projector",
    Quantity: 1,
    UnitPrice: 500,
    TotalAmount: 500,
    Date: "2025-09-15T09:15:00",
  },
  {
    Id: 8,
    PaymentId: "PAY-2008",
    ItemId: "ITM-108",
    ItemName: "Filing Cabinet",
    Quantity: 1,
    UnitPrice: 200,
    TotalAmount: 200,
    Date: "2025-09-14T16:30:00",
  },
  {
    Id: 9,
    PaymentId: "PAY-2009",
    ItemId: "ITM-109",
    ItemName: "High-Resolution Monitor",
    Quantity: 1,
    UnitPrice: 320,
    TotalAmount: 320,
    Date: "2025-09-13T12:40:00",
  },
  {
    Id: 10,
    PaymentId: "PAY-2010",
    ItemId: "ITM-110",
    ItemName: "Whiteboard (Magnetic)",
    Quantity: 2,
    UnitPrice: 100,
    TotalAmount: 200,
    Date: "2025-09-12T11:25:00",
  },
];

export const TransactionByDayData = [
  {
    SL: 1,
    Date: "2025-09-21",
    QuantitySold: 5,
    TotalTrans: 2,
    TotalEarned: 75.25,
    TotalDue: 0,
  },
  {
    SL: 2,
    Date: "2025-09-20",
    QuantitySold: 3,
    TotalTrans: 1,
    TotalEarned: 50.0,
    TotalDue: 0,
  },
  {
    SL: 3,
    Date: "2025-09-19",
    QuantitySold: 6,
    TotalTrans: 2,
    TotalEarned: 120.5,
    TotalDue: 10,
  },
  {
    SL: 4,
    Date: "2025-09-18",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 5,
    Date: "2025-09-17",
    QuantitySold: 4,
    TotalTrans: 1,
    TotalEarned: 60,
    TotalDue: 0,
  },
  {
    SL: 6,
    Date: "2025-09-16",
    QuantitySold: 2,
    TotalTrans: 1,
    TotalEarned: 30,
    TotalDue: 0,
  },
  {
    SL: 7,
    Date: "2025-09-15",
    QuantitySold: 7,
    TotalTrans: 3,
    TotalEarned: 140.75,
    TotalDue: 20,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    QuantitySold: "Σ: 27",
    TotalTrans: "Σ: 10",
    TotalEarned: "Σ: 476.5",
    TotalDue: "Σ: 30",
  },
];


export const PurchasesDetailReportData = [
  {
    Id: 1,
    PaymentId: "PUR-3001",
    ItemId: "ITM-201",
    ItemName: "Bulk A4 Paper Pack",
    Quantity: 50,
    UnitPrice: 5,
    TotalAmount: 250,
    Date: "2025-09-21T09:30:00",
  },
  {
    Id: 2,
    PaymentId: "PUR-3002",
    ItemId: "ITM-202",
    ItemName: "Ink Cartridge (Black)",
    Quantity: 20,
    UnitPrice: 15,
    TotalAmount: 300,
    Date: "2025-09-20T15:45:00",
  },
  {
    Id: 3,
    PaymentId: "PUR-3003",
    ItemId: "ITM-203",
    ItemName: "Stapler Machine",
    Quantity: 10,
    UnitPrice: 25,
    TotalAmount: 250,
    Date: "2025-09-19T11:20:00",
  },
  {
    Id: 4,
    PaymentId: "PUR-3004",
    ItemId: "ITM-204",
    ItemName: "Printer Toner",
    Quantity: 5,
    UnitPrice: 80,
    TotalAmount: 400,
    Date: "2025-09-18T13:10:00",
  },
  {
    Id: 5,
    PaymentId: "PUR-3005",
    ItemId: "ITM-205",
    ItemName: "Office Chairs (Bulk)",
    Quantity: 8,
    UnitPrice: 120,
    TotalAmount: 960,
    Date: "2025-09-17T10:00:00",
  },
  {
    Id: 6,
    PaymentId: "PUR-3006",
    ItemId: "ITM-206",
    ItemName: "Desk Organizers",
    Quantity: 15,
    UnitPrice: 18,
    TotalAmount: 270,
    Date: "2025-09-16T14:50:00",
  },
  {
    Id: 7,
    PaymentId: "PUR-3007",
    ItemId: "ITM-207",
    ItemName: "Filing Cabinets",
    Quantity: 4,
    UnitPrice: 200,
    TotalAmount: 800,
    Date: "2025-09-15T09:15:00",
  },
  {
    Id: 8,
    PaymentId: "PUR-3008",
    ItemId: "ITM-208",
    ItemName: "LED Tube Lights",
    Quantity: 30,
    UnitPrice: 12,
    TotalAmount: 360,
    Date: "2025-09-14T16:30:00",
  },
  {
    Id: 9,
    PaymentId: "PUR-3009",
    ItemId: "ITM-209",
    ItemName: "Conference Table",
    Quantity: 1,
    UnitPrice: 500,
    TotalAmount: 500,
    Date: "2025-09-13T12:40:00",
  },
  {
    Id: 10,
    PaymentId: "PUR-3010",
    ItemId: "ITM-210",
    ItemName: "Whiteboards",
    Quantity: 5,
    UnitPrice: 60,
    TotalAmount: 300,
    Date: "2025-09-12T11:25:00",
  },
];

export const PurchasesTransactionByDayData = [
  {
    SL: 1,
    Date: "2025-09-21",
    QuantitySold: 10,
    TotalTrans: 3,
    TotalEarned: 950.0,
    TotalDue: 100,
  },
  {
    SL: 2,
    Date: "2025-09-20",
    QuantitySold: 7,
    TotalTrans: 2,
    TotalEarned: 720.5,
    TotalDue: 0,
  },
  {
    SL: 3,
    Date: "2025-09-19",
    QuantitySold: 5,
    TotalTrans: 2,
    TotalEarned: 560.75,
    TotalDue: 50,
  },
  {
    SL: 4,
    Date: "2025-09-18",
    QuantitySold: 8,
    TotalTrans: 3,
    TotalEarned: 880.0,
    TotalDue: 0,
  },
  {
    SL: 5,
    Date: "2025-09-17",
    QuantitySold: 6,
    TotalTrans: 1,
    TotalEarned: 450.25,
    TotalDue: 0,
  },
  {
    SL: 6,
    Date: "2025-09-16",
    QuantitySold: 9,
    TotalTrans: 2,
    TotalEarned: 1020.0,
    TotalDue: 150,
  },
  {
    SL: 7,
    Date: "2025-09-15",
    QuantitySold: 4,
    TotalTrans: 1,
    TotalEarned: 300.0,
    TotalDue: 0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    QuantitySold: "Σ: 49",
    TotalTrans: "Σ: 14",
    TotalEarned: "Σ: 4881.5",
    TotalDue: "Σ: 300",
  },
];

export const ExpenseByDayData = [
  {
    SL: 1,
    Date: "2025-09-21",
    TotalTran: 4,
    TotalQuantity: 15,
    TotalExpense: 1800.0,
    TotalPaid: 1500.0,
    TotalDue: 300.0,
  },
  {
    SL: 2,
    Date: "2025-09-20",
    TotalTran: 3,
    TotalQuantity: 10,
    TotalExpense: 950.0,
    TotalPaid: 950.0,
    TotalDue: 0.0,
  },
  {
    SL: 3,
    Date: "2025-09-19",
    TotalTran: 2,
    TotalQuantity: 6,
    TotalExpense: 720.0,
    TotalPaid: 600.0,
    TotalDue: 120.0,
  },
  {
    SL: 4,
    Date: "2025-09-18",
    TotalTran: 5,
    TotalQuantity: 12,
    TotalExpense: 1120.0,
    TotalPaid: 1000.0,
    TotalDue: 120.0,
  },
  {
    SL: 5,
    Date: "2025-09-17",
    TotalTran: 2,
    TotalQuantity: 8,
    TotalExpense: 750.0,
    TotalPaid: 750.0,
    TotalDue: 0.0,
  },
  {
    SL: 6,
    Date: "2025-09-16",
    TotalTran: 3,
    TotalQuantity: 11,
    TotalExpense: 980.0,
    TotalPaid: 800.0,
    TotalDue: 180.0,
  },
  {
    SL: 7,
    Date: "2025-09-15",
    TotalTran: 1,
    TotalQuantity: 4,
    TotalExpense: 300.0,
    TotalPaid: 300.0,
    TotalDue: 0.0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    TotalTran: "Σ: 20",
    TotalQuantity: "Σ: 66",
    TotalExpense: "Σ: 6620.0",
    TotalPaid: "Σ: 5900.0",
    TotalDue: "Σ: 720.0",
  },
];



export const TransactionByMonthData = [
  {
    SL: 1,
    Date: "September-2025",
    QuantitySold: 14,
    TotalTrans: 4,
    TotalEarned: 181.44,
    TotalDue: 0,
  },
  {
    SL: 2,
    Date: "August-2025",
    QuantitySold: 11,
    TotalTrans: 1,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 3,
    Date: "July-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 4,
    Date: "June-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 5,
    Date: "May-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 6,
    Date: "April-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 7,
    Date: "March-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 8,
    Date: "February-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 9,
    Date: "January-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 10,
    Date: "December-2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 11,
    Date: "November-2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 12,
    Date: "October-2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    QuantitySold: "Σ: 25",
    TotalTrans: "Σ: 5",
    TotalEarned: "Σ: 181.44",
    TotalDue: "Σ: 0",
  },
];

export const PurchasesTransactionByMonthData = [
  {
    SL: 1,
    Date: "September-2025",
    QuantitySold: 22,
    TotalTrans: 6,
    TotalEarned: 520.75,
    TotalDue: 120.5,
  },
  {
    SL: 2,
    Date: "August-2025",
    QuantitySold: 15,
    TotalTrans: 4,
    TotalEarned: 345.6,
    TotalDue: 50,
  },
  {
    SL: 3,
    Date: "July-2025",
    QuantitySold: 8,
    TotalTrans: 2,
    TotalEarned: 200.0,
    TotalDue: 0,
  },
  {
    SL: 4,
    Date: "June-2025",
    QuantitySold: 5,
    TotalTrans: 1,
    TotalEarned: 80.0,
    TotalDue: 0,
  },
  {
    SL: 5,
    Date: "May-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 6,
    Date: "April-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 7,
    Date: "March-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 8,
    Date: "February-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 9,
    Date: "January-2025",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 10,
    Date: "December-2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 11,
    Date: "November-2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 12,
    Date: "October-2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    QuantitySold: "Σ: 50",
    TotalTrans: "Σ: 13",
    TotalEarned: "Σ: 1146.35",
    TotalDue: "Σ: 170.5",
  },
];


export const ExpenseByMonthData = [
  {
    SL: 1,
    Date: "September-2025",
    TotalTran: 12,
    TotalQuantity: 65,
    TotalExpense: 7250.0,
    TotalPaid: 6800.0,
    TotalDue: 450.0,
  },
  {
    SL: 2,
    Date: "August-2025",
    TotalTran: 8,
    TotalQuantity: 40,
    TotalExpense: 4800.0,
    TotalPaid: 4500.0,
    TotalDue: 300.0,
  },
  {
    SL: 3,
    Date: "July-2025",
    TotalTran: 6,
    TotalQuantity: 28,
    TotalExpense: 3100.0,
    TotalPaid: 3100.0,
    TotalDue: 0.0,
  },
  {
    SL: 4,
    Date: "June-2025",
    TotalTran: 4,
    TotalQuantity: 20,
    TotalExpense: 2150.0,
    TotalPaid: 2000.0,
    TotalDue: 150.0,
  },
  {
    SL: 5,
    Date: "May-2025",
    TotalTran: 5,
    TotalQuantity: 18,
    TotalExpense: 1900.0,
    TotalPaid: 1800.0,
    TotalDue: 100.0,
  },
  {
    SL: 6,
    Date: "April-2025",
    TotalTran: 2,
    TotalQuantity: 9,
    TotalExpense: 850.0,
    TotalPaid: 850.0,
    TotalDue: 0.0,
  },
  {
    SL: 7,
    Date: "March-2025",
    TotalTran: 3,
    TotalQuantity: 11,
    TotalExpense: 950.0,
    TotalPaid: 900.0,
    TotalDue: 50.0,
  },
  {
    SL: 8,
    Date: "February-2025",
    TotalTran: 1,
    TotalQuantity: 6,
    TotalExpense: 500.0,
    TotalPaid: 500.0,
    TotalDue: 0.0,
  },
  {
    SL: 9,
    Date: "January-2025",
    TotalTran: 0,
    TotalQuantity: 0,
    TotalExpense: 0.0,
    TotalPaid: 0.0,
    TotalDue: 0.0,
  },
  {
    SL: 10,
    Date: "December-2024",
    TotalTran: 0,
    TotalQuantity: 0,
    TotalExpense: 0.0,
    TotalPaid: 0.0,
    TotalDue: 0.0,
  },
  {
    SL: 11,
    Date: "November-2024",
    TotalTran: 0,
    TotalQuantity: 0,
    TotalExpense: 0.0,
    TotalPaid: 0.0,
    TotalDue: 0.0,
  },
  {
    SL: 12,
    Date: "October-2024",
    TotalTran: 0,
    TotalQuantity: 0,
    TotalExpense: 0.0,
    TotalPaid: 0.0,
    TotalDue: 0.0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    TotalTran: "Σ: 41",
    TotalQuantity: "Σ: 197",
    TotalExpense: "Σ: 20,500.0",
    TotalPaid: "Σ: 19,450.0",
    TotalDue: "Σ: 1,050.0",
  },
];

export const SummaryReportData = [
  {
    SL: 1,
    Date: "September-2025",
    SalesTotal: 12500.0,
    SalesPaidTotal: 12000.0,
    SalesDueTotal: 500.0,
    PurchasesTotal: 8500.0,
    PurchasesPaidTotal: 8000.0,
    PurchasesDueTotal: 500.0,
    ExpenseTotal: 7250.0,
    ExpensePaidTotal: 6800.0,
    ExpenseDueTotal: 450.0,
  },
  {
    SL: 2,
    Date: "August-2025",
    SalesTotal: 11800.0,
    SalesPaidTotal: 11500.0,
    SalesDueTotal: 300.0,
    PurchasesTotal: 6000.0,
    PurchasesPaidTotal: 5700.0,
    PurchasesDueTotal: 300.0,
    ExpenseTotal: 4800.0,
    ExpensePaidTotal: 4500.0,
    ExpenseDueTotal: 300.0,
  },
  {
    SL: 3,
    Date: "July-2025",
    SalesTotal: 10500.0,
    SalesPaidTotal: 10500.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 5200.0,
    PurchasesPaidTotal: 5200.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 3100.0,
    ExpensePaidTotal: 3100.0,
    ExpenseDueTotal: 0.0,
  },
  {
    SL: 4,
    Date: "June-2025",
    SalesTotal: 9400.0,
    SalesPaidTotal: 9200.0,
    SalesDueTotal: 200.0,
    PurchasesTotal: 4600.0,
    PurchasesPaidTotal: 4500.0,
    PurchasesDueTotal: 100.0,
    ExpenseTotal: 2150.0,
    ExpensePaidTotal: 2000.0,
    ExpenseDueTotal: 150.0,
  },
  {
    SL: 5,
    Date: "May-2025",
    SalesTotal: 8700.0,
    SalesPaidTotal: 8600.0,
    SalesDueTotal: 100.0,
    PurchasesTotal: 4200.0,
    PurchasesPaidTotal: 4100.0,
    PurchasesDueTotal: 100.0,
    ExpenseTotal: 1900.0,
    ExpensePaidTotal: 1800.0,
    ExpenseDueTotal: 100.0,
  },
  {
    SL: 6,
    Date: "April-2025",
    SalesTotal: 6200.0,
    SalesPaidTotal: 6200.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 3000.0,
    PurchasesPaidTotal: 3000.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 850.0,
    ExpensePaidTotal: 850.0,
    ExpenseDueTotal: 0.0,
  },
  {
    SL: 7,
    Date: "March-2025",
    SalesTotal: 5400.0,
    SalesPaidTotal: 5300.0,
    SalesDueTotal: 100.0,
    PurchasesTotal: 2500.0,
    PurchasesPaidTotal: 2450.0,
    PurchasesDueTotal: 50.0,
    ExpenseTotal: 950.0,
    ExpensePaidTotal: 900.0,
    ExpenseDueTotal: 50.0,
  },
  {
    SL: 8,
    Date: "February-2025",
    SalesTotal: 4800.0,
    SalesPaidTotal: 4800.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 2100.0,
    PurchasesPaidTotal: 2100.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 500.0,
    ExpensePaidTotal: 500.0,
    ExpenseDueTotal: 0.0,
  },
  {
    SL: 9,
    Date: "January-2025",
    SalesTotal: 0.0,
    SalesPaidTotal: 0.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 0.0,
    PurchasesPaidTotal: 0.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 0.0,
    ExpensePaidTotal: 0.0,
    ExpenseDueTotal: 0.0,
  },
  {
    SL: 10,
    Date: "December-2024",
    SalesTotal: 0.0,
    SalesPaidTotal: 0.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 0.0,
    PurchasesPaidTotal: 0.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 0.0,
    ExpensePaidTotal: 0.0,
    ExpenseDueTotal: 0.0,
  },
  {
    SL: 11,
    Date: "November-2024",
    SalesTotal: 0.0,
    SalesPaidTotal: 0.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 0.0,
    PurchasesPaidTotal: 0.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 0.0,
    ExpensePaidTotal: 0.0,
    ExpenseDueTotal: 0.0,
  },
  {
    SL: 12,
    Date: "October-2024",
    SalesTotal: 0.0,
    SalesPaidTotal: 0.0,
    SalesDueTotal: 0.0,
    PurchasesTotal: 0.0,
    PurchasesPaidTotal: 0.0,
    PurchasesDueTotal: 0.0,
    ExpenseTotal: 0.0,
    ExpensePaidTotal: 0.0,
    ExpenseDueTotal: 0.0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    SalesTotal: "Σ: 59,900.0",
    SalesPaidTotal: "Σ: 56,600.0",
    SalesDueTotal: "Σ: 1,200.0",
    PurchasesTotal: "Σ: 34,100.0",
    PurchasesPaidTotal: "Σ: 33,350.0",
    PurchasesDueTotal: "Σ: 750.0",
    ExpenseTotal: "Σ: 20,500.0",
    ExpensePaidTotal: "Σ: 19,450.0",
    ExpenseDueTotal: "Σ: 1,050.0",
  },
];



export const TransactionByYearData = [
  {
    SL: 1,
    Date: "2025",
    QuantitySold: 25,
    TotalTrans: 5,
    TotalEarned: 181.44,
    TotalDue: 0,
  },
  {
    SL: 2,
    Date: "2024",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 3,
    Date: "2023",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 4,
    Date: "2022",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 5,
    Date: "2021",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    QuantitySold: "Σ: 25",
    TotalTrans: "Σ: 5",
    TotalEarned: "Σ: 181.44",
    TotalDue: "Σ: 0",
  },
];

export const PurchasesTransactionByYearData = [
  {
    SL: 1,
    Date: "2025",
    QuantitySold: 50,
    TotalTrans: 13,
    TotalEarned: 1146.35,
    TotalDue: 170.5,
  },
  {
    SL: 2,
    Date: "2024",
    QuantitySold: 18,
    TotalTrans: 5,
    TotalEarned: 420.75,
    TotalDue: 60.0,
  },
  {
    SL: 3,
    Date: "2023",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 4,
    Date: "2022",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  {
    SL: 5,
    Date: "2021",
    QuantitySold: 0,
    TotalTrans: 0,
    TotalEarned: 0,
    TotalDue: 0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    QuantitySold: "Σ: 68",
    TotalTrans: "Σ: 18",
    TotalEarned: "Σ: 1567.10",
    TotalDue: "Σ: 230.5",
  },
];

export const ExpenseByYearData = [
  {
    SL: 1,
    Date: "2025",
    TotalTran: 22,
    TotalQuantity: 180,
    TotalExpense: 18250.0,
    TotalPaid: 17500.0,
    TotalDue: 750.0,
  },
  {
    SL: 2,
    Date: "2024",
    TotalTran: 15,
    TotalQuantity: 120,
    TotalExpense: 12500.0,
    TotalPaid: 11800.0,
    TotalDue: 700.0,
  },
  {
    SL: 3,
    Date: "2023",
    TotalTran: 9,
    TotalQuantity: 70,
    TotalExpense: 7400.0,
    TotalPaid: 7200.0,
    TotalDue: 200.0,
  },
  {
    SL: 4,
    Date: "2022",
    TotalTran: 6,
    TotalQuantity: 55,
    TotalExpense: 5100.0,
    TotalPaid: 5000.0,
    TotalDue: 100.0,
  },
  {
    SL: 5,
    Date: "2021",
    TotalTran: 4,
    TotalQuantity: 30,
    TotalExpense: 2800.0,
    TotalPaid: 2800.0,
    TotalDue: 0.0,
  },
  // ✅ Totals Row (Σ)
  {
    SL: "",
    Date: "",
    TotalTran: "Σ: 56",
    TotalQuantity: "Σ: 455",
    TotalExpense: "Σ: 46,050.0",
    TotalPaid: "Σ: 44,300.0",
    TotalDue: "Σ: 1,750.0",
  },
];




export const UserManagementData = [
  {
    id: 1,
    image: "John Doe",
    imageImg: "https://randomuser.me/api/portraits/men/1.jpg",
    firstname: "John",
    lastname: "Doe",
    Phonenumber: "+91 9876543210",
    email: "john.doe@example.com",
    createdDate: "2023-09-20T10:00:00",
  },
  {
    id: 2,
    image: "Jane Smith",
    imageImg: "https://randomuser.me/api/portraits/women/2.jpg",
    firstname: "Jane",
    lastname: "Smith",
    Phonenumber: "+91 8765432109",
    email: "jane.smith@example.com",
    createdDate: "2023-09-18T14:30:00",
  },
  {
    id: 3,
    image: "Michael Johnson",
    imageImg: "https://randomuser.me/api/portraits/men/3.jpg",
    firstname: "Michael",
    lastname: "Johnson",
    Phonenumber: "+91 7654321098",
    email: "michael.johnson@example.com",
    createdDate: "2023-09-15T09:15:00",
  },
  {
    id: 4,
    image: "Emily Davis",
    imageImg: "https://randomuser.me/api/portraits/women/4.jpg",
    firstname: "Emily",
    lastname: "Davis",
    Phonenumber: "+91 6543210987",
    email: "emily.davis@example.com",
    createdDate: "2023-09-10T11:45:00",
  },
  {
    id: 5,
    image: "Robert Brown",
    imageImg: "https://randomuser.me/api/portraits/men/5.jpg",
    firstname: "Robert",
    lastname: "Brown",
    Phonenumber: "+91 9123456780",
    email: "robert.brown@example.com",
    createdDate: "2023-09-05T16:20:00",
  },
];



export const SystemRoleData = [
  {
    sl: "fec1d08e-5191-48fe-96b4-195d11247fff",
    RoleName: "Warehouse"
  },
  {
    sl: "fdefd559-c462-4c73-9f1d-9f9d4747b4a7",
    RoleName: "Purchases Transaction By Year"
  },
  {
    sl: "f5ef4001-b590-430b-9df5-b3d3938a3303",
    RoleName: "Department"
  },
  {
    sl: "f59c9e71-bb0a-4440-b633-a662d4435b98",
    RoleName: "Expense Report By Year"
  },
  {
    sl: "f0915212-8687-49db-8983-acbb086d7b61",
    RoleName: "Purchases Report"
  },
  {
    sl: "efda1696-e1e2-412d-ab96-92118cd4ad0c",
    RoleName: "Payment Detail Report"
  },
  {
    sl: "eb99c7c4-dbe9-45ad-aa9c-e0b1f9c6a45d",
    RoleName: "Audit Logs"
  },
  {
    sl: "eadfd8e6-1cb3-422e-bd44-31bb5fe26d97",
    RoleName: "Invoice"
  },
  {
    sl: "df099d61-caff-4602-ac50-262045a13bbc",
    RoleName: "Expense Summary Report"
  },
  {
    sl: "da0b3b3f-a367-4b0f-b4a1-a72d4752fa55",
    RoleName: "Print Barcode"
  },
  {
    sl: "d9563269-0efc-4aa6-b51a-c7fac35fb6bf",
    RoleName: "Other Report"
  },
  {
    sl: "d7cac639-7d00-4a35-abfd-1227679ff1e1",
    RoleName: "Transaction By Day"
  },
  {
    sl: "d6a5dd7c-0d8f-4c40-a5b4-07760eb2c1e9",
    RoleName: "Email Config"
  },
  {
    sl: "d1326be7-3504-4ec8-9a96-c4923cdb5943",
    RoleName: "Purchases Payment Quote"
  },
  {
    sl: "cfb0fe10-50a8-43eb-bceb-d213e6027dfa",
    RoleName: "Payment Summary Report"
  },
  {
    sl: "ce68b694-dee0-492b-ae87-a71765ccb83d",
    RoleName: "Quote Invoice"
  },
  {
    sl: "cb3ff940-6fbd-4083-aa88-dc0a7a4ed0c5",
    RoleName: "Expense Type"
  },
  {
    sl: "cab1f644-91cf-47f8-90ef-5291914238df",
    RoleName: "Item Cart SSLe Invoice"
  },
  {
    sl: "c89f8f18-520c-4b48-a1e5-857c194be7cf",
    RoleName: "Purchases Transaction By Month"
  },
  {
    sl: "c85cea1a-48e9-4e41-b876-4a8cccf69746",
    RoleName: "Summary Report"
  },
  {
    sl: "c2c746db-6854-4791-ad1e-d961ce2abb82",
    RoleName: "Sales Report"
  },
  {
    sl: "c2129b9c-e2fc-402d-80bf-b42957edfa37",
    RoleName: "Company Info"
  },
  {
    sl: "c090d712-2b83-4dcf-ab9d-a7e2544d5c1f",
    RoleName: "User Management"
  },
  {
    sl: "c03115ec-e579-463d-b9d9-0b15786f5537",
    RoleName: "Currency"
  },
  {
    sl: "bbe9aca6-e4c6-4cb3-8973-42653c8b547c",
    RoleName: "Manage Page Access"
  },
  {
    sl: "b4768ea0-302a-4499-8679-2f7c07dc6770",
    RoleName: "System Role"
  },
  {
    sl: "af9530b2-6e11-4444-9ec9-338409846c13",
    RoleName: "Admin"
  },
  {
    sl: "ac30f459-5f2f-40d6-993b-90d71b632f4b",
    RoleName: "Expense Report"
  },
  {
    sl: "a8646137-edbb-4647-87c5-72610904da99",
    RoleName: "Employee"
  },
  {
    sl: "a5b8ae2e-1b95-4de8-a7ab-f63247880401",
    RoleName: "Sub Department"
  },
  {
    sl: "a34d5768-5f19-460e-804e-cfc0ba7f5a7b",
    RoleName: "Payment Type"
  },
  {
    sl: "9fea3ca4-9a5c-4eea-96d6-ce0630dbfca6",
    RoleName: "User Profile"
  },
  {
    sl: "9ec61fb9-9908-4ba3-ab71-848a6688c561",
    RoleName: "High In Demand"
  },
  {
    sl: "9bc3291e-2429-45a0-9ec4-3c162b868b66",
    RoleName: "Expense"
  },
  {
    sl: "973e0073-2a7e-447c-9ba4-e3154624105e",
    RoleName: "Items"
  },
  {
    sl: "9578e2b7-a248-4d8b-af00-83aff47be269",
    RoleName: "Item Cart"
  },
  {
    sl: "9575445c-94ab-4127-a79b-8ebcd58dc0b1",
    RoleName: "Attendance"
  },
  {
    sl: "93885c76-369d-4dd5-962e-0d37953ef940",
    RoleName: "Damage Item Details"
  },
  {
    sl: "9325e538-f7ad-4859-aa2d-defd81dfd3f8",
    RoleName: "Dashboard"
  },
  {
    sl: "91ee776c-1c3d-4978-84d3-192bd41ef365",
    RoleName: "Customer Info"
  },
  {
    sl: "908f9eb5-95c5-4e2b-96b4-450a93819d73",
    RoleName: "Payment Status"
  },
  {
    sl: "8f79654c-814e-4081-bdeb-f366b97e0ccb",
    RoleName: "Expense Summary"
  },
  {
    sl: "8efdacac-e7bd-4cbc-a271-941efa4d4534",
    RoleName: "Items History"
  },
  {
    sl: "844620fe-d9e5-4015-988a-bcf36c204fe5",
    RoleName: "Designation"
  },
  {
    sl: "8025f4c4-7e02-4d9e-9e52-53cfae33ac04",
    RoleName: "Categories"
  },
  {
    sl: "75cf90ac-4e84-4c57-839e-98a244549309",
    RoleName: "Highest Earning"
  },
  {
    sl: "72f9648b-af0b-4b0f-be62-21969ee3b914",
    RoleName: "Item Report"
  },
  {
    sl: "6c720157-d0e0-46c0-8353-1bb291525d90",
    RoleName: "Expense Report By Month"
  },
  {
    sl: "6465bccb-44d8-41eb-a1c3-61dd51ab58d2",
    RoleName: "Low In Stock"
  },
  {
    sl: "62c8f5fb-c104-41c4-99e3-e0fc0eacd3ae",
    RoleName: "Super Admin"
  },
  {
    sl: "604c3db7-217c-4d3f-a5fe-60e08f864d24",
    RoleName: "Manual Invoice"
  },
  {
    sl: "5c02d101-e227-4af3-b3c8-0dd52812d53f",
    RoleName: "Branch"
  },
  {
    sl: "58ee70df-1291-4ab1-8bab-956815bb7261",
    RoleName: "Expense Report By Day"
  },
  {
    sl: "558f6eb9-69a3-4786-8045-f38ca2ed59ab",
    RoleName: "SLentity Setting"
  },
  {
    sl: "542aac86-e929-47bd-a2c8-e55de38f597e",
    RoleName: "Transaction By Year"
  },
  {
    sl: "541e5c5d-930b-44ae-a189-557ac20618de",
    RoleName: "Attendance Report"
  },
  {
    sl: "52f6cd36-72ca-4a78-93cf-0e377afd12b0",
    RoleName: "Manage User Roles"
  },
  {
    sl: "4f04badd-3983-4bfd-be1f-48ff552c09b2",
    RoleName: "Manage Invoice"
  },
  {
    sl: "4d65d5b9-134c-4b0e-a426-ec9b81e52a69",
    RoleName: "Vat Percentage"
  },
  {
    sl: "4a3e8051-8e23-4934-a275-a619349ca541",
    RoleName: "Expense Details Report"
  },
  {
    sl: "48701e42-9244-4d96-ae5d-786dd09bb019",
    RoleName: "Refresh Token"
  },
  {
    sl: "45f5b5a0-94dc-46b2-9227-ce2e0e6e1c02",
    RoleName: "Purchases Payment"
  },
  {
    sl: "4085a5f1-0018-4aa3-87d9-2a159e5fcf94",
    RoleName: "Product Wise Sale"
  },
  {
    sl: "3ffb8d8d-2f27-432a-a7a5-c47c99603fb1",
    RoleName: "Customer Type"
  },
  {
    sl: "3f00ce82-27e8-4387-9783-1e108158bcba",
    RoleName: "Low In Demand"
  },
  {
    sl: "3abb456d-a955-47f8-ab54-8d202c65b565",
    RoleName: "Draft Invoice"
  },
  {
    sl: "37ad06d6-c542-4170-aad4-6998a43f7e2d",
    RoleName: "Email Setting"
  },
  {
    sl: "33333a81-5b11-4614-848c-4a8c84774f4b",
    RoleName: "Sales Return Log"
  },
  {
    sl: "2aa38b96-1d30-48fa-a74f-19e9887a18d4",
    RoleName: "Send Email History"
  },
  {
    sl: "27b6d238-7b98-4dc5-801a-bf1bc4a48f29",
    RoleName: "Lowest Earning"
  },
  {
    sl: "20fc9e6b-9918-47fe-ad52-78d9b63597c0",
    RoleName: "Purchases Transaction By Day"
  },
  {
    sl: "1c13f365-fa3a-4313-9a97-72005efb0da5",
    RoleName: "Transaction By Month"
  },
  {
    sl: "1a094a70-3403-41c9-b5c7-34556fd26d6c",
    RoleName: "Purchases Detail"
  },
  {
    sl: "1956901a-32e7-407e-90c7-7df560e69929",
    RoleName: "Unitsof Measure"
  },
  {
    sl: "19173462-a1ab-4108-adb1-0daebac3b82d",
    RoleName: "Purchases Summary"
  },
  {
    sl: "18faeba3-7ff3-411d-9cc3-bef872240255",
    RoleName: "Purchase Return Log"
  },
  {
    sl: "18ef6374-55be-4077-93af-7d65d440fb88",
    RoleName: "Business ERP"
  },
  {
    sl: "11d940b4-df0d-4a53-aee3-1d2ee0f8c34e",
    RoleName: "Purchases Payment Draft"
  },
  {
    sl: "11a7891e-52cd-47f2-b873-0a382f5c3e73",
    RoleName: "Supplier"
  },
  {
    sl: "09dc261e-2b7f-4c6e-a6d7-1533a9abb4a2",
    RoleName: "Settings"
  },
  {
    sl: "02b6633c-e697-4226-a8a4-7504c639f13e",
    RoleName: "User Info From Browser"
  },
  {
    sl: "02529543-bf9c-4b90-8ece-25d016c220a6",
    RoleName: "Login History"
  },
  {
    sl: "0165b200-fac2-4d36-9de4-a38beeca0e63",
    RoleName: "Outof Stock"
  }
]
export const paymentStatusData = [
  {
    id: 8,
    name: "Custom Date",
    description: "Custom Date",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 7,
    name: "Pay within 30 Days",
    description: "Pay within 30 Days",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 6,
    name: "Pay within 14 Days",
    description: "Pay within 14 Days",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 5,
    name: "Pay within 7 Days",
    description: "Pay within 7 Days",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 4,
    name: "Deposit",
    description: "Deposit",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Partially Paid",
    description: "Partially Paid",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 2,
    name: "UnPaid",
    description: "UnPaid",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 1,
    name: "Paid",
    description: "Paid",
    createdBy: "Admin",
    modifiedBy: "Admin",
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
];
export const PaymentData = [
  {
    "Id": 8,
    "Name": "Custom Date",
    "Description": "Custom Date",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 7,
    "Name": "Pay within 30 Days",
    "Description": "Pay within 30 Days",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 6,
    "Name": "Pay within 14 Days",
    "Description": "Pay within 14 Days",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 5,
    "Name": "Pay within 7 Days",
    "Description": "Pay within 7 Days",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 4,
    "Name": "Deposit",
    "Description": "Deposit",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 3,
    "Name": "Partially Paid",
    "Description": "Partially Paid",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 2,
    "Name": "UnPaid",
    "Description": "UnPaid",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 1,
    "Name": "Paid",
    "Description": "Paid",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  }
]
export const CustomerTypeData = [
  {
    "Id": 4,
    "Name": "Other",
    "Description": "Other",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 3,
    "Name": "Trader",
    "Description": "Trader",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 2,
    "Name": "Premium",
    "Description": "Premium",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  },
  {
    "Id": 1,
    "Name": "Normal",
    "Description": "Normal",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20"
  }
]
export const CategoriesData = [

  {
    "Id": 11,
    "Name": "Common",
    "Description": "For common all items",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 10,
    "Name": "Steels",
    "Description": "Coated Steel Sheet",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 9,
    "Name": "Electronics",
    "Description": "Electronics",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 8,
    "Name": "IT",
    "Description": "IT",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 7,
    "Name": "Beauty and Cosmetic",
    "Description": "Beauty and Cosmetic",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 6,
    "Name": "Vegetables",
    "Description": "Vegetables",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 5,
    "Name": "Meat & Fish",
    "Description": "Meat & Fish",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "Name": "Freezer",
    "Description": "Freezer",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "Name": "Beverages",
    "Description": "Soft drinks, coffees, teas, etc",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "Name": "Dairy Products",
    "Description": "Dairy Products",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 1,
    "Name": "Fruits",
    "Description": "Fruits Item",
    "CreatedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedDate": "2023-02-20",
    "ModifiedBy": "Admin"
  }
]
export const OutOfStockData = [
  {
    "Id": 1,
    "ItemName": "Apple iPhone 14",
    "Category": "Electronics",
    "Description": "128GB, Midnight Black",
    "ImageUrl": "https://picsum.photos/seed/iphone14/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "ItemName": "Samsung Galaxy S22",
    "Category": "Electronics",
    "Description": "256GB, Phantom White",
    "ImageUrl": "https://picsum.photos/seed/galaxys22/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "ItemName": "Amul Butter 500g",
    "Category": "Dairy Products",
    "Description": "Salted Butter Pack",
    "ImageUrl": "https://picsum.photos/seed/amulbutter/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "ItemName": "Coca Cola 2L",
    "Category": "Beverages",
    "Description": "Soft Drink Bottle",
    "ImageUrl": "https://picsum.photos/seed/cocacola/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 5,
    "ItemName": "Fresh Salmon",
    "Category": "Meat & Fish",
    "Description": "1kg Pack",
    "ImageUrl": "https://picsum.photos/seed/salmon/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 6,
    "ItemName": "Sony Headphones WH-1000XM4",
    "Category": "Electronics",
    "Description": "Noise Cancelling Over-Ear",
    "ImageUrl": "https://picsum.photos/seed/headphones/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 7,
    "ItemName": "Nike Air Max 270",
    "Category": "Footwear",
    "Description": "Running Shoes, Size 9",
    "ImageUrl": "https://picsum.photos/seed/nike270/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 8,
    "ItemName": "Dell XPS 13",
    "Category": "Electronics",
    "Description": "13-inch Laptop, 16GB RAM",
    "ImageUrl": "https://picsum.photos/seed/dellxps/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 9,
    "ItemName": "LG Refrigerator 260L",
    "Category": "Appliances",
    "Description": "Double Door, Frost Free",
    "ImageUrl": "https://picsum.photos/seed/fridge/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 10,
    "ItemName": "Adidas Hoodie",
    "Category": "Clothing",
    "Description": "Comfort Fit, Black, Size L",
    "ImageUrl": "https://picsum.photos/seed/hoodie/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 11,
    "ItemName": "Canon EOS 90D",
    "Category": "Electronics",
    "Description": "DSLR Camera with 18-135mm Lens",
    "ImageUrl": "https://picsum.photos/seed/canon90d/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 12,
    "ItemName": "Levi's Jeans",
    "Category": "Clothing",
    "Description": "Slim Fit, Size 32",
    "ImageUrl": "https://picsum.photos/seed/levis/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 13,
    "ItemName": "Tata Salt 1kg",
    "Category": "Grocery",
    "Description": "Iodized Salt Pack",
    "ImageUrl": "https://picsum.photos/seed/salt/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 14,
    "ItemName": "Parle-G Biscuits 800g",
    "Category": "Snacks",
    "Description": "Family Pack",
    "ImageUrl": "https://picsum.photos/seed/biscuits/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 15,
    "ItemName": "Colgate Toothpaste 200g",
    "Category": "Personal Care",
    "Description": "Strong Teeth",
    "ImageUrl": "https://picsum.photos/seed/colgate/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 16,
    "ItemName": "Dettol Handwash 500ml",
    "Category": "Personal Care",
    "Description": "Original Protection",
    "ImageUrl": "https://picsum.photos/seed/dettol/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 17,
    "ItemName": "LG Smart TV 55 inch",
    "Category": "Electronics",
    "Description": "4K Ultra HD LED",
    "ImageUrl": "https://picsum.photos/seed/smarttv/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 18,
    "ItemName": "Sony PlayStation 5",
    "Category": "Electronics",
    "Description": "Disc Edition Console",
    "ImageUrl": "https://picsum.photos/seed/ps5/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 19,
    "ItemName": "Puma Sports Shoes",
    "Category": "Footwear",
    "Description": "Blue, Size 10",
    "ImageUrl": "https://picsum.photos/seed/puma/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 20,
    "ItemName": "Ray-Ban Sunglasses",
    "Category": "Accessories",
    "Description": "Aviator, Black",
    "ImageUrl": "https://picsum.photos/seed/rayban/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 21,
    "ItemName": "Wildcraft Backpack",
    "Category": "Accessories",
    "Description": "45L, Waterproof",
    "ImageUrl": "https://picsum.photos/seed/backpack/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 22,
    "ItemName": "Kitchen Knife Set",
    "Category": "Home & Kitchen",
    "Description": "5-Piece Stainless Steel",
    "ImageUrl": "https://picsum.photos/seed/knifeset/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 23,
    "ItemName": "Philips Mixer Grinder",
    "Category": "Appliances",
    "Description": "750W, 3 Jars",
    "ImageUrl": "https://picsum.photos/seed/mixer/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 24,
    "ItemName": "HP DeskJet Printer",
    "Category": "Electronics",
    "Description": "Wireless Inkjet Printer",
    "ImageUrl": "https://picsum.photos/seed/printer/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 25,
    "ItemName": "Redmi Power Bank 20000mAh",
    "Category": "Electronics",
    "Description": "18W Fast Charging",
    "ImageUrl": "https://picsum.photos/seed/powerbank/200/200",
    "StockStatus": "Out of Stock",
    "LastUpdated": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  }
]
export const SubDepartmentData = [
  {
    "Id": 1,
    "Name": "Frontend Development",
    "Description": "Responsible for UI/UX and client-side development",
    "DepartmentId": 1,
    "DepartmentName": "IT",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "Name": "Backend Development",
    "Description": "Handles server-side logic and database management",
    "DepartmentId": 1,
    "DepartmentName": "IT",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "Name": "Recruitment",
    "Description": "Manages hiring and onboarding of employees",
    "DepartmentId": 2,
    "DepartmentName": "Human Resources",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "Name": "Payroll",
    "Description": "Handles salary processing and employee compensation",
    "DepartmentId": 2,
    "DepartmentName": "Human Resources",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 5,
    "Name": "Accounts Payable",
    "Description": "Manages vendor payments and bills",
    "DepartmentId": 3,
    "DepartmentName": "Finance",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 6,
    "Name": "Accounts Receivable",
    "Description": "Handles customer invoices and incoming payments",
    "DepartmentId": 3,
    "DepartmentName": "Finance",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 7,
    "Name": "Digital Marketing",
    "Description": "Focuses on SEO, SEM, and online campaigns",
    "DepartmentId": 4,
    "DepartmentName": "Marketing",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 8,
    "Name": "Content Creation",
    "Description": "Develops blogs, social media posts, and ad creatives",
    "DepartmentId": 4,
    "DepartmentName": "Marketing",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 9,
    "Name": "Customer Support",
    "Description": "Handles customer queries and complaints",
    "DepartmentId": 5,
    "DepartmentName": "Operations",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 10,
    "Name": "Logistics",
    "Description": "Manages delivery, shipping, and inventory control",
    "DepartmentId": 5,
    "DepartmentName": "Operations",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  }
]
export const UnitOfMeasureData = [
  {
    "Id": 1,
    "Name": "Piece",
    "Description": "Standard unit for counting individual items",
    "Abbreviation": "pc",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 2,
    "Name": "Kilogram",
    "Description": "Unit of mass measurement",
    "Abbreviation": "kg",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 3,
    "Name": "Gram",
    "Description": "Smaller unit of mass measurement",
    "Abbreviation": "g",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 4,
    "Name": "Liter",
    "Description": "Unit of liquid volume",
    "Abbreviation": "L",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 5,
    "Name": "Milliliter",
    "Description": "Smaller unit of liquid volume",
    "Abbreviation": "ml",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 6,
    "Name": "Meter",
    "Description": "Standard unit of length",
    "Abbreviation": "m",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 7,
    "Name": "Centimeter",
    "Description": "Smaller unit of length",
    "Abbreviation": "cm",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 8,
    "Name": "Box",
    "Description": "Packaging unit, contains multiple items",
    "Abbreviation": "box",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 9,
    "Name": "Packet",
    "Description": "Small package unit",
    "Abbreviation": "pkt",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  },
  {
    "Id": 10,
    "Name": "Dozen",
    "Description": "Unit representing 12 items",
    "Abbreviation": "doz",
    "CreatedDate": "2023-02-20",
    "ModifiedDate": "2023-02-20",
    "CreatedBy": "Admin",
    "ModifiedBy": "Admin"
  }
]
export const branches = [
  {
    id: 6,
    name: "Branch Five",
    contactPerson: "Person 05",
    phoneNumber: "9876543210",
    address: "Paris, France",
    createdDate: "2023-02-20",
  },
  {
    id: 5,
    name: "Branch Four",
    contactPerson: "Person 04",
    phoneNumber: "9123456780",
    address: "Leipzig, Germany",
    createdDate: "2023-02-20",
  },
  {
    id: 4,
    name: "Branch Three",
    contactPerson: "Person 03",
    phoneNumber: "9988776655",
    address: "Frankfurt, Germany",
    createdDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Branch Two",
    contactPerson: "Person 02",
    phoneNumber: "9090909090",
    address: "Munich, Germany",
    createdDate: "2023-02-20",
  },
  {
    id: 2,
    name: "Branch One",
    contactPerson: "Person 01",
    phoneNumber: "9001234567",
    address: "Hamburg, Germany",
    createdDate: "2023-02-20",
  },
  {
    id: 1,
    name: "Main Branch",
    contactPerson: "Admin",
    phoneNumber: "8001112222",
    address: "Berlin, Germany",
    createdDate: "2023-02-20",
  },
];
export const emailConfigs = [
  {
    id: 5,
    email: "support@company.com",
    hostname: "smtp.company.com",
    port: 465,
    isDefault: false,
    createdDate: "2025-02-10",
    modifiedDate: "2025-02-10",
  },
  {
    id: 4,
    email: "exmapl3@gmail.com",
    hostname: "smtp.gmail.com",
    port: 587,
    isDefault: false,
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 3,
    email: "exmapl2@gmail.com",
    hostname: "smtp.gmail.com",
    port: 587,
    isDefault: false,
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 2,
    email: "admin@myinvoicemanager.co.uk",
    hostname: "mail.myinvoicemanager.co.uk",
    port: 587,
    isDefault: false,
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
  {
    id: 1,
    email: "devmlbd@gmail.com",
    hostname: "smtp.gmail.com",
    port: 587,
    isDefault: true,
    createdDate: "2023-02-20",
    modifiedDate: "2023-02-20",
  },
];
export const currencies = [
  {
    id: 6,
    name: "Australia Dollars",
    code: "AUD",
    symbol: "A$",
    country: "Australia",
    description: "Australia Dollar (AUD)",
    createdDate: "2023-02-20",
  },
  {
    id: 5,
    name: "Taka",
    code: "BDT",
    symbol: "৳",
    country: "Bangladesh",
    description: "Bangladeshi Taka",
    createdDate: "2023-02-20",
  },
  {
    id: 4,
    name: "Yen",
    code: "JPY",
    symbol: "¥",
    country: "Japan",
    description: "Japanese Yen",
    createdDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Pounds Sterling",
    code: "GBP",
    symbol: "£",
    country: "UK",
    description: "British Pound Sterling",
    createdDate: "2023-02-20",
  },
  {
    id: 2,
    name: "Euro",
    code: "EUR",
    symbol: "€",
    country: "European Union",
    description: "European Union Currency",
    createdDate: "2023-02-20",
  },
  {
    id: 1,
    name: "US Dollar",
    code: "USD",
    symbol: "$",
    country: "United States",
    description: "United States Dollar",
    createdDate: "2023-02-20",
  },
];
export const vatRates = [
  {
    id: 16,
    name: "VAT: 50%",
    percentage: 50,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 15,
    name: "VAT: 40%",
    percentage: 40,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 14,
    name: "VAT: 30%",
    percentage: 30,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 13,
    name: "VAT: 20%",
    percentage: 20,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 12,
    name: "VAT: 10%",
    percentage: 10,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 11,
    name: "VAT: 10%",
    percentage: 10,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 10,
    name: "VAT: 9%",
    percentage: 9,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 9,
    name: "VAT: 8%",
    percentage: 8,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 8,
    name: "VAT: 7%",
    percentage: 7,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 7,
    name: "VAT: 6%",
    percentage: 6,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 6,
    name: "VAT: 5%",
    percentage: 5,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 5,
    name: "VAT: 4%",
    percentage: 4,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 4,
    name: "VAT: 3%",
    percentage: 3,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 3,
    name: "VAT: 2%",
    percentage: 2,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 2,
    name: "VAT: 1%",
    percentage: 1,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
  {
    id: 1,
    name: "VAT: 0%",
    percentage: 0,
    createdDate: "2023-02-20",
    createdBy: "Admin",
  },
];

export const smtpSettings = [
  { label: "User Name", value: "devmlbd@gmail.com" },
  { label: "Host(SMTP)", value: "smtp.gmail.com" },
  { label: "Port(SMTP)", value: "587" },
  { label: "From Email", value: "devmlbd@gmail.com" },
  { label: "From Full Name", value: "Web Admin Notification" },
];

export const smtpSettingsGrid = [
  { label: "SendGrid User", value: "dev" },
  { label: "SendGrid Key", value: "smtp.gmail.com" },
  { label: "From Email", value: "devmlbd@gmail.com" },
  { label: "From Full Name", value: "Web Admin Notification" },
];


export const IdentitySettingData = [
  { label: "Password Require Digit", value: true },
  { label: "Password Required Length", value: "8" },
  { label: "Password Require Non Alphanumeric", value: true },
  { label: "Password Require Uppercase", value: true },
  { label: "Password Require Lowercase", value: true },
  { label: "Password Required Unique Chars", value: "3" },
  { label: "Lockout Default Lockout Time Span In Minutes", value: "30" },
  { label: "Lockout Max Failed Access Attempts", value: "5" },
  { label: "Lockout Allowed For New Users", value: true },
  { label: "User Require Unique Email", value: true },
  { label: "Sign In Require Confirmed Email", value: true },
  { label: "Cookie Http Only", value: true },
  { label: "Cookie Expiration", value: true },
  { label: "Cookie Expire Time Span", value: "60" },
  { label: "Login Path", value: "/login" },
  { label: "Logout Path", value: "/logout" },
  { label: "Access Denied Path", value: "/access-denied" },
  { label: "Sliding Expiration", value: true },
  { label: "Created Date", value: "2025-09-24" },
  { label: "Modified Date", value: "2025-09-24" },
  { label: "Created By", value: "Admin" },
  { label: "Modified By", value: "Admin" },
  { label: "Cancelled", value: false },
];
