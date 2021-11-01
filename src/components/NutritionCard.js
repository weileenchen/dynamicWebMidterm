import React from "react";

function NutritionCard({
  name = "Unknown",
  serving_size = "Unknown",
  calories = "Unknown",
  sugar = "Unknown",
  sodium = "Unknown",
  fiber = "Unknown",
}) {
  return (
    <section className="Nutrition">
      <div>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Serving Size: <strong>{serving_size} grams</strong>
        </p>
        <p>
          Calories: <strong>{calories} cal</strong>
        </p>
        <p>
          Sugar: <strong>{sugar} grams</strong>
        </p>
        <p>
          Sodium: <strong>{sodium} milligrams</strong>
        </p>
        <p>
          Fiber: <strong>{fiber} grams</strong>
        </p>
      </div>
    </section>
  );
}

export default NutritionCard;
