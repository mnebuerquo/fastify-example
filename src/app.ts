// Require the framework and instantiate it
import * as fastify from 'fastify'
import * as helmet from 'fastify-helmet'
import routes from './routes'

const server = fastify({
  logger: true,
})

import addSwagger from './swagger'
addSwagger(server)

server.register(helmet, { hidePoweredBy: { setTo: 'your mom' } })

server.register(routes, {})

// Run the server!
server.listen(80, '0.0.0.0', (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})
