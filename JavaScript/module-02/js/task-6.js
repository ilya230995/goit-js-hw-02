let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    const value = Number(input);
    numbers.push(value);
    console.log(numbers);
  }
}
while (input !== null)

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);
