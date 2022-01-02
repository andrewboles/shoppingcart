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
    <div>
      <h1>{thisProduct.name}</h1>
      <h3>${thisProduct.price}</h3>
      <img className="mainimage"alt={thisProduct.name} src={thisProduct.images[0]}></img>
      <button id={thisProduct.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button>
    </div>
  );
};

export default ProductDetails;