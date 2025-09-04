import React from 'react'

const ManageSales = () => {
  return (
    <div className='content'>
      <div className="mb-5">
        <h2 className="fw-bolder">Invoices</h2>
      </div>
      <ul className='nav nav-links mb-3 mb-lg-2 mx-n3 '>
        <li className='nav-item'>
          <a href="" className='nav-link active'>
            <span>All</span>
            <span className='text-body-tertiary fw-semibold'>(6817)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link '>
            <span>Pending payment </span>
            <span className='text-body-tertiary fw-semibold'>(6)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link '>
            <span>Unfulfilled </span>
            <span className='text-body-tertiary fw-semibold'>(17)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link '>
            <span>Completed </span>
            <span className='text-body-tertiary fw-semibold'>(6810)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href="" className='nav-link '>
            <span>Refunded</span>
            <span className='text-body-tertiary fw-semibold'>(8)</span>
          </a>
        </li>
      </ul>
      <div className="order-table">
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-auto">
              <div className="search-box">
                <div className="position-relative">
                  <form className="position-relative">
                      <input className="form-control search-input search form-control-sm   " type="search" placeholder="Search Orders" aria-label="Search" />
                     <span className="fas fa-search search-box-icon"></span>
                  </form>    
                </div>
              </div>
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1 ">
                <div className="btn-group position-static text-nowrap">
                  <div className="btn-group position-static dropdown">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" data-bs-toggle='dropdown'>
                    Payment status
                    <span className='fas fa-angle-down ms-2'></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" >
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                      </ul>
                </div>
                  <div className="btn-group position-static dropdown">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" data-bs-toggle='dropdown'>
                    Fulfilment status
                    <span className='fas fa-angle-down ms-2'></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" >
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                      </ul>
                </div>
                <button className="px-7 flex-shrink-0 btn btn-phoenix-secondary">More filters</button>
               </div>
                <div className="col-auto">
                  <button className="btn btn-link text-body me-4 px-0">
                    <span className='fas fa-file-export fs-9 me-2'></span>
                    Export
                  </button>
                  <button className="btn btn-primary">
                    <span className='fas fa-plus me-2'></span>
                    Add order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageSales
