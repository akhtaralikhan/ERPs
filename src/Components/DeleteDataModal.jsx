import React from 'react'

function DeleteDataModal({ userId, endPoint, modalId }) {

    const handleDeleteBankAccount = (e) => {
        const modalEl = document.querySelector(`#${modalId}`);
        if (modalEl) {
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();
        }
    }

    return (
        <div
            className="modal fade"
            id="verticallyCentered"
            tabIndex={-1}
            aria-labelledby="verticallyCenteredModalLabel"
            aria-hidden="true"
            // style="display: none;"
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
                            <i className='fa fa-xmark fs--1'></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="text-700 lh-lg mb-0">
                            Are you sure you want to continue ?
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleDeleteBankAccount}
                        >
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

export default DeleteDataModal