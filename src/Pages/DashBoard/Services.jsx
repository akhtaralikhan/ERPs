import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import { getSubscriptionsTenant3Action } from "../../redux/console/actions";
import { getCurrencyDefault } from "../../redux/dashboard/actions";
import { editProductData, getCatergory, getServices } from "../../redux/productAndServices/actions";
import { createSelector } from "reselect";
import EditProductAndServicesModal from "../../Components/EditProductAndServicesModal";
import DeleteDataModal from "../../Components/DeleteDataModal";
import ChatSupport from "../../Components/ChatSupport";


const Services = () => {
  const { dispatch, useAppSelector } = useRedux();

  const userData = createSelector(
    (state) => state.productAndServices,
    (state) => ({
      services: state.services,
    })
  );
  const { services } = useAppSelector(userData);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredServices = services.filter(services =>
    services?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    services?.category?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    services?.sku?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    dispatch(getSubscriptionsTenant3Action());
    dispatch(getCurrencyDefault())
    dispatch(getServices())
  }, []);
  //handle click 
  // State
  const [modalMode, setModalMode] = useState("add");
  const [modalData, setModalData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const endPoint = "services";
  const calledFrom = "service";

  // --- Click handlers ---
  const handleAddClick = () => {
    setModalMode("add");
    setModalData(null);
  };

  const handleEditClick = (services) => {
    setModalMode("edit");
    setModalData(services);
    dispatch(getCatergory());
    dispatch(getTax());
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
              <div className="row align-items-center g-4">
                <div className="col-12 col-xxl-12">
                  <div className="row g-3">
                    <div className="col-12 col-md-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4>Services</h4>
                          <button
                            className="btn btn-primary me-1 mb-1 text-uppercase"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-modal"
                            onClick={handleAddClick}
                          >
                            <i className="fa fa-solid fa-plus me-3"></i>New Services
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
                                      Name
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="email"
                                    >
                                      Creation Date
                                    </th>
                                    <th
                                      className="sort border-top"
                                      data-sort="age"
                                    >
                                      Category
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Sku
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Tax
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Purchase Price
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Sale Price
                                    </th>
                                    <th
                                      className="sort align-middle pe-0 border-top"
                                      scope="col"
                                    >
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                {filteredServices.map((service, index) => (
                                  <tbody className="list" key={index}>
                                    <tr>
                                      <td className="align-middle ps-3 name">
                                        <Link to="#">{service?.name}</Link>
                                      </td>
                                      <td className="align-middle email">
                                        {new Date(service?.createdAt).toLocaleString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                          hour: "numeric",
                                          minute: "2-digit",
                                          hour12: true,
                                        })}
                                      </td>
                                      <td className="align-middle age">{service?.category?.name}</td>
                                      <td className="align-middle age">{service?.sku ? service?.sku : "N/A"}</td>
                                      <td className="align-middle age">
                                        {service?.tax?.name}({service?.tax?.rate}%)
                                      </td>
                                      <td className="align-middle age">
                                        ${service?.purchasePrice}
                                      </td>
                                      <td className="align-middle age">
                                        ${service?.salePrice}
                                      </td>
                                      <td className="align-middle white-space-nowrap text-end pe-0">
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
                                            <i className="fas fa-ellipsis fs--2"></i>
                                          </button>
                                          <div className="dropdown-menu dropdown-menu-end py-2">
                                            <Link
                                              className="dropdown-item"
                                              to="#!"
                                              type="button"
                                              data-bs-toggle="modal"
                                              data-bs-target="#edit-modal"
                                              onClick={() => handleEditClick(service)} // <-- pass item
                                            >
                                              Edit
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <Link
                                              className="dropdown-item text-danger"
                                              to="#!"
                                              data-bs-toggle="modal"
                                              data-bs-target="#verticallyCentered"
                                              onClick={() => handleDeleteClick(service.id)} // <-- pass ID
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
              {/* Delete Modal */}
              <DeleteDataModal
                userId={selectedId}
                endPoint={endPoint}
                modalId="verticallyCentered"
              />

              {/* Edit / Add Modal */}
              <EditProductAndServicesModal
                calledFrom={calledFrom}
                mode={modalMode}
                initialData={modalData}
                onSave={(data) => {
                  if (modalMode === "edit") {
                    dispatch(editProductData(data.id));
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

export default Services;
