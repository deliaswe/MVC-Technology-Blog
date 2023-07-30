// importing required dependencies and models
const path = require('path');
const express = require('express');
const session = require('express-session');
const SequelizStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers: require('./utils/helpers') });

// setting up express and port
const app = express();
const PORT = process.env.PORT || 3007;

// using session
app.use(session(sess));

//parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for public folder
app.use(express.static(path.join('public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// using session middleware
app.use(
    session({
        secret: process.env.DB_SESSION_SECRET,
        store: new SequelizStore({ db: sequelize }),
        resave: false,
        saveUninitialized: false,
    })
);

// using routes
app.use(routes);

// syncing sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
}
);