const { Book } = require('../models');

const bookData = [
    {
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        publisher: 'Chatto & Windus / Charles L. Webster And Company.',
        img: 'https://m.media-amazon.com/images/I/612kBOdDfIL.jpg',
        user_id: 1,
        genre_id: 6
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publisher: "Charles Scribner's Sons",
        img: 'https://m.media-amazon.com/images/P/1982146702.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 2,
        genre_id: 6
        
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        publisher: "Bloomsbury (UK)",
        img: 'https://m.media-amazon.com/images/P/0439139600.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 2,
        genre_id: 5
    },
    {
        title: 'Mr. Mercedes',
        author: 'Stephen King',
        publisher: "Simon & Schuster",
        img: 'https://m.media-amazon.com/images/P/1476754454.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 3,
        genre_id: 10
    },
    {
        title: 'Finders Keepers',
        author: 'Stephen King',
        publisher: "Simon & Schuster",
        img: 'https://m.media-amazon.com/images/P/1501100076.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 4,
        genre_id: 10
        
    },
    {
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        publisher: "London: Chapman & Hall",
        img: 'https://m.media-amazon.com/images/P/0451530578.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 5,
        genre_id: 6
    },
];

const seedBook = () => Genre.bulkCreate(bookData);

module.exports = seedBook;