const users = [
  {
    id: 1,
    name: 'Denis',
    email: 'denis@example.com',
    role: 'admin',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
    role: 'user',
    isActive: false,
  },
  {
    id: 3,
    name: 'Anna',
    email: 'anna@example.com',
    role: 'user',
    isActive: true,
  },
  {
    id: 4,
    name: 'Pavel',
    email: 'pavel@example.com',
    role: 'guest',
    isActive: false,
  },
];

//Ниже проверки через метод массива .some() Этот метод ищет первый подходящий под условие элемент и возвращает булево значение
const hasAdmin = users.some((currentUser) => {
  return currentUser.role === 'admin';
});
console.log(`Мы искали в базе админа. Результат: ${hasAdmin}`);
const hasModer = users.some((currentUser) => {
  return currentUser.role === 'moderator';
});
console.log(`А еще мы искали в базе модераторов. Результат: ${hasModer}`);

//Ниже проверки через метод массива .every() Этот метод проверяет все элементы массива, на предмет соответствия  условию  и возвращает булево значение
const allIsActiveUsers = users.every((currentUser) => {
  return currentUser.isActive === true;
});
console.log(`Мы проверили, все ли наши пользователи активны. Результат такой: ${allIsActiveUsers}`);

//Проверка наличия обязательного поля выполняется через метод массива .every()
const allUsersHasEmail = users.every((currentUser) => {
  return currentUser.email !== '';
});
console.log(
  `Проверка на наличие обязательного поля email у всех юзеров, присутствующих в массиве дала следующий результат: ${allUsersHasEmail}`,
);
//Самостоятельно: Создай функцию, которая отвечает на вопрос: есть ли хотя бы один активный пользователь.
function hasActiveUser(users) {
  return users.some((user) => {
    return user.isActive === true;
  });
}
console.log(`Мы искали в массиве активных юзеров. Результат такой: ${hasActiveUser(users)}`);

const inactiveUsers = [
  {
    id: 5,
    name: 'Alex',
    email: 'alex@example.com',
    role: 'user',
    isActive: false,
  },
  {
    id: 6,
    name: 'Maria',
    email: 'maria@example.com',
    role: 'user',
    isActive: false,
  },
];

console.log(`Есть активный пользователь среди inactiveUsers: ${hasActiveUser(inactiveUsers)}`);
