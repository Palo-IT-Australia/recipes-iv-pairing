"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryRecipeRepository {
    constructor() {
        this.accounts = new Map();
    }
    addReview(recipeId, review) {
        this.accounts.forEach((recipes) => {
            const recipe = recipes.find((recipe) => recipe.recipeId === recipeId);
            if (recipe) {
                recipe.reviews.push(review);
                return recipe;
            }
        });
        return null;
    }
    saveRecipe(recipe, accountId) {
        let currRecipes = [];
        if (accountId in this.accounts.keys()) {
            currRecipes = this.accounts.get(accountId);
        }
        if (!currRecipes.includes(recipe)) {
            currRecipes.push(recipe);
        }
        this.accounts.set(accountId, currRecipes);
    }
}
exports.InMemoryRecipeRepository = InMemoryRecipeRepository;
//# sourceMappingURL=RecipeRepository.js.map