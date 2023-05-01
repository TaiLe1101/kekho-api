import { Express, Request, Response } from 'express';

import productRouter from './product';
import { ClientRP } from '../interfaces/components/response';

function route(app: Express) {
  const endPointURL = '/api';

  app.get('/', (req: Request, res: Response) => {
    const response: ClientRP = {
      status: 200,
      err: false,
      msg: 'Get Success',
      data: {
        Hello: "Hello Bro ^^ Welcome to web api end point api '~/api/*'",
      },
    };
    res.status(200).json(response);
  });

  app.use(endPointURL + '/products', productRouter);
}

export default route;
