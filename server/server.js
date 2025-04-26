const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Server } = require('socket.io');
const http = require('http');
const sequelize = require('./sequelize');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
console.log('API documentation is available at http://localhost:5000/api-docs');
app.use('/auth', authRoutes);
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send('API is working good');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('taskUpdated', (data) => {
    socket.broadcast.emit('taskUpdated', data);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
