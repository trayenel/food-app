import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import List from "./components/List/List.jsx";
import Banner from "./components/Banner/Banner.jsx";

function App() {
  return (
    <>
      <MainHeader />
      <Banner>
        <p>
          Bun venit în locul unde pasiunea culinară întâlnește tradiția! AICI
          GĂSIȚI CEA MAI BUNĂ MANCARE
        </p>
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
      <List>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
        <li>BURGER CU PATEU</li>
      </List>
    </>
  );
}

export default App;
