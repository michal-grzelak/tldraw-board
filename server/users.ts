import type {FastifyInstance} from 'fastify'

export const usersRouter = async (fastify: FastifyInstance) => {
  fastify.get('/users', async (request, reply) => {
    reply.send({users: ['Alice', 'Bob', 'Charlie']})
  })
}
