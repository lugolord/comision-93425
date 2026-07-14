import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

function Cart () {
  const { cart } = useContext(CartContext)
  return (
    <div>
      {cart.map(prod => <p key={prod.id}>{prod.title}</p>)}
    </div>
  )
}

export default Cart
