import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pages, posts } from './routes';
import { admin } from './routes/api';
import {
  menuMiddleware,
  notFoundMiddleware,
  serverErrMiddleware
} from './assets/middlewares';
import passport from 'passport';
import { Strategy } from 'passport-local';
import expressSession from 'express-session';
import controllers from './controllers'

let app = express();

app.use(cors());

app.use(expressSession({
  secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(__dirname + '/static/favicon.ico'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/api', admin);

app.use(menuMiddleware);

app.post('/login', controllers.users.login);
app.post('/register', controllers.users.register);
app.get('/logout', controllers.users.logout);

app.use('/post', posts);
app.use('/', pages);

// catch errors
app.use(notFoundMiddleware);
app.use(serverErrMiddleware(app.get('env')));

export default app;
