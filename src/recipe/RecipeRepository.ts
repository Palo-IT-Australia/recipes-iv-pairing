export class InMemoryRecipeRepository implements RecipeRepository {
	accounts: Map<string, Recipe[]> = new Map()

	addReview(recipeId: string, review: Review): Recipe {
	  this.accounts.forEach((recipes) => {
	    const recipe = recipes.find((recipe) => recipe.recipeId === recipeId);
	    if (recipe) {
	      recipe.reviews.push(review);
	      return recipe;
	    }
	  });
	  return null;
	}

	saveRecipe(recipe: Recipe, accountId: string): void {
	  let currRecipes: Recipe[] = [];

	  if (accountId in this.accounts.keys()) {
	    currRecipes = this.accounts.get(accountId);
	  }
	  if (!currRecipes.includes(recipe)) {
	    currRecipes.push(recipe);
	  }
	  this.accounts.set(accountId, currRecipes);
	}
}

export interface RecipeRepository {
	saveRecipe(recipe: Recipe, accountId: string): void

	addReview(recipeid: string, review: Review): Recipe;
}
