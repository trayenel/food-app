import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import List from "./components/List/List.jsx";
import Banner from "./components/Banner/Banner.jsx";

function App() {
  const foodMenu = [
    {
      name: "Cheeseburger",
      desc: "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a toasted bun.",
      price: 9.99,
    },
    {
      name: "Margherita Pizza",
      desc: "Classic Italian pizza topped with fresh mozzarella cheese, basil leaves, and tomato sauce on a thin crust.",
      price: 12.5,
    },
    {
      name: "Chicken Caesar Salad",
      desc: "Crisp romaine lettuce tossed with grilled chicken breast, Parmesan cheese, croutons, and Caesar dressing.",
      price: 8.75,
    },
    {
      name: "Sushi Platter",
      desc: "Assorted sushi rolls including California rolls, tuna rolls, and salmon rolls, served with soy sauce and wasabi.",
      price: 15.25,
    },
    {
      name: "Vegetable Stir-Fry",
      desc: "Fresh mixed vegetables sautéed in a savory sauce, served over steamed rice.",
      price: 10.0,
    },
    {
      name: "BBQ Ribs",
      desc: "Tender pork ribs slow-cooked and glazed with tangy barbecue sauce, served with coleslaw and cornbread.",
      price: 14.99,
    },
    {
      name: "Shrimp Alfredo",
      desc: "Fettuccine pasta tossed in a creamy Alfredo sauce with succulent shrimp, topped with grated Parmesan cheese.",
      price: 13.75,
    },
    {
      name: "Mushroom Swiss Burger",
      desc: "Grilled beef patty topped with sautéed mushrooms and melted Swiss cheese, served on a brioche bun.",
      price: 11.5,
    },
    {
      name: "Tandoori Chicken",
      desc: "Spiced chicken marinated in yogurt and Indian spices, roasted in a tandoor oven, served with naan bread and cucumber raita.",
      price: 12.25,
    },
    {
      name: "Fish and Chips",
      desc: "Crispy battered fish fillets served with golden fries, tartar sauce, and malt vinegar.",
      price: 10.99,
    },
  ];

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
      <List foodData={foodMenu} />
    </>
  );
}

export default App;
