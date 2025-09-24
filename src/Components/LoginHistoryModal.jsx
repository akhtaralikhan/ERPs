import React from "react";

const LoginHistoryModal = ({ data }) => {
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
      id="loginHistoryModal"
      tabIndex={-1}
      aria-labelledby="loginHistoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="loginHistoryModalLabel">
              Login History Details
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

          {/* Body - read only form-like layout to match SystemRoleModal look */}
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
                    value={d.UserName ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Login Time</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={fmtDate(d.LoginTime)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Logout Time</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={fmtDate(d.LogoutTime)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Duration (Min)</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.DurationMin ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Public IP</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.PublicIP ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Latitude</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Latitude ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Longitude</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Longitude ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Browser</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Browser ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">OS</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.OS ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Device</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Device ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Action</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Action ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Action Status</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.ActionStatus ?? ""}
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
                  <input type="text" className="form-control" readOnly value={fmtDate(d.ModifiedDate)} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Created By</label>
                  <input type="text" className="form-control" readOnly value={d.CreatedBy ?? ""} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Modified By</label>
                  <input type="text" className="form-control" readOnly value={d.ModifiedBy ?? ""} />
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

export default LoginHistoryModal;
