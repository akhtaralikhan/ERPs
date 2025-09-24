import React from "react";

const SmtpSettingsViewModal = ({ data }) => {
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
    } catch {
      return val;
    }
  };

  return (
    <div
      className="modal fade"
      id="smtpDetailsModal"
      tabIndex={-1}
      aria-labelledby="smtpDetailsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="smtpDetailsModalLabel">
              SMTP Settings Details
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
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.id ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.username ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    readOnly
                    value={d.password ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Host (SMTP)</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.host ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Port (SMTP)</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.port ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">SSL Enabled</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.sslEnabled ? "True" : "False"}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">From Email</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.fromEmail ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">From Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.fromFullName ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Is Default</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.isDefault ? "True" : "False"}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Created Date</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={fmtDate(d.createdDate)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Modified Date</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={fmtDate(d.modifiedDate)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Created By</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.createdBy ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Modified By</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.modifiedBy ?? ""}
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

export default SmtpSettingsViewModal;
