import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import route from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3302;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port} ^^`);
});
