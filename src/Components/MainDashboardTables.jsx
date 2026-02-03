import React, { useMemo, useState } from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { useEffect } from "react";

// Replace with your actual data
const productData = [
    { productId: 'P1001', name: 'Laptop', price: 950, stock: 25 },
    { productId: 'P1002', name: 'Mobile', price: 600, stock: 50 },
    { productId: 'P1003', name: 'Monitor', price: 250, stock: 80 }
    // ...more rows
];

const ProductTable = () => {
    const [searchProduct, setSearchProduct] = useState("");

    // Column definition for this data
    const columns = useMemo(
        () => [
            { Header: "Product ID", accessor: "productId" },
            { Header: "Name", accessor: "name" },
            { Header: "Price ($)", accessor: "price" },
            { Header: "Stock", accessor: "stock" }
        ], []
    );

    // Table instance for react-table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state: { pageIndex },
        pageOptions,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data: productData,
            initialState: { pageIndex: 0, pageSize: 5 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    // Search bar logic (optional)
    React.useEffect(() => {
        setGlobalFilter(searchProduct);
    }, [searchProduct, setGlobalFilter]);

    return (
        <div className="p-5 bg-white border-y border-300">
            <div>
                <div className="row align-items-end justify-content-between pb-5 g-3">
                    <div className="col-auto">
                        <h3>Products</h3>
                    </div>
                    <div className="col-12 col-md-auto">
                        <div className="row g-2 gy-3">
                            <div className="col-auto flex-1">
                                <div className="search-box">
                                    <form className="position-relative">
                                        <input
                                            className="form-control search-input"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchProduct}
                                            onChange={e => setSearchProduct(e.target.value)}
                                        />
                                        <span className="fas fa-search search-box-icon"></span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Link to="/" className="btn btn-outline-info" type="button">
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive p-4 px-0 pt-0">
                    <div className="table-responsive custom-scroll">
                        <table
                            {...getTableProps()}
                            className="table align-middle fs-9 mb-0"
                            style={{ fontSize: "13px" }}
                        >
                            <thead className="table align-middle border-top text-nowrap fs-9 mb-0">
                                {headerGroups.map((headerGroup, idx) => {
                                    const { key: headerKey, ...headerRest } = headerGroup.getHeaderGroupProps();
                                    return (
                                        <tr key={headerKey || idx} {...headerRest}>
                                            {headerGroup.headers.map((column, idx) => {
                                                const { key: colKey, ...colRest } = column.getHeaderProps(column.getSortByToggleProps());
                                                return (
                                                    <th
                                                        key={colKey || idx}
                                                        {...colRest}
                                                        style={{
                                                            cursor: "pointer",
                                                            fontSize: "14.5px",
                                                            paddingTop: "16px",
                                                            paddingBottom: "16px"
                                                        }}
                                                        className="border-top-0"
                                                    >
                                                        {column.render("Header")}
                                                        <span>
                                                            {column.isSorted ? (
                                                                column.isSortedDesc ? (
                                                                    <i className="fa-solid fa-sort-up text-body-tertiary" style={{ fontSize: "10px" }}></i>
                                                                ) : (
                                                                    <i className="fa-solid fa-sort-down text-body-tertiary" style={{ fontSize: "10px" }}></i>
                                                                )
                                                            ) : (
                                                                <i className="fa-solid fa-sort text-body-tertiary" style={{ fontSize: "10px" }}></i>
                                                            )}
                                                        </span>
                                                    </th>
                                                );
                                            })}
                                            <th className="">Actions</th>
                                        </tr>
                                    );
                                })}
                            </thead>
                            <tbody {...getTableBodyProps()} className="table align-middle text-nowrap fs-9 mb-0">
                                {page.map((row, idx) => {
                                    prepareRow(row);
                                    const { key: rowKey, ...rowRest } = row.getRowProps();
                                    return (
                                        <tr key={rowKey || idx} {...rowRest}>
                                            {row.cells.map((cell, cidx) => {
                                                const { key: cellKey, ...cellRest } = cell.getCellProps();
                                                return (
                                                    <td key={cellKey || cidx} {...cellRest}>
                                                        {cell.render("Cell")}
                                                    </td>
                                                );
                                            })}

                                            <td className="align-middle white-space-nowrap pe-0">
                                                <div className="font-sans-serif btn-reveal-trigger position-static p-0">
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
                                                        <Link className="dropdown-item" to="#!" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</Link>
                                                        <div className="dropdown-divider"></div>
                                                        <Link className="dropdown-item text-danger" to="#!" data-bs-toggle="modal" data-bs-target="#verticallyCentered">Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination controls */}
                    <div className="d-flex justify-content-between mt-3">
                        <span className="text-600">Page {pageIndex + 1} of {pageOptions.length}</span>
                        <div>
                            <button className="btn btn-sm btn-primary me-2" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                            <button className="btn btn-sm btn-primary" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                        </div>
                    </div>
                    <DeleteModal modalId="verticallyCentered" resource="products" />
                </div>
            </div>
        </div>
    );
};

export default ProductTable;

const recentEstimates = [
    { estimateNo: "EST-001", customer: "Acme Corp", date: "2025-09-10", amount: "$3,200", status: "Sent" },
    { estimateNo: "EST-002", customer: "Innotech", date: "2025-09-07", amount: "$4,100", status: "Draft" },
    { estimateNo: "EST-003", customer: "Beta LLC", date: "2025-09-05", amount: "$1,950", status: "Accepted" },
    // Add more rows as needed...
];

export const RecentEstimates = () => {
    const [searchEstimate, setSearchEstimate] = useState("");

    const columns = useMemo(() => [
        { Header: "Estimate No", accessor: "estimateNo" },
        { Header: "Customer", accessor: "customer" },
        { Header: "Date", accessor: "date" },
        { Header: "Amount", accessor: "amount" },
        { Header: "Status", accessor: "status" },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state: { pageIndex },
        pageOptions,
        setGlobalFilter,
    } = useTable(
        { columns, data: recentEstimates, initialState: { pageIndex: 0, pageSize: 5 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    useEffect(() => {
        setGlobalFilter(searchEstimate || undefined);
    }, [searchEstimate, setGlobalFilter]);

    return (
        <div className="p-5 bg-white border-top border-300">
            <div data-list>
                <div className="row align-items-end justify-content-between pb-5 g-3">
                    <div className="col-auto">
                        <h3>Recent Estimates</h3>
                    </div>
                    <div className="col-12 col-md-auto">
                        <div className="row g-2 gy-3">
                            <div className="col-auto flex-1">
                                <div className="search-box">
                                    <form className="position-relative" data-bs-toggle="search" data-bs-display="static">
                                        <input
                                            className="form-control search-input"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchEstimate}
                                            onChange={e => setSearchEstimate(e.target.value)}
                                        />
                                        <span className="fas fa-search search-box-icon"></span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Link to="/" className="btn btn-outline-info" type="button">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-responsive p-4 px-0 pt-0">
                    <div className="table-responsive custom-scroll">
                        <table {...getTableProps()} className="table align-middle fs-9 mb-0" style={{ fontSize: '13px' }}>
                            <thead className="table align-middle border-top text-nowrap fs-9 mb-0">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                                className="border-top-0"
                                                style={{ cursor: 'pointer', paddingTop: 16, paddingBottom: 16 }}
                                            >
                                                {column.render("Header")}
                                                <span>
                                                    {column.isSorted ? (
                                                        column.isSortedDesc ? (
                                                            <i className="fa-solid fa-sort-up text-body-tertiary" style={{ fontSize: 10 }} />
                                                        ) : (
                                                            <i className="fa-solid fa-sort-down text-body-tertiary" style={{ fontSize: 10 }} />
                                                        )
                                                    ) : (
                                                        <i className="fa-solid fa-sort text-body-tertiary" style={{ fontSize: 10 }} />
                                                    )}
                                                </span>
                                            </th>
                                        ))}
                                        <th className="">Actions</th>
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="table align-middle text-nowrap fs-9 mb-0">
                                {page.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            ))}
                                            <td className="align-middle white-space-nowrap pe-0">
                                                <div className="font-sans-serif btn-reveal-trigger position-static p-0">
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
                                                        <Link
                                                            className="dropdown-item"
                                                            to="#!"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit-modal"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <div className="dropdown-divider"></div>
                                                        <Link
                                                            className="dropdown-item text-danger"
                                                            to="#!"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#verticallyCentered"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <span>Page {pageIndex + 1} of {pageOptions.length}</span>
                        <div>
                            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-sm btn-primary me-2">Previous</button>
                            <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-sm btn-primary">Next</button>
                        </div>
                    </div>

                    <DeleteModal modalId="verticallyCentered" resource="estimates" />
                </div>
            </div>
        </div>
    );
};

// Example new data set - replace with your actual data

const sampleData = [
    { date: "2025-09-10", description: "Invoice #1001", amount: "$5000", status: "Paid" },
    { date: "2025-09-09", description: "Invoice #1002", amount: "$3000", status: "Pending" },
    // Add more sample rows
];

export const NewTable = () => {
    const [searchInput, setSearchInput] = useState("");

    const columns = useMemo(() => [
        { Header: "Date", accessor: "date" },
        { Header: "Description", accessor: "description" },
        { Header: "Amount", accessor: "amount" },
        { Header: "Status", accessor: "status" },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state: { pageIndex, globalFilter },
        pageOptions,
        setGlobalFilter,
    } = useTable(
        { columns, data: sampleData, initialState: { pageIndex: 0, pageSize: 5 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    useEffect(() => {
        setGlobalFilter(searchInput || undefined);
    }, [searchInput, setGlobalFilter]);

    return (
        <div className="p-5 bg-white border-top border-300">
            <div data-list>
                <div className="row align-items-end justify-content-between pb-5 g-3">
                    <div className="col-auto">
                        <h3>Recent Bills</h3>
                    </div>
                    <div className="col-12 col-md-auto">
                        <div className="row g-2 gy-3">
                            <div className="col-auto flex-1">
                                <div className="search-box">
                                    <form className="position-relative" data-bs-toggle="search" data-bs-display="static">
                                        <input
                                            className="form-control search-input"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchInput}
                                            onChange={e => setSearchInput(e.target.value)}
                                        />
                                        <span className="fas fa-search search-box-icon"></span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Link to="/" className="btn btn-outline-info" type="button">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-responsive p-4 px-0 pt-0">
                    <div className="table-responsive custom-scroll">
                        <table {...getTableProps()} className="table align-middle fs-9 mb-0" style={{ fontSize: '13px' }}>
                            <thead className="table align-middle border-top text-nowrap fs-9 mb-0">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                                className="border-top-0"
                                                style={{ cursor: 'pointer', paddingTop: 16, paddingBottom: 16 }}
                                            >
                                                {column.render("Header")}
                                                <span>
                                                    {column.isSorted ? (
                                                        column.isSortedDesc ? (
                                                            <i className="fa-solid fa-sort-up text-body-tertiary" style={{ fontSize: 10 }} />
                                                        ) : (
                                                            <i className="fa-solid fa-sort-down text-body-tertiary" style={{ fontSize: 10 }} />
                                                        )
                                                    ) : (
                                                        <i className="fa-solid fa-sort text-body-tertiary" style={{ fontSize: 10 }} />
                                                    )}
                                                </span>
                                            </th>
                                        ))}
                                        <th className="">Actions</th>
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="table align-middle text-nowrap fs-9 mb-0">
                                {page.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            ))}
                                            <td className="align-middle white-space-nowrap pe-0">
                                                <div className="font-sans-serif btn-reveal-trigger position-static p-0">
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
                                                        <Link
                                                            className="dropdown-item"
                                                            to="#!"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit-modal"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <div className="dropdown-divider"></div>
                                                        <Link
                                                            className="dropdown-item text-danger"
                                                            to="#!"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#verticallyCentered"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <span>Page {pageIndex + 1} of {pageOptions.length}</span>
                        <div>
                            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-sm btn-primary me-2">Previous</button>
                            <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-sm btn-primary">Next</button>
                        </div>
                    </div>

                    <DeleteModal modalId="verticallyCentered" resource="estimates" />
                </div>
            </div>
        </div>
    );
};


