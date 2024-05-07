interface Author {
  name: string;
  books: Book[];
}

interface Book {
  title: string;
  author: Author;
  yearPublished: number;
  genre: string;
  ISBN?: string;
}

// Example Authors
const authors: Author[] = [
  { name: 'George Orwell', books: [] },
  { name: 'Aldous Huxley', books: [] },
  { name: 'Harper Lee', books: [] },
  { name: 'F. Scott Fitzgerald', books: [] },
  { name: 'J.D. Salinger', books: [] },
  { name: 'Leo Tolstoy', books: [] },
  { name: 'Jane Austen', books: [] },
  { name: 'Mark Twain', books: [] },
  { name: 'J.R.R. Tolkien', books: [] },
  { name: 'Herman Melville', books: [] },
];

// Example Books
const books: Book[] = [
  {
    title: '1984',
    author: authors[0],
    yearPublished: 1949,
    genre: 'Dystopian',
    ISBN: '978-0451524935',
  },
  {
    title: 'Animal Farm',
    author: authors[0],
    yearPublished: 1945,
    genre: 'Political Satire',
    ISBN: '978-0451526342',
  },
  {
    title: 'Brave New World',
    author: authors[1],
    yearPublished: 1932,
    genre: 'Science Fiction',
    ISBN: '978-0060850524',
  },
  {
    title: 'Island',
    author: authors[1],
    yearPublished: 1962,
    genre: 'Utopian Novel',
    ISBN: '978-0061561795',
  },
  {
    title: 'To Kill a Mockingbird',
    author: authors[2],
    yearPublished: 1960,
    genre: 'Southern Gothic',
    ISBN: '978-0060935467',
  },
  {
    title: 'Go Set a Watchman',
    author: authors[2],
    yearPublished: 2015,
    genre: 'Southern Fiction',
    ISBN: '978-0062409850',
  },
  {
    title: 'The Great Gatsby',
    author: authors[3],
    yearPublished: 1925,
    genre: 'Tragedy',
    ISBN: '978-0743273565',
  },
  {
    title: 'Tender is the Night',
    author: authors[3],
    yearPublished: 1934,
    genre: 'Psychological Novel',
    ISBN: '978-0684801544',
  },
  {
    title: 'The Catcher in the Rye',
    author: authors[4],
    yearPublished: 1951,
    genre: 'Literary Realism',
    ISBN: '978-0316769488',
  },
  {
    title: 'War and Peace',
    author: authors[5],
    yearPublished: 1869,
    genre: 'Historical Fiction',
    ISBN: '978-0307266934',
  },
  {
    title: 'Anna Karenina',
    author: authors[5],
    yearPublished: 1877,
    genre: 'Realist Novel',
    ISBN: '978-1593080273',
  },
  {
    title: 'Pride and Prejudice',
    author: authors[6],
    yearPublished: 1813,
    genre: 'Romance',
    ISBN: '978-0141439518',
  },
  {
    title: 'Emma',
    author: authors[6],
    yearPublished: 1815,
    genre: 'Novel of Manners',
    ISBN: '978-0141439587',
  },
  {
    title: 'The Adventures of Huckleberry Finn',
    author: authors[7],
    yearPublished: 1884,
    genre: 'Picaresque',
    ISBN: '978-0486280615',
  },
  {
    title: 'The Adventures of Tom Sawyer',
    author: authors[7],
    yearPublished: 1876,
    genre: 'Adventure',
    ISBN: '978-0486400778',
  },
  {
    title: 'The Hobbit',
    author: authors[8],
    yearPublished: 1937,
    genre: 'Fantasy',
    ISBN: '978-0547928227',
  },
  {
    title: 'The Lord of the Rings',
    author: authors[8],
    yearPublished: 1954,
    genre: 'High Fantasy',
    ISBN: '978-0544003415',
  },
  {
    title: 'Moby Dick',
    author: authors[9],
    yearPublished: 1851,
    genre: 'Adventure',
    ISBN: '978-1503280786',
  },
];

// Dynamically link books back to authors
authors.forEach((author) => {
  author.books = books.filter((book) => book.author === author);
});

// Link books back to authors
authors.forEach((author) => {
  author.books = books.filter((book) => book.author === author);
});

export { authors, books };
