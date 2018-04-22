"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("./game/controller");
exports.app = routing_controllers_1.createKoaServer({
    controllers: [controller_1.default]
});
db_1.default()
    .then(_ => exports.app.listen(4000, () => console.log('Listening on port 4000')))
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map