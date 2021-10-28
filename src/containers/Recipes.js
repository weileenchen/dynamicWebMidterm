import React, { useEffect, useState } from "react";
import axios from "axios";
import APIKeyFood from "../components/APIKeyFood";

const APIFood = APIKeyFood();

function Recipes() {
  const [food, setFood] = useState();

  const foodURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIFood}&ingredients=apples,+flour,+sugar`;

  function click() {
    axios
      .get(foodURL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <main>
      <header>Recipe Finder</header>
      <section>Insert Ingredients Here:</section>
      <button onClick={click}>Button</button>
      <a href="./restaurants">Click here to Find a Restaurant</a>
    </main>
  );
}

export default Recipes;
