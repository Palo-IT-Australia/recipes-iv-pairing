
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');

class App {
  constructor() {
    this.express = express();
  }

  mountRoutes() {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({ message: 'hi' });
    });
    this.express.use('/', router);
  }
}
exports.default = new App().express;
// # sourceMappingURL=App.js.map
