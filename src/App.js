"use strict";
exports.__esModule = true;
var express_1 = require("express");
var App = /** @class */ (function () {
    function App() {
        console.log('here');
        this.app = express_1["default"]();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express_1["default"].Router();
        router.get('/', function (req, res) {
            res.json({ message: 'hi' });
        });
        this.app.use('/', router);
    };
    return App;
}());
exports["default"] = new App().app;
//# sourceMappingURL=App.js.map