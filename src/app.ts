// Require the framework and instantiate it
import * as fastify from 'fastify'
import * as favicon from 'fastify-favicon'
import * as helmet from 'fastify-helmet'
import routes from './routes'
import addSwagger from './swagger'

const server = fastify({
  logger: true,
})

addSwagger(server)

server.register(helmet, { hidePoweredBy: { setTo: 'your mom' } })
server.register(favicon)
server.register(routes, {})

const fatal = err => {
  server.log.error(err)
  process.exit(1)
}

// Run the server!
server
  .listen(8080, '0.0.0.0')
  .then(address => {
    server.log.info(`server listening on ${address}`)
  })
  .catch(fatal)
