const { User } = require('../models/Account');

let auth = (req, res, next) => {
  let id = req.cookies.w_auth;

  User.findById(id, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.id = id;
    req.user = user;
    next();
  });
};

module.exports = { auth };