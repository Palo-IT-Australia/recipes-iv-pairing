import { RecipeRepository } from './RecipeRepository'
import { Recipe } from '../models/recipe'

export class InMemoryRecipeRepository implements RecipeRepository {
  recipes: Recipe[] = []

  getRecipes(): Recipe[] {
    return this.recipes
  }
}
