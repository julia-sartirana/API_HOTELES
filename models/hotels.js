const mongoose = require('mongoose');

const HotelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  location: {
    type: Object,
    required: true
  },  
  categories: {
    type: Array,
    required: true
  },
  price: {
    type: Object,
    required: true
  },
  totalRooms: {
    type: Number,
    required: true
  },
  bookedRooms: {
    type: Number,
    required: true
  },
  bookingRate: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
}, 
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

HotelsSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'hotel',
  localField: '_id'
})

const Hotel = mongoose.model('Hotel', HotelsSchema, 'hotels');

module.exports = Hotel;