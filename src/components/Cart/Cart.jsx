import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Cart = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  const { cart, clearCart } = useContext(CartContext);

  const totalCantidad = cart.reduce((total, producto) => total + producto.cantidad, 0);

  const total = cart.reduce((total, producto)=> total + (producto.item.price * producto.cantidad), 0)



  if (totalCantidad === 0){
    return (
      <div className='carritoVacio m-3 text-center'>
        <h2>Cart is Empty</h2>
        <Link to='/'> HOME </Link>
      </div>
    )
  }


  return (
    <div className='carrito d-flex row'>
      <h1 className='text-center m-2 p-2' data-aos="fade-right" data-aos-duration="1000">Your Selected Products</h1>
      <table className='table'>
        <tbody className='tabla'>
          {cart.map((producto) => (
            <CartItem key={producto.item.id} producto={producto.item} {...producto} />
          ))}
        </tbody>
      </table>
      <h4>Total Products {totalCantidad} </h4>
      <h4>Total $ {total} </h4>
      <Link to={`/checkout`}  className='btn btn-success m-2'>Pay</Link>
      <button className='btn btn-warning m-2' onClick={()=>clearCart()}>Delete</button>
    </div>
  )
}

export default Cart
