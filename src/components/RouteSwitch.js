import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {App} from "./App";
import {ProductList} from "./App";
import FullCart from "./FullCart"
import ProductDetails from "./ProductDetails"
import Shop from "./Shop"


function RouteSwitch() {
  // console.log(useParams())
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Shop products={ProductList()} />} />
        <Route path="fullcart" element={<FullCart products={ProductList()}/>} />
        {/* <Route path="help" element={<Help />} /> */}
        <Route path="shop/:productid" element={<ProductDetails products={ProductList()}/>} />
        <Route path="shop" element={<Shop products={ProductList()}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}


export default RouteSwitch;