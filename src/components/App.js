import {
  Link,
  Outlet,
} from "react-router-dom";

import moog11 from '../images/moogone1.png'
import moog12 from "../images/moogone2.png"
import sub371 from '../images/moogsub37-1.png'
import sub372 from "../images/moogsub37-2.png"
import MiniCart from './MiniCart'

import {useState, useEffect} from 'react'

import "../styles/App.css"

export function App() {

  const [cartOpen, setcartOpen] = useState("no")
  const [cartContents, setcartContents] = useState({})

  function totalUp(){
    let sum = 0;
    Object.values(cartContents).map(product=>{
      sum += product.qty
      return null
    })
    return sum
  }

  return (
    <div id="app-content">
      <h1>Vintage Synthesizers at Exorbitant Prices!</h1>
      <nav>
        <Link to="shop">Products</Link> |{" "}
        <Link to="fullcart">Cart - {totalUp()}</Link>
      </nav>
      <div className="content">
        <Outlet context={[cartOpen, setcartOpen, cartContents, setcartContents]}/>
        {cartOpen === "yes" && <MiniCart contents={cartContents}/>}
      </div>
    </div>
  );
}

export function ProductList(){
  let [products, setProducts] = useState([])

  let initProducts = [
      { 
        id: 845678,
        name: "Moog One 8-voice Analog Synthesizer",
        price: 6999,
        images: [moog11, moog12]
      },
      {
        id: 845679,
        name: "Moog Subsequent 37 Analog Synthesizer",
        price: 1799,
        images: [sub371, sub372]
      },]

      useEffect(()=>{
        setProducts(initProducts)
      },[])

      return products
}
