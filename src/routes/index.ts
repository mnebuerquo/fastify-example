import { RouteSchema } from 'fastify'

export default (fastify, options, next) => {
  // Declare a route
  fastify.get(
    '/',
    {
      schema: {
        description: 'default route with hello world',
        tags: ['user', 'code'],
        summary: 'replace this with your own code',
        response: {
          200: {
            type: 'object',
            properties: {
              hello: { type: 'string' },
            },
          },
        },
      } as RouteSchema,
    },
    (request, reply) => {
      reply.send({ hello: 'world' })
    },
  )

  fastify.post(
    '/sum',
    {
      schema: {
        description: 'Post a and b arguments, respond with the sum.',
        tags: ['user', 'code'],
        summary: 'Test Post Arguments Swagger',
        params: {},
        body: {
          type: 'object',
          properties: {
            a: { type: 'number' },
            b: { type: 'number' },
          },
        },
        response: {
          201: {
            description: 'Succesful response',
            type: 'object',
            properties: {
              answer: { type: 'number' },
            },
          },
        },
      } as RouteSchema,
    },
    (request, reply) => {
      const { a, b } = request.body
      reply.send({ answer: a + b })
    },
  )

  next()
}
