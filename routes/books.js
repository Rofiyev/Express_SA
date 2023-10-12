const express = require("express");
const router = express.Router();

// Book Schema require
const Book = require("../models/Books");

router.post("/new", (req, res, next) => {
  const book = new Book({
    title: "English cartoon",
    like: true,
    comments: [
      { message: "Juda yaxshi!" },
      { message: "Menga juda yoqdi bu kitob" },
    ],
    meta: {
      votes: 140,
      favs: 400,
    },
  });

  book
    .save()
    .then((data) => {
      res.json({ message: "Created! successfully", data });
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
