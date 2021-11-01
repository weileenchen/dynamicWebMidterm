import React, { useMemo, useState } from "react";
import axios from "axios";
import APIKeyFood from "../components/APIKeyRecipes";
import RecipeCard from "../components/RecipeCard";

const APIFood = APIKeyFood();

function Recipes() {
  const [ingredient, setIngredient] = useState("");
  var recipe;

  var foodURL;

  function click() {
    foodURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIFood}&ingredients=${ingredient}&number=1`;
    axios
      .get(foodURL)
      .then((res) => {
        recipe = res.data;
        console.log(recipe);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const { name, imageLink } = useMemo(() => {
    if (!recipe) return {};
    return {
      name: recipe.name,
      imageLink: recipe.image,
    };
  }, [recipe]);

  return (
    <main>
      <header>Recipe Finder</header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          click();
        }}
      >
        <label>
          Enter Cuisine Here:
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <RecipeCard name={name} imageLink={imageLink} />
      <a href="./restaurants">Click here to Find a Restaurant</a>
    </main>
  );
}

export default Recipes;
