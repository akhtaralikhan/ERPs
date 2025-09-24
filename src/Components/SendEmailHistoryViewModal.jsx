import React from "react";

const SendEmailHistoryViewModal = ({ data }) => {
  const d = data || {};

  const fmtDate = (val) => {
    if (!val) return "";
    try {
      const dt = new Date(val);
      if (isNaN(dt)) return val;
      return dt.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    } catch (e) {
      return val;
    }
  };

  return (
    <div
      className="modal fade"
      id="SendEmailHistoryViewModal"
      tabIndex={-1}
      aria-labelledby="SendEmailHistoryViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="SendEmailHistoryViewModalLabel">
              Send Email History Details
            </h5>
            <button
              type="button"
              className="btn p-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-xmark fs--1 text-danger"></i>
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">ID</label>
                  <input type="text" className="form-control" readOnly value={d.id ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Invoice ID</label>
                  <input type="text" className="form-control" readOnly value={d.InvoiceId ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Sender Email</label>
                  <input type="text" className="form-control" readOnly value={d.SenderEmail ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Receiver Email</label>
                  <input type="text" className="form-control" readOnly value={d.ReceiverEmail ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Result</label>
                  <input type="text" className="form-control" readOnly value={d.Result ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Created Date</label>
                  <input type="text" className="form-control" readOnly value={fmtDate(d.createdDate)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Created By</label>
                  <input type="text" className="form-control" readOnly value={d.CreatedBy ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Cancelled</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Cancelled ? "True" : "False"}
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              <small>Close</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmailHistoryViewModal;
