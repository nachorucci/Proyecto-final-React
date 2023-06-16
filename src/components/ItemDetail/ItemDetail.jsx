import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'





const ItemDetail = ({id, img, name, price, desc, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { addToCart } = useContext(CartContext)


  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);
    //console.log("productos agregados" + cantidad);

    const item = {id, name, price, img, cantidad};
    addToCart(item, cantidad)

  }

  return (
    <div className="contenedorItem align-items-center d-flex m-5 p-5 flex-wrap justify-content-center">
      <h2 className='m-2'>{name}</h2>
      <h5 className='m-2'>{desc}</h5>
      <img className='p-2' src={img} alt={name} />
      <h1 className='m-2 p-2'>${price}</h1>
      {
        agregarCantidad > 0 ? (<Link to="/cart" className='btn btn-primary'> Finish Buying </Link>) : (<ItemCount inicial={1} stock={stock}
         funcionAgregar={manejadorCantidad}></ItemCount>)
      }
    </div>
  )
}

export default ItemDetail
