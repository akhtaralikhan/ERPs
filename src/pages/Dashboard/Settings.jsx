import React from 'react'

export default function Settings() {
  return (
    <div>
      
    </div>
  )
}


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const PurchaseReturnModal = ({ mode, onSave }) => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//         watch,
//         setValue,
//     } = useForm({
//         defaultValues: {
//             purchaseReturnNo: "",
//             purchaseReturnDate: "",
//             purchaseInvoiceNo: "",
//             returnType: "",
//             partyName: "",
//             partyCode: "",
//             billingAddress: "",
//             city: "",
//             country: "",
//             state: "",
//             pinCode: "",
//             gstNo: "",
//             refNo: "",
//             refDate: "",
//             dispatchFrom: "",
//             remarks: "",
//             products1: [],
//             products2: [],
//             subTotal1: "",
//             subTotal2: "",
//             netAmount: "",
//         },
//     });

//     // Local state for products if needed
//     const [productDetail1, setProductDetail1] = useState({
//         productName: "",
//         productCode: "",
//         unit: "",
//         price: "",
//         quantity: "",
//     });

//     const [productDetail2, setProductDetail2] = useState({
//         productName: "",
//         productCode: "",
//         unit: "",
//         price: "",
//         quantity: "",
//     });

//     const handleProductChange1 = (e) => {
//         const { name, value } = e.target;
//         setProductDetail1((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleProductChange2 = (e) => {
//         const { name, value } = e.target;
//         setProductDetail2((prev) => ({ ...prev, [name]: value }));
//     };

//     const addProduct1 = (e) => {
//         e.preventDefault();
//         if (!productDetail1.productName) {
//             alert("Please enter product name for Product 1");
//             return;
//         }
//         if (!productDetail1.quantity || isNaN(productDetail1.quantity) || Number(productDetail1.quantity) <= 0) {
//             alert("Please enter a valid quantity for Product 1");
//             return;
//         }
//         const products1 = watch("products1") || [];
//         setValue("products1", [...products1, productDetail1], { shouldValidate: true });
//         setProductDetail1({
//             productName: "",
//             productCode: "",
//             unit: "",
//             price: "",
//             quantity: "",
//         });
//     };

//     const addProduct2 = (e) => {
//         e.preventDefault();
//         if (!productDetail2.productName) {
//             alert("Please enter product name for Product 2");
//             return;
//         }
//         if (!productDetail2.quantity || isNaN(productDetail2.quantity) || Number(productDetail2.quantity) <= 0) {
//             alert("Please enter a valid quantity for Product 2");
//             return;
//         }
//         const products2 = watch("products2") || [];
//         setValue("products2", [...products2, productDetail2], { shouldValidate: true });
//         setProductDetail2({
//             productName: "",
//             productCode: "",
//             unit: "",
//             price: "",
//             quantity: "",
//         });
//     };

//     const onSubmit = (data) => {
//         onSave(data);
//         const modalEl = document.getElementById("edit-modal");
//         if (modalEl) {
//             const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
//             modalInstance?.hide();
//         }
//     };

//     return (
//         <div className="modal fade" id="edit-modal" tabIndex="-1" aria-labelledby="edit-modalModalLabel" aria-hidden="true">
//             <div className="modal-dialog modal-dialog-centered modal-xxl">
//                 <div className="modal-content">
//                     {/* Header */}
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="edit-modalModalLabel">
//                             {mode === "edit" ? "Edit Purchase Return" : "Add Purchase Return"}
//                         </h5>
//                         <button
//                             className="btn p-1"
//                             type="button"
//                             data-bs-dismiss="modal"
//                             aria-label="Close"
//                             onClick={() => reset()}
//                         >
//                             <i className="fa fa-xmark fs--1 text-danger"></i>
//                         </button>
//                     </div>

