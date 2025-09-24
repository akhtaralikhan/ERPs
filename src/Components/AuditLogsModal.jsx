import React from "react";

const AuditLogsModal = ({ data }) => {
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
      id="auditLogsModal"
      tabIndex={-1}
      aria-labelledby="auditLogsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="auditLogsModalLabel">
              Audit Log Details
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
                  <label className="form-label">User Id</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.UserId ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Type ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Table Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.TableName ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Date Time</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={fmtDate(d.DateTime)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Primary Key</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.PrimaryKey ?? ""}
                  />
                </div>

                {/* New Fields */}
                <div className="col-md-12">
                  <label className="form-label">Old Values</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    readOnly
                    value={d.OldValues ?? ""}
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-label">New Values</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    readOnly
                    value={d.NewValues ?? ""}
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Affected Columns</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    readOnly
                    value={d.AffectedColumns ?? ""}
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

export default AuditLogsModal;
