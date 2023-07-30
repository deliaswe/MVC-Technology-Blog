// importing required dependencies and models
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

// setting up session
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizStore({
        db: sequelize,
    }),
};

app.use(session(sess));
//parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for public folder
app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// using session middleware
//app.use(
    //session({
        //secret: process.env.DB_SESSION_SECRET,
        //store: new SequelizStore({ db: sequelize }),
       // resave: false,
        //saveUninitialized: false,
    //})
//;

//const sessionSecret = 'my-secret';
// using routes
//app.use(session({ 
    //secret: sessionSecret, 
    //resave: false, 
    //saveUninitialized: true
//}));

// Import the models
const User = require('./models/Users');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

// Define the associations between the models
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// syncing sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
}
);