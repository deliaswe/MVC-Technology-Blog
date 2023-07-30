const router = require('express').Router();
const { User } = require('../../models');

// route to get all users
router.get('/', (req, res) => {
    Users.findAll({
        attributes: { exclude: ['password'] },
})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
});

// route to sign up
router.post('/signup', async (req, res) => {
    try {
        const newUser = new Users();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        const userData = await newUser.save();

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// route to login
router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// route to logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
}
);

// export the module
module.exports = router;