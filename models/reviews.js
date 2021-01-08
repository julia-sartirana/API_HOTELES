const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Hotel = require('./hotels')

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

reviewsSchema.pre('save', async function (next) {


  console.log(this.hotel)
     await Hotel.updateOne(this.hotel, {$set: {score: (Hotel.score + this.score)/2}} )
      
   
 
  next()
})

const Review = mongoose.model('Review', reviewsSchema, 'reviews');

module.exports = Review;