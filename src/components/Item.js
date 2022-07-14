import '../css/Item.css'
const Item = (products) => {
  const datos = products.products
  
  return (
    <>
      {datos.map((e)=>(
        <div className="card w-96 bg-base-100 shadow-xl separacion" key={e.id}>
        <figure className="px-10 pt-10">
            <img src={e.thumbnail} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{e.title}</h2>
            <p>{e.description}</p>
            <h1 className='precio'>{e.price}$</h1>
            <div className="card-actions">
            
            <button className="btn btn-primary">Ver detalle</button>
            </div>
        </div>
    </div>
      ))}
    </>
  )
}
export default Item