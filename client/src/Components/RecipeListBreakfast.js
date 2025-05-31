import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from './Component1.module.css';

const BreakfastRecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`);

        const data = await response.json();

        // Filter only Breakfast recipes
        const breakfastRecipes = data.filter((recipe) => recipe.category === "breakfast");
        setRecipes(breakfastRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Breakfast Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id} className="recipe-item">
            {/* Ensure recipe title is clickable and navigates to details page */}
            <Link to={`/recipes/${recipe._id}`} className={styles.recipeLink}>
              <strong>{recipe.recipeTitle}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakfastRecipeList;
