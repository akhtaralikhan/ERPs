import React, { useEffect, useState } from "react";
// import { useRedux } from "../../hooks/useRedux";
// import {
//   clearSelectedAsset,
//   getAssetById,
//   // deleteEntity,
//   // deleteAssets,
//   getAssets,
//   getChartAccounts,
// } from "../../redux/accounting/actions";
// import ConnectBankAccount from "../../Components/ConnectBankAccount";
// import Footer from "../../Components/Footer";
// import { createSelector } from "reselect";
// import DeleteModal from "../../Components/DeleteModal";
// import AssetsEditModel from "../../Components/AssetsEditModel";
// import AssetsNewModel from "../../Components/AssetsNewModel";
import Dropdown from "react-bootstrap/Dropdown";

const Highlight = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) return <>{text}</>;

    const regex = new RegExp(`(${highlight})`, "gi");
    const stringText = typeof text === "string" ? text : String(text);
    const parts = stringText.split(regex);

    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark key={i} style={{ backgroundColor: "yellow", color: "black" }}>
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </>
    );
};

const formatDate = (dateString) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    if (isNaN(d)) return "-";
    return d.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};

const Assets = () => {
    // const { dispatch, useAppSelector } = useRedux();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAssetId, setSelectedAssetId] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    // const [selectedAsset, setSelectedAsset] = useState(null);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // useEffect(() => {
    //   dispatch(getChartAccounts());
    //   dispatch(getAssets()); //4
    // }, []);

    // const AssetsData = createSelector(
    //   (state) => state.Accounting,
    //   (state) => ({
    //     assets: state.assets,
    //     selectedAsset: state.selectedAsset,
    //   })
    // );

    // const { assets, selectedAsset } = useAppSelector(AssetsData);
    // Filter assets by searchTerm in name, amount, purchaseDate, supportedDate

    const assets = [
        {
            id: 44,
            createdById: 3,
            createdBy: {
                id: 3,
                fullname: "Mohseen Pasha",
                email: "owner.mohseenpasha111@gmail.com",
                password: "$2a$11$whbInowIMbQ312cGWx/TIOuYtE4Ij1r/4Rn.STNiwJOHJaVuiTelW",
                newPassword: null,
                changePassword: false,
                emailVerified: false,
                agreeTerm: true,
                socialLogin: false,
                roleId: 1,
                role: null,
                isActive: true,
                rememberMe: false,
                invitationIsSent: false,
                avatar: null,
                createdAt: "2023-02-01T13:37:39",
                updatedAt: "2023-02-01T13:37:39",
                plan: null,
                planId: 1,
                createdById: null,
                createdBy: null,
                tenantId: 3,
                tenant: null,
                accountDeleted: false,
                subscriptions: null,
                token: null,
                currentUrl: null
            },
            createdAt: "0001-01-01T00:00:00",
            updateAt: "0001-01-01T00:00:00",
            name: "New Company",
            amount: 2000.0,
            purchaseDate: "2025-08-07T23:02:04",
            supportedDate: "2025-08-15T23:02:07",
            description: "Heloo  bro"
        },
    ];
    const filteredAssets = assets?.filter((asset) => {
        const term = searchTerm.toLowerCase();

        const purchaseDateStr = formatDate(asset.purchaseDate).toLowerCase();
        const supportedDateStr = formatDate(asset.supportedDate).toLowerCase();

        return (
            (asset.name && asset.name.toLowerCase().includes(term)) ||
            (asset.amount && asset.amount.toString().toLowerCase().includes(term)) ||
            purchaseDateStr.includes(term) ||
            supportedDateStr.includes(term)
        );
    });

    const sortedAssets = [...filteredAssets].sort((a, b) => {
        if (!sortConfig.key) return 0;

        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Convert dates to timestamps
        if (
            sortConfig.key === "purchaseDate" ||
            sortConfig.key === "supportedDate"
        ) {
            aValue = new Date(aValue).getTime();
            bValue = new Date(bValue).getTime();
        }

        // Convert undefined/null
        if (aValue === null || aValue === undefined) aValue = "";
        if (bValue === null || bValue === undefined) bValue = "";

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
    });

    useEffect(() => {
        const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [searchTerm, filteredAssets.length, currentPage, itemsPerPage]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAssets = sortedAssets.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key)
            return "fa-solid fa-sort text-body-tertiary ms-2";
        return sortConfig.direction === "asc"
            ? "fa fa-sort-up text-body-tertiary ms-2"
            : "fa fa-sort-down text-body-tertiary ms-2";
    };

    return (
        <>
            <div className="content AssetsPageChangecss">
                <div className="card rounded-0">
                    <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-3 px-4 mb-0 border-bottom gap-3">
                        <div className=" p-3 row" style={{ minWidth: "170px" }}>
                            <div className=" d-flex justify-content-between">
                                <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
                                    Assets
                                </h2>
                                {/* <ConnectBankAccount /> */}
                            </div>
                            <div
                                className="d-flex flex-wrap align-items-center"
                                style={{ gap: "35px" }}
                            >
                                <span className="filterLinks text-dark">
                                    All <span className="NewChangeColor">(68)</span>
                                </span>
                                <span className="filterLinks ColorChangeFilterLink">
                                    Active <span className="NewChangeColor">(25)</span>
                                </span>
                                <span className="filterLinks ColorChangeFilterLink">
                                    InActive <span className="NewChangeColor">(10)</span>
                                </span>
                                <span className="filterLinks ColorChangeFilterLink">
                                    Electronics <span className="NewChangeColor">(12)</span>
                                </span>
                                <span className="filterLinks ColorChangeFilterLink">
                                    Automobile <span className="NewChangeColor">(8)</span>
                                </span>
                            </div>
                            <div className="d-flex flex-xl-row flex-column">
                                <div className="search-bars d-flex p-4 pb-0 ps-0 mb-2">
                                    <div className="search-box mb-3 mr-0">
                                        <form
                                            className="position-relative h-100"
                                            data-bs-toggle="search"
                                            data-bs-display="static"
                                            onSubmit={(e) => e.preventDefault()}
                                        >
                                            <input
                                                className="form-control search-input search AssetsSearch"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <span className="fas fa-search search-box-icon"></span>
                                        </form>
                                    </div>
                                </div>
                                <div className="d-flex flex-md-row mb-md-4 mb-4 flex-column mt-4">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"
                                            className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                                            style={{
                                                borderRadius: "8px 0 0 8px",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                width: "200px",
                                            }}
                                        >
                                            Status
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Active</Dropdown.Item>
                                            <Dropdown.Item>InActive</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"
                                            className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                                            style={{
                                                borderRadius: "0 0px 0px 0",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                width: "200px",
                                            }}
                                        >
                                            ModifiedByUser
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Super Admin</Dropdown.Item>
                                            <Dropdown.Item>Admin</Dropdown.Item>
                                            <Dropdown.Item>Users</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"
                                            className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                                            style={{
                                                borderRadius: "0 8px 8px 0",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                width: "200px",
                                            }}
                                        >
                                            More filters
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Date</Dropdown.Item>
                                            <Dropdown.Item>Delivery Type</Dropdown.Item>
                                            <Dropdown.Item>Exported</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary me-1 mb-1 text-uppercase"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-modalAssetsNewModel"
                                >
                                    <i className="fa fa-solid fa-plus me-3"></i>New Assets
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive p-4 px-5 pt-0 NewTableChange">
                        <div
                            className="table-responsive custom-scroll"
                            style={{
                                overflowX: "auto",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <table className="table  table-sm fs--1 mb-0">
                                <thead>
                                    <tr>
                                        <th
                                            className="sort"
                                            onClick={() => handleSort("name")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Name{" "}
                                            <i
                                                className={getSortIcon("name")}
                                                style={{ fontSize: "10px" }}
                                            ></i>
                                        </th>
                                        <th
                                            className="sort"
                                            onClick={() => handleSort("amount")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Amount{" "}
                                            <i
                                                className={getSortIcon("amount")}
                                                style={{ fontSize: "10px" }}
                                            ></i>
                                        </th>
                                        <th
                                            className="sort"
                                            onClick={() => handleSort("purchaseDate")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Purchase Date{" "}
                                            <i
                                                className={getSortIcon("purchaseDate")}
                                                style={{ fontSize: "10px" }}
                                            ></i>
                                        </th>
                                        <th
                                            className="sort"
                                            onClick={() => handleSort("supportedDate")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Supported Date{" "}
                                            <i
                                                className={getSortIcon("supportedDate")}
                                                style={{ fontSize: "10px" }}
                                            ></i>
                                        </th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                {currentAssets.length === 0 ? (
                                    <tbody>
                                        <tr>
                                            <td colSpan="100%" className="text-center">
                                                No assets found
                                            </td>
                                        </tr>
                                    </tbody>
                                ) : (
                                    <tbody className="list">
                                        <>
                                            {currentAssets.map((Assets, index) => {
                                                const purchaseDateFormatted = formatDate(
                                                    Assets.purchaseDate
                                                );
                                                const supportedDateFormatted = formatDate(
                                                    Assets.supportedDate
                                                );
                                                return (
                                                    <tr key={index}>
                                                        <td className="align-middle name py-2 pe-2">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar avatar-l me-2">
                                                                    <div className="avatar-name rounded-circle">
                                                                        {Assets.avatar ? (
                                                                            <img
                                                                                src={Assets.avatar}
                                                                                alt={Assets.name}
                                                                                className="rounded-circle"
                                                                            />
                                                                        ) : (
                                                                            <span>
                                                                                {Assets.name
                                                                                    ? Assets.name
                                                                                        .split(" ")
                                                                                        .map((word, index, arr) =>
                                                                                            index === 0 ||
                                                                                                index === arr.length - 1
                                                                                                ? word.charAt(0).toUpperCase()
                                                                                                : ""
                                                                                        )
                                                                                        .join("")
                                                                                    : ""}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <Highlight
                                                                        text={Assets.name}
                                                                        highlight={searchTerm}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="align-middle">
                                                            <Highlight
                                                                text={Assets.amount}
                                                                highlight={searchTerm}
                                                            />
                                                        </td>
                                                        <td className="align-middle">
                                                            <Highlight
                                                                text={purchaseDateFormatted}
                                                                highlight={searchTerm}
                                                            />
                                                        </td>
                                                        <td className="align-middle">
                                                            <Highlight
                                                                text={supportedDateFormatted}
                                                                highlight={searchTerm}
                                                            />
                                                        </td>
                                                        <td className="align-middle white-space-nowrap">
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
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#!"
                                                                        type="button"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit-modal"
                                                                        onClick={() => {
                                                                            dispatch(clearSelectedAsset()); // clear old data
                                                                            dispatch(getAssetById(Assets.id));
                                                                        }}
                                                                    // onClick={() =>
                                                                    //   setSelectedAsset(Assets)
                                                                    // } // <-- store asset
                                                                    >
                                                                        Edit
                                                                    </a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a
                                                                        className="dropdown-item text-danger"
                                                                        href="#!"
                                                                        type="button"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#verticallyCentered"
                                                                        onClick={() =>
                                                                            setSelectedAssetId(Assets.id)
                                                                        }
                                                                    >
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </>
                                    </tbody>
                                )}
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="d-flex justify-content-between mt-3 PAGINATIONS">
                            <span className="d-md-block d-none">
                                {startIndex + 1} to{" "}
                                {Math.min(startIndex + itemsPerPage, filteredAssets.length)}{" "}
                                Items of {filteredAssets.length}
                            </span>
                            <ul className="pagination mb-0">
                                {/* Prev Button */}
                                <li
                                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage((prev) => prev - 1)}
                                    >
                                        <span className="fas fa-chevron-left"></span>
                                    </button>
                                </li>

                                {(() => {
                                    const pageNumbers = [];
                                    const showEllipsis = totalPages > 7; // Only use ellipsis if too many pages
                                    let startPage = Math.max(1, currentPage - 2);
                                    let endPage = Math.min(totalPages, currentPage + 2);

                                    // Adjust start/end if near beginning or end
                                    if (currentPage <= 3) {
                                        endPage = Math.min(5, totalPages);
                                    } else if (currentPage >= totalPages - 2) {
                                        startPage = Math.max(totalPages - 4, 1);
                                    }

                                    // Always show first page
                                    if (startPage > 1) {
                                        pageNumbers.push(
                                            <li
                                                key={1}
                                                className={`page-item ${currentPage === 1 ? "active" : ""
                                                    }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage(1)}
                                                >
                                                    1
                                                </button>
                                            </li>
                                        );
                                        if (startPage > 2) {
                                            pageNumbers.push(
                                                <li key="start-ellipsis" className="page-item disabled">
                                                    <span className="page-link">...</span>
                                                </li>
                                            );
                                        }
                                    }

                                    // Main visible range
                                    for (let i = startPage; i <= endPage; i++) {
                                        pageNumbers.push(
                                            <li
                                                key={i}
                                                className={`page-item ${currentPage === i ? "active" : ""
                                                    }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage(i)}
                                                >
                                                    {i}
                                                </button>
                                            </li>
                                        );
                                    }

                                    // Always show last page
                                    if (endPage < totalPages) {
                                        if (endPage < totalPages - 1) {
                                            pageNumbers.push(
                                                <li key="end-ellipsis" className="page-item disabled">
                                                    <span className="page-link">...</span>
                                                </li>
                                            );
                                        }
                                        pageNumbers.push(
                                            <li
                                                key={totalPages}
                                                className={`page-item ${currentPage === totalPages ? "active" : ""
                                                    }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage(totalPages)}
                                                >
                                                    {totalPages}
                                                </button>
                                            </li>
                                        );
                                    }

                                    return pageNumbers;
                                })()}

                                {/* Next Button */}
                                <li
                                    className={`page-item ${currentPage === totalPages ? "disabled" : ""
                                        }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage((prev) => prev + 1)}
                                    >
                                        <span className="fas fa-chevron-right"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- delete modal --> */}
                        {/* Reusable Delete Modal */}
                        {/* <DeleteModal
              modalId="verticallyCentered"
              resource="assets"
              selectedId={selectedAssetId}
            /> */}
                        {/* <!-- delete modal -->
              <!-- Edit modal --> */}
                        {/* <AssetsEditModel asset={selectedAsset} /> */}
                        {/* <!-- Edit modal --> */}

                        {/* Add New Assets Model */}
                        {/* <AssetsNewModel
            asset={selectedAsset}
            /> */}
                        {/* Add New Assets Model */}

                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Assets;
