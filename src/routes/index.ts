import { Express } from 'express';

import productRouter from './product';

function route(app: Express) {
  const endPointURL = '/api';

  app.use(endPointURL + '/products', productRouter);
}

export default route;
