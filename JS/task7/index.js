class MediaItem{
    constructor(title,year,genre){
        this.genre=genre;
        this.title=title;
        this.year=year;
    }
    getSummary(){
        console.log(`genre: ${this.genre}, title: ${this.title}, year: ${this.year}`);
    }
}

class Book extends MediaItem{
    constructor(pageCount,author,title,year,genre){
        super(title,year,genre);
        this.pageCount=pageCount;
        this.author=author;
    }
    getSummary(){
        console.log(`genre: ${this.genre}, title: ${this.title}, year: ${this.year}, pageCount: ${this.pageCount}, author: ${this.author}`);
    }
}

class Movie extends MediaItem{
    constructor(director, durationMinutes, title, year, genre) {
        super(title, year, genre);
        this.director = director;
        this.durationMinutes = durationMinutes;
    }

    getSummary() {
        console.log(
            `Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes} min`
        );
    }
}

class Library {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    search(term) {
        return this.items.filter(item =>
            item.title.toLowerCase().includes(term.toLowerCase())
        );
    }

    listByGenre(genre) {
        return this.items.filter(item =>
            item.genre.toLowerCase() === genre.toLowerCase()
        );
    }
}

const book = new Book(300, "Tolkien", "The Hobbit", 1937, "Fantasy");
const movie = new Movie(
    "Denis Villeneuve",
    155,
    "Dune",
    2021,
    "Sci-Fi"
);

const library = new Library();

library.addItem(book);
library.addItem(movie);

book.getSummary();
movie.getSummary();

console.log(library.search("dune"));

console.log(library.listByGenre("fantasy"));
