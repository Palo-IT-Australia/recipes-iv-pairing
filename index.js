"use strict";
exports.__esModule = true;
var App_1 = require("./src/App");
var port = process.env.PORT || 3000;
console.log('here');
App_1["default"].listen(port, function (err) {
    console.log('here too');
    if (err) {
        return console.log(err);
    }
    return console.log("server is listening on " + port);
});
//# sourceMappingURL=index.js.map