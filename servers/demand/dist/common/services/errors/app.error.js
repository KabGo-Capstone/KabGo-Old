'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class AppError extends Error {
    constructor(message, statusCode) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error'
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }
}
exports.default = AppError
