function RecipesPage({ recipes }) {
  return (
    <div className="recipes-list-page">
      <h3>All Recipes</h3>
      <ul className="recipe-list">
        {recipes.map((element, index) => (
          <li key={index} className="recipe-list-item">
            <span className="recipe-title">{element.title}</span>
            <span className="recipe-time">{element.cookingTime}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesPage;
