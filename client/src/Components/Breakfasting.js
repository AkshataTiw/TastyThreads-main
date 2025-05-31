import React, { useEffect, useState } from "react";
import axios from "axios";
import './Breakfasting.css'

const BreakfastList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes?category=Breakfast`)

      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="recipe-list">
      <h1>Breakfast Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3>{recipe.recipeTitle}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakfastList;
