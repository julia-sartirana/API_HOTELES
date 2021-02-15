const Review = require('../models/reviews');
const sort = require('../utils/sort');

exports.getReviews = async (req, res) => {
  try {    

    /* console.log(req.query) */
    const { query, page } = sort(req, 'reviews')
    
    const reviews = await query
  
    res.status(201).json({
      status: 'success',
      data: {
        page: page,
        reviews
      }
    })

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err: err
    })
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(201).json({
      status: 'success',
      data: {
        review,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err: err,
    });
  }
};

exports.postReview = async (req, res) => {
  try {
    const review = await Review.insertMany(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        review,
        createdAt: new Date()
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err: err,
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.deleteOne({
      _id: req.params.id
    });
    res.status(201).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'No se pudo eliminar el review',
    });
  }
};

