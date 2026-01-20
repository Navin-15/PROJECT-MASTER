const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Booking = require('./models/Booking');

mongoose.connect('mongodb://localhost:27017/TicketBooking');

app.listen('3001', () =>{ console.log(`Server running on port 3001`)});
