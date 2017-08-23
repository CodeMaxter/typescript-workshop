"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// combine routes
const routes_1 = require("./users/routes");
// import route2 from './route2';
exports.default = (server) => {
    routes_1.default(server);
    // route2(server);
};
