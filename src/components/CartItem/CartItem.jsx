import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartItem.css'

const CartItem = ({producto, cantidad}) => {
    const { deleteProd } = useContext(CartContext)

  return (

    <tr className="text-center align-items-center d-flex">
      <td><h6>{producto.name} </h6></td>
      <td><img className="imgCarrito img-fluid" src={producto.img} alt={producto.name} /></td>
      <td><h6> Quantity : {cantidad} </h6></td>
      <td><h6> Price: $ {producto.price * cantidad} </h6></td>
      <td><button className="btn btn-warning m-2" onClick={()=> deleteProd(producto.id)}> Delete Prod </button></td>
    </tr>

  )
}

export default CartItem
