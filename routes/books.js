const express = require("express");
const router = express.Router();

// Book Schema require
const Book = require("../models/Books");

// Create book database
router.post("/new", (req, res) => {
  const book = new Book({
    title: "Math",
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

// get book all database
router.get("/all", (req, res) => {
  Book.find({}).then((data) => {
    res.json(data);
  });
});

// get book filter database
router.get("/find", (req, res) => {
  Book.find({ like: true, title: "Booknome" })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// database get one data
router.get("/findOne", (req, res) => {
  Book.findOne({ title: "Dunyo bo'ylab 80 kun" })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// database get id one data
router.get("/findById", (req, res) => {
  Book.findById("65281add8c32e4a84c8bc661")
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// update data in database
router.get("/updated", (req, res) => {
  Book.updateMany({ like: false, like: true })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// update by id data in database
router.get("/findByIdAndUpdate", (req, res) => {
  Book.findByIdAndUpdate("6528174c87935bbaceeebd5f", { title: "Code Life" })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// remove data in database
router.delete("/remove", (req, res) => {
  Book.findByIdAndRemove("6529653ea61b25e0a4877bef")
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// get data from database sort in title
router.get("/sort", (req, res) => {
  Book.find({}, "title")
    .sort({ title: 1 })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// limit (ko'rsatish soni) and skip (tashlab ketishi)
router.get("/limitAndSkip", (req, res) => {
  Book.find({}, "title")
    .skip(2)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
