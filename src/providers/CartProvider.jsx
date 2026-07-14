import { CartContext } from '../context/CartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const isInCart = product => cart.some(item => item.id === product.id)

  const addProduct = product => {
    if (isInCart(product)) {
      const newCart = cart.map(item => {
        if (item.id === product.id) return {...item, count: item.count + product.count}
        return item
      })

      setCart(newCart)
    } else {
      setCart([...cart, product])
    }
  }

  const getProductsQuantity = () => {
    const total = cart.reduce((acc, current) => acc + current.count, 0)
    return total
  }

  return (
    <CartContext.Provider value={{ addProduct, getProductsQuantity, cart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
