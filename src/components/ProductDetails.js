import {useParams, useOutletContext} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "../styles/productdetails.css"

const ProductDetails = (props) => {
  let [cartSubmit, setcartSubmit] = useState({})
  let id = useParams().productid
  const thisProductTemp = props.products.filter(product=>{
    return product.id == id
  })
  const thisProduct = thisProductTemp[0]
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
      setcartSubmit(cart=>({...cart,[thisProduct.id]: 1}))
    })
  },[props]);

  function handleChange(e){
    if(Number(e.target.value)){
     setcartSubmit(cartContents=>({...cartContents,[e.target.id]: Number(e.target.value)}))
    }else{
      return false
    }
  };

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <h3>${thisProduct.price}</h3>
      <img className="mainimage"alt={thisProduct.name} src={thisProduct.images[0]}></img>
      <input value={cartSubmit[thisProduct.id]} id={thisProduct.id} type="number" min="0" max="100" maxLength="3" onClick={e=>{e.stopPropagation()}} onChange={e=>{handleChange(e)}}></input>
      <button id={thisProduct.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button>
    </div>
  );
};

export default ProductDetails;