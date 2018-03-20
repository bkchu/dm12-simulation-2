module.exports = {
  login: (req, res, next) => {
    const db = req.app.get("db");
    const { session } = req;
    const { username, password } = req.body;
    db
      .login([username, password])
      .then(login => {
        if (login.length !== 0) {
          session.user = {
            id: login[0].id,
            username,
            password
          };
          res.status(200).send(session.user);
        } else {
          res.status(403).send("Invalid username or password.");
        }
      })
      .catch(err => res.status(500).send(err));
  },
  register: (req, res, next) => {
    const db = req.app.get("db");
    const { session } = req;
    const { username, password } = req.body;
    db
      .login([username, password])
      .then(login => {
        if (login.length !== 0) {
          session.user = {
            id: login[0].id,
            username,
            password
          };
          res.status(200).send(session.user);
        } else {
          db
            .register([username, password])
            .then(login => {
              session.user = {
                id: login[0].id,
                username,
                password
              };
              res.status(200).send(session.user);
            })
            .catch(err => res.status(500).send(err));
        }
      })
      .catch(err => res.status(500).send(err));
  },
  logout: (req, res, next) => {
    if (req.session.user) {
      req.session.destroy();
      res.status(200).send("Logout Hit: User Logged Out");
    } else {
      res.status(500).send("Logout Hit: User wasn't logged in to begin with.");
    }
  }
};
