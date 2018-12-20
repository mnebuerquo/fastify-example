// Require the framework and instantiate it
import * as fastify from 'fastify'
const server = fastify({
  logger: true
})

import addSwagger from './swagger'
addSwagger(server)

// Declare a route
server.get('/', {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}, function (request, reply) {
  reply.send({ hello: 'world' })
})

server.post('/sum', {
  schema: {
    //description: 'post some data',
    //tags: ['user', 'code'],
    //summary: 'qwerty',
    params: {},
    body: {
      type: 'object',
      properties: {
        a: { type: 'number' },
        b: { type: 'number' }
      }
    },
    response: {
      201: {
        description: 'Succesful response',
        type: 'object',
        properties: {
          answer: { type: 'number' }
        }
      }
    }
  }
}, (request, reply) => {
  console.log(request.body)
  const {a, b} = request.body
  reply.send({ answer: a+b })
})

// Run the server!
server.listen(80, '0.0.0.0', function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})
