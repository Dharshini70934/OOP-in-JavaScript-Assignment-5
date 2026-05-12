// =====================================
// Q1 - Student Class
// =====================================

console.log("Q1");

class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    display() {
        console.log(this.name, this.rollNo, this.marks);
        console.log(this.marks >= 40 ? "Pass" : "Fail");
    }
}

let s1 = new Student("Deepak", 101, 78);
s1.display();


// =====================================
// Q2 - Inheritance
// =====================================

console.log("Q2");

class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    show() {
        console.log(this.id, this.name, this.salary);
    }
}

class Manager extends Employee {
    constructor(id, name, salary, dept) {
        super(id, name, salary);
        this.dept = dept;
    }

    display() {
        this.show();
        console.log(this.dept);
    }
}

let m1 = new Manager(201, "Rahul", 50000, "HR");
m1.display();


// =====================================
// Q3 - Encapsulation
// =====================================

console.log("Q3");

class BankAccount {
    #balance = 0;

    deposit(a) {
        this.#balance += a;
    }

    withdraw(a) {
        if (a > this.#balance) {
            console.log("Insufficient Balance");
        } else {
            this.#balance -= a;
        }
    }

    getBalance() {
        console.log(this.#balance);
    }
}

let acc = new BankAccount();

acc.deposit(5000);
acc.withdraw(2000);
acc.getBalance();


// =====================================
// Q4 - Constructor
// =====================================

console.log("Q4");

class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    show() {
        console.log(this.brand, this.model, this.price);
    }
}

new Car("Toyota", "Innova", 2500000).show();
new Car("Honda", "City", 1500000).show();
new Car("Hyundai", "Creta", 1800000).show();


// =====================================
// Q5 - Email Validation
// =====================================

console.log("Q5");

let email = "example@gmail.com";

console.log(
/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
? "Valid"
: "Invalid"
);


// =====================================
// Q6 - Password Validation
// =====================================

console.log("Q6");

let password = "Abc@1234";

console.log(
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
? "Valid Password"
: "Invalid Password"
);


// =====================================
// Q7 - Mobile Validation
// =====================================

console.log("Q7");

let mobile = "9876543210";

console.log(
/^[6-9]\d{9}$/.test(mobile)
? "Valid Number"
: "Invalid Number"
);


// =====================================
// Q8 - Extract Numbers
// =====================================

console.log("Q8");

let str1 = "Order123Amount450";

console.log(str1.match(/\d+/g));


// =====================================
// Q9 - Replace Spaces
// =====================================

console.log("Q9");

let str2 = "JavaScript Regular Expression";

console.log(str2.replace(/\s+/g, "*"));


// =====================================
// Q10 - Divide by Zero
// =====================================

console.log("Q10");

try {

    let a = 10, b = 0;

    if (b == 0) {
        throw "Cannot divide by zero";
    }

    console.log(a / b);

} catch(error) {

    console.log(error);

} finally {

    console.log("Done");

}


// =====================================
// Q11 - Invalid Age Exception
// =====================================

console.log("Q11");

function checkAge(age) {

    try {

        if (age < 18) {
            throw "Not Eligible";
        }

        console.log("Eligible");

    } catch(error) {

        console.log(error);

    }
}

checkAge(16);
checkAge(21);


// =====================================
// Q12 - Custom Exception
// =====================================

console.log("Q12");

function validateUser(name) {

    try {

        if (name.length < 5) {
            throw "Invalid Username";
        }

        console.log("Valid Username");

    } catch(error) {

        console.log(error);

    }
}

validateUser("Ram");
validateUser("Deepak");


// =====================================
// Q13 - Multiple Catch Scenarios
// =====================================

console.log("Q13");

function calc(a, b, op) {

    try {

        if (isNaN(a) || isNaN(b)) {
            throw "Invalid Input";
        }

        if (op == "add") {
            console.log(a + b);

        } else if (op == "divide") {

            if (b == 0) {
                throw "Divide by Zero";
            }

            console.log(a / b);

        }

    } catch(error) {

        console.log(error);

    }
}

calc(10, 5, "add");
calc(10, 0, "divide");
calc("a", 5, "add");
