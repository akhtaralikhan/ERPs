import React from 'react'

function ConnectBank() {
  return (
     <div className="mb-3">
        <div className="card">
          <div className="row align-items-center p-3">
            <div className="col-lg-8">
              <p className="mb-0">
                Connect your Stripe account to receive online payments from your
                customers.
              </p>
              <p className="mb-0">
                Connect your PayPal account to receive online payments from your
                customers.
              </p>
            </div>
            <div className="col-lg-4">
              <a href="/">
                <button className="btn btn-primary me-1 mb-1 w-100 text-uppercase">
                  Connect your bank account
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ConnectBank
