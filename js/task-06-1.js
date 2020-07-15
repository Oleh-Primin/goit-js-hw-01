let input;
let total = 0;
do {
  input = prompt('введите число для сложения');
  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
} while (input !== null);
alert(`Сумма введённых чисел равна ${total}`);
