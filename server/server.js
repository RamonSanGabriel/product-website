import { app } from './app.js';

/* const corsOptions = {
  origin: ['http://localhost:5173'],
};
app.use(cors(corsOptions)); */
app.listen(8080, () => {
  console.log('Server is running. Use our API on port: 8080');
});
