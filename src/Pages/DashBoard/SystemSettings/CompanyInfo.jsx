import React from 'react'

function CompanyInfo() {
  return (
    <>
      <div className="content bg-body-tertiary AssetPaddingChange pb-0">
        <div className="card mb-3 rounded-0 bg-body-tertiary border-bottom-0 border-start-0">
          <div className="row g-0">
            <div className="col-md-4 p-5 pb-2">
              <img src="/src/assets/img/bg/company_logo.png" className="img-fluid rounded-circle w-100 h-100 " alt="..." />
            </div>
            <div className="col-md-8 pt-5">
              <div className="card-body AssetsPageChangecss ">
                <h2 className="card-title mb-4">XYZ Company Limited</h2>
                <p className="card-text mb-1"><span className='fw-semibold me-2  text-secondary'>Address:</span>	Washington DC, USA</p>
                <p className="card-text mb-1"><span className='fw-semibold me-2  text-secondary'>Contact No:</span>132546789</p>
                <p className="card-text mb-1"><span className='fw-semibold me-2  text-secondary'>Email:</span>admin@gmail.com</p>
                <p className="card-text mb-1"><span className='fw-semibold me-2  text-secondary'>Website:</span>www.wyx.com</p>
                <p className="card-text mb-1"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='container p-4 pt-0 pb-0 mb-0 '>
          <p className='text-body-secondary mb-0 '>
            <span className='text-secondary fs-1 mb-4 clearfix fw-bold'>About Company :</span>
            XYZ Company is a dynamic and growing organization dedicated to delivering innovative solutions across multiple industries. With a strong focus on quality, customer satisfaction, and continuous improvement, XYZ Company strives to create value for its clients through reliable products, professional services, and cutting-edge technology.</p>
        </div>
      </div>
    </>
  )
}

export default CompanyInfo