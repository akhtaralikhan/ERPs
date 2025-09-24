// ✅ Search Component
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <div className="PrintSearchPadding search-bars d-flex p-4 pb-0 ps-0 mb-2">
      <div className="search-box mb-3 position-lg-relative">
        <div className="position-relative">
          <input
            className="PrintSearchPaddingmain form-control search-input search form-control-sm pt-2 pb-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <span className="fas fa-search search-box-icon"></span>
        </div>
      </div>
    </div>
  );
}

export default GlobalFilter;
