import React, { useState } from "react";
import { IdentitySettingData } from "../../../assets/data";
import IdentitySettingsEditModal from "../../../Components/IdentitySettingsEditModal";

const IdentitySetting = () => {
  const [mode, setMode] = useState("edit");
  const [editData, setEditData] = useState({});

  const mapArrayToObject = (arr) => {
    const obj = {};
    arr.forEach((item) => {
      let value = item.value;

      // Convert "true"/"false" strings to boolean
      if (value === "true") value = true;
      if (value === "false") value = false;

      // Convert numeric strings to number
      if (!isNaN(value) && value !== "" && typeof value === "string") {
        value = Number(value);
      }

      obj[item.label.replace(/\s+/g, "")] = value;
    });
    return obj;
  };

  return (
    <div className="content AssetsPageChangecss AssetPaddingChange">
      <div className="marginforsmalldevice RemoveBorder card rounded-0 border-0">
        {/* Page Header */}
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-md-3 px-md-4 mb-md-0  gap-3">
          <div
            className="p-3 row MainRemovePaddingwidth"
            style={{ minWidth: "170px" }}
          >
            <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
              Identity Setting
            </h2>
          </div>
        </div>

        {/* SMTP Settings Card */}
        <div className="NewColorChange p-4 px-5">
          <div className="card rounded-lg p-4 shadow-sm mb-4">
            {/* Header */}
            <div className="d-flex align-items-center mb-3 gap-3 IConColorchange">
              <h5 className="mb-0 fw-bold">Default Identity Options</h5>
              <button
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: "none" }}
                data-bs-toggle="modal"
                data-bs-target="#identitySettingModal"
                onClick={() =>
                  setEditData(mapArrayToObject(IdentitySettingData))
                }
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
            <hr className="my-3" />

            {/* Display SMTP Settings */}
            <div className="list-unstyled">
              {IdentitySettingData.map((setting, index) => (
                <div
                  key={index}
                  className="row py-2 border-bottom-0 DecreseMargin"
                >
                  <div className="col-md-5">
                    <p>
                      {setting.label} <span className="ms-1">:</span>
                    </p>
                  </div>
                  <div className="col-md-7">
                    <p>
                      {typeof setting.value === "boolean"
                        ? setting.value
                          ? "True"
                          : "False"
                        : setting.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        <IdentitySettingsEditModal
          mode={mode}
          initialData={editData}
          onSave={(data) => console.log("Updated Identity Settings:", data)}
          modalId="identitySettingModal"
        />
      </div>
    </div>
  );
};

export default IdentitySetting;
