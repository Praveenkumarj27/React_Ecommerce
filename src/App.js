import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {

  
  // const[products,setProduct] = useState([
    let products=[
    {
      id:1,
      title: "Apple iPhone 13 Pro Max (256 GB) - Alpine Green",
      price: 140000,
      img: "https://m.media-amazon.com/images/I/611ovP2GkrL._SL1500_.jpg",
    },
    {
      id:2,
      title: "OnePlus Nord CE 2 Lite 5G(Black Dusk, 6GB RAM, 128GB Storage)",
      price: 20000,
      img: "https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg",
    },
    {
      id:3,
      title: "Samsung Galaxy M33 5G (Emerald Brown, 6GB, 128GB Storage) ",
      price: 18000,
      img: "https://images-eu.ssl-images-amazon.com/images/I/419KF2t1nML._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id:4,
      title: "Oppo F21 (Fantasy White, 6GB RAM, 128GB Storage)",
      price: 12000,
      img: "https://images-eu.ssl-images-amazon.com/images/I/410UOtOGvsL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id:5,
      title: "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage)",
      price: 10000,
      img: "https://m.media-amazon.com/images/I/71kVEmAMyEL._SL1500_.jpg",
    },
    {
      id:6,
      title: "Vivo Y21 5G (Sunshine Gold, 8GB RAM 128GB Storage)",
      price: 30000,
      img: "https://m.media-amazon.com/images/I/61+g8YugcML._SL1500_.jpg",
    },
    {
      id:7,
      title: "realme narzo 50A(Oxygen Blue , 4GB RAM + 128 GB Storage) ",
      price: 12000,
      img: "https://m.media-amazon.com/images/I/81Ke5qtC6oL._SL1500_.jpg",
    },
  ];
  
  const[cartItem,setCartItem]=useState([])
  const[total,setTotal]=useState(0)

  let handleaddTocart=(id)=>{
   const productIndex=products.findIndex(obj=>obj.id===id)
   const product=products[productIndex]
   setCartItem([...cartItem,product])
   setTotal (total+product.price)
  }


  let handleRemoveCart = (id) => {
    const cartIndex = cartItem.findIndex((obj) => obj.id === id);
    setTotal(total - cartItem[cartIndex].price);
    cartItem.splice(cartIndex, 1);
    setCartItem([...cartItem]);
  };
  
  return (
    <div className="container">

      <div className="row">
        <div className="col-lg-12">
          <h4>Products</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {products.map((item) => {
              return <Card cartItem={cartItem} data={item} handleaddTocart={handleaddTocart}></Card>;
            })}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
          <div className="col-lg-12">
          <h4 className='cart'>Cart</h4>
        </div>

        <ol className="list-group list-group-numbered">
         { cartItem.map((item)=>{
          return <CartItem data={item} handleRemoveCart={handleRemoveCart}/>
          })}
           </ol>
           <div className="col-lg-12">
           <h2>Total:{total}</h2>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
