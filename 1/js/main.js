// data start
let users = [
    {
        name: 'u1',
        password: '1',
        age: 30,
        isLogin: false,
        getMessages: [], //полученные сообщения(которые будут отправлять пользователю)
        sendMessages: [] //отправленные сообщения(которые будет отправлять сам пользователь)
    },
    {
        name: 'User 2',
        password: 'pass124',
        age: 33,
        isLogin: false,
        getMessages: [], //полученные сообщения(которые будут отправлять пользователю)
        sendMessages: [] //отправленные сообщения(которые будет отправлять сам пользователь)
    },
    {
        name: 'User 3',
        password: 'pass125',
        age: 21,
        isLogin: false,
        getMessages: [], //полученные сообщения(которые будут отправлять пользователю)
        sendMessages: [] //отправленные сообщения(которые будет отправлять сам пользователь)
    },
    {
        name: 'User 4',
        password: 'pass126',
        age: 56,
        isLogin: false,
        getMessages: [], //полученные сообщения(которые будут отправлять пользователю)
        sendMessages: [] //отправленные сообщения(которые будет отправлять сам пользователь)
    },
    {
        name: 'User 10',
        password: 'pass132',
        age: 48,
        isLogin: false,
        getMessages: [], //полученные сообщения(которые будут отправлять пользователю)
        sendMessages: [] //отправленные сообщения(которые будет отправлять сам пользователь)
    }
];

// users logic
let inSystem = '';

function changeInSystemUser(userName='') {
    inSystem = userName;
    let h3 = document.querySelector('h3');
    inSystem 
    ? 
    h3.innerText = `Пользователь: ${inSystem} в системе`  
    :
    h3.innerText = 'В системе никого нет';
};

// register
function checkUniqueUserName(userName) {
    return users.some(item => item.name === userName);
};

function checkPasswords(pass, passConfirm) {
    return pass === passConfirm;
};

function createUser() {
    let userName = prompt('Введите имя пользователя');
    if(checkUniqueUserName(userName)) {
        alert('Пользователь уже существует!');
        return;
    };
    let pass = prompt('Введите пароль');
    let passConfirm = prompt('Потвердите пароль');
    if(!checkPasswords(pass, passConfirm)) {
        alert('Пароли не совпадают!');
        return;
    };
    let age = +prompt('Введите ваш возраст');
    let userObj = {
        name: userName,
        password: pass,
        age: age,
        isLogin: false
    };
    users.push(userObj);
    console.log(users);
};

// login
function getUserObj(userName) {
    return users.find(item => item.name === userName);
};

function checkUserPassword(userName, pass) {
    let user = getUserObj(userName);
    return user.password === pass;
};

function loginUser() {
    let userName = prompt('Введите имя пользователя');
    if(!checkUniqueUserName(userName)) {
        alert('Такого пользователя не существует!');
        return;
    };
    let pass = prompt('Введите пароль');
    if(!checkUserPassword(userName, pass)) {
        alert('Неправильный пароль!');
        return;
    };
    let user = getUserObj(userName);
    user.isLogin = true;
    changeInSystemUser(userName);
    console.log(users);
};


// deleteacc
function deleteUser() {
    let name = prompt('Введите имя пользователя');
    let userIndex = users.findIndex(user => user.name === name);
    if (userIndex === -1) {
      alert('Такого пользователя не существует!');
      return;
    };
    let user = users[userIndex];
    if (!user.isLogin) {
      alert('Пользователь не авторизован!');
      return;
    };
    let password = prompt('Введите пароль');
    if (user.password !== password) {
      alert('Неверный пароль');
      return;
    };
  
    users.splice(userIndex, 1);
    changeInSystemUser();
    alert('Аккаунт удален!');
    console.log(users);
  };

// getMessage
function sendMessage() {
    if(!inSystem) {
      alert('Только авторизованные могут отправлять сообщения!');
      return;
    };
    let user = prompt('Кому вы хотите отправить сообщение?');
    if(!checkUniqueUserName(user)) {
      alert('Пользователь не найден!');
      return;
    };
    let message = prompt('Напишите сообщение');
    let SendMessageObj = {
      id: Date.now(),
      title: message,
      to: user
    };
    let GetMessageObj = {
      id: Date.now(),
      title: messageTitle,
      from: inSystem
    };
    let userGet = getUserObj(user);
    let userSend = getUserObj(inSystem);
    userSend.sendMessages.push(SendMessageObj);
    userGet.getMessages.push(GetMessageObj)
    console.log(users);
  };



