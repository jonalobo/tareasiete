import { useState } from 'react'
import '../css/ItemCount.css'
const ItemCount = ({stock, initial}) => {

  /* Código */
  const [count, setCount] = useState(Number(initial))

  const onAdd = ()=>{
    if (count < stock) {
      console.log('Bucle')
      setCount(count + 1)
    }
  }
  const restar = ()=>{
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="contenedorItemCount">
      <div className='contador'>{count}</div>
      <div className='botones'>
        <button className="btn btn-primary" onClick={onAdd}>+</button>
        <button className="btn btn-secondary" onClick={restar}>-</button>
      </div>
    </div>
  )
}
export default ItemCount