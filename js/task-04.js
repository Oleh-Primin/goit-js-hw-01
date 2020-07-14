let credits = 23580;
let pricePerDroid = 300;
let totalPrice;
const numberDroid = prompt('Сколько дроидов желаете приобрести?');
totalPrice = numberDroid * pricePerDroid;
if (numberDroid == null) {
  console.log('Отменено пользователем!');
} else if (totalPrice <= credits) {
  console.log(
    `Вы купили ${numberDroid} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`,
  );
} else {
  console.log('Недостаточно средств на счету!');
}
