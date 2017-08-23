import * as fs from 'fs'
import * as restify from 'restify'
import { settings } from './config/config'
import { logger } from './services/logger'
import routes from './app-routes'

export let server = restify.createServer({
  name: settings.name
})

server.use(restify.plugins.jsonBodyParser({ mapParams: true }))
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.fullResponse())

// server.use(restify.plugins.queryParser({
//   mapParams: true
// }))

// server.use(restify.plugins.bodyParser({
//   mapParams: true
// }))

routes(server)

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

server.listen(settings.port, function () {
  logger.info(`INFO: ${settings.name} is running at ${server.url}`)
})