import React, { useState,useRef, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {storeContext} from '../context/StoreContext';
import { groceryData } from '../assets/data';

function Example({showModal,setShowModal}) {
  
  const toggle = () => setShowModal(!showModal)
  const {cardItem,removeFromCart,getTotalAmount} = useContext(storeContext);
  return (
    <div>
      
      <Modal isOpen={showModal} backdrop={true} toggle={toggle}>
        <ModalHeader className='text-uppercase' >Item Card Detail</ModalHeader>
        <ModalBody className='p-4'>
          <table className='table table-hover mb-3'>
            <thead>
              <tr>
                <th>Item</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
              </thead>
              <tbody>
                {groceryData.map((data,index)=>{
                  if(cardItem[data.id]>0){
                    return(
                <tr key={index}>
                  <td className='align-middle '><img src={data.image} alt="" width="50" className='ms-2'/></td>
                  <td className='align-middle' >{data.title}</td>
                  <td className='align-middle' >${data.price}</td>
                  <td className='align-middle' >{cardItem[data.id]}</td>
                  <td className='align-middle' >${cardItem[data.id]*data.price}</td>
                  <td  className='align-middle ps-5 cursor-pointer text-danger' onClick={()=>removeFromCart(data.id)}>X</td>
                </tr>
                 )}
                })}
              </tbody>
          </table>
          <div className="card-price float-end">
                   <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                      <h5 className="fw-bold mb-0">Sub Total :</h5>
                      <span className="fw-normal">{getTotalAmount()}</span>
                    </div>      
                 
                  <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                     <h5 className="fw-bold mb-0">Grand Total :</h5>
                     <span className="fw-normal">{getTotalAmount()}</span>
                   </div>      
            </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Checkout
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;