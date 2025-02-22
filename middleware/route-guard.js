const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.redirect("/private")
    }
}

module.exports = isLoggedIn