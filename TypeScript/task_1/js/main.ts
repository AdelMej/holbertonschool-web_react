interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: unknown;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

function printTeacher(firstName: string, lastName: string) {
	console.log(`${firstName[0]}. ${lastName}`)
}

printTeacher('John', "Doe");


interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working"
	}

	displayName(): string {
		return this.firstName
	}
}


const student = new StudentClass("John", "Doe");

console.log(student.displayName());      // John
console.log(student.workOnHomework());   // Currently working

