import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import Barcode from "react-barcode";

const PrintBarcode = () => {
  const [singleCode, setSingleCode] = useState("");

  const products = [
    { id: 30, name: "Steel Water", code: "ITM52529EE" },
    { id: 29, name: "Jonsonlo", code: "ITM504650" },
    { id: 28, name: "Tomato", code: "ITM52529EF" },
    { id: 27, name: "Icecream", code: "ITM52529EG" },
    { id: 26, name: "Cocacoal", code: "ITM52529EH" },
    { id: 25, name: "Milk", code: "ITM52529EI" },
    { id: 24, name: "Orange", code: "ITM52529EJ" },
    { id: 23, name: "Rui Fish", code: "ITM52529EK" },
    { id: 22, name: "Xiaomi 9", code: "ITM52529EL" },
    { id: 21, name: "Keyboard", code: "ITM11111" },
    { id: 20, name: "Monitor", code: "ITM22222" },
    { id: 19, name: "Mouse", code: "ITM33333" },
    { id: 18, name: "Laptop", code: "ITM44444" },
    { id: 17, name: "Headphones", code: "ITM55555" },
    { id: 16, name: "Charger", code: "ITM66666" },
    { id: 15, name: "USB Cable", code: "ITM77777" },
    { id: 14, name: "Power Bank", code: "ITM88888" },
    { id: 13, name: "Pen Drive", code: "ITM99999" },
    { id: 12, name: "Speaker", code: "ITM101010" },
    { id: 11, name: "Smart Watch", code: "ITM111213" },
    { id: 10, name: "Notebook", code: "ITM121314" },
    { id: 9, name: "Desk Lamp", code: "ITM131415" },
    { id: 8, name: "Chair", code: "ITM141516" },
    { id: 7, name: "Table", code: "ITM151617" },
    { id: 6, name: "Backpack", code: "ITM161718" },
    { id: 5, name: "Water Bottle", code: "ITM171819" },
    { id: 4, name: "Shoes", code: "ITM181920" },
    { id: 3, name: "T-Shirt", code: "ITM192021" },
    { id: 2, name: "Jeans", code: "ITM202122" },
    { id: 1, name: "Jacket", code: "ITM212223" },
  ];

  const columns = useMemo(() => [{ Header: "id", accessor: "id" }], []);
  const data = useMemo(() => products, []);

  const {
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 12 },
    },
    usePagination
  );

  // ✅ Print all (like SummaryReport)
  const handlePrintAll = () => {
    window.print();
  };

  // ✅ Print single (open in new tab then print)
  const handlePrintSingle = (code) => {
    const printWin = window.open("", "_blank");
    printWin.document.write(`
    <html>
      <head>
        <title>Print Barcode</title>
      </head>
      <body style="text-align:center; padding:20px;">
        <h3>${code}</h3>
        <svg id="barcode"></svg>
        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
        <script>
          JsBarcode("#barcode", "${code}", {height:80, width:2});
          window.onload = () => {
            window.print();
            // ✅ Close always after print dialog (even Cancel)
            window.onafterprint = () => window.close();
            // ✅ Fallback: auto-close if user cancels or ignores dialog
            setTimeout(() => {
              if (!window.closed) window.close();
            }, 000);
          };
        </script>
      </body>
    </html>
  `);
    printWin.document.close();
  };

  return (
    <div className="content AssetsPageChangecss AssetPaddingChange">
      <div className="marginforsmalldevice RemoveBorder card rounded-0">
        <div className="NewColorChange phoenix-toolbar d-flex align-items-center flex-wrap py-md-3 px-md-4 border-bottom gap-3">
          <div className="p-3 row MainRemovePaddingwidth" style={{ minWidth: "170px" }}>
            <h2 className="fw-bolder mb-5" style={{ fontSize: "2rem" }}>
              Print Barcode
            </h2>
            <div className="PrintIconDisplay">
              <div
                className="btn btn-light ps-0 fw-bold"
                onClick={handlePrintAll}
              >
                <i className="fa-solid fa-print me-2"></i>
                Print
              </div>
            </div>
          </div>
        </div>

        <div className="NewColorChange p-4 px-5">
          <div className="row g-4">
            {page.map((row, idx) => {
              const product = row.original;
              return (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card h-100 shadow-sm text-center p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <strong>{product.id}</strong>
                        <div>{product.name}</div>
                      </div>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handlePrintSingle(product.code)}
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </div>
                    <div className="my-2 ImageSize">
                      <Barcode value={product.code} height={70} width={1.8} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center py-2">
            <p className="mb-0 text-body fs-9" style={{ fontSize: "14px" }}>
              Page {pageIndex + 1} of {pageOptions.length}
            </p>

            <ul className="pagination mb-0 mt-2">
              <li className={`page-item ${!canPreviousPage ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => previousPage()}>
                  <span className="fas fa-chevron-left"></span>
                </button>
              </li>

              {pageOptions.map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${pageIndex === i ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => gotoPage(i)}>
                    {i + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${!canNextPage ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => nextPage()}>
                  <span className="fas fa-chevron-right"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBarcode;
