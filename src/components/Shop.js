import { useNavigate, useOutletContext } from 'react-router-dom'
import React from 'react'
import "../styles/Shop.css"


const Shop = (props) => {

  const navigate = useNavigate();
  function handleClick(id){
    navigate(`/shop/${id}`)
  }
  const [cartOpen, setcartOpen, cartContents, setcartContents] = useOutletContext()
  
  function handleAddToCart(e){
    e.stopPropagation()
    const thisProductTemp = props.products.filter(product=>{
     return product.id == e.target.id
     })
    const thisProduct = thisProductTemp[0]
    const prodid = thisProduct.id
    // console.log(`id type: ${typeof prodid}`)
    console.log(`prod object: ${cartContents[prodid]}`)
    if(cartContents[prodid]?.qty){
      console.log("right track")
      console.log(Object.keys(cartContents[prodid]))
      setcartContents(cartContents=>({...cartContents,[prodid]: {
        qty: cartContents[prodid].qty+1,
        info: thisProduct
      }}));
    }else{
      setcartContents(cartContents=>({
        ...cartContents,[prodid]:{
          qty: 1,
          info: thisProduct
        }
      }))

    }

    // console.log(`current qty: ${Object.keys(cartContents)}`)

    setcartOpen("yes")
    setTimeout(() => {setcartOpen("no")}, 3000);

  }

  return (
    <div id="shop-container">
      {props.products.map(product=>{
        return <div key={product.id} className="product-card" onClick={e=>{handleClick(product.id)}}>
          <img alt={product.name} src={product.images[0]} className="product-icon"></img>
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <button id={product.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button>
        </div>
      })}
    </div>
  );
};

export default Shop;