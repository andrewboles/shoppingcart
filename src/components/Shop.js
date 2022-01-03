import { useNavigate, useOutletContext } from 'react-router-dom'
import {useState, useEffect} from 'react'
import React from 'react'
import "../styles/Shop.css"


const Shop = (props) => {
  let [cartSubmit, setcartSubmit] = useState({})


  const navigate = useNavigate();
  function handleClick(id){
    navigate(`/shop/${id}`)
  }
  const [cartOpen, setcartOpen, cartContents, setcartContents] = useOutletContext()
  
  function handleAddToCart(e){
    let addQty = cartSubmit[e.target.id] ?? 1
    setcartOpen("yes")
    setTimeout(()=>{setcartOpen("no")}, 3000);
    e.stopPropagation()
    const thisProductTemp = props.products.filter(product=>{
     return product.id == e.target.id
     })
    const thisProduct = thisProductTemp[0]
    const prodid = thisProduct.id
    if(cartContents[prodid]?.qty){
      setcartContents(cartContents=>({...cartContents,[prodid]: {
        qty: cartContents[prodid].qty+addQty,
        info: thisProduct
      }}));
    }else{
      setcartContents(cartContents=>({
        ...cartContents,[prodid]:{
          qty: addQty,
          info: thisProduct
        }
      }))

    }
  }

  useEffect(()=>{
    props.products.map(product=>{
      setcartSubmit(cart=>({...cart,[product.id]: 1}))
    })
  },[props])

  function handleChange(e){
    if(Number(e.target.value)){
     setcartSubmit(cartContents=>({...cartContents,[e.target.id]: Number(e.target.value)}))
    }else{
      return false
    }
  }
  return (
    <div id="shop-container">

      {props.products.map(product=>{
         
        return <div key={product.id} className="product-card" onClick={e=>{handleClick(product.id)}}>
          <img alt={product.name} src={product.images[0]} className="product-icon"></img>
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <input value={cartSubmit[product.id]} id={product.id} type="number" min="0" max="100" maxLength="3" onClick={e=>{e.stopPropagation()}} onChange={e=>{handleChange(e)}}></input>
          <button id={product.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button>
        </div>
      })}
    </div>
  );
};

export default Shop;