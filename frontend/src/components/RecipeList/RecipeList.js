import './RecipeList.scss';

const RecipeList = ({ recipes }) => {
  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className='recipe-list__card'>
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} />
          <p>{recipe.instruction}</p>
          <span> {recipe.created}</span>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
