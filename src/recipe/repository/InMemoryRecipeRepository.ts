import { RecipeRepository } from './RecipeRepository'
import { Recipe } from '../models/recipe'

export class InMemoryRecipeRepository implements RecipeRepository {

  getRecipe(id: string): Recipe {
    return null
  }

  getRecipes(): Recipe[] {
    return []
  }
}
