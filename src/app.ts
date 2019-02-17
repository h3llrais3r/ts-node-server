import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import express, { Application } from 'express';
import expressHandlebars from 'express-handlebars';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import path from 'path';
import router from './routes';
import { accessLogStream } from './utils/logger';

// Load environment variables from .env file and make them available in process.env
dotenv.config();

const app: Application = express();

// Setup port
app.set('port', process.env.PORT || 3000);

// Setup view engine
const viewsDir = path.join(__dirname, 'views');
const viewLayoutsDir = path.join(viewsDir, 'layouts');
app.engine('.hbs', expressHandlebars({ layoutsDir: viewLayoutsDir, defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', viewsDir);

// Setup static content
app.use(express.static(path.join(__dirname, 'public')));

// Setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup validation
app.use(expressValidator());

// Setup access logger
app.use(morgan('combined', { stream: accessLogStream }));

// Setup compression
app.use(compression());

// Setup cors (See https://expressjs.com/en/resources/middleware/cors.html for configuration details)
app.use(cors());

// Setup errorhandler (only in development mode)
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

// Setup router
app.use('/', router);

// Export app
export default app;

/******************************* */
/* Alternative way - use classes */
/******************************* */
/*
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private config() {
    // Setup port
    app.set('port', process.env.PORT || 3000);

    // Setup view engine
    const viewsDir = path.join(__dirname, 'views');
    const viewLayoutsDir = path.join(viewsDir, 'layouts');
    app.engine('.hbs', expressHandlebars({ layoutsDir: viewLayoutsDir, defaultLayout: 'main', extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.set('views', viewsDir);
  }

  private setupMiddleware() {
    // Setup static content
    app.use(express.static(path.join(__dirname, 'public')));

    // Setup bodyparser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Setup validation
    app.use(expressValidator());

    // Setup access logger
    app.use(morgan('combined', { stream: accessLogStream }));

    // Setup compression
    app.use(compression());

    // Setup cors (See https://expressjs.com/en/resources/middleware/cors.html for configuration details)
    app.use(cors());

    // Setup errorhandler (only in development mode)
    if (app.get('env') === 'development') {
      app.use(errorhandler());
    }
  }
  private setupRoutes() {
    app.use('/', router);
  }
}

export default App;
*/
