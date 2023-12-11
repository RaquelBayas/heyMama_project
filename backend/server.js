<<<<<<< HEAD
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { connection } from './db/connectDB.js';
import { userRoutes } from './routes/user.routes.js';
import { articlesRoutes } from './routes/articles.routes.js';
=======
import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'
import { connection } from './db/connectDB.js'
import { userRoutes } from './routes/user.routes.js'
import { forumRoutes } from './routes/forum.routes.js'

>>>>>>> 47e1f84d5f855fcb76a57c099e00776c9956a2f7

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoutes)
app.use('/forum', forumRoutes)

app.use('/articles', articlesRoutes);

app.use(async (error, req, res, next) => {
  console.log(error.message);
  console.log(next);
});


connection.connect()
  .then(() => {
    console.log('Conectado a la base de datos...');
    app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
  })
  .catch(err => console.log(err.message));

