import React, { useState } from "react";

const UserResetPasswordModal = ({ user, onReset }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Both fields are required!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Pass data back to parent
    onReset({ ...user, newPassword });

    // Close modal
    const modalEl = document.getElementById("userResetPasswordModal");
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    }
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      className="modal fade"
      id="userResetPasswordModal"
      tabIndex="-1"
      aria-labelledby="userResetPasswordModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="userResetPasswordModalLabel">
              Reset Password
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
          <form onSubmit={handleReset}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                <small>
                Reset Password
                </small>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                <small>
                Close
                </small>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserResetPasswordModal;
