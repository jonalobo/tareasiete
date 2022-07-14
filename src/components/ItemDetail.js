import '../css/ItemDetail.css'
const ItemDetail = (props) => {

  const product = props.producto
  

  return (
    <>
      {product.map((e)=>(
        <div className="container">
        <div className="bloque_detalle">
          <div className='imagen'>
            <img src={e.thumbnail} alt='' className='object-contain' />
          </div>
          <div className='texto'>
            <div className='titulo'>{e.title}</div>
            <div className='descripcion'><div className='dsletras'>{e.description}</div></div>
            <div className='precio'>{e.price}$</div>
            <div className='btn_comprar'>
              <button class="btn">Comprar</button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}
export default ItemDetail