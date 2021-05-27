import { RecipeServiceImpl } from './RecipeService'

describe('Recipe Service tests', () => {
  it('should add a new recipe', () => {
    const recipe = new RecipeServiceImpl().saveRecipe('1', 'good size')
    expect(recipe).not.toBe(undefined)
  })
})
