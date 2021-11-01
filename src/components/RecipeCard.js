import React from "react";

function RecipeCard({ name = "Unknown", imageLink = "Unknown" }) {
  return (
    <section className="Recipe">
      <div>
        <p>
          Recipe: <strong>{name}</strong>
        </p>
        <img src={imageLink} alt={name} />
      </div>
    </section>
  );
}

export default RecipeCard;
