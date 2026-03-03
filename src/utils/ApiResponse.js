class ApiResponse{
    constructor (statusCode,data,message="Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
export {ApiResponse}

/* 
ApiResponse is a custom response class used to standardize success responses from the API.
It wraps the actual data along with status code, message, and success flag.
This ensures consistency across all APIs and simplifies frontend handling.
*/