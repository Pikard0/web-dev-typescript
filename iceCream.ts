export {}
function calculateIceCreamCost(): void {
    let totalCost: number = 0;

    const size: string | null = prompt("Оберіть розмір морозива (маленький / великий):");

    if (size?.toLowerCase().trim() === "маленький") {
        totalCost += 10;
    } else if (size?.toLowerCase().trim() === "великий") {
        totalCost += 25;
    } else {
        alert("Невірний розмір морозива. Спробуйте ще раз.");
        return;
    }

    const toppingsInput: string | null = prompt("Введіть начинки через кому (шоколад, карамель, ягоди). Мінімум одна:");

    if (!toppingsInput) {
        alert("Мінімум одна начинка є обов'язковою!");
        return;
    }

    const toppingsArray: string[] = toppingsInput.toLowerCase().split(",").map(t => t.trim());
    let hasValidTopping: boolean = false;

    if (toppingsArray.includes("шоколад")) {
        totalCost += 5;
        hasValidTopping = true;
    }
    if (toppingsArray.includes("карамель")) {
        totalCost += 6;
        hasValidTopping = true;
    }
    if (toppingsArray.includes("ягоди")) {
        totalCost += 10;
        hasValidTopping = true;
    }

    if (!hasValidTopping) {
        alert("Помилка: потрібно обрати хоча б одну з доступних начинок.");
        return;
    }

    const marshmallow: string | null = prompt("Бажаєте посипати маршмелоу? (так / ні):");

    if (marshmallow?.toLowerCase().trim() === "так") {
        totalCost += 5;
    }

    alert(`Загальна вартість вашого морозива: ${totalCost} грн.`);
    console.log(`Загальна вартість вашого морозива: ${totalCost} грн.`);
}

calculateIceCreamCost();