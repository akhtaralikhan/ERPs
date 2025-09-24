import React from "react";

const UserInfoFromBrowserModal = ({ data }) => {
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
      id="userInfoFromBrowserModal"
      tabIndex={-1}
      aria-labelledby="userInfoFromBrowserModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="userInfoFromBrowserModalLabel">
              User Info From Browser Details
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
                  <label className="form-label">Browser Unique ID</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.BrowserUniqueID ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Browser Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.BrowserName ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Browser Version</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.BrowserVersion ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Browser Major</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.BrowserMajor ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">CPU Architecture</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.CPUArchitecture ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Device Model</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.DeviceModel ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Device Type</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.DeviceType ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Device Vendor</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.DeviceVendor ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Engine Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.EngineName ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Engine Version</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.EngineVersion ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">OS Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.OSName ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">OS Version</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.OSVersion ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">UA</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.UA ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Latitude</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Lat ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Longitude</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.Long ?? ""}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Time Zone</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={d.TimeZone ?? ""}
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

export default UserInfoFromBrowserModal;
