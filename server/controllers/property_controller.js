module.exports = {
  getProperty: (req, res, next) => {
    const db = req.app.get("db");
    if (!req.query.filter) {
      db
        .get_property([req.session.user.id])
        .then(allProps => res.status(200).send(allProps))
        .catch(err => res.status(500).send(err));
    } else {
      db
        .filter_property([req.session.user.id, req.query.filter])
        .then(allProps => res.status(200).send(allProps))
        .catch(err => res.status(500).send(err));
    }
  },

  createProperty: (req, res, next) => {
    const db = req.app.get("db");
    const {
      property_name,
      description,
      loan,
      mortgage,
      recommended_rent,
      desired_rent,
      address,
      city,
      state,
      zip,
      picture_url
    } = req.body;

    db
      .create_property([
        req.session.user.id,
        property_name,
        description,
        loan,
        mortgage,
        recommended_rent,
        desired_rent,
        address,
        city,
        state,
        zip,
        picture_url
      ])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => res.status(500).send(err));
  },

  deleteProperty: (req, res, next) => {
    const db = req.app.get("db");
    db
      .delete_property([req.session.user.id, req.params.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => res.status(500).send(err));
  }
};
