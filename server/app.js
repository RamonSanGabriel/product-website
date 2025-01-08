import express from 'express';
import logger from 'morgan';
import cors from 'cors';

/* import { router as contactsRouter } from './routes/api/contactsRouter.js'; */

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173'],
};

// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

// app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export { app };
