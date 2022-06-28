import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { router as controllerRouter } from './controllers/decorators/controller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }));

app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
