export const invoices = [
  {
    sl: 1,
    invoiceNo: "INV2",
    customerName: "Walk in Customer",
    email:"walkin@123",
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
    email:"walkin@123",
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

  // groceryData.js
export const groceryData = [
  { id: 1, title: "Curd", description: "Fresh red apples from the farm.", image: "src/assets/img/bg/curd.jpg", price: 120 },
  { id: 2, title: "Olive", description: "health thing.", image: "src/assets/img/bg/olive.jpg", price: 60 },
  { id: 3, title: "Apple", description: "Juicy oranges full of vitamin C.", image: "src/assets/img/bg/applee.png", price: 90 },
  { id: 5, title: "Honey", description: "Fresh farm Honey.", image: "src/assets/img/bg/honey.jpg", price: 40 },
  { id: 4, title: "Bananas", description: "Organic red tomatoes.", image: "src/assets/img/bg/banana.jpg", price: 50 },
  { id: 6, title: "Onions", description: "Healthy and fresh onions.", image: "src/assets/img/bg/onions.jpg", price: 45 },
  { id: 7, title: "Carrots", description: "Crunchy and sweet carrots.", image: "src/assets/img/bg/carrot.jpg", price: 70 },
  { id: 8, title: "Spinach", description: "Fresh green spinach leaves.", image: "src/assets/img/bg/spinach.jpg", price: 30 },
  { id: 9, title: "Broccoli", description: "Healthy broccoli florets.", image: "src/assets/img/bg/broccoli.jpg", price: 110 },
  { id: 11, title: "Milk", description: "Fresh cow milk.", image: "src/assets/img/bg/milk.jpg", price: 60 },
  { id: 12, title: "Cheese", description: "Tasty cheddar cheese.", image: "src/assets/img/bg/cheese.jpg", price: 250 },
  { id: 13, title: "Eggs", description: "Farm fresh eggs.", image: "src/assets/img/bg/eggs.jpg", price: 70 },
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
    "customerImg":"src/assets/img/bg/girl.jpg"
  },
  {
    "id": "INV2",
    "customer": "Walk in Customer",
    "branch": "Main Branch",
    "customerImg":"src/assets/img/bg/man.jpg",
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
    "customerImg":"src/assets/img/bg/boy.jpg",
    "createdDate": "5/13/2022",
    "status": "UnPaid"
  },
  {
    "id": "INV3",
    "customer": "John Doe",
    "branch": "Main Branch",
    // "customerImg":"src/assets/img/bg/banana.jpg",
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
    // "customerImg":"src/assets/img/bg/banana.jpg",
    "createdDate": "5/15/2022",
    "status": "Paid"
  },
  {
    "id": "INV5",
    // "customerImg":"src/assets/img/bg/banana.jpg",
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


export const  purchaseInvoiceData = [
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
]

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
