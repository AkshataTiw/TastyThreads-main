import React, { useState, useEffect } from "react";
// Ensure the CSS file is in the same folder
import styles from './Component1.module.css';

const RecipeListCuisines = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/recipes");
        const data = await response.json();

        // Filter recipes by category 'cuisine'
        const cuisinesRecipes = data.filter((recipe) => recipe.category === "cuisines");
        setRecipes(cuisinesRecipes);
      } catch (error) {
        console.error("Error fetching cuisines recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Cuisines Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className={styles.recipeItem}>
            <strong>{recipe.recipeTitle}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListCuisines;
