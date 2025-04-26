const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TaskWise API Documentation',
    version: '1.0.0',
    description: 'API documentation for the TaskWise project',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/auth.js', './routes/taskRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
