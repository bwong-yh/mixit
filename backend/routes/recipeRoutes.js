import express from 'express';
import { getAllRecipes, getRecipe } from '../controllers/recipeControllers.js';

const router = express.Router();

router.route('/').get(getAllRecipes);

router.route('/:id').get(getRecipe);

export default router;
