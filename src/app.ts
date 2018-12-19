// Require the framework and instantiate it
import * as fastify from 'fastify'
const server = fastify({
  logger: true
})

// Declare a route
server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen(80, '0.0.0.0', function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})
