import { useEffect, useState } from 'react'
import Item from '../components/Item'
const Itemlist = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      fetch('https://dummyjson.com/products')
         .then(res=>res.json())
         .then(data=>{
             setProductos(data.products)
         })
    }, [])
  return (
    <>
      <Item products={productos}/>
    </>
  )
}
export default Itemlist