import express from 'express';

class App {
  public app: any

  constructor() {
    this.app = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({ message: 'hi' });
    });

    this.app.use('/', router);
  }
}

export default new App().app;
