import React, { useContext, useState } from 'react'
import { groceryData } from '../../../assets/data';
import { storeContext } from '../../../context/storeContext';
import Example from '../../../Components/itemCartModal';

export default function ItemCart() {
  const [showModal, setShowModal] = useState(false);
  const { addToCart, removeFromCart, cardItem, getTotalAmount } = useContext(storeContext);
  const [searchTerm, setSearchTerm] = useState("");
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Change page size as needed

  // Filter data based on search
  const filteredData = groceryData.filter((data) =>
    data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data?.price.toString()?.includes(searchTerm)
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pagedData = filteredData.slice(startIdx, endIdx);

  // Handlers
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const goToPage = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className='content AssetsPageChangecss AssetPaddingChange'>
      <div className="search-container d-flex align-items-center justify-content-between mb-5 ps-5 mt-5 gap-3">
        <h2>Item Cart</h2>
        <div className='d-flex'>
          <div className="card-info position-relative me-3" onClick={() => setShowModal(true)}>
            {showModal && <Example showModal={showModal} setShowModal={setShowModal} />}
            <i className="fa-solid fa-basket-shopping fs-2 text-secondary"></i>
            <div className={`${getTotalAmount() === 0 ? "" : "dot"}`}></div>
          </div>
          <form className="position-relative me-7 w-100">
            <input className="form-control search-input search form-control-sm w"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1) // Reset page on search
              }}
            />
            <span className="fas fa-search search-box-icon"></span>
          </form>
        </div>
      </div>

      <div className="d-flex flex-wrap ps-5">
        {pagedData.map((data, index) => (
          <div key={index} className="card shadow cardwidth">
            <img src={data.image} className='card-img-top ttop border-bottom-0 ' alt="" />
            {!cardItem[data.id] ? (
              <img src='/src/assets/img/bg/add_icon_white-min.png' className='add' width="30" onClick={() => addToCart(data.id)} alt='add'></img>
            ) : (
              <div className="item-counter">
                <img src="/src/assets/img/bg/remove_icon_red-min.png" width="30" alt="-" onClick={() => removeFromCart(data.id)} />
                {cardItem[data.id]}
                <img src="/src/assets/img/bg/add_icon_green-min.png" width="30" alt="+" onClick={() => addToCart(data.id)} />
              </div>
            )}

            <div className="card-body ">
              <div className="card-title">
                <h5>{data.title}</h5>
              </div>
              <p className="card-text cardt mb-3 small">{data.description}</p>
              <p className="card-text fw-bold">${data.price}</p>
            </div>
          </div>
        ))}
        {pagedData.length === 0 && (
          <h5 className="text-center w-100">No items found</h5>
        )}
      </div>

      {/* PAGINATION */}
      <div className="d-flex justify-content-between mt-3">
        <span className="d-none d-sm-inline-block" data-list-info="data-list-info"></span>
        <div className="d-flex">
          <button className="page-link" disabled={currentPage === 1} onClick={handlePrevPage}>
            <span className="fas fa-chevron-left"></span>
          </button>
          <ul className="mb-0 pagination">
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                <a className="page-link" href="#" onClick={e => { e.preventDefault(); goToPage(i + 1); }}>{i + 1}</a>
              </li>
            ))}
          </ul>
          <button className="page-link pe-0" disabled={currentPage === totalPages} onClick={handleNextPage}>
            <span className="fas fa-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  )
}
