const User = require('../models/users');
const sort = require('../utils/sort');

exports.getUsers = async (req, res) => {
  try {    

    const { query, page } = sort(req, 'users')
    
    const users = await query

    res.status(201).json({
      status: 'success',
      data: {
        page: page,
        users
      }
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err: err
    })
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(201).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err: err,
    });
  }
};

exports.postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user,
        createdAt: new Date()
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id
    });
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'No se pudo eliminar el usuario',
    });
  }
};

exports.putUser = async (req, res) => {
  try {
    const user = await User.replaceOne({
      _id: req.params.id
    }, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};


