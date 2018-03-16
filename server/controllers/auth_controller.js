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
          console.log("Register Hit: User already exists, logged in.");
          res.status(200).send(session.user);
        } else {
          console.log("Regster Hit: User doesn't exist, will register.");
          db
            .register([username, password])
            .then(login => {
              session.user = {
                id: login[0].id,
                username,
                password
              };

              console.log("Register Hit: User Successfully Made");
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
      console.log("Logout Hit: User Logged Out");
      res.status(200).send("Logout Hit: User Logged Out");
    } else {
      console.log("Logout Hit: User wasn't logged in to begin with.");
      res.status(500).send("Logout Hit: User wasn't logged in to begin with.");
    }
  }
};
