import React, { useEffect, useState } from "react";
import { useRedux } from "../../hooks/useRedux";
import { getSubscriptionsTenant3Action } from "../../redux/console/actions";
import { editProposalData, getCurrency, getCustomers, getProposals } from "../../redux/sales/actions";
import EstimatesModal from "../../Components/EstimatesModal";
import DeleteDataModal from "../../Components/DeleteDataModal";
import ChatSupport from "../../Components/ChatSupport";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";


const Estimates = () => {

  const { dispatch, useAppSelector } = useRedux();

  const userData = createSelector(
    (state) => state.sales,
    (state) => ({
      proposals: state.proposals,
    })
  );
  const { proposals } = useAppSelector(userData);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProposal = proposals.filter(proposal =>
    proposal?.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proposal?.customer?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    dispatch(getSubscriptionsTenant3Action());
    dispatch(getProposals());

  }, []);

  //handle click 
  // State
  const [modalMode, setModalMode] = useState("add");
  const [modalData, setModalData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const endPoint = "proposal";

  // --- Click handlers ---
  const handleAddClick = () => {
    setModalMode("add");
    setModalData(null);
  };

  const handleEditClick = (propsal) => {
    setModalMode("edit");
    setModalData(propsal);
    dispatch(getCurrency());
    dispatch(getCustomers());
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
  };

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
                      <a href="connect-bank.html">
                        <button
                          className="btn btn-primary me-1 mb-1 text-uppercase w-100"
                          type="button"
                        >
                          Connect your bank account
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center g-4">
                <div className="col-12 col-xxl-12">
                  <div className="row g-3">
                    <div className="col-12 col-md-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4>Estimates</h4>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-modal"
                            onClick={handleAddClick}
                          >
                            New Estimates
                          </button>
                        </div>
                        <div className="card-body border-bottom">
                          <div
                            id="tableExample3"
                            data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
                          >
                            <div className="search-box mb-3 mr-0">
                              <form
                                className="position-relative"
                                data-bs-toggle="search"
                                data-bs-display="static"
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

                            <div className="table-responsive">
                              <table className="table table-striped table-sm fs--1 mb-0">
                                <thead>
                                  <tr>
                                    <th
                                      className="sort border-top ps-3"
                                      data-sort="name"
                                    >
                                      Reference
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="email"
                                    >
                                      Customer
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="age"
                                    >
                                      Date
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Expire at
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Status
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                {filteredProposal?.map((proposal, idx) => (
                                  <tbody className="list" key={idx}>
                                    <tr>
                                      <td className="align-middle ps-3 name">
                                        <Link to="#">{proposal?.reference}</Link>

                                      </td>
                                      <td className="align-middle customer white-space-nowrap">
                                        <a
                                          className="d-flex align-items-center text-900"
                                          href="#"
                                        >
                                          <div className="avatar avatar-l">
                                            <div className="avatar-name rounded-circle">
                                              <span>{proposal?.customer?.name?.charAt(0)?.toUpperCase()}</span>

                                            </div>
                                          </div>
                                          <div className="">
                                            <h6 className="mb-0 ms-3 text-900">
                                              {proposal?.customer?.name || "John Doe"}
                                            </h6>
                                            <small className="mb-0 ms-3 text-900">
                                              {proposal?.customer?.email}
                                            </small>
                                          </div>
                                        </a>
                                      </td>
                                      <td className="align-middle email">
                                        {new Date(proposal?.issueDate).toLocaleString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                          hour: "numeric",
                                          minute: "2-digit",
                                          hour12: true,
                                        })}
                                      </td>
                                      <td className="align-middle email">
                                        {new Date(proposal?.issueDate).toLocaleString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                          hour: "numeric",
                                          minute: "2-digit",
                                          hour12: true,
                                        })}
                                      </td>
                                      <td className="align-middle text-primary">
                                        {" "}
                                        {proposal?.totalAmount}
                                      </td>
                                      <td className="align-middle">
                                        <span className="badge bg-success">
                                          {proposal?.status}
                                        </span>
                                      </td>
                                      <td className="align-middle white-space-nowrap pe-0">
                                        <div className="font-sans-serif btn-reveal-trigger position-static">
                                          <button
                                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs--2"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-boundary="window"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-bs-reference="parent"
                                          >
                                            <i className="fa fa-ellipsis fs--2"></i>

                                          </button>
                                          <div className="dropdown-menu dropdown-menu-end py-2">
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Forword
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                              type="button"
                                              data-bs-toggle="modal"
                                              data-bs-target="#edit-modal"
                                            >
                                              View
                                            </a>
                                            <Link
                                              className="dropdown-item"
                                              to="#!"
                                              type="button"
                                              data-bs-toggle="modal"
                                              data-bs-target="#edit-modal"
                                              onClick={() => handleEditClick(proposal)} // <-- pass item
                                            >
                                              Edit
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <Link
                                              className="dropdown-item text-danger"
                                              to="#!"
                                              data-bs-toggle="modal"
                                              data-bs-target="#verticallyCentered"
                                              onClick={() => handleDeleteClick(proposal.id)} // <-- pass ID
                                            >
                                              Delete
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>

                                  </tbody>
                                ))}

                              </table>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                              <span
                                className="d-none d-sm-inline-block"
                                data-list-info="data-list-info"
                              >
                                1 to 5{" "}
                                <span className="text-600"> Items of </span>43
                              </span>
                              <div className="d-flex">
                                <button
                                  className="page-link disabled"
                                  data-list-pagination="prev"
                                  disabled=""
                                >
                                  <i className="fa fa-chevron-left"></i>
                                </button>
                                <ul className="mb-0 pagination">
                                  <li className="active">
                                    <button
                                      className="page"
                                      type="button"
                                      data-i="1"
                                      data-page="5"
                                    >
                                      1
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="page"
                                      type="button"
                                      data-i="2"
                                      data-page="5"
                                    >
                                      2
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="page"
                                      type="button"
                                      data-i="3"
                                      data-page="5"
                                    >
                                      3
                                    </button>
                                  </li>
                                  <li className="disabled">
                                    <button className="page" type="button">
                                      ...
                                    </button>
                                  </li>
                                </ul>
                                <button
                                  className="page-link pe-0"
                                  data-list-pagination="next"
                                >
                                  <i className="fa fa-chevron-right"></i>

                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-200 mb-6 mt-4" />

              {/* <!-- delete modal --> */}
              <DeleteDataModal
                userId={selectedId}
                endPoint={endPoint}
                modalId="verticallyCentered"
              />

              {/* <!-- delete modal -->
                        <!-- Edit modal --> */}
              <EstimatesModal
                mode={modalMode}
                initialData={modalData}
                onSave={(data) => {
                  if (modalMode === "edit") {
                    dispatch(editProposalData(data.id));
                  } else {
                    // dispatch(createProductData(data)); make it 
                  }
                }}
              />
              {/* <!-- Edit modal --> */}

            </div>
            <ChatSupport />
          </div>
        </div>
      </div>
    </>
  );
};

export default Estimates;
