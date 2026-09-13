function repeatMessage(message: string, count: number = 3): string {
    return `Повідомлення: "${message}", повторити разів: ${count}`;
}

console.log(repeatMessage("Тест з двома параметрами", 5));
console.log(repeatMessage("Тест з параметром за замовчуванням"));