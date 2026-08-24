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
const activeUsers = users.filter((currentUser) => {
  return currentUser.isActive === true;
});
console.log(activeUsers);
if (activeUsers.length > 0) {
  console.log(`Найдено активных пользователей: ${activeUsers.length}.`);
} else {
  console.log(`Активные пользователи не найдены.`);
}
const roleUsers = users.filter((currentUser) => {
  return currentUser.role === 'user';
});
console.log(roleUsers);
const userEmails = users.map((currentUser) => {
  return currentUser.email;
});
console.log(userEmails);
const isActiveUsersNames = users
  .filter((currentUser) => {
    return currentUser.isActive === true;
  })
  .map((currentUser) => {
    return currentUser.name;
  });
console.log(isActiveUsersNames);
