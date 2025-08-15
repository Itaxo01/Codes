class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
}

class Magazine extends Book {
	constructor(title, author, year, month){
		super(title, author, year);
		this.month = month;
	}
}



const book1 = new Book("book one", "john doe", 2013);
const magazine1 = new Magazine("book one", "john doe", 2013, 'Jan');

console.log(book1);
console.log(magazine1);

