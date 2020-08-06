const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require('../api/auth/restricted-middleware');

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err =>{ res.send(err)}
    );
});

module.exports = router;