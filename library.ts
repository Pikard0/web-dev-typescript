interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public pagesCount: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Книгу "${this.title}" успішно позичено.`);
        } else {
            console.log(`Книга "${this.title}" вже позичена.`);
        }
    }
}

class Magazine implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал "${this.title}" (Випуск №${this.issueNumber}) успішно позичено.`);
        } else {
            console.log(`Журнал "${this.title}" вже позичений.`);
        }
    }
}

class DVD implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public durationMinutes: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" успішно позичено.`);
        } else {
            console.log(`DVD "${this.title}" вже позичений.`);
        }
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Елемент "${item.title}" додано до бібліотеки.`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title.toLowerCase() === name.toLowerCase());
    }

    listAvailableItems(): void {
        console.log("\nСписок доступних елементів у бібліотеці:");
        const availableItems = this.items.filter(item => !item.isBorrowed);

        if (availableItems.length === 0) {
            console.log("Немає доступних елементів.");
            return;
        }

        availableItems.forEach(item => {
            console.log(`- "${item.title}" (Автор: ${item.author})`);
        });
    }
}

const myLibrary = new Library();

const book1 = new Book("Кобзар", "Тарас Шевченко", 640);
const magazine1 = new Magazine("National Geographic", "Редакція NG", 204);
const dvd1 = new DVD("Inception", "Крістофер Нолан", 148);

myLibrary.addItem(book1);
myLibrary.addItem(magazine1);
myLibrary.addItem(dvd1);

myLibrary.listAvailableItems();

console.log("\n--- Пошук та позичання ---");
const foundItem = myLibrary.findItemByName("Кобзар");
if (foundItem) {
    foundItem.borrow();
}

myLibrary.listAvailableItems();