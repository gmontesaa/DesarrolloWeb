import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookStore.js';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js';
export class BookService {
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }
  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }
  static createBook(book: CreateBookDTO): void {
    const store = useBookStore();
    const nextId = store.books.length > 0 ? Math.max(...store.books.map((b) => b.id), 0) + 1 : 1;
    store.books.push({ id: nextId, ...book });
  }
}
