import React from 'react';
import { groceryData } from '../../../assets/data';
import { storeContext } from '../../../context/storeContext';
import './SideInvoices.css'
import { useState, useContext } from 'react';

export default function SideInvoice() {

  const { addToCart, removeFromCart, cardItem, getTotalAmount } = useContext(storeContext);
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = groceryData.filter((data) =>
    data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data?.price.toString()?.includes(searchTerm)
  );

  return (  
    <div className='content AssetsPageChangecss AssetPaddingChange'>
      <div className="search-container d-flex  align-items-center justify-content-end mb-5 gap-3">

        <form className="position-relative me-1 w-30">
          <input className="form-control search-input search form-control-sm w"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <span className="fas fa-search search-box-icon"></span>
        </form>
      </div>
      <div className="d-flex overflow-x-scroll mb-7 gap-3  invoice-container">
        {filteredData.map((data, index) => (
          cardItem[data.id] ? (
            <div key={index} className="card  invoice-items" style={{ boxShadow: "0 0 10px #00000015" }}>
              <img src={data.image} className='card-img-top  imgwidth  border-bottom-0 ' alt="" />
              {!cardItem[data.id] ? (
                <img src='src/assets/img/bg/add_icon_white.png' className='add' width="30" onClick={() => addToCart(data.id)} alt='add'></img>
              ) : (
                <div className="item-counter">
                  <img src="src/assets/img/bg/remove_icon_red.png" width="30" alt="-" onClick={() => removeFromCart(data.id)} />
                  {cardItem[data.id]}
                  <img src="src/assets/img/bg/add_icon_green.png" width="30" alt="+" onClick={() => addToCart(data.id)} />
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
          ) : null
        ))}
      </div>
      <hr className='mb-7' style={{ height: "1px" }} />
      <div className="side-invoice table-responsive">
        <table className='table table-hover mb-3 table-sm fs-9'>
          <thead>
            <tr className='p-4'>
              <th className='border-top'>Item</th>
              <th className='border-top'>Title</th>
              <th className='border-top'>Price</th>
              <th className='border-top'>Quantity</th>
              <th className='border-top'>Total</th>
              <th className='border-top'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => {
              if (cardItem[data.id] > 0) {
                return (
                  <tr key={index}>
                    <td className='align-middle '><img src={data.image} alt="" width="50" height="50" className='' /></td>
                    <td className='align-middle' >{data.title}</td>
                    <td className='align-middle' >${data.price}</td>
                    <td className='align-middle' >{cardItem[data.id]}</td>
                    <td className='align-middle' >${cardItem[data.id] * data.price}</td>
                    <td className='align-middle ps-5 cursor-pointer text-danger' onClick={() => removeFromCart(data.id)}>X</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
