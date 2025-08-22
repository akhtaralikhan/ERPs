import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import { getCurrencyDefault } from "../../redux/dashboard/actions";
import { createSelector } from "reselect";
import BankAccountModal from "../../Components/BankAccountModal";
import { editData, getBankAccountAction, getCurrency } from "../../redux/bankAccounts/actions";
import DeleteDataModal from "../../Components/DeleteDataModal";

const BankAccounts = () => {

  const { dispatch, useAppSelector } = useRedux();

  const userData = createSelector(
    (state) => state.dashboard,
    (state) => ({
      cardReports: state.cardReports,
    })
  );

  const { cardReports } = useAppSelector(userData);

  const bankAccountData = createSelector(
    (state) => state.bankAccounts,
    (state) => ({
      bankAccount: state.bankAccount,
      selectedBankAccount: state.editData,
    })
  );

  const { bankAccount, selectedBankAccount } = useAppSelector(bankAccountData);

  useEffect(() => {
    dispatch(getCurrencyDefault())
    dispatch(getBankAccountAction());
    dispatch(getCurrency());
  }, []);

  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const endPoint = "bankAccount";
  const modalId = "verticallyCentered";
  const userId = selectedBankAccount?.id;

  const filteredAccounts = useMemo(() => {
    return bankAccount.filter((item) => {
      const matchesTab =
        activeTab === "All" || item.type?.toLowerCase() === activeTab.toLowerCase();

      const matchesSearch =
        searchTerm.trim() === "" ||
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [bankAccount, activeTab, searchTerm]);

  const handleEditClick = (id) => {
    dispatch(editData(id))
  }

  const handleDeleteClick = (id) => {
    dispatch(editData(id))
  }

  return (
    <>
      <div className="content">
        <div className="pb-5">
          <div className="row g-4">
            <div className="col-12 col-xxl-12">
              <div className="mb-3">
                <div className="card">
                  <div className="row align-items-center p-3">
                    <div className="col-lg-8">
                      <p className="m-0">
                        Connect your Stripe account to receive online payments
                        from your customers.
                      </p>
                      <p className="m-0">
                        Connect your PayPal account to receive online payments
                        from your customers.
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <Link to="/ConnectBank">
                        <button
                          className="btn btn-primary me-1 mb-1 text-uppercase w-100"
                          type="button"
                        >
                          Connect your bank account
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-lg-6">
                  <h2 className="mb-2">Bank accounts</h2>
                </div>
                <div className="col-lg-6 text-end">
                  <Link to="/ConnectBank">
                    <button
                      className="btn btn-primary me-1 mb-1 text-uppercase w-100"
                      type="button"
                    >
                      Connect your bank account
                    </button>
                  </Link>
                </div>
              </div>

              <div className="row align-items-center g-4">
                <div className="col-12 col-xxl-12">
                  <div className="row g-3">
                    <div className="col-12 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h4>Overview</h4>
                        </div>
                        <div className="card-body border-bottom">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="mb-3">{cardReports[3]?.name}</h5>
                              <h4 className="text-primary">${cardReports[3]?.total}</h4>
                            </div>
                            <div className="col-6">
                              <h5 className="mb-3">Total pending (Manual)</h5>
                              <h4 className="text-primary">${cardReports[3]?.monthTotal}</h4>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <h5 className="mb-3">Stripe balance</h5>
                              <h4 className="text-primary">0</h4>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <h5 className="mb-3">Stripe pending balance</h5>
                              <h4 className="text-primary">0</h4>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <h5 className="mb-3">PayPal balance</h5>
                              <h4 className="text-primary">
                                $0{" "}
                                <button
                                  className="btn btn-soft-warning btn-sm m-1"
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="This Balance is different from the PayPal account balance "
                                >
                                  <span className="fab fa-adobe"></span>
                                </button>
                              </h4>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <h5 className="mb-3">PayPal pending balance</h5>
                              <h4 className="text-primary">
                                $0{" "}
                                <button
                                  className="btn btn-soft-warning btn-sm m-1"
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="This Balance is different from the PayPal account balance "
                                >
                                  <span className="fab fa-adobe"></span>
                                </button>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-200 mb-6 mt-4" />
              <div className="card p-4">
                {/* Tabs */}
                <ul className="nav nav-underline" id="myTab" role="tablist">
                  {["All", "Stripe", "PayPal", "Manual"].map((tab) => (
                    <li key={tab} className="nav-item px-lg-3" role="presentation">
                      <button
                        className={`nav-link ${activeTab === tab ? "active" : "bg-white"}`}
                        onClick={() => setActiveTab(tab)}
                        type="button"
                        role="tab"
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Search Box */}
                <div className="search-box mb-3 mr-0 mt-3">
                  <form
                    className="position-relative"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      className="form-control search-input search form-control-sm"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="fas fa-search search-box-icon"></span>
                  </form>
                </div>

                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-striped table-sm fs--1 mb-0">
                    <thead>
                      <tr>
                        <th className="border-top ps-3">Bank Name</th>
                        <th className="border-top">Creation Date</th>
                        <th className="border-top">Bank holder name</th>
                        <th className="border-top">Bank account number</th>
                        <th className="border-top">Pending balance</th>
                        <th className="border-top">Balance</th>
                        <th className="border-top">Type</th>
                        <th className="border-top">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAccounts.map((item, idx) => (
                        <tr key={idx}>
                          <td className="align-middle ps-3">{item?.bankName}</td>
                          <td className="align-middle">
                            {new Date(item?.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </td>
                          <td className="align-middle">{item?.bankHolderName}</td>
                          <td className="align-middle">{item?.accountNumber}</td>
                          <td className="align-middle">{item?.pendingBalance}</td>
                          <td className="align-middle">{item?.balance}</td>
                          <td className="align-middle">{item?.type}</td>
                          <td className="align-middle text-end pe-0">
                            <div className="dropdown">
                              <button
                                className="btn btn-sm"
                                type="button"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fas fa-ellipsis fs--2"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <Link
                                  className="dropdown-item"
                                  to="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-modal"
                                  onClick={() => handleEditClick(item.id)}
                                >
                                  Edit
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link
                                  className="dropdown-item text-danger"
                                  to="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#verticallyCentered"
                                  onClick={() => handleDeleteClick(item.id)}
                                >
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredAccounts.length === 0 && (
                        <tr>
                          <td colSpan="8" className="text-center">
                            No records found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* <!-- delete modal --> */}
              <DeleteDataModal
                userId={userId}
                endPoint={endPoint}
                modalId={modalId}
              />
              {/* <!-- Edit modal --> */}
              <BankAccountModal selectedBankAccount={selectedBankAccount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankAccounts;
