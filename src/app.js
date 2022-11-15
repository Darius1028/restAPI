import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.js'

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) =>{
  res.json({message: 'API'})
})

app.use('/api',router);

export default app;