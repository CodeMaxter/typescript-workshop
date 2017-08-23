import * as restify from 'restify'
import { logger } from '../services/logger'

interface Route {
  method: string,
  path: string,
  handler?: string
}

export default class BaseController {

  constructor (server: restify.Server) {
    this.getRoutes().map((route: Route) => {
      const path = `${this.getEndpoint()}/${route.path}`
      
      const handler = route.handler || route.method

      logger.info(`Assigning route: ${route.method} => ${path} with handler ${handler}`);

      server[route.method](path, this[handler])
    })
  }

  protected getRoutes (): Array<Object> {
    return [{
      method: 'del',
      path: ':id'
    }, {
      method: 'get',
      path: ''
    }, {
      method: 'get',
      path: ':id'
    }, {
      method: 'post',
      path: ''
    }, {
      method: 'put',
      path: ':id'
    }]
  }

  protected getEndpoint (): string {
    return ''
  }
}