import React, { useContext, useState } from 'react'
import { groceryData } from '../../../assets/data';
import { storeContext } from '../../../context/storeContext';
import Example from '../../../Components/itemCartModal';


export default function ItemCart() {

  const [showModal, setShowModal] = useState(false);
  const { addToCart, removeFromCart, cardItem, getTotalAmount } = useContext(storeContext);
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = groceryData.filter((data) =>
    data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data?.price.toString()?.includes(searchTerm)
  );

  return (

    <div className='content AssetsPageChangecss AssetPaddingChange'>

      <div className="search-container d-flex  align-items-center justify-content-between mb-5 ps-5 mt-5 gap-3">
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
              onChange={(e) => setSearchTerm(e.target.value)} />
            <span className="fas fa-search search-box-icon"></span>
          </form>
        </div>
      </div>

      <div className="d-flex flex-wrap ps-5">
        {filteredData.map((data, index) => (
          <div key={index} className="card shadow cardwidth">
            <img src={data.image} className='card-img-top ttop border-bottom-0 ' alt="" />
            {!cardItem[data.id] ? (
              <img src='/src/assets/img/bg/add_icon_white.png' className='add' width="30" onClick={() => addToCart(data.id)} alt='add'></img>
            ) : (
              <div className="item-counter">
                <img src="/src/assets/img/bg/remove_icon_red.png" width="30" alt="-" onClick={() => removeFromCart(data.id)} />
                {cardItem[data.id]}
                <img src="/src/assets/img/bg/add_icon_green.png" width="30" alt="+" onClick={() => addToCart(data.id)} />
              </div>
            )}

            <div className="card-body ">
              <div className="card-title">
                <h5>{data.title}</h5>
              </div>
              <div className="card-text cardt mb-3">{data.description}</div>
              <div className="card-text fw-bold">${data.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div class="d-flex justify-content-between mt-3">
        <span class="d-none d-sm-inline-block" data-list-info="data-list-info"></span>
        <div class="d-flex">
          <button class="page-link" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
          <ul class="mb-0 pagination">
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
          </ul>
          <button class="page-link pe-0" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
        </div>
      </div>
    </div>
  )
}
