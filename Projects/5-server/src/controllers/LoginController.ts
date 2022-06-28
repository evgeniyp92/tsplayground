import { NextFunction, Request, Response } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

// define controller decorator with root route
@controller('/auth')
class LoginController {
  // define http method and route decorator and function afterwards
  @get('/login')
  getLogin(_req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
      // set the session with a loggedin flag
      req.session = { loggedIn: true };
      // redirect the user to index
      res.redirect('/');
    } else {
      res.send(`invalid email or password`);
    }
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
