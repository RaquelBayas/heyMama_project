import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'
import path from 'node:path'
import { connection } from './db/connectDB.js'
import { userRoutes } from './routes/user.routes.js'
import { moodRoutes } from './routes/mood.routes.js'
import { forumRoutes } from './routes/forum.routes.js'
import { articlesRoutes } from './routes/articles.routes.js';
import { friendsRoutes } from './routes/friends.routes.js'
import { Server } from 'socket.io';
import http from 'node:http';
import { log } from 'node:console'
import { chatRoutes } from './routes/chat.routes.js'
import { timelineRoutes } from './routes/timeline.routes.js'
import { consultsRoutes } from './routes/consults.routes.js'
import fileUpload from 'express-fileupload'
import multer from 'multer';


const { PORT, MYSQL_ADDON_PORT } = process.env

const port = PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload());

const staticFolderPath = path.join('./', 'src', 'uploads');

app.use(express.static(staticFolderPath));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoutes)
app.use('/mood', moodRoutes)
app.use('/forum', forumRoutes)
app.use('/articles', articlesRoutes);
app.use('/friends', friendsRoutes);
app.use('/chat', chatRoutes);

app.use('/timeline',timelineRoutes);
app.use('/consults',consultsRoutes);

// app.use("/uploads", express.static("C:\\Users\\mati\\Desktop\\Bootcamp\\heyMama_project\\backend\\src\\uploads"));


app.use(async (error, req, res, next) => {
  console.error(error.message);
});


connection.connect()
  .then(() => {
    console.error('Conectado a la base de datos...' + MYSQL_ADDON_PORT);
    app.listen(port, () => console.error(`Escuchando en el puerto ${port}...`));
  })
  .catch(err => console.error(err.message));



const server = http.createServer(app);
const io = new Server(server, {
  transports: ['websocket']
});


server.listen(443)
console.log('Server on port', 443);

let users = []

const addUser = (userId, socketId) => {
  !users.some(user => user.userId === userId) &&
    users.push({ userId, socketId });
  // console.log('existe el usuario? ' + !users.some(user => user.userId === userId));
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
  // console.log('usuario removido ' + users);
};

const getUser = (userId) => {
  // console.log('usuario encontrado? ' + JSON.stringify(users.find((user) => user.userId === userId)));

  console.log('🌞🌞🌞🌞🌞🌞', userId);
  const user = users.find(user => {
    console.log('🍏🍏🍏🍏🍏🍏🍏🍏', user);
    return user.userId === userId
  })
  console.log('💋💋💋💋💋💋💋💋💋', user);
  return user;
};

io.on('connection', socket => {
  // when connect
  // console.error('a user has connected');

  socket.on('addUser', (userId) => {
    // console.log('usuario recibido, user id ' + userId);
    addUser(userId, socket.id);
    // console.log('usuario añadido con user id ' + userId + ' | socket.id ' + socket.id);
    // console.log('lista de usuarios ' + JSON.stringify(users));
  });

  socket.on("sendMessage", ({ sender, receiver, text }) => {

    // console.log('send message', sender, receiver, text);
    // console.error('quien envia el mensaje? sender: ' + sender);
    const user = getUser(receiver);
    // console.log('user que recibe el mensaje' + JSON.stringify(user));


    console.log('❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤', sender);

    if (user && user.socketId) {
      console.log('😊');
      io.to(user.socketId).emit("getMessage", {
        sender,
        text,
      });
      console.log('mensaje enviado, sender: ' + sender + ' text: ' + text);
    } else {
      console.error(`Usuario no encontrado o sin socketId: ${receiver}`);
    }
  });



  socket.on('disconnect', () => {
    console.error('a user has disconnected!');
    removeUser(socket.id);
    io.emit('getUsers', users);
  });

});