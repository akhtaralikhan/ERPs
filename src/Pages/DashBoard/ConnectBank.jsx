import React from "react";

const ConnectBank = () => {
  return (
    <>
      <div className="content">
        <div className="pb-5">
          <div className="row g-4">
            <div class="col-12 col-xxl-12">
              <div class="mb-3">
                <div class="card">
                  <div class="row align-items-center p-3">
                    <div class="col-lg-8">
                      <p class="m-0">
                        Connect your Stripe account to receive online payments
                        from your customers.
                      </p>
                      <p class="m-0">
                        Connect your PayPal account to receive online payments
                        from your customers.
                      </p>
                    </div>
                    <div class="col-lg-4">
                      <a href="connect-bank.html">
                        <button
                          class="btn btn-primary me-1 mb-1 text-uppercase w-100"
                          type="button"
                        >
                          Connect your bank account
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <h4>Connect a bank account</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="text-center">
                      <p>
                        Connect your Stripe account to receive online payments
                        from your customers.
                      </p>
                      <p>
                        Make sure that after validating all the steps with
                        Stripe you are redirected back to the application to
                        complete the setup
                      </p>
                      <button
                        class="btn btn-primary me-1 mb-1 text-uppercase "
                        type="button"
                      >
                        Connect with stripe
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-center">
                      <p>
                        Connect your PayPal account to receive online payments
                        from your customers.
                      </p>
                      <p>
                        Make sure that after validating all the steps with
                        PayPal you are redirected back to the application to
                        complete the setup in order to receives customer's
                        payments without issues
                      </p>
                      <button
                        class="btn btn-primary me-1 mb-1 text-uppercase "
                        type="button"
                      >
                        Connect with Paypal
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-center">
                      <p>Add manually and manage yours bank accounts</p>
                      <button
                        class="btn btn-primary me-1 mb-1 text-uppercase "
                        type="button"
                      >
                        add manually
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- delete modal --> */}

              <div
                class="modal fade"
                id="verticallyCentered"
                tabIndex={-1}
                aria-labelledby="verticallyCenteredModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="verticallyCenteredModalLabel">
                        Deleting...
                      </h5>
                      <button
                        class="btn p-1"
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          class="svg-inline--fa fa-xmark fs--1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="xmark"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                          ></path>
                        </svg>
                        {/* <!-- <span class="fas fa-times fs--1"></span> Font Awesome fontawesome.com --> */}
                      </button>
                    </div>
                    <div class="modal-body">
                      <p class="text-700 lh-lg mb-0">
                        Are you sure you want to continue ?
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" type="button">
                        Delete
                      </button>
                      <button
                        class="btn btn-outline-primary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- delete modal -->
            <!-- Edit modal --> */}

              <div
                class="modal fade"
                id="edit-modal"
                tabIndex={-1}
                aria-labelledby="edit-modalModalLabel"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="edit-modalModalLabel">
                        Edit Bank accounts
                      </h5>
                      <button
                        class="btn p-1"
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          class="svg-inline--fa fa-xmark fs--1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="xmark"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Bank name * :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Bank name"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Bank holder name :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Bank holder name"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Bank account number :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Bank account number"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Balance * :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Balance"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Pending balance * :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Pending balance"
                        />
                      </div>
                      <div class="mb-3 ">
                        <label class="form-label" htmlFor="inputtext">
                          Currency * :
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option defaultValue="">Dollar</option>
                          <option value="1">NGN</option>
                          <option value="2">AMD</option>
                          <option value="3">AED</option>
                          <option value="3">BHD</option>
                          <option value="3">INR</option>
                        </select>

                        <button
                          class="btn btn-soft-primary small"
                          type="button"
                        >
                          Add New Currency
                        </button>
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Phone :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Phone"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Address line 1 :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Address line 1"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Address line 2 :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Address line 2"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Zip code :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Zip code"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          City :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="City"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" htmlFor="inputtext">
                          Country :
                        </label>
                        <input
                          class="form-control"
                          id="inputtext"
                          type="text"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" type="button">
                        Save
                      </button>
                      <button
                        class="btn btn-outline-danger"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Edit modal --> */}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectBank;
