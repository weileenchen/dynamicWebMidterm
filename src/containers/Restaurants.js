import React, { useEffect, useState } from "react";
import axios from "axios";
import APIKeyRestaurants from "../components/APIKeyRestaurants";

const APIRest = APIKeyRestaurants();
const zip = `01730`;
function Restaurants() {
  const [rests, setRests] = useState();

  const restURL = `https://api.documenu.com/v2/restaurants/zip_code/${zip}?key=${APIRest}&cuisine=coffee&size=2`;

  function click() {
    axios
      .get(restURL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <main>
      <header>Restaurant Finder</header>
      <section>Enter Cuisine Here:</section>
      <section>Enter Zip Code Here:</section>
      <button onClick={click}>Button</button>
      <a href="./recipes">Click here to Find a Recipe</a>
    </main>
  );
}

export default Restaurants;
