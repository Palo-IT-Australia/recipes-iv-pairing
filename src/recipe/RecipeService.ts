import { Recipe } from './models/recipe'
import { RecipeRepository } from './repository/RecipeRepository'
import { InMemoryRecipeRepository } from './repository/InMemoryRecipeRepository'

export class RecipeServiceImpl implements RecipeService {
  private readonly repository: RecipeRepository

  constructor() {
    this.repository = new InMemoryRecipeRepository()
  }

	getUserRecipes(accountId: string): [] {
		return [];
	}

  saveRecipe(accountId: string, description: string): Recipe {
    return undefined
  }

  getPopularRecipes(minAverageRating: number): Recipe[] {
    return []
  }

  addRating(recipeId: string, rating: number, dateTime: Date): Recipe {
    return undefined
  }
}

interface RecipeService {
  saveRecipe(accountId: string, description: string): Recipe

	getUserRecipes(accountId: string): Recipe[]

	addRating(recipeId: string, rating: number, dateTime: Date): Recipe

  getPopularRecipes(minAverageRating: number): Recipe[]
}
