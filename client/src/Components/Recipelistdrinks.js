import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from './Component1.module.css';

const RecipeListDrinks = () => {
    const [recipes, setRecipes] = useState([]);

    // Fetch drinks recipes from the backend
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`);

                const data = await response.json();

                // Filter only Drinks recipes
                const drinkRecipes = data.filter((recipe) => recipe.category === "drinks");
                setRecipes(drinkRecipes);
            } catch (error) {
                console.error("Error fetching drinks recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h3 className="text-primary text-center">Drink Recipes</h3>
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

export default RecipeListDrinks;
