const express = require("express");
const Banner = require("../models/Banner");

const router = express.Router();

// Add new banner
router.post("/", async (req, res) => {
  try {
    const { name, image } = req.body;
    const newBanner = new Banner({ name, image });
    await newBanner.save();
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(500).json({ error: "Failed to save banner" });
  }
});

// Get all banners
router.get("/", async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.json(banners);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch banners" });
  }
});

// Update banner by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, enabled } = req.body;

    const updatedBanner = await Banner.findByIdAndUpdate(
      id,
      { name, image, enabled },
      { new: true }
    );
    
    res.json(updatedBanner);
  } catch (error) {
    res.status(500).json({ error: "Failed to update banner" });
  }
});

// Delete banner by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Banner.findByIdAndDelete(id);
    res.json({ message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete banner" });
  }
});

module.exports = router;
