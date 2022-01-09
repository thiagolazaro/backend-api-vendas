import productRouter from '@modules/products/routes/products.router';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

routes.use('/products', productRouter);

export default routes;
