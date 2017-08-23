"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { logger } from '../services/logger';
class SampleRouteController {
    get(req, res, next) {
        // logger.info('accessing ping route');
        res.json(200, 'pong');
        return next();
    }
}
exports.default = SampleRouteController;
