import React,{useEffect, useState} from 'react';
import { ManageinvoiceData } from '../../assets/data';
// import './ManageSales.css';
import List from "list.js";
import AddPaymentModal from '../../Components/AddPaymentModal';

const ManualInvoices = () => {
  
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
      <div className="mb-5">
        <h2 className='fw-bolder'>Manual Invoice</h2>
      </div>

      <div className="card  ">
        <div className="upper-card d-flex  border-bottom p-4 col-12">
          <div className="col-6"><h4 className='fw-bold col-6 pt-2'>Invoices</h4></div>
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
            <th className='border-top sort' data-sort="id">Id</th>
            <th className='border-top sort' data-sort="name">Customer</th>
            <th className='border-top' data-sort="branch">Branch</th>
            <th className='border-top' data-sort="subTotal">Sub Total</th>
            <th className='border-top' data-sort="discount">Discount</th>
            <th className='border-top' data-sort="vat">VAT</th>
            <th className='border-top' data-sort="grandTotal">Grand Total</th>
            <th className='border-top' data-sort="paidAmount">Paid Amount</th>
            <th className='border-top' data-sort="dueAmount">Due Amount</th>
            <th className='border-top' data-sort="createdDate">Created Date</th>
            <th className='border-top' data-sort="status">Status</th>
            <th className='border-top' >Actions</th>
          </tr>
        </thead>
        <tbody className='list'>
          {ManageinvoiceData.map((invoiceData,index)=>(
           <tr key={index}>
             <td className="id">{invoiceData.id}</td>
             <td className='name'>{invoiceData.customer}</td>
             <td className="branch">{invoiceData.branch}</td>
             <td className="subTotal">{invoiceData.subTotal}</td>
             <td className="discount">{invoiceData.discount}</td>
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
      <hr className='mt-5 mb-5'/>

    <div className=" col-12 d-flex  justify-content-between gap-4">
        <div className="table-responsive col-6">
          <h4 className='mb-2'>Cash flow before refunds</h4>
      <table className="table  table-hover fs-9" border="1" style={{fontSize:'12px'}}>
        <tbody>
          <tr>
              <th style={{width:"40%",background:"#67C090"}} className='border-end flash-effect text-white flash-effect' >Due Amount</th>
              <td><label id="ReportDueAmount">5557.84</label></td>
          </tr>
          <tr>
              <th className='border-end  text-white flash-effect flash-effect' style={{background:"#67C090"}}>Paid Amount</th>
              <td><label id="ReportPaidAmount">0.00</label></td>
          </tr>
          <tr>
              <th className='border-end  text-white flash-effect' style={{background:"#67C090"}}>Changed Amount</th>
              <td><label id="ReportChangedAmount">0.00</label></td>
          </tr>
          <tr>
              <th className='border-end  text-white flash-effect' style={{background:"#67C090"}}>Grand Total</th>
              <td><label id="ReportGrandTotalCashflow">5557.84</label></td>
          </tr>
          </tbody>
      </table>
      </div>
      <div className="table-responsive col-6">
        <h4 className='mb-2'>Total takings this Period</h4>
      <table className="table  table-hover " border="1" style={{fontSize:"12px"}}>
        <tbody>
          <tr>
              <th style={{width:"40%"}} className='border-end bg-info text-white flash-effect'>Sub Total</th>
              <td><label id="ReportDueAmount">5557.84</label></td>
          </tr>
          <tr>
              <th className='border-end bg-info text-white flash-effect'>Discount Amount</th>
              <td><label id="ReportPaidAmount">0.00</label></td>
          </tr>
          <tr>
              <th className='border-end bg-info text-white flash-effect'>Vat Amount</th>
              <td><label id="ReportChangedAmount">0.00</label></td>
          </tr>
          <tr>
              <th className='border-end bg-info text-white flash-effect'>Grand Total</th>
              <td><label id="ReportGrandTotalCashflow">5557.84</label></td>
          </tr>
          </tbody>
      </table>
      </div>
      </div>
   </div>
    
  )
}

export default ManualInvoices;
 