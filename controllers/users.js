export const login = (req, res, next) => {
  passport.authenticate('local',
    function(err, user, info) {
      return err
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
            return err
              ? next(err)
              : res.redirect('/private');
          })
          : res.redirect('/');
    }
  )(req, res, next);
};


export const logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

// Регистрация пользователя. Создаем его в базе данных, и тут же, после сохранения, вызываем метод `req.logIn`, авторизуя пользователя
export const register = (req, res, next) => {
  var user = new User({ username: req.body.email, password: req.body.password});
  user.save(function(err) {
    return err
      ? next(err)
      : req.logIn(user, function(err) {
        return err
          ? next(err)
          : res.redirect('/private');
      });
  });
};