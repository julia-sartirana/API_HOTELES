const Hotel = require('../models/hotels')
const Review = require('../models/reviews')
const User = require('../models/users')

const sort = (req, collection) => {
  let = searchCollection = ''
  if (collection === 'hotels') {
    searchCollection = Hotel
  }
  else if (collection === 'users') {
    searchCollection = User
  }
  else if (collection === 'reviews') {
    searchCollection = Review
  }
  else {
    searchCollection = Hotel
  }

    // Excluir valores de busqueda
  const queryObj = { ...req.query };
  const camposExcluidos = ['page', 'limit', 'sort', 'ciudad'];
  camposExcluidos.forEach(el => delete queryObj[el]);

  // Busqueda por aperadores
  let queryStr = JSON.stringify(queryObj)
  querySrt = queryStr.replace(/gte|gt|lte|lt/gi, match => `$${match}`)

  let query = searchCollection.find(JSON.parse(querySrt));

  
  // sort
  if (req.query.sort) {
    const campos = req.query.sort.split(',').join(" ")
    query = query.sort(campos)
  }
  else {
    query = query.sort('createdAt nombre')
  }
  /* console.log(req.query) */
  

 
  // Pagination 
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 20;
  const skip = (page - 1) * limit;

  query = query.limit(limit).skip(skip);

  return { query, page }

}

module.exports = sort