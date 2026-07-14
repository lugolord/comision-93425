import Item from './Item'

function ItemList ({ items }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-5'>
      {items.map(item => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemList
