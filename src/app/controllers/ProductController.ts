import { Request, Response } from 'express';
import { ClientRP } from '../../interfaces/components/response';

const FAKE_APIS = [
  {
    id: 1,
    name: 'Kệ kho chứa tiền',
    current_price: 3000,
  },
  {
    id: 2,
    name: 'Kệ kho chứa vàng',
    current_price: 5000,
  },
  {
    id: 3,
    name: 'Kệ kho chứa đồng',
    current_price: 7000,
  },
  {
    id: 4,
    name: 'Kệ kho chứa women',
    current_price: 9000,
  },
  {
    id: 5,
    name: 'Kệ kho chứa men',
    current_price: 12000,
  },
];

class ProductController {
  index(req: Request, res: Response) {
    const response: ClientRP = {
      status: 200,
      err: false,
      msg: 'Get Success',
      data: FAKE_APIS,
    };
    return res.status(200).json(response);
  }
}

export default new ProductController();
