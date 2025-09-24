import React from "react";

const RefreshTokenViewModal = ({ data }) => {
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
      id="refreshTokenViewModal"
      tabIndex={-1}
      aria-labelledby="refreshTokenViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="refreshTokenViewModalLabel">
              Refresh Token Details
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
                  <label className="form-label">User Email</label>
                  <input type="text" className="form-control" readOnly value={d.UserEmail ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Token</label>
                  <input type="text" className="form-control" readOnly value={d.Token ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">JWT ID</label>
                  <input type="text" className="form-control" readOnly value={d.JwtId ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Is Used</label>
                  <input type="text" className="form-control" readOnly value={d.IsUsed ? "Yes" : "No"} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Is Revoked</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.IsRevorked ? "Revoked" : "Active"}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Added Date</label>
                  <input type="text" className="form-control" readOnly value={fmtDate(d.AddedDate)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Expiry Date</label>
                  <input type="text" className="form-control" readOnly value={fmtDate(d.ExpiryDate)} />
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

export default RefreshTokenViewModal;