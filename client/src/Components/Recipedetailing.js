import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Recipedetailing.css";

const Recipedetailing = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

 useEffect(() => {
  const fetchRecipe = async () => {
    try {
     console.log("Calling:", `${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`);
      console.log("Fetched recipe:", response.data);
      setRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  fetchRecipe();
}, [id]);

  // Loading state while fetching recipe data
  if (!recipe) return <div>Loading...</div>;

  // Render recipe details with proper CSS
  return (
    <div className="recipe-details">
      <h1 className="recipe-title">{recipe.recipeTitle || "No Title Available"}</h1>
      {recipe.description && (
        <p className="recipe-description">{recipe.description}</p>
      )}

      <div className="recipe-info">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients provided</li>
          )}
        </ul>

        <h2>Instructions</h2>
        <ol>
          {recipe.steps.length > 0 ? (
            recipe.steps.map((step, index) => <li key={index}>{step}</li>)
          ) : (
            <li>No instructions provided</li>
          )}
        </ol>

        <div className="recipe-meta">
          <p>Serving Size: {recipe.servings || "N/A"}</p>
          <p>Prep Time: {recipe.prepTime || "N/A"}</p>
          <p>Calories: {recipe.calories || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipedetailing;
