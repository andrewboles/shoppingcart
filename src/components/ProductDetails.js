import {useParams, useOutletContext} from 'react-router-dom'
import "../styles/productdetails.css"

const ProductDetails = (props) => {
  let id = useParams().productid
  const thisProductTemp = props.products.filter(product=>{
    return product.id == id
  })
  const thisProduct = thisProductTemp[0]
  const [cartOpen, setcartOpen, cartContents, setcartContents] = useOutletContext()

  function handleAddToCart(e){
    const thisProductTemp = props.products.filter(product=>{
     return product.id == e.target.id
     })
    const thisProduct = thisProductTemp[0]
    setcartContents(cartContents.concat([thisProduct]))
    console.log(cartContents)
    e.stopPropagation()
    setcartOpen("yes")
    setTimeout(() => {setcartOpen("no")}, 3000);

  }
  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <h3>${thisProduct.price}</h3>
      <img className="mainimage"alt={thisProduct.name} src={thisProduct.images[0]}></img>
      <button id={thisProduct.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button>
    </div>
  );
};

export default ProductDetails;