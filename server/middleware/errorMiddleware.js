const notFound = (req, res, next) => {
  const error = new Error(`Not found = ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  //if response status code is 200, make the status code 500, else res.statusCode
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    //if we are NOT in production, get stack from error object
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
