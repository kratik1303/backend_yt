class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        stack = ""
    ){
        super (message)
        this.statusCode=statusCode
        this.data = null
        this.message= message
        this.success = false
        this.errors =errors

        if (stack)
        {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}

/* 
ApiError is a custom error class used to standardize error responses in the backend.
It allows us to throw errors with a status code and message while maintaining a consistent response structure.
This makes debugging easier and ensures the frontend always receives predictable error responses.
 */