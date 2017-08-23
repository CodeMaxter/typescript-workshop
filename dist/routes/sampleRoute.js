"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SampleRouteController_1 = require("../controllers/SampleRouteController");
function sampleRoute(api) {
    let routeCtrl = new SampleRouteController_1.default();
    api.get('/api/ping', routeCtrl.get);
}
module.exports.routes = sampleRoute;
