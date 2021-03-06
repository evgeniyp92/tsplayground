import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});

//  If you're reading this, this is a reimplementation of Ts.ED, which you should just use instead
