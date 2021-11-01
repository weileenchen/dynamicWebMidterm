import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import APIKeyFood from "../components/APIKeyFood";
import APIKeyRestaurants from "../components/APIKeyRestaurants";
import NutritionCard from "../components/NutritionCard";
import RecipeCard from "../components/RecipeCard";

const APIRest = APIKeyRestaurants();
const APIFood = APIKeyFood();

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [food, setFood] = useState();
  const [nutrition, setNutrition] = useState();
  const [recipe, setRecipe] = useState();

  let query = useQuery();

  const nutURL = `https://api.calorieninjas.com/v1/nutrition?query=${food}`;
  const recURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIFood}&ingredients=${food}&number=1`;

  useEffect(() => {
    const foodValue = query.get("food");
    setFood(foodValue);
  }, []);

  useEffect(() => {
    if (food) {
      axios
        .get(nutURL, {
          headers: {
            "X-Api-Key": APIRest,
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

  const { food_name, serving_size, calories, sugar, sodium, fiber } =
    useMemo(() => {
      if (!nutrition) return {};
      return {
        food_name: nutrition.name,
        serving_size: nutrition.serving_size_g,
        calories: nutrition.calories,
        sugar: nutrition.sugar_g,
        sodium: nutrition.sodium_mg,
        fiber: nutrition.fiber_g,
      };
    }, [nutrition]);

  const { rec_name, imageLink } = useMemo(() => {
    if (!recipe) return {};
    return {
      rec_name: recipe.title,
      imageLink: recipe.image,
    };
  }, [recipe]);

  return (
    <main>
      <a href="/?food=Apple">Apple</a>
      <NutritionCard
        name={food_name}
        serving_size={serving_size}
        calories={calories}
        sugar={sugar}
        sodium={sodium}
        fiber={fiber}
      />
      <RecipeCard name={rec_name} imageLink={imageLink} />
    </main>
  );
}

export default Home;
