import express from 'express';

// singleton Router
export class AppRouter {
  // private instance property of type Router
  private static instance: express.Router;

  // if an instance cant be found, return a new one, otherwise return the
  // existing one
  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }
    return AppRouter.instance;
  }
}
