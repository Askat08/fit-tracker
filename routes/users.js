const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  newUser
    .save()
    .then(() => {
      res.json("User added");
    })
    .catch(err => res.status(400).json("Errorkotokbash: " + err));
});

module.exports = router;
