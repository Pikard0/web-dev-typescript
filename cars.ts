abstract class Car {
    public brand: string;
    protected year: number;
    private vinCode: string;

    constructor(brand: string, year: number, vinCode: string) {
        this.brand = brand;
        this.year = year;
        this.vinCode = vinCode;
    }

    protected getVinCode(): string {
        return this.vinCode;
    }

    abstract displayInfo(): void;
}

class Toyota extends Car {
    public isHybrid: boolean;

    constructor(model: string, year: number, vinCode: string, isHybrid: boolean) {
        super(`Toyota ${model}`, year, vinCode);
        this.isHybrid = isHybrid;
    }

    displayInfo(): void {
        console.log(`[Toyota] Марка: ${this.brand}, Рік: ${this.year}, Гібрид: ${this.isHybrid ? "Так" : "Ні"}, VIN: ${this.getVinCode()}`);
    }
}

class BMW extends Car {
    private MPackage: boolean;

    constructor(model: string, year: number, vinCode: string, MPackage: boolean) {
        super(`BMW ${model}`, year, vinCode);
        this.MPackage = MPackage;
    }

    displayInfo(): void {
        console.log(`[BMW] Марка: ${this.brand}, Рік: ${this.year}, M-пакет: ${this.MPackage ? "Так" : "Ні"}, VIN: ${this.getVinCode()}`);
    }
}

class Audi extends Car {
    public quattro: boolean;

    constructor(model: string, year: number, vinCode: string, quattro: boolean) {
        super(`Audi ${model}`, year, vinCode);
        this.quattro = quattro;
    }

    displayInfo(): void {
        console.log(`[Audi] Марка: ${this.brand}, Рік: ${this.year}, Повний привід Quattro: ${this.quattro ? "Так" : "Ні"}, VIN: ${this.getVinCode()}`);
    }
}

const cars: Car[] = [
    new Toyota("Camry", 2021, "TOY123456789", true),
    new Toyota("Corolla", 2018, "TOY987654321", false),
    new BMW("M5", 2022, "BMW555666777", true),
    new BMW("X5", 2020, "BMW111222333", false),
    new Audi("A6", 2019, "AUDI44455566", true),
    new Audi("Q7", 2023, "AUDI77788899", true)
];

cars.forEach(car => car.displayInfo());