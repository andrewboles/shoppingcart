import "../styles/fullcart.css" 

const FullCart = (props) => {
  return (
    <div id="fullcart">
      {Object.values(props.contents).map(product=>{
        // console.log(product)
        return <div key={product.info.id} className="productcontainer" >
          <img alt={product.info.name} src={product.info.images[0]} className="productimage"></img>
          <h6>{product.info.name}</h6>
          <h6>{product.qty}</h6>
          {/* <button id={product.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button> */}
        </div>
      })}
    </div>
  );
};

export default FullCart;