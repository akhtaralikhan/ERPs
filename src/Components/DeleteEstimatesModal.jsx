import React from 'react'

function DeleteEstimatesModal() {
    return (
        <div
            className="modal fade"
            id="verticallyCentered"
            tabIndex={-1}
            aria-labelledby="verticallyCenteredModalLabel"
            aria-hidden="true"
            //   style="display: none;"
            style={{ display: "none" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="verticallyCenteredModalLabel"
                        >
                            Deleting...
                        </h5>
                        <button
                            className="btn p-1"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <svg
                                className="svg-inline--fa fa-xmark fs--1"
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
                            {/* <!-- <span className="fas fa-times fs--1"></span> Font Awesome fontawesome.com --> */}
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="text-700 lh-lg mb-0">
                            Are you sure you want to continue ?
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" type="button">
                            Delete
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteEstimatesModal