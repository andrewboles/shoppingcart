import "../styles/minicart.css" 

const MiniCart = (props) => {

  function totalUp(){
    let sum = 0;
    Object.values(props.contents).map(product=>{
      sum += product.info.price*product.qty
      return null
    })
    return sum
  }

  return (
    <div className="minicart">
      <h2>Shopping Cart</h2>
      {Object.values(props.contents).map(product=>{
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

export default MiniCart;