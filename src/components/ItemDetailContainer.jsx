import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getDetail } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [item, setItem] = useState({ image: '/', name: '', price: 0, description: '' })
  const { id } = useParams()

  useEffect(() => {
    getDetail(id).then(detail => setItem(detail))
  }, [id])
  
  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer
