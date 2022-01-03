import "../styles/fullcart.css" 
import { useOutletContext } from 'react-router-dom'

const FullCart = (props) => {
  
  const [cartOpen, setcartOpen, cartContents, setcartContents] = useOutletContext()
  setcartOpen("no")

  function totalUp(){
    let sum = 0;
    Object.values(cartContents).map(product=>{
      sum += product.info.price*product.qty
      return null
    })
    return sum
  }

  return (
    <div className="fullcart">
      <h2>Shopping Cart</h2>
      {Object.values(cartContents).map(product=>{
        // console.log(product)
        return <div key={product.info.id} className="productcontainer" >
          <img alt={product.info.name} src={product.info.images[0]} className="productimage"></img>
          <h6>{product.info.name}</h6>
          <h6>{product.qty}</h6>
          {/* <button id={product.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button> */}
        </div>
      })}
      <div>Total: {totalUp()}</div>
    </div>
  );
};

export default FullCart;