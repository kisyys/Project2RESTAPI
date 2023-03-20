const express = require('express');
const router = express.Router();
const Movie = require('./models/movie');

// Get all movies
router.get("/api/getall", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies)

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get movie by ID
router.get('/api/:id', (req, res, next) => {
  const promise = Movie.findById(req.params.id);
  promise.then((movie) => {
    if (!movie) {
      next({ message: 'The movie was not found.', code: 10 });
    } else {
     res.json(movie);
    }
  }).catch((err) => {
    res.json('The movie was not found.');
  });
});

// Add movie
router.post("/api/add", async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    year: req.body.year
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json({ newMovie });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Update movie by ID
router.put("/api/update/:id", async (req, res) => {
  await Movie.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    else {
      res.status(200).json({ result });
    }
  }).clone().catch(function (err) { console.log(err) });
});

// Delete movie by ID
router.delete("/api/delete/:id", async (req, res) => {
  await Movie.findByIdAndDelete({ _id: req.body._id }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    else {
      res.status(200).json(result);
    }
  }).clone().catch(function (err) { console.log(err) });
});

module.exports = router;