//                     {/* Body */}
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="modal-body text-start">
//                             <div className="row g-2 mb-2">
//                                 {/* LEFT COLUMN */}
//                                 <div className="col-md-6">
//                                     <div className="mb-2">
//                                         <label className="form-label">Purchase Return No. *</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Auto Generated Purchase Return No."
//                                             className={`form-control ${errors.purchaseReturnNo ? "is-invalid" : ""}`}
//                                             {...register("purchaseReturnNo", { required: "Purchase Return No. is required" })}
//                                         />
//                                         {errors.purchaseReturnNo && <div className="invalid-feedback">{errors.purchaseReturnNo.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Purchase Invoice No *</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Invoice No"
//                                             className={`form-control ${errors.purchaseInvoiceNo ? "is-invalid" : ""}`}
//                                             {...register("purchaseInvoiceNo", { required: "Purchase Invoice No. is required" })}
//                                         />
//                                         {errors.purchaseInvoiceNo && <div className="invalid-feedback">{errors.purchaseInvoiceNo.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Party Name *</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter Party Name"
//                                             className={`form-control ${errors.partyName ? "is-invalid" : ""}`}
//                                             {...register("partyName", { required: "Party Name is required" })}
//                                         />
//                                         {errors.partyName && <div className="invalid-feedback">{errors.partyName.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Billing Address *</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter Shipping Address"
//                                             className={`form-control ${errors.billingAddress ? "is-invalid" : ""}`}
//                                             {...register("billingAddress", { required: "Billing Address is required" })}
//                                         />
//                                         {errors.billingAddress && <div className="invalid-feedback">{errors.billingAddress.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Country *</label>
//                                         <select
//                                             className={`form-select ${errors.country ? "is-invalid" : ""}`}
//                                             {...register("country", { required: "Country is required" })}
//                                         >
//                                             <option value="">-Select Country-</option>
//                                             {/* Add options */}
//                                         </select>
//                                         {errors.country && <div className="invalid-feedback">{errors.country.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Pin Code</label>
//                                         <input type="text"
//                                             className={`form-control ${errors.country ? "is-invalid" : ""}`}
//                                             {...register("pinCode", { required: "Pin Code is required" })}
//                                         />
//                                         {errors.pinCode && <div className="invalid-feedback">{errors.pinCode.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Ref. No.</label>
//                                         <input type="text"
//                                             className={`form-control ${errors.refNo ? "is-invalid" : ""}`}
//                                             {...register("refNo", { required: "Ref No is required" })}
//                                         />
//                                         {errors.refNo && <div className="invalid-feedback">{errors.refNo.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Dispatch From *</label>
//                                         <select
//                                             className={`form-select ${errors.dispatchFrom ? "is-invalid" : ""}`}
//                                             {...register("dispatchFrom", { required: "Dispatch From is required" })}
//                                         >
//                                             <option value="">-Select Location-</option>
//                                             {/* Add options */}
//                                         </select>
//                                         {errors.dispatchFrom && <div className="invalid-feedback">{errors.dispatchFrom.message}</div>}
//                                     </div>
//                                 </div>

//                                 {/* RIGHT COLUMN */}
//                                 <div className="col-md-6">
//                                     <div className="mb-2">
//                                         <label className="form-label">Purchase Return Date *</label>
//                                         <input
//                                             type="date"
//                                             className={`form-control ${errors.purchaseReturnDate ? "is-invalid" : ""}`}
//                                             {...register("purchaseReturnDate", { required: "Purchase Return Date is required" })}
//                                         />
//                                         {errors.purchaseReturnDate && <div className="invalid-feedback">{errors.purchaseReturnDate.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Return Type *</label>
//                                         <select
//                                             className={`form-select ${errors.returnType ? "is-invalid" : ""}`}
//                                             {...register("returnType", { required: "Return Type is required" })}
//                                         >
//                                             <option value="">Select Return Type</option>
//                                             {/* Add options */}
//                                         </select>
//                                         {errors.returnType && <div className="invalid-feedback">{errors.returnType.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Party Code *</label>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.partyCode ? "is-invalid" : ""}`}
//                                             {...register("partyCode", { required: "Party Code is required" })}
//                                         />
//                                         {errors.partyCode && <div className="invalid-feedback">{errors.partyCode.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">City *</label>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.city ? "is-invalid" : ""}`}
//                                             {...register("city", { required: "City is required" })}
//                                         />
//                                         {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">State *</label>
//                                         <select
//                                             className={`form-select ${errors.state ? "is-invalid" : ""}`}
//                                             {...register("state", { required: "State is required" })}
//                                         >
//                                             <option value="">-Select State-</option>
//                                             {/* Add options */}
//                                         </select>
//                                         {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">GST No. *</label>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.gstNo ? "is-invalid" : ""}`}
//                                             {...register("gstNo", { required: "GST No. is required" })}
//                                         />
//                                         {errors.gstNo && <div className="invalid-feedback">{errors.gstNo.message}</div>}
//                                     </div>

//                                     <div className="mb-2">
//                                         <label className="form-label">Ref. Date *</label>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.refDate ? "is-invalid" : ""}`}
//                                             {...register("refDate", { required: "Ref Date is required" })}
//                                         />
//                                         {errors.refDate && <div className="invalid-feedback">{errors.refDate.message}</div>}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Charges and Net Amount Section - add react-hook-form as needed */}

//                             <div className="modal-footer">
//                                 <button className="btn btn-primary" type="submit">
//                                     <small>Save</small>
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="btn btn-outline-danger"
//                                     onClick={() => reset()}
//                                 >
//                                     <small>Reset</small>
//                                 </button>
//                                 <button className="btn btn-secondary" type="button">
//                                     <small>Search Purchase Return</small>
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PurchaseReturnModal;