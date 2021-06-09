import { Recipe } from '../models/recipe'

export interface RecipeRepository {
  getRecipes(): Recipe[]
  getRecipe(id: string): Recipe
}
