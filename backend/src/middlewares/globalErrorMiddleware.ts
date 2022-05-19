import { ErrorRequestHandler } from 'express';

export default class globalErrorMiddleware {
  
  public static errorHandler: ErrorRequestHandler = async (err, _req, res, _next) => {
    console.log(err)

    res.status(500).json({ message: "Unexpected error occours" })
  }
}
