import React, { useState } from 'react'
import {ManageinvoiceData} from '../../assets/data';
import AddPaymentModal from '../../Components/AddPaymentModal';

export default function QuoteInvoice() {
  const [showModal,setShowModal] = useState(false);
  return (
    <div className='content'>
        {/* <div className="mb-5">
        <h2 className='fw-bolder'>Draft Invoice</h2>
      </div> */}

      <div className="card  ">
        <div className="upper-card d-flex  border-bottom p-4 col-12">
          <div className="col-6"><h4 className='fw-bold col-6 pt-2'>Draft Invoices</h4></div>
          <div className="col-6 text-end "><button className='btn btn-primary ' onClick={()=>setShowModal(true)}>+ Add Payment</button>
          {showModal && <AddPaymentModal showModal={showModal} setShowModal={setShowModal}/>}
          </div>
        </div>
        
      <div className="search-bars  d-flex   p-4 pb-0 mb-2 ">
        <div className="search-box mb-3 position-lg-relative ">
        <form className="position-relative">
            <input className="form-control search-input search form-control-sm  pt-2 pb-2" type="search" placeholder="Search" aria-label="Search" />
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
            <th className='border-top' >Created Date</th>
            <th className='border-top' >Status</th>
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
    </div>
  )
}
