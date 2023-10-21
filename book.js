class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(book) {
      this.books = this.books.filter(b => b !== book);
    }
  
    findBooksByTitle(title) {
      return this.books.filter(book => book.title === title);
    }
  
    findBooksByAuthor(author) {
      return this.books.filter(book => book.author === author);
    }
  }