import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from './Component1.module.css';

const RecipeListCuisines = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`);

        const data = await response.json();

        // Filter recipes by category 'cuisines'
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
          <li key={recipe._id} className={styles.recipeItem}>
            {/* Link to the recipe details page */}
            <Link to={`/recipes/${recipe._id}`} className={styles.recipeLink}>
              <strong>{recipe.recipeTitle}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListCuisines;
