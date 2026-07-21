import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

function Cart () {
  const { cart, getTotal } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className='px-5 mt-5 md:px-10'>
      <h2 className='text-2xl font-medium'>Carrito</h2>
      <hr className='my-5 text-gray-600' />
      <div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Revisa si todo esta bien</li>
          
          {cart.map(prod => (
            <li className="list-row">
              <div><img className="size-10 rounded-box" src={prod.image}/></div>
              <div>
                <div>{prod.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{prod.count} x ${prod.price}</div>
              </div>
              <button className="btn btn-square btn-ghost">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-5'>
        <h3>Subtotal: ${getTotal().toFixed(2)}</h3>
        <button 
          className='mt-5 btn btn-primary btn-block md:btn-wide'
          onClick={() => navigate('/checkout')}
        >
          ir al checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
