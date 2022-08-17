const fastify = require('fastify')({
    logger: true
  })
const env = require('@fastify/env')

/**
 * Validation schema for environment variables
 */
const schema = {
  type: 'object',
  required: [
    'ADDRESS',
    'PORT'
  ],
  properties: {
    ADDRESS: {
      type: 'string',
      default: '127.0.0.1'
    },
    PORT: {
      type: 'string',
      default: 3000
    }
  }
}

/**
 * options for fastify 'env' plugin
 */
const options = {
  confKey: 'config',
  dotenv: true,
  schema: schema,
  data: {} // default is process.env
}

/**
 * start - load plugins and start the server on the desired IP address and port number
 */
const start = async () => {
  // register environment variables plugin
  await fastify
    .register(env, options)
    .ready((err) => {
       if (err) {
        fastify.log.error(err)
       }
       options.data = { ...fastify.config }
       fastify.log.info(`Host configuration ${JSON.stringify(fastify.config)}`)
     })

  // register routes
  await fastify
    .register(require('./routes'))

  await fastify.listen({ port: fastify.config.PORT, host: fastify.config.ADDRESS }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
}

// start the server
start()
