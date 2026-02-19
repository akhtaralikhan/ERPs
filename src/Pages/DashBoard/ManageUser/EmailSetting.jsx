import React, { useState } from "react";
import { smtpSettings, smtpSettingsGrid } from "../../../assets/data";
import SmtpSettingsEditModal from "../../../Components/SmtpSettingsEditModal";
import SmtpSettingsViewModal from "../../../Components/SmtpSettingsViewModal";
import SendGridSettingsEditModal from "../../../Components/SendGridSettingsEditModal";
import SendGridSettingsViewModal from "../../../Components/SendGridSettingsViewModal";

const EmailSetting = () => {
  const [mode, setMode] = useState("edit");
  const [editData, setEditData] = useState({});
  const [editDataGrid, setEditDataGrid] = useState({});

  const mapArrayToObject = (arr, type) => {
    const obj = {};
    arr.forEach((item) => {
      if (type === "smtp") {
        if (item.label === "User Name") obj.username = item.value;
        if (item.label === "Host(SMTP)") obj.host = item.value;
        if (item.label === "Port(SMTP)") obj.port = item.value;
        if (item.label === "From Email") obj.fromEmail = item.value;
        if (item.label === "From Full Name") obj.fromFullName = item.value;
      } else if (type === "sendgrid") {
        if (item.label === "SendGrid User") obj.username = item.value;
        if (item.label === "SendGrid Key") obj.host = item.value;
        if (item.label === "From Email") obj.fromEmail = item.value;
        if (item.label === "From Full Name") obj.fromFullName = item.value;
      }
    });
    return obj;
  };

  return (
    <div className="content AssetsPageChangecss AssetPaddingChange">
      <div className="marginforsmalldevice RemoveBorder card rounded-0">
        {/* Page Header */}
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-md-3 px-md-4 mb-md-0  gap-3">
          <div className="p-3 row MainRemovePaddingwidth" style={{ minWidth: "170px" }}>
            <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
              Email Setting
            </h2>
          </div>
        </div>

        {/* SMTP Settings Card */}
        <div className="NewColorChange p-4 px-5">
          <div className="card rounded-lg p-4 shadow-sm mb-4">
            {/* Header */}
            <div className="d-flex align-items-center mb-3 gap-3 IConColorchange">
              <h5 className="mb-0 fw-bold">SMTP Settings</h5>
              <button
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: "none" }}
                data-bs-toggle="modal"
                data-bs-target="#emailSMPTSettingModal"
                onClick={() => {
                  setMode("edit");
                  setEditData(mapArrayToObject(smtpSettings, "smtp"));
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
            <hr className="my-3" />

            {/* Display SMTP Settings */}
            <div className="list-unstyled">
              {smtpSettings.map((setting, index) => (
                <div key={index} className="row py-2 border-bottom-0 DecreseMargin">
                  <div className="col-md-4">
                    <p>{setting.label} <span className="ms-1">:</span></p>
                  </div>
                  <div className="col-md-8">
                    <p>{setting.value}</p>
                  </div>
                </div>
              ))}

              {/* Details Button */}
              <div className="mt-3">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#smtpDetailsModal"
                  onClick={() =>
                    setEditData(mapArrayToObject(smtpSettings, "smtp"))
                  }
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-lg p-4 shadow-sm mb-4">
            {/* Header */}
            <div className="d-flex align-items-center mb-3 gap-3 IConColorchange">
              <h5 className="mb-0 fw-bold">SendGrid Settings</h5>
              <button
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: "none" }}
                data-bs-toggle="modal"
                data-bs-target="#sendgridEditModal"
                onClick={() => {
                  setMode("edit");
                  setEditDataGrid(
                    mapArrayToObject(smtpSettingsGrid, "sendgrid")
                  );
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
            <hr className="my-3" />

            {/* Display SMTP Settings */}
            <div className="list-unstyled">
              {smtpSettingsGrid.map((setting, index) => (
                <div key={index} className="row py-2 border-bottom-0 DecreseMargin">
                  <div className="col-md-4">
                    <p>{setting.label} <span className="ms-1">:</span></p>
                  </div>
                  <div className="col-md-8">
                    <p>{setting.value}</p>
                  </div>
                </div>
              ))}

              {/* Details Button */}
              <div className="mt-3">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#sendgridViewModal"
                  onClick={() =>
                    setEditDataGrid(
                      mapArrayToObject(smtpSettingsGrid, "sendgrid")
                    )
                  }
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SmtpSettingsEditModal
        mode={mode}
        initialData={editData}
        onSave={(data) => console.log("Updated SMTP Settings:", data)}
        modalId="emailSMPTSettingModal"
      />
      <SmtpSettingsViewModal data={editData} modalId="smtpDetailsModal" />

      <SendGridSettingsEditModal
        mode={mode}
        initialData={editDataGrid}
        onSave={(data) => console.log("Updated SendGrid Settings:", data)}
        modalId="sendgridEditModal"
      />

      <SendGridSettingsViewModal
        data={editDataGrid}
        modalId="sendgridViewModal"
      />
    </div>
  );
};

export default EmailSetting;
