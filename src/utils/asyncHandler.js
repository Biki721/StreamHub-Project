const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    next(error);
  });
};

export { asyncHandler };

// Alternate ways

// using arrow function
/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ success: false, message: error.message });
  }
};

// using regular function
function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      res
        .status(error.code || 500)
        .send({ success: false, message: error.message });
    }
  };
}
  
*/
