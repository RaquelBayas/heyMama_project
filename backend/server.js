import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'
import { connection } from './db/connectDB.js'
import { userRoutes } from './routes/user.routes.js'
import { moodRoutes } from './routes/mood.routes.js'
import { forumRoutes } from './routes/forum.routes.js'
import { articlesRoutes } from './routes/articles.routes.js';
import { friendsRoutes } from './routes/friends.routes.js'
import { Server } from 'socket.io';
import http from 'node:http';

const { PORT, MYSQL_ADDON_PORT } = process.env

const port = PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoutes)
app.use('/mood', moodRoutes)
app.use('/forum', forumRoutes)
app.use('/articles', articlesRoutes);
app.use('/friends', friendsRoutes);

app.use(async (error, req, res, next) => {
  console.log(error.message);
});


connection.connect()
  .then(() => {
    console.log('Conectado a la base de datos...' + MYSQL_ADDON_PORT);
    app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
  })
  .catch(err => console.log(err.message));



const server = http.createServer(app);
const io = new Server(server, {
  transports: ['websocket'],
  connectionStateRecovery: {}
});


server.listen(443)
console.log('Server on port', 443);

io.on('connection', socket => {
  // when connect
  console.log('a user has connected');

  socket.on('message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg)
  })


})