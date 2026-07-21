import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'

function Checkout () {
  const { cart } = useContext(CartContext)

  const handleCreateOrder = (e) => {
    e.preventDefault()

    const form = e.target
    const userName = form.userName.value
    const userEmail = form.userEmail.value
    const userPhone = form.userPhone.value
    const userAddress = form.userAddress.value

    const order = {
      user: {userName, userEmail, userPhone, userAddress},
      items: cart,
      time: serverTimestamp()
    }

    createOrder(order)
  }

  return (
    <div className='px-10 mt-10'>
      <form onSubmit={handleCreateOrder}>
         <input 
          type="text" 
          className="input w-full mb-3" 
          placeholder="Pepito Perez"
          id='userName' 
         />
         <input 
          type="email" 
          className="input w-full mb-3" 
          placeholder="pepito@gmail.com" 
          id='userEmail'
         />
         <input 
          type="text" 
          className="input w-full mb-3" 
          placeholder="+5491123434565" 
          id='userPhone'
         />
         <input 
          type="text" 
          className="input w-full mb-3" 
          placeholder="Cordoba 123" 
          id='userAddress'
         />
         <button className='btn btn-block btn-primary'>
          finalizar compra
        </button>
      </form>
    </div>
  )
}

export default Checkout
