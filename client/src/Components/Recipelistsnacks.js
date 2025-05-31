import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from './Component1.module.css';

const RecipeListSnacks = () => {
    const [recipes, setRecipes] = useState([]);

    // Fetch snack recipes from the backend
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Ensure this is the correct API path
               const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`);

                const data = await response.json();

                // Filter only Snacks recipes
                const snackRecipes = data.filter((recipe) => recipe.category === "snacks");
                setRecipes(snackRecipes);
            } catch (error) {
                console.error("Error fetching snack recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h3 className="text-primary text-center">Snack Recipes</h3>
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

export default RecipeListSnacks;
