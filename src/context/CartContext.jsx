import { useState, createContext, useEffect } from "react";


export const CartContext = createContext({ cart:[] })

export const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([])
    
    

    const addToCart = (item, cantidad)=>{
        if(!isInCart(item.id)){
            setCart(prev =>[...prev, {item, cantidad}])
        }else{
            console.log("producto ya agregado!")
        }
        console.log(item)
    };

    const isInCart = (id)=>{
        return cart.some((prod) => prod.item.id === id)
    }

    const deleteProd = (id)=>{
        const cartFilter = cart.filter (prod => prod.item.id !== id);
        setCart(cartFilter);
    };


    const clearCart = ()=>{
        setCart([]);
    }


    const totalCantidad = cart.reduce((total, producto)=> total + producto.cantidad, 0);


    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProd, clearCart, totalCantidad }}>
          {children}
        </CartContext.Provider>
      );
};



