interface Animal {
    name: string;
    age: number;
    canFly?: boolean;
    canSwim?: boolean;
    furColor?: string;

    move(): void;
    makeSound?(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    furColor: string;

    constructor(name: string, age: number, furColor: string) {
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }

    move(): void {
        console.log(`${this.name} бігає на чотирьох лапах.`);
    }

    makeSound(): void {
        console.log(`${this.name} каже: Мяу!`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    canFly: boolean;

    constructor(name: string, age: number, canFly: boolean = true) {
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }

    move(): void {
        if (this.canFly) {
            console.log(`${this.name} літає у повітрі.`);
        } else {
            console.log(`${this.name} ходить по землі.`);
        }
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    canSwim: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.canSwim = true;
    }

    move(): void {
        console.log(`${this.name} плаває у воді.`);
    }
}

const myCat = new Cat("Барсик", 3, "Сірий");
const myBird = new Bird("Кеша", 2, true);
const myFish = new Fish("Немо", 1);

myCat.move();
myCat.makeSound();

myBird.move();
myFish.move();