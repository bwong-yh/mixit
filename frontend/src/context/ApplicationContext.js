import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

// reducer
import {
  applicationReducer,
  GET_RECIPES,
} from '../reducers/applicationReducer';

const ApplicationContext = createContext();

const ApplicationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(applicationReducer, {
    recipes: [],
    ingredients: [],
  });

  useEffect(() => {
    const RECIPES_API = '/api/recipes';
    // const INGREDIENTS_API = '/api/ingredients';

    Promise.all([axios.get(RECIPES_API)])
      .then(all => {
        dispatch({ type: GET_RECIPES, payload: all[0].data });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationContextProvider };
