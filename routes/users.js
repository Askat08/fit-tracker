const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then(users => res.json({ users }))
    .catch(err => res.status(400).json({ err }));
});

router.post("/add", (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  newUser
    .save()
    .then(() => {
      res.json({ msg: "User added" });
    })
    .catch(err => res.status(400).json({ err }));
});

module.exports = router;
