import React, { useEffect, useRef } from "react";

function AddExpenseTypeModal({ showModal, setShowModal }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  useEffect(() => {
    bsModalRef.current = new window.bootstrap.Modal(modalRef.current);
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      setShowModal(false);
    });
  }, [setShowModal]);

  useEffect(() => {
    showModal ? bsModalRef.current.show() : bsModalRef.current.hide();
  }, [showModal]);

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Designation</h5>
            <button type="button" className="btn p-1" data-bs-dismiss="modal">
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Reference" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" placeholder="Reference" />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" data-bs-dismiss="modal">Save</button>
            <button className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddExpenseTypeModal;