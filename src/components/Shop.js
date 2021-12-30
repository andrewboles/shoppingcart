import{useNavigate} from 'react-router-dom'

import "../styles/Shop.css"

const Shop = (props) => {
  return (
    <div id="shop-container">
      {props.products.map(product=>{
        return <div key={product.id} className="product-card" onClick={()=>{Click(product.id)}}>
          <img alt={product.name} src={product.images[0]} className="product-icon"></img>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
        </div>
      })}
    </div>
  );
};

//need to figure out how to use "link or useNavigate" instead, breaking hooks rules
const Click = (id)=>{
  window.location = `/${id}`

}

export default Shop;