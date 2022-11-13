const GET_RECIPES = 'GET_RECIPES';

const applicationReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      return { ...state, recipes: action.payload };
    default:
      throw new Error('unknown action type:', action.type);
  }
};

export { applicationReducer, GET_RECIPES };
