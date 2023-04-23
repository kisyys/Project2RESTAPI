const express = require('express');
const router = express.Router();
const Movie = require('./models/movie');

// Get all movies
router.get("/api/getall", async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.json(movies)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({error: "Something went wrong"})
  }
});

// Get movie by ID
router.get('/api/:id', async (req, res) => {
  try { 
    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    res.json({movie});
  } catch (e) {
      console.log(e.message);
      res.status(500).json({error: "Something went wrong"})
    }
});

// Add movie
router.post('/api/add', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json({ newMovie });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({error: "Something went wrong"})
  }
});

// Update movie by ID
router.put("/api/update/:id", async (req, res) => {
  try { 
    const movie = await Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    console.log(movie);
    res.json({movie});
  } catch (e) {
      console.log(e.message);
      res.status(500).json({error: "Something went wrong"})
    }
});

// Delete movie by ID
router.delete("/api/delete/:id", async (req, res) => {
  try { 
    const movie = await Movie.findByIdAndDelete({ _id: req.params.id });
    console.log(movie);
    res.json({movie});
  } catch (e) {
      console.log(e.message);
      res.status(500).json({error: "Something went wrong"})
    }
});

module.exports = router;