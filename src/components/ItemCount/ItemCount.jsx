import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({inicial, stock, funcionAgregar}) => {
  const [contador, setContador] = useState(inicial)

  const incrementar = ()=>{
    if(contador < stock){
      setContador(contador + 1)
    }
  };

  const decrementar = ()=>{
    if(contador > inicial){
      setContador(contador - 1)
    }
  };

  return (
    <>
    <div className='d-flex flex-column m-2 p-2'>
      <h6>Quantity</h6>
    <button className='btn btn-primary m-2' onClick={incrementar}>+</button>
      <strong>{contador}</strong>
      <button className='btn btn-primary m-2' onClick={decrementar}>-</button>
      <button className='btn btn-primary m-2' onClick={() => funcionAgregar(contador)}>Add to cart</button>
    </div>
    </>
  )
}

export default ItemCount

