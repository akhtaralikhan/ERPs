import React from 'react'

function EstimatesModal() {
    return (
        <div
            className="modal fade"
            id="edit-modal"
            tabIndex={-1}
            aria-labelledby="edit-modalModalLabel"
            aria-hidden="true"
            //   style="display: none;"
            style={{ display: "none" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="edit-modalModalLabel">
                            New Estimates
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
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputtext">
                                Customer * :
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option defaultValue="">Customer </option>
                                <option value="1">Customer 2</option>
                                <option value="2">Customer </option>
                            </select>

                            <button
                                className="btn btn-soft-primary small"
                                type="button"
                            >
                                <i className="fa fa-solid fa-plus me-2"></i> New
                                Category
                            </button>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="datepicker">
                                Date * :
                            </label>
                            <input
                                className="form-control"
                                id="inputtext"
                                type="date"
                                placeholder="date"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="datepicker">
                                Expire at :
                            </label>
                            <input
                                className="form-control"
                                id="inputtext"
                                type="date"
                                placeholder="date"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputtext">
                                Currency * :
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option defaultValue="">Customer </option>
                                <option value="1">Customer 2</option>
                                <option value="2">Customer </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputtext">
                                Reference :
                            </label>
                            <input
                                className="form-control"
                                id="inputtext"
                                type="text"
                                placeholder="Purchase price ($)"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputtext">
                                Status :
                            </label>
                            <span className="badge badge-phoenix fs--2 badge-phoenix-secondary">
                                <span className="badge-label">Draft</span>
                            </span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputtext">
                                Number * :
                            </label>
                            <input
                                className="form-control"
                                id="inputtext"
                                type="text"
                                placeholder="Order Number"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" type="button">
                            Save
                        </button>
                        <button
                            className="btn btn-outline-danger"
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

export default EstimatesModal