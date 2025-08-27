import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function RecipeDetails({recipes}) {

  const {id} = useParams();
  const [recipeDetails, setRecipeDetails]=useState({})

 useEffect(() => {
  const filteredRecipe = recipes.find((recipe) => recipe.id == id);
  if (filteredRecipe) {
    setRecipeDetails(filteredRecipe);
  }
}, [id, recipes]);


  return (

    recipeDetails && ( 
      
      <div className="recipe-details">
        <img src={recipeDetails.image} alt={recipeDetails.title} />
        <h1>{recipeDetails.title}</h1>
        <p>{recipeDetails.description}</p>

        <div>
          <h3>Steps :</h3>
          <ul>
            {
              recipeDetails.steps && recipeDetails.steps.map((step, index)=>{
                return(
                  <li key={index}>{step}</li>
                )
              })
            }
          </ul>
        </div>

        <div>
          <h3>Ingredients :</h3>
          <ul>
            {
              recipeDetails.ingredients && recipeDetails.ingredients.map((step, index)=>{
                return(
                  <li key={index}>{step}</li>
                )
              })
            }
          </ul>
        </div>

        <h5>Cooking Time: {recipeDetails.cookingTime}</h5>

      </div>
    )
  )
}

export default RecipeDetails
