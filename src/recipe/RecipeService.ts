import { Recipe } from "./models/recipe";

export class RecipeServiceImpl implements RecipeService {
	private readonly repository: RecipeRepository

	constructor() {
		this.repository = new InMemoryRecipeRepository()
	}

	saveRecipe(accountId: string, description: string): Recipe {
		return undefined;
	}

	getPopularRecipes(minAverageRating: number): Recipe[] {
		return [];
	}

	addRating(recipeId: string, rating: number, dateTime: Date): Recipe {
		return undefined;
	}
}

interface RecipeService {

	saveRecipe(accountId: string, description: string): Recipe

	addRating(recipeId: string, rating: number, dateTime: Date): Recipe

	getPopularRecipes(minAverageRating: number): Recipe[]
}
