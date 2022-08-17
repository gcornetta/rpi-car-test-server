async function routes (fastify, options) {
    const commandBodyJsonSchema = {
        type: 'object',
        required: ['command'],
        properties: {
          command: { type: 'string' },
        },
    }
    
    const commandResponseSchema = {
      200: {
        type: 'object',
        properties: {
          statusCode: { type: 'number' },
          message: { type: 'string' },
        }
      },
      400: {
        statusCode: { type: 'number' },
        error: { type: 'string' },
      },
    }

    const schema = {
      body: commandBodyJsonSchema,
      response: commandResponseSchema,
    }
    
    fastify.post('/command', { schema }, async (request, reply) => {
        let cmd = request.body //JSON.parse(request.body)
          .command
          .toLowerCase()

        if (cmd === 'park' || cmd === 'stop') {
          reply.code(200).send('OK')
        } else {
          const error = new Error('Unknown command')
          reply.code(400).send(error)
        }
    })
  }
  
  module.exports = routes