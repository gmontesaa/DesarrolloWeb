// Tutorial 01: proyecto Express MPA/SSR con TypeScript, EJS y Tailwind
import { Router } from 'express';
import { HomeController } from '../controllers/HomeController.js';
import { BooksController } from '../controllers/BooksController.js';

export default class Routes {
  static initializeRoutes(): Router {
    const router = Router();

    router.get('/', HomeController.index);
    router.get('/about', HomeController.about);
    router.get('/books', BooksController.list);
    router.get('/books/:id', BooksController.show);
    router.get('/contact', HomeController.contact);
    return router;
  }
}
