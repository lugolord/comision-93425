import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ItemCount ({ item }) {
  const [count, setCount] = useState(1)
  const { addProduct } = useContext(CartContext)

  const handleIncrease = () => setCount(count + 1)
  const handleDecrease= () => setCount(count - 1)
  const handleAddToCart = () => addProduct({...item, count})

  return (
    <div>
      <p>{count}</p>
      <button className='btn' onClick={handleIncrease}>+</button>
      <button className='btn' onClick={handleDecrease}>-</button>
      <button className='btn' onClick={handleAddToCart}>add to cart</button>
    </div>
  )
}

export default ItemCount
