const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// to override the default express handler
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Check for Mongoose bad ObjectId
  // if (err.name === "CastError" && err.kind === "ObjectId") {
  //   message = `Resource not found`;
  //   statusCode = 404;
  // }

  res.status(statusCode).json({
    message,
    stack: process.env.Node_ENV === "production" ? "🍰" : err.stack,
  });
};

export { notFound, errorHandler };

/**
 * Express couldn't find a matching route, so it calls the next middleware.

notFound is a "regular" middleware (with 3 parameters: req, res, next), so it's used as a handler for unknown routes.

Then, notFound calls next(error), which triggers the next middleware with 4 parameters: err, req, res, next — that’s the errorHandler.

| Situation                          | Middleware executed         |
|-----------------------------------|-----------------------------|
| Route does not exist (`404`)      | `notFound`, then `errorHandler` |
| Route exists, but an error occurs | Directly `errorHandler`     |
| Valid route, no error             | Regular middleware (`req, res, next`) |
 */


