import express, { Request, Response } from 'express';

const router = express.Router();

type HttpBody = { [key: string]: string | undefined };

router.get('/', (req: Request, res: Response) => {
  res.send('hi there');
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`);
});

router.post('/login', (req: Request<{}, {}, HttpBody>, res: Response) => {
  const { email, password } = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send(`You must provide an email property`);
  }
});

export { router };
