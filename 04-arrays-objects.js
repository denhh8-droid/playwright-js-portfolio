const adminOne = {
  id: 1,
  name: 'Denis',
  email: 'denis@example.com',
  password: 'password',
  age: 57,
  role: 'admin',
  isActive: true,
};

console.log(adminOne.age);
console.log(adminOne);
console.log(adminOne.name);
console.log(adminOne.email);
console.log(adminOne.isActive);
console.log(adminOne['age']);

const users = [
  {
    id: 1,
    name: 'Denis',
    email: 'denis@example.com',
    password: 'password',
    age: 57,
    role: 'admin',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
    password: 'password',
    age: 41,
    role: 'user',
    isActive: false,
  },
  {
    id: 3,
    name: 'De-Koljan',
    email: 'de-koljan@example.com',
    password: 'password',
    age: 74,
    role: 'guest',
    isActive: true,
  },
];
//console.log(users);
//console.log(users.length);
//console.log(users[2].age);
//console.log(users[1]);

const searshEmailUser = 'de-koljan@example.com';

const foundUser = users.find((currentUser) => {
  return currentUser.email === searshEmailUser;
});

console.log(foundUser);
if (foundUser) {
  console.log(`Я нашел юзера: ${foundUser.name}! И знаешь, ему сейчас: ${foundUser.age}`);
} else {
  console.log(
    `Увы, но никого с мэйлом  ${searshEmailUser} в нашей базе не найдено. Задай другие параметры поиска, пожалуйста.`,
  );
}
const searchedIsActive = false;
const searchedStatusLabel = 'неактивный';
const foundInactiveUser = users.find((currentUser) => {
  return currentUser.isActive === searchedIsActive;
});

if (foundInactiveUser) {
  console.log(
    `Найден ${searchedStatusLabel} пользователь: ${foundInactiveUser.name}. Роль: ${foundInactiveUser.role}`,
  );
} else {
  console.log(`Пользователи со статусом "${searchedStatusLabel}" не найдены`);
}
