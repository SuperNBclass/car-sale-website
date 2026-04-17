function saveUser(user) {
  var users = localStorage.getItem('users');

  if (users == null) {
    users = [];
  } else {
    users = JSON.parse(users);
  }

  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
  var users = localStorage.getItem('users');

  if (users == null) {
    return [];
  }

  return JSON.parse(users);
}

function userExists(username) {
  var users = getUsers();

  for (var i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      return true;
    }
  }

  return false;
}

function findUser(username, password) {
  var users = getUsers();

  for (var i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      return users[i];
    }
  }

  return null;
}

function loginUser(user) {
  localStorage.setItem('current_user', JSON.stringify(user));
}

function getCurrentUser() {
  var user = localStorage.getItem('current_user');

  if (user == null) {
    return null;
  }

  return JSON.parse(user);
}

function logoutUser() {
  localStorage.removeItem('current_user');
}

function searchCars(model, year) {
  var cars = getCars();

  var result = [];

  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];

    if ((model == '' || car.model.indexOf(model) != -1) &&
        (year == '' || car.year == year)) {
      result.push(car);
    }
  }

  return result;
}

function saveCar(car) {
  var cars = localStorage.getItem('cars');

  if (cars == null) {
    cars = [];
  } else {
    cars = JSON.parse(cars);
  }

  car.id = Date.now();

  cars.push(car);

  localStorage.setItem('cars', JSON.stringify(cars));
}

function getCars() {
  var cars = localStorage.getItem('cars');

  if (cars == null) {
    return [];
  }

  return JSON.parse(cars);
}

function getCarById(id) {
  var cars = getCars();

  for (var i = 0; i < cars.length; i++) {
    if (cars[i].id == id) {
      return cars[i];
    }
  }

  return null;
}

function initDemo() {
  if (localStorage.getItem('demo_init') == '1') {
    return;
  }

  var cars = [
    { id: 1, model: 'Toyota Camry', year: 2022, color: 'White', location: 'Beijing', price: 185000, seller: 'admin' },
    { id: 2, model: 'Honda Civic', year: 2021, color: 'Black', location: 'Shanghai', price: 142000, seller: 'admin' },
    { id: 3, model: 'Tesla Model 3', year: 2023, color: 'White', location: 'Shenzhen', price: 268000, seller: 'admin' },
    { id: 4, model: 'BMW 3', year: 2020, color: 'Gray', location: 'Guangzhou', price: 248000, seller: 'admin' },
    { id: 5, model: 'VW Passat', year: 2019, color: 'Silver', location: 'Chengdu', price: 138000, seller: 'admin' },
    { id: 6, model: 'Toyota Corolla', year: 2018, color: 'Blue', location: 'Hangzhou', price: 98000, seller: 'admin' },
  ];

  localStorage.setItem('cars', JSON.stringify(cars));

  localStorage.setItem('demo_init', '1');
}

window.onload = function() {
  initDemo();
}
