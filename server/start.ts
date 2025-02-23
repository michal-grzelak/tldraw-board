import { fastify } from 'fastify'
import { reactRouterFastify } from '@mcansh/remix-fastify/react-router'
import getPort, { portNumbers } from 'get-port'
import { usersRouter } from './users'
import type { LoggerOptions } from 'pino'

const { NODE_ENV = 'development' } = process.env
const logLevel = process.env.LOG_LEVEL || 'warn'
const loggerOptions: Record<'development' | 'production', LoggerOptions> = {
  development: {
    level: logLevel,
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
  production: {
    level: logLevel,
  },
}

const app = fastify({
  logger: loggerOptions[NODE_ENV],
})

app.register((instance, opts, done) =>
  reactRouterFastify(
    instance,
    { ...opts, buildDirectory: 'build/react-router' },
    done,
  ),
)
app.register(usersRouter, { prefix: '/api' })

const desiredPort = Number(process.env.PORT) || 3000
const host = process.env.HOST || 'localhost'
const portToUse = await getPort({
  port: portNumbers(desiredPort, desiredPort + 100),
})
const address = await app.listen({
  port: portToUse,
  host,
})
console.log(`✅ ${NODE_ENV} server started: ${address}`)

if (portToUse !== desiredPort) {
  app.log.warn(
    `⚠️  Port ${desiredPort} is not available, using ${portToUse} instead.`,
  )
}
