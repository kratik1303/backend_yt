const asyncHandler = (requestHandler) =>{
   return (req,res,next) =>{
    Promise.resolve(requestHandler(req,res,next)).catch((err) =>next(err))
   }
}

export {asyncHandler}

/*
asyncHandler is a wrapper function used to handle errors in async Express controllers without writing try-catch blocks repeatedly.
It ensures that any error inside an async function is automatically caught and passed to Express’s global error middleware using next(err).
This keeps controller code clean, improves readability, and centralizes error handling.
*/