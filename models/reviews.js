const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hotel: {
    type: mongoose.Schema.ObjectId,
    ref: "Hotel"
  },
  score: {
    type: Number,
    min: 1,
    max: 5,
    validate: {validator: Number.isInteger},
    required: true
  },
  message: {
    type: String,
    required: true
  },
});

// pre-save middleware
reviewsSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12)
  next();
});

const Review = mongoose.model('Review', reviewsSchema, 'reviews');

module.exports = Review;

// // type: Number,
// //     min: 1,
// //   max: 5,
// //   validate: {validator: Number.isInteger}