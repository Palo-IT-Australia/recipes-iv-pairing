import express, { Request, Response } from 'express'
import { RecipeServiceImpl } from './recipe/RecipeService'

class App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public app: any
  private recipeService = new RecipeServiceImpl()

  constructor() {
    this.app = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()

    router.get('/', (req: Request, res: Response) => {
      res.json(this.recipeService.getPopularRecipes(4))
    })

    this.app.use('/', router)
  }
}

export default new App().app
