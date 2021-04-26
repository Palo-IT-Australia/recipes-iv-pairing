import express from 'express';
import { RecipeServiceImpl } from "./recipe/RecipeService";

class App {
  public app: any
  private recipeService = new RecipeServiceImpl()

  constructor() {
    this.app = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json(this.recipeService.getPopularRecipes(4));
    });

    this.app.use('/', router);
  }
}

export default new App().app;
