import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import PriceBox from "./PriceBox";
import WhatsAppChat from "./WhatsAppChat";

export default function LearnOnline() {
  //   this following code can be use to make cart dynamic
  //const [cart, setCart] = useState([]);
  // const [products] = useState([
  //   {
  //     name: "Learn German",
  //     price: 3000,
  //   },
  //   {
  //     name: "English Course",
  //     price: 4000,
  //   },
  //   {
  //     name: "GRE",
  //     price: 5000,
  //   },
  //   {
  //     name: "GMAT",
  //     price: 6000,
  //   },
  //   {
  //     name: "ILETS",
  //     price: 7000,
  //   },
  // ]);
  // const addtocart = (product) => {
  //   console.log("product added to cart");
  //   setCart([...cart, product]);
  // };
  return (
    <>
      <ButtonAppBar title="Learn Online" />

      <PriceBox title="English" price="4000-/" name="fdkfj" />
      <WhatsAppChat
        btnName="Contact Now"
        msg=" i would like to join English course. let me know for more details"
      />

      <hr />

      <PriceBox title="GRE" price="5000-/" />
      <WhatsAppChat
        btnName="Contact Now"
        msg=" i would like to join English course. let me know for more details"
      />

      <hr />

      <PriceBox title="GMAT" price="6000-/" />
      <WhatsAppChat
        btnName="Contact Now"
        msg=" i would like to join English course. let me know for more details"
      />

      <hr />

      <PriceBox title="ILETS" price="7000-/" />
      <WhatsAppChat
        btnName="Contact Now"
        msg=" i would like to join English course. let me know for more details"
      />

      <hr />

      {/*  this code can be use for adding add to cart functionality
       <Button varient="contained" color="primary">
        Go to Cart ({cart.length})
      </Button>
      {products.map((product, idx) => (
        <div key={idx}>
          <PriceBox title={product.name} price={product.price} />
          <Btn name="buy" onClick={() => addtocart(product)} />
          <hr />
        </div>
      ))} */}
    </>
  );
}
