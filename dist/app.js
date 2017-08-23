"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const config_1 = require("./config/config");
const logger_1 = require("./services/logger");
const app_routes_1 = require("./app-routes");
exports.server = restify.createServer({
    name: config_1.settings.name
});
exports.server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
exports.server.use(restify.plugins.acceptParser(exports.server.acceptable));
exports.server.use(restify.plugins.queryParser({ mapParams: true }));
exports.server.use(restify.plugins.fullResponse());
// server.use(restify.plugins.queryParser({
//   mapParams: true
// }))
// server.use(restify.plugins.bodyParser({
//   mapParams: true
// }))
app_routes_1.default(exports.server);
// function respond(req, res, next) {  
//   res.send('hello ' + req.params.name)
//   next()
// }
// let server = restify.createServer()
// server.get('/hello/:name', respond)
// server.head('/hello/:name', respond)
// server.listen(8080, function() {
//   console.log('%s listening at %s', server.name, server.url)
// })
exports.server.listen(config_1.settings.port, function () {
    logger_1.logger.info(`INFO: ${config_1.settings.name} is running at ${exports.server.url}`);
});
