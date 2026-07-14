import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { category } = useParams()

  useEffect(() => {
    const url = 'https://dummyjson.com/products'
    const urlCategories = `https://dummyjson.com/products/category/${category}`
    
    fetch(category ? urlCategories : url)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [category])
  
  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer
