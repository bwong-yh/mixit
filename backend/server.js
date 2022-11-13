import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
import morgan from 'morgan';

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('welcome to mixit server'));

// api routes
import recipeRoutes from './routes/recipeRoutes.js';

app.use('/api/recipes', recipeRoutes);

// db
import db from './db/config.js';

db.connect()
  .then(() => {
    console.log('connected to db');

    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  })
  .catch(err => console.log(err));
