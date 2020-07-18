let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    const value = Number(input);
    numbers.push(value);
    console.log(numbers);
  }
}
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);
