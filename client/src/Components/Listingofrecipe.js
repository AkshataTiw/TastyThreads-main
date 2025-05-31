import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RecipeListPage.css"; // Add your CSS for styling

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch all recipes when the component is mounted
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/recipes`)
 // Make sure this API is working
      .then((response) => {
        setRecipes(response.data); // Store the fetched recipes
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="recipe-list1">
      <h1 className="list-title">Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            {/* Clickable link to go to the details page of the recipe */}
            <Link
  to={`/recipes/${recipe._id}`}
  style={{
    color: "#007bff",
    textDecoration: "none",
    fontSize: "18px",
    cursor: "pointer",
  }}
>
  {recipe.recipeTitle}
</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
