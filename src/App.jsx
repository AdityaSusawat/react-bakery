import { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";

const products = [
  {
    id: crypto.randomUUID(),
    name: "Cake",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Cake. Oh sweet Cake. I really like this.",
    img: "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Waffle",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Waffle. Oh sweet Waffle. I really like this.",
    img: "https://c.ndtvimg.com/2020-09/mb8tib3o_waffle-maker_625x300_07_September_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  },
  {
    id: crypto.randomUUID(),
    name: "Ice cream",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Ice cream. Oh sweet Ice cream. I really like this.",
    img: "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Ficecream_sushinair_cover_3152023-1200.jpg?auto=format%2Ccompress&fit=max&w=1200",
  },
  {
    id: crypto.randomUUID(),
    name: "Cookies",
    price: getRandomPriceInRange(200, 400),
    description: "These are Cookies. Oh sweet Cookies. I really like this.",
    img: "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-superJumbo.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Soft cake",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Soft cake. Oh sweet Soft cake. I really like this.",
    img: "https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Italian-Tiramisu-with-Mint-and-Chocolate.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Cake 2",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Cake. Oh sweet Cake. I really like this.",
    img: "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Waffle 2",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Waffle. Oh sweet Waffle. I really like this.",
    img: "https://c.ndtvimg.com/2020-09/mb8tib3o_waffle-maker_625x300_07_September_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  },
  {
    id: crypto.randomUUID(),
    name: "Ice cream 2",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Ice cream. Oh sweet Ice cream. I really like this.",
    img: "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Ficecream_sushinair_cover_3152023-1200.jpg?auto=format%2Ccompress&fit=max&w=1200",
  },
  {
    id: crypto.randomUUID(),
    name: "Cookies 2",
    price: getRandomPriceInRange(200, 400),
    description: "These are Cookies. Oh sweet Cookies. I really like this.",
    img: "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-superJumbo.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Soft cake 2",
    price: getRandomPriceInRange(200, 400),
    description: "This is a Soft cake. Oh sweet Soft cake. I really like this.",
    img: "https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Italian-Tiramisu-with-Mint-and-Chocolate.png",
  },
];

function getRandomPriceInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productState = {};
products.forEach((e) => {
  const qty = 0;
  const { name } = e;
  if (!productState[name]) {
    return (productState[name] = qty);
  }
});

export default function App() {
  const [productQty, setProductQty] = useState(productState);
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <div className="grid-container">
          {products.length === 0 && <h1>No products found</h1>}
          {products.length !== 0 &&
            products.map((e) => {
              const { name, description, img, id, price } = e;
              return (
                <Product
                  key={id}
                  name={name}
                  description={description}
                  img={img}
                  price={price}
                  productQty={productQty}
                  setProductQty={setProductQty}
                />
              );
            })}
        </div>
        <div className="cart">
          <div className="orders">
            {Object.keys(productQty).map((key, index) => {
              if (productQty[key] !== 0)
                return (
                  <div key={key} className="order">
                    <div>{key}</div>
                    <input type="text" value={productQty[key]} />
                    <div>{productQty[key] * products[index].price}</div>
                  </div>
                );
            })}
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
