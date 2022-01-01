import "../styles/fullcart.css" 

const FullCart = (props) => {
  return (
    <div id="fullcart">
      {props.products.map(product=>{
        return <div key={product.id} className="productcontainer" >
          <img alt={product.name} src={product.images[0]} className="productimage"></img>
          <h6>{product.name}</h6>
          {/* <button id={product.id} onClick={e=>{handleAddToCart(e)}} >Add to Cart</button> */}
        </div>
      })}
    </div>
  );
};

export default FullCart;