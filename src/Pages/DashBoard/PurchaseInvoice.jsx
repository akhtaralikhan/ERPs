import React,{useEffect, useState} from 'react';
import { purchaseInvoiceData } from '../../assets/data';
import List from "list.js";
import AddPaymentModal from '../../Components/AddPaymentModal';

const PurchaseInvoice = () => {
  
  const [showModal,setShowModal] = useState(false);
    useEffect(() => {
  const options = {
    valueNames: [
      "name", "id", "branch", "subTotal", "discount", 
      "vat", "grandTotal", "paidAmount", "dueAmount", 
      "createdDate", "status"
    ],
    page: 3,
    pagination: [{
      paginationClass: "pagination"  // matches <ul class="pagination">
    }]  
  };
    new List("invoice-table", options);
  }, []);

  return (
    <div className='content'>
      {/* <div className="mb-5">
        <h2 className='fw-bolder'>Purchase Invoice List</h2>
      </div> */}

      <div className="card  ">
        <div className="upper-card d-flex  border-bottom p-4 col-12">
          <div className="col-6"><h4 className='fw-bold col-6 pt-2'>Purchase Invoice List</h4></div>
          <div className="col-6 text-end "><button className='btn btn-primary ' onClick={()=>setShowModal(true)}>+ Add Payment</button>
          {showModal && <AddPaymentModal showModal={showModal} setShowModal={setShowModal}/>}
          </div>
        </div>
        
      <div className="search-bars  d-flex justify-content-between  p-4 pb-0 mb-2 ">
        <div className="start-end-data col-4 d-flex gap-3 ">
            <div className="start col-6">
                <label htmlFor="startDate" className='form-label ' style={{fontSize:"12px"}} >Start Date :</label>
                <input type="date" className='form-control' id='startDate' placeholder="dd/mm/yyyy"/>
            </div>
            <div className="end col-6">
                <label htmlFor="endDate" className='form-label' style={{fontSize:"12px"}}>End Date : </label>
                <input type="date" className='form-control' id='endDate' placeholder="dd/mm/yyyy"/>
            </div>
        </div>
        <div className="search-box mb-3 position-lg-relative ">
        <form className="position-relative">
            <input className="form-control search-input search form-control-sm mt-4 pt-2 pb-2" type="search" placeholder="Search" aria-label="Search" />
           <span className="fas fa-search search-box-icon"></span>
        </form>
       </div>
      </div>


    <div className="div table-responsive p-4 pt-0" id='invoice-table'>
      <table className='table table-hover  table-sm fs-9 mb-0' style={{fontSize:"13px"}}>
        <thead>
          <tr className='bg-light fs-9 cursor-pointer'>     
           <th>ID</th>
           <th>Supplier</th>
           <th>Sub Total</th>
           <th>Discount</th>
           <th>VAT</th>
           <th>Grand Total</th>
           <th>Paid Amount</th>
           <th>Due Amount</th>
           <th>Created Date</th>
           <th>Status</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody className='list'>
          {purchaseInvoiceData.map((invoiceData,index)=>(
           <tr key={index}>
             <td className="id">{invoiceData.id}</td>
             <td className='name'>{invoiceData.supplier}</td>
             <td className="branch">{invoiceData.subTotal}</td>
             <td className="subTotal">{invoiceData.discount}</td>
             <td className="vat">{invoiceData.vat}</td>
             <td className="grandTotal">{invoiceData.grandTotal}</td>
             <td className="paidAmount">{invoiceData.paidAmount}</td>
             <td className="dueAmount">{invoiceData.dueAmount}</td>
             <td className="createdDate">{invoiceData.createdDate}</td>
             <td><span className='badge badge-phoenix badge-phoenix-primary'>{invoiceData.status}</span></td>
             <td className='cursor-pointer ps-4'>...</td>
           </tr>
          ))}
        </tbody>
      </table>
         <div class="d-flex flex-between-center pt-3">
          <div class="pagination listjs-pagination d-none"></div>
          <p class="mb-0 fs-9">
            <span class="d-none d-sm-inline-block" data-list-info="data-list-info"></span>
            <span class="d-none d-sm-inline-block"> &mdash; </span>
            <a class="fw-semibold " style={{fontSize:"14px"}} href="#!" data-list-view="*">
              View all
              <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
            </a><a class="fw-semibold d-none" href="#!" data-list-view="less">
              View Less
              <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
            </a>
          </p>
          <div class="d-flex">
            <button class="btn btn-sm btn-primary" type="button" data-list-pagination="prev"><span>Previous</span></button>
            <button class="btn btn-sm btn-primary px-4 ms-2" type="button" data-list-pagination="next"><span>Next</span></button>
          </div>
          </div>
      </div>
  </div>
      
   </div>
    
  )
}

export default PurchaseInvoice
