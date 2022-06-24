import express, { Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('hi there');
});

router.get('/login', (_req: Request, res: Response) => {
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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // set the session with a loggedin flag
    req.session = { loggedIn: true };
    // redirect the user to index
    res.redirect('/');
  } else {
    res.send(`invalid email or password`);
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
			<div>
				<div>You are logged in</div>
				<a href='/logout'>Log out</a>
			</div>
		`);
  } else {
    res.send(`
			<div>
				<div>You are not logged in</div>
				<a href='/login'>Log in</a>
			</div>
		`);
  }
});

export { router };
