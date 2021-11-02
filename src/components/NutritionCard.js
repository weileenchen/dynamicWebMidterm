import React from "react";

function NutritionCard({
  carbs = "Unknown",
  cholesterol = "Unknown",
  total_fat = "Unknown",
  sat_fat = "Unknown",
  calories = "Unknown",
  sugar = "Unknown",
  sodium = "Unknown",
  fiber = "Unknown",
  protein = "Unknown",
}) {
  return (
    <section className="Nutrition">
      <section className="NutritionTable">
        <header className="NutritionHeader">
          <h1 className="NutritionTitle">Nutrition Facts</h1>
          <p>Serving Size 100 grams</p>
        </header>
        <table className="NutritionFacts">
          <thead>
            <tr>
              <th colspan="3" className="SmallInfo">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="2">
                <b>Calories </b>
                {calories}
              </th>
            </tr>
            <tr>
              <td colspan="3" className="ThickRow"></td>
            </tr>
            <tr>
              <th colspan="3" className="FirstFact">
                <b>Total Fat </b>
                {total_fat}g
              </th>
            </tr>
            <tr>
              <td className="IndentedCell"></td>
              <th>Saturated Fat {sat_fat}g</th>
            </tr>
            <tr>
              <th colspan="2">
                <b>Cholesterol </b>
                {cholesterol}mg
              </th>
            </tr>
            <tr>
              <th colspan="2">
                <b>Sodium </b>
                {sodium}mg
              </th>
            </tr>
            <tr>
              <th colspan="2">
                <b>Total Carbohydrate </b>
                {carbs}g
              </th>
            </tr>
            <tr>
              <td className="IndentedCell"></td>
              <th>Dietary Fiber {fiber}g</th>
            </tr>
            <tr>
              <td className="IndentedCell"></td>
              <th>Sugars {sugar}g</th>
              <td></td>
            </tr>
            <tr className="ThickEnd">
              <th colspan="2">
                <b>Protein </b>
                {protein}g
              </th>
              <td></td>
            </tr>
            <tr>
              <td colspan="3" className="SuperThickRow"></td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default NutritionCard;
