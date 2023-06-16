import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, img, name, price}) => {
  return (
      <div className="card m-2 p-4 text-center" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title m-2">{name}</h5>
          <h4 className="card-text m-2">${price}</h4>
          <Link className="btn btn-primary" to={`/Item/${id}`}>More Details</Link>
        </div>
      </div>
  )
}

export default Item
