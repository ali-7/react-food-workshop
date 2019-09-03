import React from "react";
import dishes from "../data";

const DishList = ({ min, max }) => {
  const dishItems = dishes
    .filter(dish => dish.price >= min && dish.price <= max)

  return (
    <ul className="grid">
      {dishItems.length ? dishItems.map(dish => (
        <li key={dish.id} className="card">
          <h3>{dish.name}</h3>
          {dish.description && <p>{dish.description}</p>}
          <div>£{dish.price.toFixed(2)}</div>
        </li>
      ))
        : (
          <li className="card">No results found</li>
        )}
    </ul>
  );
}

export default DishList;
