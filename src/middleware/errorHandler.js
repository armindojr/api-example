export default function errorHandler(err, req, res, next) {
  console.error('Error:', err);

  // Check for duplicate key error
  if (err.code === 11000 || err.name === 'MongoServerError') {
    return res.status(409).json({
      message: 'Product already exists. Please use a different name or ID.'
    });
  }

  // Handle other types of errors
  res.status(err.statusCode || 500).json({
    error: err.message || 'Something went wrong!'
  });

  next();
}
