import { useState,useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import '../css/ItemDetailContainer.css'
const ItemDetailContainer = () => {

  const data = [{
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  }]
  const [datos, setDatos] = useState([])

  useEffect(() => {
    const getItem = ()=>{
      return new Promise ((resolve,reject)=>{
        setTimeout(() => {
          resolve(data)
        }, 2000);
      })
    }
    getItem().then((res)=>{
      setDatos(res)
    })
  }, [])
  
  
  return (
    <>
      <ItemDetail producto={datos}/>
    </>
  )
}
export default ItemDetailContainer