function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks !== undefined) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	} else {
		var result = this.marks.reduce(function(sum, current) {
			return sum + current;
		}, 0);
	}
	return result / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Дмитрий", "мужской", 21);