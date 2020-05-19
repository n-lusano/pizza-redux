import React from "react";
import { useSelector } from "react-redux";

function selectUser(reduxState) {
  //   console.log("State in selector", reduxState);
  return reduxState.user;
}

function selectPizzas(reduxState) {
  return [
    ...reduxState.pizzas.sort((pizzaA, pizzaB) => {
      return pizzaB.bought - pizzaA.bought;
    }),
  ];
}

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  //   console.log("User in component", user);
  console.log("Pizzas in component", pizzas);
  return (
    <div>
      <h1>Hello {user.name}</h1>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <h3>
                {pizza.name} ({pizza.bought})
              </h3>
              <p>{pizza.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
