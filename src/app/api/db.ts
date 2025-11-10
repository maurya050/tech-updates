const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
];

export function getBooks() {
    return books;
}   
export function getBookById(id: number) {
    return books.find(book => book.id === id);
}   

export function addBook(title: string, author: string) {
    const newBook = {
        id: books.length + 1,
        title,
        author,
    };
    books.push(newBook);
    return newBook;
}   
export function deleteBook(id: number) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        return books.splice(index, 1)[0];
    }
    return null;
}

export function updateBook(id: number, title: string, author: string) {
    const book = books.find(book => book.id === id);
    if (book) {
        book.title = title;
        book.author = author;
        return book;
    }
    return null;
}   

export function searchBooks(query: string) {
    return books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
}   
export function getTotalBooks() {
    return books.length;
}       
export function clearBooks() {
    books.length = 0;
}   
export function getAllAuthors() {
    const authors = books.map(book => book.author);
    return Array.from(new Set(authors));
}       

export default books;