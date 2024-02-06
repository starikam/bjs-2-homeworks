class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		}
		if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] == value) || null;
	}

	giveBookByName(bookName) {
		const book = this.findBookBy('name', bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
		}
		return book;
	}
}

class Student {
	constructor(name, marks) {
		this.name = name;
		this.marks = {};
	}
	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}

		if (this.marks[subject] === undefined) {
			this.marks[subject] = [];
			this.marks[subject].push(mark);
		} else {
			this.marks[subject].push(mark);
		}
	}
	getAverageBySubject(subject) {
		if (this.marks[subject] === undefined) {
			return 0;
		}

		const summBySubject = this.marks[subject].reduce(function(currentSum, currentNumber) {
			currentSum = currentSum + currentNumber;
			return currentSum
		}, 0);

		return summBySubject / this.marks[subject].length;
	}

	getAverage() {
		let subjects = Object.keys(this.marks);
		let subjLen = subjects.length;
		let subjMarkAccumulate = 0;

		if (subjLen === 0) {
			return 0;
		}

		for (let i = 0; i < subjLen; i++) {
			subjMarkAccumulate = subjMarkAccumulate + this.getAverageBySubject(subjects[i]);
		}

		return subjMarkAccumulate / subjLen;
	}
}

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75