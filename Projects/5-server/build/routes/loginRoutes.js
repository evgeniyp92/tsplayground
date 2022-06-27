"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn === true) {
        return next();
    }
    res.status(403).send(`Not permitted`);
}
const router = express_1.default.Router();
exports.router = router;
// router.get('/', (_req: Request, res: Response) => {
//   res.send('hi there');
// });
router.get('/login', (_req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // set the session with a loggedin flag
        req.session = { loggedIn: true };
        // redirect the user to index
        res.redirect('/');
    }
    else {
        res.send(`invalid email or password`);
    }
});
router.get('/', (req, res) => {
    // if theres a session and the session has loggedIn
    if (req.session && req.session.loggedIn) {
        res.send(`
			<div>
				<div>You are logged in</div>
				<a href='/logout'>Log out</a>
			</div>
		`);
    }
    else {
        res.send(`
			<div>
				<div>You are not logged in</div>
				<a href='/login'>Log in</a>
			</div>
		`);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (_req, res) => {
    res.send(`Welcome to protected route, logged in user`);
});
