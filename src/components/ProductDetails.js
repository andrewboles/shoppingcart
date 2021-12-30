import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  return (
    <div>
      <h1>Hello from {`Product #: ${useParams().productid}`} Details</h1>
      
    </div>
  );
};

export default ProductDetails;