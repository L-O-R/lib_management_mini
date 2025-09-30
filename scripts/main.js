class Book {
  constructor(
    title,
    author,
    genre,
    isbn,
    publication_year,
    quantity
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.publication_year = publication_year || NaN;
    this.quantity = quantity || 1;
    this.borrow = 0;
  }
}

const Book1 = new Book(
  "Harry Potter Deadly Hallows Part 1",
  "Jk Rowling",
  "Fantasy",
  "123-8989878786",
  null,
  10
);

// console.log(Book1);

class Library {
  constructor(name) {
    this.name = name;
    this.bookLists = [];
  }

  /*
        @param => book(Object)
        return => comment=> book added succesfully || error
    */
  addBook(book) {
    if (book instanceof Book) {
      this.bookLists.push(book);
    } else {
      return alert("Wrong detail/Format");
    }
  }

  showBooks() {
    return this.bookLists;
  }
}

const greatLibrary = new Library("The Great Library");

greatLibrary.addBook(Book1);

console.log(greatLibrary.showBooks());

const add_book_form =
  document.getElementById("add_book_form");

console.log(add_book_form);

add_book_form.addEventListener("submit", add_book);

function add_book(event) {
  event.preventDefault();
  console.log("hello");
  let bookTitle = event.target[0].value;
  let bookAuthor = event.target[1].value;
  let Bookgenre = event.target[2].value;
  let bookIsbn = event.target[3].value;
  let bookPublication = event.target[4].value;
  let book_quantity = event.target[5].value;

  let newBook = new Book(
    bookTitle,
    bookAuthor,
    Bookgenre,
    bookIsbn,
    bookPublication,
    book_quantity
  );
  greatLibrary.addBook(newBook);
  let arr = greatLibrary.showBooks();

  console.log(arr);

  for (let i of event.target) {
    i.value = "";
  }
}
