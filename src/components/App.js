import {
  Link,
  Outlet
} from "react-router-dom";

import gibby from '../images/Gibraltar.jpg'
import loba from "../images/Loba.png"

import {useState, useEffect} from 'react'

export function App() {
  return (
    <div>
      <h1>Vintage Synthesizers at Exorbitant Prices!</h1>
      <nav>
        <Link to="Shop">Shop</Link> |{" "}
        <Link to="fullcart">Cart</Link>
      </nav>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export function ProductList(){
  let [products, setProducts] = useState([])

  let initProducts = [
      { 
        id: 845678,
        name: "Moog One",
        price: 2250,
        images: [gibby]
      },
      {
        id: 845679,
        name: "Prophet 8",
        price: 3500,
        images: [loba]
      }]

      useEffect(()=>{
        setProducts(initProducts)
      },[])

      return products
}
