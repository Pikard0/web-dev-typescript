interface Payable {
    pay(): void;
}

abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(`Оплата розробнику ${this.name}: ${this.salary} грн`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(`Оплата менеджеру ${this.name}: ${this.salary} грн`);
    }
}

const employees: Employee[] = [
    new Developer("Олексій", 25, 60000),
    new Developer("Марія", 28, 75000),
    new Manager("Іван", 35, 90000),
    new Manager("Олена", 40, 110000)
];

let totalBonus = 0;

employees.forEach(employee => {
    totalBonus += employee.getAnnualBonus();
    if ("pay" in employee) {
        (employee as Payable).pay();
    }
});

console.log(`Загальна річна сума бонусів: ${totalBonus} грн`);