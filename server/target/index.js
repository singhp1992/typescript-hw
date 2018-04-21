"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("./games/controller");
const app = routing_controllers_1.createKoaServer({
    controllers: [
        controller_1.default
    ]
});
app.listen(4000, () => console.log('Listening on port 4000'));
//# sourceMappingURL=index.js.map