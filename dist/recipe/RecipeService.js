"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeRepository_1 = require("./RecipeRepository");
class RecipeServiceImpl {
    constructor() {
        this.repository = new RecipeRepository_1.InMemoryRecipeRepository();
    }
    addReview(recipeId, review) {
        return this.repository.addReview(recipeId, review);
    }
    saveRecipe(accountId, description) {
        const recipe = new Recipe(description);
        this.repository.saveRecipe(recipe, accountId);
        return recipe;
    }
}
//# sourceMappingURL=RecipeService.js.map