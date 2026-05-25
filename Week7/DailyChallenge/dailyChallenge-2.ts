


// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// How to design and use TypeScript classes and interfaces.
// How to apply access modifiers to control access to properties and methods.
// How to use optional and readonly properties in interfaces.
// How to implement basic inheritance to extend class functionality.


// Instructions
// Create a simple library system with TypeScript:

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)

// Class Library: Create a class Library with:

// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.

// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;

}

class Library{
    
    private books: Book[] = [];
    

    public addBook(book: Book):void{
       this.books.push(book);
    }

    public getBookDetails(bookNum: string):string{
        let givenBook = this.books.find((book) => book.isbn === bookNum);

        if (!givenBook) {
            return `Book with ISBN ${bookNum} not found.`;
         }

         return `The book "${givenBook.title}" was written by ${givenBook.author} in ${givenBook.publishedYear}.`;
    }

    protected get allBooks(): Book[] {
        return this.books;
    } // adding method to satisfy the instructions and keeping the books array private, but giving access to DigitalLibrary to the books array

}

class DigitalLibrary extends Library{

    readonly website: string = "#..."

    public listBooks(){
        let booksArr = this.allBooks
        let bookTitles = booksArr.map((book)=>book.title)
        return bookTitles
    }

}


let firstDigitalLibrary = new DigitalLibrary;

const book1: Book = {
    title: "El Aleph",
    author: "Jorge Luis Borges",
    isbn: "9789500441",
    publishedYear: 1949,
    genre: "Ficción"
};

const book2: Book = {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    isbn: "9780307474",
    publishedYear: 1967,
    genre: "Realismo Mágico"
};

const book3: Book = {
    title: "Ficciones",
    author: "Jorge Luis Borges",
    isbn: "9788420633",
    publishedYear: 1944
   
};

firstDigitalLibrary.addBook(book1);
firstDigitalLibrary.addBook(book2);
firstDigitalLibrary.addBook(book3);

console.log(firstDigitalLibrary.getBookDetails("9780307474"));
console.log(firstDigitalLibrary.listBooks());

