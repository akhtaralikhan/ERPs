import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Dropdown from "react-bootstrap/Dropdown";
import GlobalFilter from "../../../Components/GlobalFilter";
import { ExpenseByMonthData } from "../../../assets/data";

const ExpenseByMonth = () => {
  // Function to handle the print action
  const handlePrint = () => {
    window.print();
  };
  // ✅ Table columns (only display)
  const columns = useMemo(
    () => [
      { Header: "SL", accessor: "SL", size: 400 },
      {
        Header: "Date",
        accessor: "Date",
        Cell: ({ value }) => {
          if (!value) return ""; // Totals row empty
          return value; // Just show "September-2025"
        },
      },
      { Header: "Total Tran", accessor: "TotalTran" },
      { Header: "Total Quantity", accessor: "TotalQuantity" },
      { Header: "Total Expense", accessor: "TotalExpense" },
      { Header: "Total Paid", accessor: "TotalPaid" },
      { Header: "Total Due", accessor: "TotalDue" },
    ],
    []
  );

  // ✅ React Table instance (no pagination)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows, // use rows instead of page
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: ExpenseByMonthData,
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="content AssetsPageChangecss AssetPaddingChange">
      <div className="marginforsmalldevice RemoveBorder card rounded-0">
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-md-3 px-md-4 mb-md-0 border-bottom gap-3">
          <div
            className="p-3 row MainRemovePaddingwidth PrintSize"
            style={{ minWidth: "170px" }}
          >
            <h2
              className="fw-bolder mb-5 PrintSizeH2"
              style={{ fontSize: "2rem" }}
            >
              Expense By Month
            </h2>
            <div className="AllabsAssets PrintDnone">
              <span className="filterLinks text-dark">
                All <span className="NewChangeColor">(68817)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Executive Desk <span className="NewChangeColor">(6)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Laser Printer <span className="NewChangeColor">(17)</span>
              </span>
              <span className="filterLinks ColorChangeFilterLink">
                Laptop Stand <span className="NewChangeColor">(6,810)</span>
              </span>
            </div>

            {/* Search + Filters */}
            <div className="d-flex flex-xl-row flex-column PrintDnone">
              <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
               <div className="d-flex flex-md-row mb-md-4 mb-4 mt-4 PrintWidthDropdown PrintDnone DropDownForMobileDevice">
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
                  <Dropdown.Menu
                    renderOnMount
                    popperConfig={{ strategy: "fixed" }} // important
                  >
                    <Dropdown.Item>Active</Dropdown.Item>
                    <Dropdown.Item>InActive</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                    style={{
                      borderRadius: "0",
                      fontWeight: 600,
                      fontSize: "14px",
                      width: "200px",
                    }}
                  >
                    ModifiedByUser
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    renderOnMount
                    popperConfig={{ strategy: "fixed" }} // important
                  >
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
                  <Dropdown.Menu
                    renderOnMount
                    popperConfig={{ strategy: "fixed" }} // important
                  >
                    <Dropdown.Item>Date</Dropdown.Item>
                    <Dropdown.Item>Delivery Type</Dropdown.Item>
                    <Dropdown.Item>Exported</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="PrintIconDisplay">
              <div className="btn btn-light ps-0 fw-bold" onClick={handlePrint}>
                <i className="fa-solid fa-print me-2"></i>
                Print
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Table (without pagination) */}
        <div className="table-responsive p-4 px-5 pt-0 NewTableChange">
          <div className="table-responsive custom-scroll"  style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}>
            <table
              {...getTableProps()}
              className="table table-sm fs--1 mb-0 ConvertUpperCase"
              style={{ fontSize: "13px" }}
            >
              <thead className="table align-middle text-nowrap fs-9 mb-0 text-uppercase">
                {headerGroups.map((headerGroup, idx) => {
                  const { key: headerKey, ...headerRest } =
                    headerGroup.getHeaderGroupProps();
                  return (
                    <tr key={headerKey || idx} {...headerRest}>
                      {headerGroup.headers.map((column, idx) => {
                        const { key: colKey, ...colRest } =
                          column.getHeaderProps(column.getSortByToggleProps());
                        return (
                          <th
                            key={colKey || idx}
                            {...colRest}
                            style={{
                              cursor: "pointer",
                              fontSize: "14.5px",
                              paddingTop: "16px",
                              paddingBottom: "16px",
                            }}
                            className="border-top-0 pe-3 ps-1"
                          >
                            {column.render("Header")}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <i
                                    className="fa-solid fa-sort-up text-body-tertiary"
                                    style={{ fontSize: "10px" }}
                                  ></i>
                                ) : (
                                  <i
                                    className="fa-solid fa-sort-down text-body-tertiary"
                                    style={{ fontSize: "10px" }}
                                  ></i>
                                )
                              ) : (
                                <i
                                  className="fa-solid fa-sort text-body-tertiary"
                                  style={{ fontSize: "10px" }}
                                ></i>
                              )}
                            </span>
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>

              <tbody
                {...getTableBodyProps()}
                className="table align-middle text-nowrap fs-9 mb-0"
              >
                {rows.map((row, idx) => {
                  prepareRow(row);
                  const { key: rowKey, ...rowRest } = row.getRowProps();
                  return (
                    <tr key={rowKey || idx} {...rowRest}>
                      {row.cells.map((cell, cidx) => {
                        const { key: cellKey, ...cellRest } =
                          cell.getCellProps();
                        return (
                          <td
                            key={cellKey || cidx}
                            {...cellRest}
                            className="py-2 pe-3"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseByMonth;
