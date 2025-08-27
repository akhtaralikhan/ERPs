import React from 'react'
import {groceryData} from '../../assets/data'
export default function Bills() {
  return (
    <div className='content'>
      <div className="d-flex flex-wrap">
      {groceryData.map((data,index)=>(
        <div key={index} className="card shadow">
          <img src={data.image} className='card-img-top border-bottom-0 h-auto' alt="" height="50%"  width="100%"/>
          <div className="card-body ">
            <div className="card-title">
              <h5>{data.title}</h5>
            </div>
            <div className="card-text">{data.description}</div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
