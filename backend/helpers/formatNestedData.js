const formatNestedData = rows => {
  // basic info of the recipe
  const { id, name, image, instructions, created } = rows[0];
  const recipe = { id, name, image, instructions, created };

  rows.forEach(row => {
    // create an array of ingredients with the first ingredient
    if (!recipe.ingredients) recipe.ingredients = [];

    recipe.ingredients.push({
      ing_id: row.ing_id,
      ing_name: row.ing_name,
      ing_amount: row.ing_amount,
    });
  });

  return recipe;
};

export default formatNestedData;
