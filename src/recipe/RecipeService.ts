import { InMemoryRecipeRepository, RecipeRepository } from './RecipeRepository'

class RecipeServiceImpl implements RecipeService {
	private readonly repository: RecipeRepository

	constructor() {
	  this.repository = new InMemoryRecipeRepository();
	}

	addReview(recipeId: string, review: Review): Recipe {
	  return this.repository.addReview(recipeId, review);
	}

	saveRecipe(accountId: string, description: string): Recipe {
	  const recipe = new Recipe(description);
	  this.repository.saveRecipe(recipe, accountId);
	  return recipe;
	}
}


interface RecipeService {

	saveRecipe(accountId: string, description: string): Recipe

	addReview(recipeId: string, review: Review): Recipe

	// getAllRecipes(accountId: string): Recipe[]

	// viewReviews(recipeId: string): Review[]
}
