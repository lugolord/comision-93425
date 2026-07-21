import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, filterProducts } from '../firebase/db'
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { category } = useParams()

  useEffect(() => {
    if (category) {
      filterProducts(category).then(prods => setItems(prods))
    } else {
      getProducts().then(prods => setItems(prods))
    }
  }, [category])
  
  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer
