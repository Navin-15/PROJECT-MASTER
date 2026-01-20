// 10/10/25 working to display added type and price field in managemovie component

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single movie by ID
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - create new movie
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const saved = await movie.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Save error:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// PUT - update existing movie by ID 
router.put('/:id', async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Movie not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Toggle theater enable status for a movie
router.put('/:movieId/theaters/:theaterIndex/toggle', async (req, res) => {
  try {
    const { movieId, theaterIndex } = req.params;
    const { isEnabled } = req.body;

    const movie = await Movie.findById(movieId);
    if (!movie) return res.status(404).json({ error: "Movie not found" });

    if (!movie.theaters[theaterIndex])
      return res.status(404).json({ error: "Theater not found in movie" });

    // ✅ Update only that theater's isEnabled flag
    movie.theaters[theaterIndex].isEnabled = isEnabled;
    await movie.save();

    res.json({ success: true, message: "Theater toggle updated", movie });
  } catch (err) {
    console.error("Toggle error:", err);
    res.status(500).json({ error: err.message });
  }
});


// DELETE - remove movie
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
