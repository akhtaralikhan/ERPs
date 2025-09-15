function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <div className="search-box">
      <div className="position-relative">
        <form className="position-relative" onSubmit={(e)=>e.preventDefault()}>
          <input
            className="form-control search-input search form-control-sm py-2  "
            type="search"
            placeholder="Search Orders"
            aria-label="Search"
            value={globalFilter || ""}
            onChange={(e)=>setGlobalFilter(e.target.value)}
            setGlobalFilter={setGlobalFilter}
          />
          <span className="fas fa-search search-box-icon"></span>
        </form>
      </div>
    </div>
  );
}
export default GlobalFilter;