const express = require("express");
const router = express.Router();

// Book Schema require
const Book = require("../models/Books");

router.post("/new", (req, res, next) => {
  const book = new Book({
    title: "Kimyo",
  });

  book
    .save()
    .then((data) => {
      res.json({ message: "Created! successfully", data });
    })
    .catch((err) => {
      res.json({ message: "ERROR!" });
    });
});

module.exports = router;
