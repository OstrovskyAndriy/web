function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor));

//2
let myObject = {
    name: 'John',
    age: 30,
    occupation: 'developer',
    city: 'New York',
    country: 'USA'
};

function showProps(obj) {
    let props = Object.keys(obj);
    let values = Object.values(obj);

    console.log('Properties:');
    console.log(props);

    console.log('Values:');
    console.log(values);
}

showProps(myObject);
//3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(`${this.surname} ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        console.log(`${this.surname} ${this.name} ${middleName}`);
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return Math.min(Math.max(course, 1), 6);
    }
}


//4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Ander", 29, 23);

const workers = [worker1, worker2, worker3];
workers.sort((a, b) => b.showSalaryWithExperience() - a.showSalaryWithExperience());

console.log("Sorted salary:");
workers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));


console.log("---------------------------");

//5
class GeometricFigure {
    getArea() {
      return 0;
    }
    
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
    
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
    
    getArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function handleFigures(figures) {
    const totalArea = figures.reduce((accumulator, currentFigure) => {
      const area = currentFigure.getArea();
      console.log(`Geometric figure: ${currentFigure.toString()} - area: ${area}`);
      return accumulator + area;
    }, 0);
    
    return totalArea;
  }
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));
  