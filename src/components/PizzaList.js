import React from "react";
import { useSelector } from "react-redux";

function selectUser(reduxState) {
  console.log("State in selector", reduxState);
  return reduxState.user;
}

export default function PizzaList() {
  const user = useSelector(selectUser);
  console.log("User in component", user);
  return (
    <div>
      <h1>Hello {user.name}</h1>
    </div>
  );
}
