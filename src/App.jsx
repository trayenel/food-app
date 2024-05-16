import "./App.css";
import MainHeader from "./components/Layout/MainHeader/MainHeader.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Banner from "./components/Layout/Banner/Banner.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { CartProvider } from "./Context/Context.jsx";

function App() {
  return (
    <>
      <MainHeader />
      <Banner>
        <h1>Bun venit în locul unde pasiunea culinară întâlnește tradiția!</h1>
        <p>
          Cu o istorie bogată și o atenție meticuloasă la detalii, fiecare
          preparat este o călătorie în bucuria gustului autentic. Făcută cu
          dragoste de mamă, fiecare rețetă păstrează aromele și secretele
          tradiționale transmise din generație în generație.
        </p>
        <p>
          Noi credem în prospețime și calitate, așa că selectăm cu grijă cele
          mai proaspete ingrediente locale pentru a vă oferi experiența culinară
          perfectă. În fiecare farfurie veți simți aroma îmbietoare a tradiției
          și gustul inconfundabil al mâncării pregătite cu devotament și
          pricepere.
        </p>
      </Banner>
      <CartProvider>
        <Meals />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
