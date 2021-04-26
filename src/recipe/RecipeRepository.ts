
class InMemoryRecipeRepository implements RecipeRepository {
	getRecipes(): Recipe[] {
		return [];
	}
}

interface RecipeRepository {
	getRecipes(): Recipe[]
}
