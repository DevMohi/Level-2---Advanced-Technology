import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'Something Went wrong!';

  res.status(statusCode).json({
    succces: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
