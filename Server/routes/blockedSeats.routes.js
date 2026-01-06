const express = require("express");
const BlockedSeats = require("../models/BlockedSeats");

const router = express.Router();

// Fetch blocked seats
router.get("/blocked-seats", async (req, res) => {
  try {
    const { theater, movieName, screen, time, date } = req.query;

    const blocked = await BlockedSeats.findOne({ theater, movieName, screen, time, date });

    res.json(blocked ? blocked.seats : []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Block seats
router.post("/block-seats", async (req, res) => {
  try {
    const { theater, movieName, screen, time, date, seats } = req.body;

    let blocked = await BlockedSeats.findOne({ theater, movieName, screen, time, date });

    if (blocked) {
      blocked.seats = [...new Set([...blocked.seats, ...seats])]; // merge without duplicates
      await blocked.save();
    } else {
      blocked = new BlockedSeats({ theater, movieName, screen, time, date, seats });
      await blocked.save();
    }

    res.json(blocked);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Unblock seats (remove from blocked list)
router.post("/unblock-seats", async (req, res) => {
  try {
    const { theater, movieName, screen, time, date, seats } = req.body;

    let blocked = await BlockedSeats.findOne({ theater, movieName, screen, time, date });
    if (!blocked) {
      return res.status(404).json({ message: "No blocked seats found" });
    }

    // Remove selected seats from blocked list
    blocked.seats = blocked.seats.filter((s) => !seats.includes(s));

    if (blocked.seats.length === 0) {
      // If no seats left, remove the whole record
      await BlockedSeats.deleteOne({ _id: blocked._id });
    } else {
      await blocked.save();
    }

    res.json({ message: "✅ Seats unblocked successfully", blocked });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

