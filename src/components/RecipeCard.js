import React from "react";

function RecipeCard({
  name = "Recipe",
  imageLink = "Unknown",
  ingredients = [],
}) {
  return (
    <section className="Recipe">
      <div className="RecipeTitle">{name}</div>
      <img src={imageLink} alt={name} />
      <div>
        <b>Ingredients:</b>
        <section>
          {ingredients.map((ingredient, i) => {
            return (
              <div className="Ingredient" key={i}>
                {ingredient.originalString}
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default RecipeCard;
