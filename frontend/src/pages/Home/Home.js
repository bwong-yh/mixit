import useApplicationContext from '../../hooks/useApplicationContext';
import './Home.scss';

const Home = () => {
  const [state, dispatch] = useApplicationContext();

  console.log(state);

  return (
    <div className='home'>
      <h1>Your recipes...</h1>
      {state.recipes.length > 0 &&
        state.recipes.map(recipe => <h1>{recipe.name}</h1>)}
    </div>
  );
};

export default Home;
