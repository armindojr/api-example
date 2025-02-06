import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import productRouter from './routes/products.js';
import errorHandler from './middleware/errorHandler.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

// Middleware de log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get('/health-check', (req, res) => {
  res.status(200).json({ message: 'API funcionando corretamente' });
});

// Rotas dos produtos
app.use('/v1/products', productRouter);

// Middleware de tratamento de erros
app.use(errorHandler);

// Conectar ao banco de dados
mongoose.connect(process.env.DB_URI, {
  user: process.env.MONGO_ROOT_USER,
  pass: process.env.MONGO_ROOT_PASSWORD,
  dbName: process.env.DB_NAME
});

// Eventos de conexão do MongoDB
mongoose.connection.on('connected', () => {
  console.log('Conectado ao banco de dados');
});

mongoose.connection.on('error', err => {
  console.error('Erro no banco de dados:', err);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
