import asyncHandler from 'express-async-handler';
import db from '../db/config.js';
import formatNestedData from '../helpers/formatNestedData.js';

const getAllRecipes = asyncHandler(async (req, res) => {
  const data = await db.query('SELECT * FROM recipe;');

  res.status(200).json(data.rows);
});

const getRecipe = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await db.query(
    `
  SELECT 
    recipe.*, 
    ingredient.id as ing_id,
    ingredient.name as ing_name, 
    ingredient.amount as ing_amount
  FROM recipe
  RIGHT JOIN ingredient ON recipe.id = recipe_id
  WHERE recipe.id = $1
  ORDER BY ing_id ASC;
  `,
    [id]
  );

  res.status(200).json(formatNestedData(data.rows));
});

export { getAllRecipes, getRecipe };
