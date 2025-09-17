import React, { useState } from 'react'
import {manageSupplier} from '../../assets/data';
import AddPaymentModal from '../../Components/AddPaymentModal';

export default function ManageSupplier() {

  const [showModal,setShowModal] = useState(false);
  const [searchTerm,setSearchTerm] = useState("")
  const filteredData = manageSupplier.filter((salesData)=>
     salesData?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    <div className='content'>
        
      <div className="card  ">
        <div className="upper-card d-flex  border-bottom p-4 col-12">
          <div className="col-6"><h4 className='fw-bold col-6 pt-2'>Supplier List</h4></div>
          <div className="col-6 text-end "><button className='btn btn-primary ' onClick={()=>setShowModal(true)}>+ Add Payment</button>
          {showModal && <AddPaymentModal showModal={showModal} setShowModal={setShowModal}/>}
          </div>
        </div>
        
      <div className="search-bars  d-flex   p-4 pb-0 mb-2 ">
        <div className="search-box mb-3 position-lg-relative ">
        <form className="position-relative">
            <input className="form-control search-input search form-control-sm  pt-2 pb-2" onChange={(e)=>setSearchTerm(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
           <span className="fas fa-search search-box-icon"></span>
        </form>
       </div>
      </div>


    <div className="div table-responsive p-4 pt-0" id='invoice-table'>
      <table className='table table-hover  table-sm fs-9 mb-0' style={{fontSize:"13px"}}>
        <thead>
          <tr className='bg-light fs-9 cursor-pointer'>
            <th>Id</th>
             <th>Name</th>
             <th>ContactPerson</th>
             <th>Email</th>
             <th>Phone</th>
             <th>Address</th>
             <th>CreatedDate</th>
             <th>Action</th>
          </tr>
        </thead>
        <tbody className='list'>
          {filteredData.map((salesData,index)=>(
           <tr key={index}>
             <td className="id">{salesData.id}</td>
             <td className='name'>{salesData.name}</td>
             <td className="branch">{salesData.contactPerson}</td>
             <td className="subTotal">{salesData.email}</td>
             <td className="discount">{salesData.phone}</td>
             <td className="vat">{salesData.address}</td>
             <td className="vat">{salesData.createdDate}</td>
             <td className="vat ps-3">...</td>
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
