const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const authRouts = require('./routes/auth')
const taskRoutes = require('./routes/taskRoutes')
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
console.log('API documentation is available at http://localhost:5000/api-docs');
app.use('/auth', authRouts)
app.use('/api', taskRoutes)
app.get('/', (req, res) => {
    res.send('API is working good')
})
const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})