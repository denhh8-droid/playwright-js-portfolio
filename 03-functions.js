function checkStatus(actualStatus, expectedStatus) {
  if (actualStatus === expectedStatus) {
    return 'Тест пройден';
  }

  return `Тест упал: ожидался ${expectedStatus}, а пришел ${actualStatus}`;
}

const result = checkStatus(201, 200);

console.log(result);

const mainApiResult = checkStatus(200, 200);
console.log(`Главный API: ${mainApiResult}`);

const registrationResult = checkStatus(201, 201);
console.log(`Регистрация: ${registrationResult}`);

const loginResult = checkStatus(401, 200);
console.log(`Авторизация: ${loginResult}`);

function checkResponseBody(actualMessage, expectedMessage) {
  if (actualMessage === expectedMessage) {
    return `Сообщение корректное`;
  }
  return `Сообщение некорректное, ожидалось: ${expectedMessage}, а получено: ${actualMessage}`;
}
console.log(checkResponseBody('Success', 'Success'));
console.log(checkResponseBody('User not found', 'Success'));
