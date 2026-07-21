import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from '../components/Navbar'
import ItemListContainer from '../components/ItemListContainer'
import Cart from '../components/Cart'
import ItemDetailContainer from '../components/ItemDetailContainer'
import NotFound from '../components/NotFound'
import Checkout from '../components/Checkout'

function AppRouter () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
