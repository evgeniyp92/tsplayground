"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
router.get('/', (_req, res) => {
    res.send('hi there');
});
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
