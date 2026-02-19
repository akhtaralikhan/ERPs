import React from "react";

export default function DeleteModal({ modalId, resource, onConfirm }) {
  const handleDelete = () => {
    if (onConfirm) onConfirm();

     // Remove focus from button
  document.activeElement.blur();

    // Hide Bootstrap modal
    const modalEl = document.getElementById(modalId);
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance?.hide();
  };

  return (
    <div className="modal fade" id={modalId} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button className="btn p-1" type="button" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark text-danger"></i>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this.</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleDelete}
            >
              <small>Delete</small>
            </button>
            <button
              className="btn btn-outline-primary"
              type="button"
              data-bs-dismiss="modal"
            >
              <small>Cancel</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}