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
    "status": "UnPaid"
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
    "createdDate": "5/13/2022",
    "status": "UnPaid"
  },
  {
    "id": "INV3",
    "customer": "John Doe",
    "branch": "Main Branch",
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
    "customer": "Jane Smith",
    "branch": "Branch A",
    "subTotal": 500,
    "discount": 20,
    "vat": 45,
    "grandTotal": 525,
    "paidAmount": 525,
    "dueAmount": 0,
    "createdDate": "5/15/2022",
    "status": "Paid"
  },
  {
    "id": "INV5",
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
 