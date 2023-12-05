import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connection } from './db/connectDB.js';
import { userRoutes } from './routes/user.routes.js';
import 'dotenv/config';

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/users', userRoutes);

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

