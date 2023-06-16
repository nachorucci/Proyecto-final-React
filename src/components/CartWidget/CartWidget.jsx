import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'
import cartImg from '/assets/img/cartwhite-removebg-preview.png'


const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext);

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    
    return (
        <Link style={linkStyle} to={'/cart'} >
            <img className='cartImg' src={cartImg} alt="cart" />
            {
                totalCantidad > 0 && <strong> {totalCantidad} </strong>
            }
        </Link>
  )
}

export default CartWidget
