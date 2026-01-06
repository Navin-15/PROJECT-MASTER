const express = require('express');
const router = express.Router();
const Theater = require('../models/Theater'); // Import the model

// Create Theater
router.post('/', async (req, res) => {
  try {
    const newEntry = new Theater(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    console.error("❌ POST error:", err.message);
    res.status(500).json({ error: "Failed to save theater", details: err.message });
  }
});

// Get All Theaters
router.get('/', async (req, res) => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (err) {
    console.error("❌ GET error:", err.message);
    res.status(500).json({ error: "Failed to fetch theaters", details: err.message });
  }
});

// Update Theater
router.put('/:id', async (req, res) => {
  try {
    const updated = await Theater.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ error: "Theater not found" });
    }

    res.json({ message: "Updated successfully", updated });
  } catch (err) {
    console.error("❌ PUT error:", err.message);
    res.status(500).json({ error: "Failed to update theater", details: err.message });
  }
});


// Toggle theater enable/disable
router.put("/:id/toggle", async (req, res) => {
  try {
    const { isEnabled } = req.body;
    const updatedTheater = await Theater.findByIdAndUpdate(
      req.params.id,
      { isEnabled },
      { new: true }
    );
    if (!updatedTheater)
      return res.status(404).json({ message: "Theater not found" });

    res.json(updatedTheater);
  } catch (error) {
    console.error("Error toggling theater:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH route to toggle enable/disable theater
router.patch("/:id", async (req, res) => {
  try {
    const updatedTheater = await Theater.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // <- ensures Mongo returns the updated doc
    );
    res.json(updatedTheater);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// Delete Theater
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Theater.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Theater not found" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("❌ DELETE error:", err.message);
    res.status(500).json({ error: "Failed to delete theater", details: err.message });
  }
});

module.exports = router;

