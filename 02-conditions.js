// Тест на актуальный код успешного ответа  с бэка (код 200)
const actualStatus = 200;
const expectedStatus = 200;

if (actualStatus === expectedStatus) {
  console.log(`Тест прошел, ПОЗДРАВЛЯЮ!`);
} else {
  console.log(`Тест упал, ожидался ${expectedStatus}, а пришел ${actualStatus}`);
}

// Тест на актуальный код успешного ответа  с бэка о успешной регистрации юзера(код 200)
const actualRegistrationStatus = 201;
const expectedRegistrationStatus = 200;

if (actualRegistrationStatus === expectedRegistrationStatus) {
  console.log(`Юзер успешно зарегистрирован на проекте СТАВКАTV`);
} else {
  console.log(
    `Тест упал!!! Ожидался код ответа ${expectedRegistrationStatus}, а пришел код ответа ${actualRegistrationStatus}`,
  );
}

// Тест на актуальный код успешного ответа  с бэка о успешной авторизации юзера(код 200)
const actualLoginStatus = 201;
const expectedLoginStatus = 200;

if (actualLoginStatus === expectedLoginStatus) {
  console.log(`Юзер успешно авторизовался на проекте СТАВКАTV под своим ником!!!`);
} else {
  console.log(
    `Тест упал!!! Ожидался код ответа ${expectedLoginStatus}, а пришел код ответа ${actualLoginStatus}`,
  );
}
