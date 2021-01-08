const Hotel = require('../models/hotels');
const sort = require('../utils/sort');

exports.getHotels = async (req, res) => {
  try {    

    console.log(req.query)
    const { query, page } = sort(req, 'hotels')
    
    const hotels = await query

    res.status(201).json({
      status: 'success',
      data: {
        page: page,
        hotels
      }
    })

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err: err
    })
  }
};

exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate('reviews');
    res.status(201).json({
      status: 'success',
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err: err,
    });
  }
};

exports.postHotel = async (req, res) => {
  try {
    const hotel = await Hotel.insertMany(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        hotel,
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

exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.deleteOne({
      _id: req.params.id
    });
    res.status(201).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'No se pudo eliminar el hotel',
    });
  }
};

exports.putHotel = async (req, res) => {
  try {
    
    const hotel = await Hotel.replaceOne(
      { _id: req.params.id },
      req.body
    );
    res.status(201).json({
      status: 'success',
      data: 
        hotel
      
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
    
  }
  
};

exports.patchHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: 'success',
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};