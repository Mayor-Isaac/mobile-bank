'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MOBILE BANKING WEBSITE

// Data
const account1 = {
  owner: 'Ayobami Owoeye',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-10-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-11-27T23:36:17.929Z',
    '2022-11-28T10:51:36.790Z',
  ],
};
const account2 = {
  owner: 'Chima Francis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Esther Ojile',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Helen Nneka',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
};

const account5 = {
  owner: 'Afo Charles',
  movements: [100, 1000, 900, 50, 90],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    '2022-10-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
  ],
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: '2-digit',
  year: '2-digit',
};
const localeString = navigator.language;

const currencyOptions = {
  style: 'currency',
  currency: 'GBP',
};
// DISPLAYING BALANCE
const displayBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, movement) {
    return acc + movement;
  }, 0);
  labelBalance.textContent = new Intl.NumberFormat(
    'en-US',
    currencyOptions
  ).format(account.balance);
};

// DISPLAYING MOVEMENTS
const displayMovement = function (currentAcc, sort = false) {
  // console.log(containerMovements.innerHTML);
  // console.log(containerMovements.textContent);
  // Clear element(s) in a particular element
  containerMovements.innerHTML = '';
  const sortedMovements = sort
    ? currentAcc.movements.slice().sort((a, b) => a - b)
    : currentAcc.movements;
  sortedMovements.forEach(function (movement, index) {
    const dateStore = new Date(currentAcc.movementsDates[index]);
    const timeDiff = Math.round(
      (new Date() - dateStore) / (1000 * 60 * 60 * 24)
    );
    let time;
    if (timeDiff === 0) {
      time = 'Today';
    } else if (timeDiff === 1) {
      time = 'Yesterday';
    } else if (timeDiff === 2) {
      time = `${timeDiff} days ago`;
    } else if (timeDiff === 3 || timeDiff <= 7) {
      time = `${timeDiff} days ago`;
    } else {
      time = new Intl.DateTimeFormat(localeString, options).format(dateStore);
    }
    const formattedAmount = new Intl.NumberFormat(
      'en-US',
      currencyOptions
    ).format(Math.abs(movement));
    const statement = movement > 0 ? 'deposit' : 'withdrawal';
    const htmlElement = `<div class="movements__row">
  <div class="movements__type movements__type--${statement}">${
      index + 1
    } ${statement}</div>
    
    <div class="movements__date">${time}</div>
  <div class="movements__value">${formattedAmount}</div>
</div>`;

    // CREATING DOM ELEMENTS WITH JAVASCRIPT - insert Adjacent HTML method takes two argument(1. Position, 2. Element/Text to be inserted)
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
};
// SORTING MOVEMENTS
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAcc, !sorted);
  sorted = !sorted;
  // console.log(currentAcc.movements)
});
// COMPUTING USERS' NAMES
const createUserName = function (userAccounts) {
  userAccounts.forEach(function (userAccount) {
    // console.log(userAccount);
    userAccount.userName = userAccount.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUserName(accounts);
// console.log(accounts);

// COMPUTING TRANSACTION SUMMARY
const completeSummary = function (movements, rates) {
  const income = movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = new Intl.NumberFormat(
    'en-US',
    currencyOptions
  ).format(income);
  const expenses = movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = new Intl.NumberFormat(
    'en-US',
    currencyOptions
  ).format(Math.abs(expenses));
  const interest = movements
    .filter(move => move > 0)
    .map(deposit => (deposit * rates) / 100)
    .filter(move => move >= 1)
    .reduce((acc, move) => acc + move, 0);
  labelSumInterest.textContent = new Intl.NumberFormat(
    'en-US',
    currencyOptions
  ).format(interest);
};

//UPDATING UI
const updateUI = function (accounts) {
  displayMovement(accounts);
  completeSummary(accounts.movements, accounts.interestRate);
  displayBalance(accounts);
};


//IMPLEMENTING TIMER
let timer;
const startLogOutTimer = function () {
  //set time to 10seconds
  let time = 300;
  //call the timer every 1s
  const tickTime = () => {
    //each call deduct 1s, print the remaining UI
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Login to get started`;
    }
    time--;
    btnLoan.addEventListener('click', function () {
      time = 300;
    });
    btnTransfer.addEventListener('click', function () {
      time = 300;
    });
  };
  tickTime();
  timer = setInterval(tickTime, 1000);
  return timer;
};
//IMPLEMENTING LOGIN
let currentAcc;
btnLogin.addEventListener('click', function (e) {
  // console.log('LOGIN'); //it flashes because the button is in form tag
  e.preventDefault(); //it prevents the flashing
  // console.log('LOGIN');
  currentAcc = accounts.find(
    account => inputLoginUsername.value === account.userName
    );
    // console.log(currentAcc);
    if (currentAcc?.pin === +inputLoginPin.value) {
      //DISPLAY UI & WELCOME MESSAGE
      labelWelcome.textContent = `Welcome ${currentAcc.owner.split(' ').at(0)}`;
      containerApp.style.opacity = 1;
      inputLoginPin.value = ' ';
      inputLoginUsername.value = ' ';
      if (timer) {
        clearInterval(timer);
      }
      updateUI(currentAcc);
      startLogOutTimer()
  }
  // const dateStore = new Date();
  // const date = dateStore.getDate();
  // const month = dateStore.getMonth()+1;
  // const year = dateStore.getFullYear();
  // const hours = dateStore.getHours();
  // const minutes = dateStore.getMinutes()
  // labelDate.textContent = `${date}/${month}/${year}  ${hours}:${minutes}`
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: '2-digit',
    year: '2-digit',
  };
  // const localeString = navigator.language
  // console.log(localeString);
  labelDate.textContent = new Intl.DateTimeFormat(localeString, options).format(
    new Date()
  );
});

//IMPLEMENTING TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recipientAcc = accounts.find(
    accounts => inputTransferTo.value === accounts.userName
  );
  if (
    amount > 0 &&
    recipientAcc &&
    currentAcc.balance >= amount &&
    currentAcc.userName !== recipientAcc.userName
  ) {
    currentAcc.movementsDates.push(new Date().toISOString());
    currentAcc.movements.push(-amount);
    recipientAcc.movements.push(amount);
    recipientAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAcc);
    inputTransferTo.value = ' ';
    inputTransferAmount.value = ' ';
    startLogOutTimer()
  }
});

//DELETING AN ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAcc.userName === inputCloseUsername.value &&
    currentAcc.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      account => account.userName === currentAcc.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = ' ';
    inputCloseUsername.value = ' ';
  }
});

//IMPLEMENTING LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  setTimeout(() => {
    inputLoanAmount.value = ' ';
    if (amount > 0 && currentAcc.movements.some(move => move >= amount / 10)) {
      currentAcc.movements.push(amount);
      currentAcc.movementsDates.push(new Date().toISOString());
      updateUI(currentAcc);
    }
  }, 10000);
});



