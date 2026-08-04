import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

export class BooksController {
  static list(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Books";

    res.render('home/books', { viewData: viewData, books: books });
  }

  static show(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const book = Number.isNaN(id) ? undefined : Book.findById(books, id);

    if (!book) {
      res.status(404).send('Book not found');
      return;
    }

    const viewData: { [key: string]: any } = {};
    viewData["title"] = book.title;

    res.render('home/show', { viewData: viewData, book: book });
  }
}
