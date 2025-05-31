import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from './Component1.module.css';

const RecipeListIceCream = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`);

        const data = await response.json();

        // Filter only Ice Cream recipes
        const iceCreamRecipes = data.filter((recipe) => recipe.category === "icecreams");
        setRecipes(iceCreamRecipes);
      } catch (error) {
        console.error("Error fetching ice cream recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-primary text-center">Ice Cream Recipes</h2>
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

export default RecipeListIceCream;
