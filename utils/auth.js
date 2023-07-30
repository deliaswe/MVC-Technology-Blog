// middeleware is a function that executes before the route handler
const withAuth = (req, res, next) => {
    // if the user is not logged in, redirect the user to the login page
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        // if the user is logged in, execute the route function that will allow them to view the page
        next();
    }
}
module.exports = withAuth;