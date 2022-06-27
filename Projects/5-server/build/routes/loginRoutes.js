"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn === true) {
        return next();
    }
    res.status(403).send("Not permitted");
}
var router = express_1.default.Router();
exports.router = router;
// router.get('/', (_req: Request, res: Response) => {
//   res.send('hi there');
// });
router.get('/login', function (_req, res) {
    res.send("\n\t\t<form method=\"POST\">\n\t\t\t<div>\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input name=\"email\" />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input name=\"password\" type=\"password\" />\n\t\t\t</div>\n\t\t\t<button>Submit</button>\n\t\t</form>\n\t");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // set the session with a loggedin flag
        req.session = { loggedIn: true };
        // redirect the user to index
        res.redirect('/');
    }
    else {
        res.send("invalid email or password");
    }
});
router.get('/', function (req, res) {
    // if theres a session and the session has loggedIn
    if (req.session && req.session.loggedIn) {
        res.send("\n\t\t\t<div>\n\t\t\t\t<div>You are logged in</div>\n\t\t\t\t<a href='/logout'>Log out</a>\n\t\t\t</div>\n\t\t");
    }
    else {
        res.send("\n\t\t\t<div>\n\t\t\t\t<div>You are not logged in</div>\n\t\t\t\t<a href='/login'>Log in</a>\n\t\t\t</div>\n\t\t");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (_req, res) {
    res.send("Welcome to protected route, logged in user");
});
