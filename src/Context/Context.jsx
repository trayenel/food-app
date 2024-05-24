import { createContext, useReducer } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add_meal": {
        return { ...state, ...action.meal };
      }
      case "remove_meal": {
        delete state[action.mealId];
        return { ...state };
      }
      case "increment_qty": {
        return { ...state };
      }
      case "decrement_qty": {
        return { ...state };
      }
    }
  };

  const [cartMeals, mealsDispatcher] = useReducer(reducer, {});

  return (
    <CartContext.Provider value={{ cartMeals, mealsDispatcher }}>
      {children}
    </CartContext.Provider>
  );
};

export const MealsContext = createContext({
  meals: [
    {
      id: Math.random(),
      name: "Cheeseburger",
      desc: "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a toasted bun.",
      price: 9.99,
    },
    {
      id: Math.random(),
      name: "Margherita Pizza",
      desc: "Classic Italian pizza topped with fresh mozzarella cheese, basil leaves, and tomato sauce on a thin crust.",
      price: 12.5,
    },
    {
      id: Math.random(),
      name: "Chicken Caesar Salad",
      desc: "Crisp romaine lettuce tossed with grilled chicken breast, Parmesan cheese, croutons, and Caesar dressing.",
      price: 8.75,
    },
    {
      id: Math.random(),
      name: "Sushi Platter",
      desc: "Assorted sushi rolls including California rolls, tuna rolls, and salmon rolls, served with soy sauce and wasabi.",
      price: 15.25,
    },
    {
      id: Math.random(),
      name: "Vegetable Stir-Fry",
      desc: "Fresh mixed vegetables sautéed in a savory sauce, served over steamed rice.",
      price: 10.0,
    },
    {
      id: Math.random(),
      name: "BBQ Ribs",
      desc: "Tender pork ribs slow-cooked and glazed with tangy barbecue sauce, served with coleslaw and cornbread.",
      price: 14.99,
    },
    {
      id: Math.random(),
      name: "Mushroom Swiss Burger",
      desc: "Grilled beef patty topped with sautéed mushrooms and melted Swiss cheese, served on a brioche bun.",
      price: 11.5,
    },
    {
      id: Math.random(),
      name: "Fish and Chips",
      desc: "Crispy battered fish fillets served with golden fries, tartar sauce, and malt vinegar.",
      price: 10.99,
    },
  ],
});
