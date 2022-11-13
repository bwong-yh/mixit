import RecipeList from '../../components/RecipeList/RecipeList';
import useApplicationContext from '../../hooks/useApplicationContext';
import './Home.scss';

const Home = () => {
  const [state, dispatch] = useApplicationContext();

  console.log(state);

  return (
    <div className='home'>
      <h1>Your recipes...</h1>
      {state.recipes.length > 0 && <RecipeList recipes={state.recipes} />}
    </div>
  );
};

export default Home;
