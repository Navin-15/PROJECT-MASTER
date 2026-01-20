// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Userfetch = require('./Userfetch');
// const Userupdate = require('./Userupdate');
// const Userdelete = require('./Userdelete');
// const User = require('./User');
// const bannerRoutes = require('../routes/bannerRoutes.js')
// const blockedSeatsRouter = require('../routes/blockedSeats.routes');
// const theaterRoutes = require('../routes/theaterRoutes.js');
// // const theaterRoutes = require('../routes/theaterRoutes.js');
// const movieRoutes = require('../routes/movies.js')
// const app = express();


// // Middleware
// app.use(cors());
// //app.use(express.json());
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));


// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/cinema_booking', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Connection error:', err));

// // Schema and Model for Bookings
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
// const Booking = mongoose.model('Booking', BookingSchema);

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

// // Sample MongoDB logic
// app.get('/api/bookings', async (req, res) => {
//     const { theater, moviename, date, time, screen } = req.query;
//     const now = new Date();
//     const showDateTime = new Date(`${date} ${time}`);
//     if (showDateTime < now) {
//         // Skip sending expired bookings
//         return res.json([]);
//     }
//     const bookings = await Booking.find({
//         theater,
//         moviename,
//         date,
//         time,
//         screen
//     });
//     res.json(bookings);
// });

// // New User data passing to MongoDB in Users Collections

// app.post('/api/users', async (req, res) => {
//   try {
//     const existing = await User.findOne({ email: req.body.email });
//     if (existing) return res.status(400).json({ error: 'Email already exists' });
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Use the route
// app.use('/api/users', Userfetch);
// // Mount your route correctly
// app.use('/api/users', Userupdate);
// // Mount the route at /api/users
// app.use('/api/users', Userdelete);

// // ADMIN THEATER SECTION
// app.use('/api/theaters', theaterRoutes);
// //ADMIN THEATER SECTION

// //Admin movie section
// app.use('/api/movies', movieRoutes);
// //Admin movie section

// // Admin login route
// app.post('/api/admin/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if a user with the given email exists
//     const user = await User.findOne({ email });
//     console.log('Fetched User:', user);
    
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     // Check if password matches
//     if (user.password !== password) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     // If email and password match, return success
//     return res.status(200).json({ message: 'Login successful', user });
//   } catch (err) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

// // API Routes
// app.use("/api/banners", bannerRoutes);

// app.use('/api/admin', blockedSeatsRouter);

// // Start server
// app.listen(5000, () => console.log('Server running on http://localhost:5000'));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const Userfetch = require('./Userfetch');
const Userupdate = require('./Userupdate');
const Userdelete = require('./Userdelete');
const User = require('./models/User');

const bannerRoutes = require('./routes/bannerRoutes');
const blockedSeatsRouter = require('./routes/blockedSeats.routes');
const theaterRoutes = require('./routes/theaterRoutes');
const movieRoutes = require('./routes/movies');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Booking Schema
const BookingSchema = new mongoose.Schema({
  theater: String,
  moviename: String,
  seats: [String],
  seatDetails: [{
    id: String,
    type: String,
    price: Number
  }],
  totalPrice: Number,
  date: String,
  time: String,
  screen: String
});

const Booking = mongoose.model('Booking', BookingSchema);

// Booking APIs
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/bookings', async (req, res) => {
  const bookings = await Booking.find(req.query);
  res.json(bookings);
});

// User APIs
app.post('/api/users', async (req, res) => {
  const existing = await User.findOne({ email: req.body.email });
  if (existing) return res.status(400).json({ error: 'Email already exists' });

  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

app.use('/api/users', Userfetch);
app.use('/api/users', Userupdate);
app.use('/api/users', Userdelete);

// Admin Routes
app.use('/api/theaters', theaterRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/admin', blockedSeatsRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
