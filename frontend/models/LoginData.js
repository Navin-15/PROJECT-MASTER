// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const LoginDataSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, {
//   collection: 'logindata'
// });

// // Hash password before saving
// LoginDataSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare password
// LoginDataSchema.methods.comparePassword = function(candidate) {
//   return bcrypt.compare(candidate, this.password);
// };

// module.exports = mongoose.model('LoginData', LoginDataSchema);
