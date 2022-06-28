import { Request, Response, Router, NextFunction } from 'express';
import { get } from './decorators/routes';

// define controller decorator with root route
@controller('/')
class LoginController {
  // define http method and route decorator and function afterwards
  @get('/login')
  getLogin(req: Request, res: Response): void {
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
}
