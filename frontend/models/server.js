// ============================================================================================================
// NEW correct code from gemini

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');




const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cinema_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const BookingSchema = new mongoose.Schema({
  theater: { type: String, required: true},
  moviename: {type: String,required: true},
  seats: {type: [String],required: true},
  seatDetails: [{
    id: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  totalPrice: {type: Number, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  screen: {type: String, required: true},
  
});
 const Booking = mongoose.model('Booking', BookingSchema);

app.post('/api/bookings', async (req, res) => {
  try {
    console.log("📥 Incoming Booking Data:", JSON.stringify(req.body, null, 2));

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send({ message: "Booking saved", booking });
  } catch (err) {
    console.error("❌ Error saving booking:", err.message); // Add this
    res.status(500).send({ error: "Booking failed", details: err.message });
  }
});



// GET /api/bookings?theater=...&movie=...&date=...&time=...&screen=...
app.get('/api/bookings', async (req, res) => {
  const { theater, moviename, date, time, screen } = req.query;
  const filter = { theater, moviename, date, time, screen };
  // Only include non-empty show params
  Object.keys(filter).forEach(key => !filter[key] && delete filter[key]);
  const all = await Booking.find(filter);
  res.send(all);
});



// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));

// // // // // / // //// / // // // // // / // / // / // // / // / // // // // / //// // / / / /// /



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();


// // Middleware
// app.use(cors());
// app.use(express.json());

// const users = [
//   { name: 'Alice', email: 'alice@example.com', password: 'pass1' },
//   { name: 'Bob', email: 'bob@example.com', password: 'pass2' },
// ];

// app.post('/api/login', (req, res) => {
//   const { name, email, password } = req.body;
//   const user = users.find(u =>
//     u.name === name && u.email === email && u.password === password
//   );
//   if (!user) {
//     return res.status(401).json({ error: 'Invalid credentials' });
//   }
//   // In real apps, send token or user ID
//   res.json({ name: user.name, email: user.email });
// });

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/cinema_booking', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Schema and Model
// const BookingSchema = new mongoose.Schema({
//   theater: { type: String, required: true},
//   moviename: {type: String,required: true},
//   seats: {type: [String],required: true},
//   seatDetails: [{
//     id: { type: String, required: true },
//     type: { type: String, required: true },
//     price: { type: Number, required: true }
//   }],
//   totalPrice: {type: Number, required: true},
//   date: {type: String, required: true},
//   time: {type: String, required: true},
//   screen: {type: String, required: true},
  
// });
//  const Booking = mongoose.model('Booking', BookingSchema);

// app.post('/api/bookings', async (req, res) => {
//   try {
//     console.log("📥 Incoming Booking Data:", JSON.stringify(req.body, null, 2));

//     const booking = new Booking(req.body);
//     await booking.save();
//     res.status(201).send({ message: "Booking saved", booking });
//   } catch (err) {
//     console.error("❌ Error saving booking:", err.message); // Add this
//     res.status(500).send({ error: "Booking failed", details: err.message });
//   }
// });



// // GET /api/bookings?theater=...&movie=...&date=...&time=...&screen=...
// app.get('/api/bookings', async (req, res) => {
//   const { theater, moviename, date, time, screen } = req.query;
//   const filter = { theater, moviename, date, time, screen };
//   // Only include non-empty show params
//   Object.keys(filter).forEach(key => !filter[key] && delete filter[key]);
//   const all = await Booking.find(filter);
//   res.send(all);
// });



// // Start server
// app.listen(5000, () => console.log('Server running on http://localhost:5000'));