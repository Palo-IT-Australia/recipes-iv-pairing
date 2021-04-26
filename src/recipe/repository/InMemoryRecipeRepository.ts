import { RecipeRepository } from "./RecipeRepository";
import { Recipe } from "../models/recipe";

export class InMemoryRecipeRepository implements RecipeRepository {
	getRecipes(): Recipe[] {
		return [];
	}
}
