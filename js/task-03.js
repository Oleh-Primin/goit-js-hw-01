const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите пароль пользователя');
if (userInput == null) {
  message = 'отменено пользователем!';
} else if (userInput != ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}
alert(message);
