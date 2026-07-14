import { useNavigate } from 'react-router'

function Item ({ item }) {
  const navigate = useNavigate()

  return (
    <div className="card bg-base-200 shadow-sm cursor-pointer" onClick={() => navigate(`/item/${item.id}`)}>
      <figure>
        <img
          src={item.thumbnail}
          alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
        </h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{item.category}</div>
        </div>
      </div>
    </div>
  )
}

export default Item
