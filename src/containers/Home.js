import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import APIKeyRecipes from "../components/APIKeyRecipes";
import APIKeyNutrition from "../components/APIKeyNutrition";
import NutritionCard from "../components/NutritionCard";
import RecipeCard from "../components/RecipeCard";

const APINutrition = APIKeyNutrition();
const APIRecipes = APIKeyRecipes();

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [food, setFood] = useState();
  const [nutrition, setNutrition] = useState();
  const [recipe, setRecipe] = useState();

  let query = useQuery();

  const nutURL = `https://api.calorieninjas.com/v1/nutrition?query=${food}`;
  const recURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIRecipes}&ingredients=${food}&number=1`;

  useEffect(() => {
    const foodValue = query.get("food");
    setFood(foodValue);
  }, []);

  useEffect(() => {
    if (food) {
      axios
        .get(nutURL, {
          headers: {
            "X-Api-Key": APINutrition,
          },
        })
        .then((res) => {
          console.log(res.data.items);
          setNutrition(res.data.items[0]);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(recURL)
        .then((res) => {
          console.log(res.data);
          setRecipe(res.data[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [food]);

  const {
    carbs,
    cholesterol,
    total_fat,
    sat_fat,
    calories,
    sugar,
    sodium,
    fiber,
    protein,
  } = useMemo(() => {
    if (!nutrition) return {};
    return {
      carbs: nutrition.carbohydrates_total_g,
      cholesterol: nutrition.cholesterol_mg,
      total_fat: nutrition.fat_total_g,
      sat_fat: nutrition.fat_saturated_g,
      calories: nutrition.calories,
      sugar: nutrition.sugar_g,
      sodium: nutrition.sodium_mg,
      fiber: nutrition.fiber_g,
      protein: nutrition.protein_g,
    };
  }, [nutrition]);

  const { rec_name, imageLink, ingredients } = useMemo(() => {
    if (!recipe) return {};
    return {
      rec_name: recipe.title,
      imageLink: recipe.image,
      ingredients: recipe.missedIngredients.concat(recipe.usedIngredients),
    };
  }, [recipe]);

  return (
    <main>
      <header className="Header">
        <h1>{!food ? "FOOD FINDER" : food}</h1>
        <div>
          Look at some of the most common foods and a random recipe that
          incorporates that food!
        </div>
      </header>
      <section className="Navigation">
        <a href="/?food=Broccoli">Broccoli</a>
        <a href="/?food=Egg">Egg</a>
        <a href="/?food=Beef">Beef</a>
        <a href="/?food=Chicken">Chicken</a>
        <a href="/?food=Rice">Rice</a>
        <a href="/?food=Garlic">Garlic</a>
      </section>
      {!food ? (
        <div className="NothingChosen"> click a food! </div>
      ) : (
        <section className="Details">
          <NutritionCard
            carbs={carbs}
            cholesterol={cholesterol}
            total_fat={total_fat}
            sat_fat={sat_fat}
            calories={calories}
            sugar={sugar}
            sodium={sodium}
            fiber={fiber}
            protein={protein}
          />
          <RecipeCard
            name={rec_name}
            imageLink={imageLink}
            ingredients={ingredients}
          />
        </section>
      )}
    </main>
  );
}

export default Home;
