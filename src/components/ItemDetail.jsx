import ItemCount from './ItemCount'

function ItemDetail ({ item }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mt-10'>
      <div className='flex justify-center'>
        <img src={item.image} alt={item.name} />
      </div>
      <div className='flex flex-col gap-5 px-3'>
        <h2 className='font-medium text-2xl'>{item.name}</h2>
        <p className='font-medium text-primary'>${item.price}</p>
        <p>{item.description}</p>
        <ItemCount item={item} />
      </div>
    </div>
  )
}

export default ItemDetail
