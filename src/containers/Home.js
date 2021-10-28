import React, { useEffect, useState } from "react";
import axios from "axios";
import APIKeyFood from "../components/APIKeyFood";

function Home() {
  return (
    <main>
      <a href="./restaurants">Click here to Find a Restaurant</a>
      <a href="./recipes">Click here to Find a Recipe</a>
    </main>
  );
}

export default Home;
