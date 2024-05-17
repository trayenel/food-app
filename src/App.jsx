import "./App.css";
import MainHeader from "./components/Layout/MainHeader/MainHeader.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Banner from "./components/Layout/Banner/Banner.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { CartProvider } from "./Context/Context.jsx";
import { useState } from "react";

function App() {
  const [cartShown, setCartIsShown] = useState(false);

  const showCart = () => setCartIsShown((oldVal) => !oldVal);

  return (
    <CartProvider>
      {cartShown && <Cart cartAction={showCart} />}
      <>
        <MainHeader cartAction={showCart} />
        <Banner>
          <h1>Welcome to the place where culinary passion meets tradition!</h1>
          <p>
            With a rich history and meticulous attention to detail, each dish is
            a journey into the joy of authentic taste. Made with motherly love,
            each recipe preserves the flavors and secrets passed down from
            generation to generation.
          </p>
          <p>
            We believe in freshness and quality, so we carefully select the
            freshest local ingredients to offer you the perfect culinary
            experience. In every dish, you will feel the enticing aroma of
            tradition and the unmistakable taste of food prepared with devotion
            and skill.
          </p>
        </Banner>
        <Meals />
      </>
    </CartProvider>
  );
}

export default App;
