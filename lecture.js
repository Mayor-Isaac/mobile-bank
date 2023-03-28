'use strict'

//GETTING ALL THE MOVEMENTS
// const accountsMovements = accounts
//   .map(acct => acct.movements)
//   .flat()
//   .reduce((acc, move) => acc + move, 0);
// console.log(accountsMovements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//Converting String to Number using + operator
// console.log(20.0);
// console.log(Number('20.0'));
// console.log(+'20');

// PARSING METHOD

// parseInt Method - extracts a number from string (i.e return number)
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('px30')); //type coercion
// console.log(typeof NaN);

// parseInt Method - extracts a DECIMAL number from string (i.e return number)
// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseFloat('rem2.5')); //type coercion
// console.log(typeof NaN);

//parseInt Method &  parseInt Method are global methods (i.e they can work without the Number keyword)
// console.log(parseInt('30px'));
// console.log(parseFloat('2.5rem'));

//isNaN Method
// console.log(Number.isNaN(20))
// console.log(Number.isNaN('20'))
// console.log(Number.isNaN(+'20'))
// console.log(Number.isNaN(+'20px'))
// console.log(Number.isNaN(20/0))

//isFinite Method - used to check if a number is real number
// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))
// console.log(Number.isFinite(20/0))
// console.log(Number.isFinite(2.5666666666666666666666666666666))

//MATH AND ROUNDING

//Square root
// console.log(Math.sqrt(25));
// console.log(25**(1/2));
// console.log(8**(1/3));
// console.log(Math.max(20, 2, 34, 45, 8));
// console.log(Math.max(20, 2, 34, '45', 8)); //Does type coercion
// console.log(Math.max(20, 2, 34, '45px', 8));
// console.log(Math.min(20, 2, 34, 45, 8));
// console.log(Math.PI* Number.parseFloat('10px') ** 2); //Calculating area of a circle

// Math.random method - random decimal number less than 0
// console.log(Math.random());
// random decimal number btw 0 and 6
// console.log(Math.random()* 6);

// Math.trunc Method - removes decimal
// console.log(Math.trunc(5.467));

// Math.round Method - round up number to nearest integer
// console.log(Math.round("20.7"))
// console.log(Math.round("20.5"))
// console.log(Math.round("20.2"))

// Math.floor Method - round down a number
// console.log(Math.floor("20.7"))
// console.log(Math.floor("20.5"))
// console.log(Math.floor("20.2"))

// Math.ceil Method - always round up without checking the (add +1)
// console.log(Math.ceil(12.3));
// console.log(Math.ceil(12.7));

// Decimal places
// console.log(2.78932342.toFixed(1)); //return string
// console.log(+2.78932342.toFixed(1));

// Remainder Operator
// console.log(5%2);
// console.log(8%4);

//Numeric Separator
// const acctBalance = 30_000_000_000
// console.log(acctBalance);
// Don'ts of Numeric Separator
// const acctBalanceErr = 30_000_000_000_
// console.log(acctBalanceErr);

// BIG INT
// console.log(Number.MAX_SAFE_INTEGER); //Maximum number in JavaScript, once a calculation is greater than that, the result is not 100% correct so it is not safe
// const maxNum = Number.MAX_SAFE_INTEGER
// console.log(maxNum +10);
// Big int makes the number safe and the result is 100% correct

// CREATING BIGINT

// BigInt Literal
// console.log(2242434443546567686785446456786756745n);

// BigInt Constructor function
// console.log(BigInt(2242434443344556542));
// console.log(typeof 22n); //This is BigInt

// N.B : You can not do operation between bigint and number but you can compare it
// console.log(22n * 2);
// console.log( 20n < 50);
// console.log( 20 < 50n);
// console.log( 20n == 20);
// console.log( 20n === 20);
// console.log(11/3);
// console.log(11n/3n);  //round down

// DATES & TIME
// 4 Ways of creating date
// 1)
// const now = new Date
// console.log(now);
// //2)
// const date2 = new Date("Oct 20, 2020")
// console.log(date2);
// //3)
// const date3 = new Date(2020, 9, 20, 18, 50) //months are 0 based
// console.log(date3); //Fri Oct 20 2020 18:50:00
// console.log(new Date(2020, 9, 38, 18, 50)); //There's auto correct since days in Oct are 31
//4)Passing time stamp
// const date4 = new Date(0) //unix
// console.log(date4);
// console.log(new Date(1000)); //millisecond
// console.log(new Date(3*24*60*60*1000)); //3 days after unix
// console.log(new Date(365*24*60*60*1000)); //1 year after unix

//USING METHODS ON DATE
// const endSARS = new Date(2020, 9, 20, 18, 50)
// console.log(endSARS.getFullYear());  //2020
// console.log(endSARS.getMonth());  //9
// console.log(endSARS.getDate());  //20
// console.log(endSARS.getDay());  //2 Tuesday is third day in a week and days are 0 based
// console.log(endSARS.getHours());  //18
// console.log(endSARS.getMinutes());  //50
// console.log(endSARS.getTime());  //returns the time stamp
// console.log(Date.now()); //timestamp from 1970 till now
// console.log(endSARS.toISOString()); //JavaScript converts it to international standard time => String

//OPERATION WITH DATES
// const endSars = new Date(2020,9,20,18,50)
// console.log(Number(endSars));
// console.log(+endSars);
// const dayPassed = function(date1, date2){
//   console.log((date2 -date1)/(1000*60*60*24))
// }
// dayPassed(new Date(2022,10,25), new Date(2022,10,28))

// A P I is a service that we can request a data (function reading data from another source)
//INTERNATIONALIZING DATE - helps to
// labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(new Date())
// labelDate.textContent = new Intl.DateTimeFormat('en-US').format(new Date())
// labelDate.textContent = new Intl.DateTimeFormat('en-CA').format(new Date())
//Search GOOGLE for ISO language table (Locale String)
// const bunny = {
//   hour : 'numeric',
//   minute : 'numeric',
//   day : 'numeric',
//   month : '2-digit',
//   // month : 'long',
//   year : '2-digit',
//   // year : 'numeric'
// }
// labelDate.textContent = new Intl.DateTimeFormat('en-CA', options).format(new Date())
// const locale_String = navigator.language
// console.log(locale_String);
// labelDate.textContent = new Intl.DateTimeFormat(locale_String, options).format(new Date())

//INTERNATINOLIZING NUMBER
// const amount = 5000000000
// const formattedNumUK = new Intl.NumberFormat('en-UK').format(amount)
// const formattedNumUS = new Intl.NumberFormat('en-US').format(amount)
// const formattedNumGER = new Intl.NumberFormat('de-DE').format(amount)
// console.log('UK ===>',formattedNumUK);
// console.log('US ====>',formattedNumUS);
// console.log('GER ====>',formattedNumGER);

// const distance = 40000000000
// const numOption ={
//   style: 'currency',
//   // style: 'unit',
//   // style: 'percent',
//   // unit : 'celsius',
//   // unit : 'mile-per-hour',
//   currency : "NGN",
//   // currency : "EUR".
//   useGrouping : false,
//   // useGrouping : false,
// }
// const formattedDisUS = new Intl.NumberFormat('en-US', numOption).format(distance)
// const formattedDisUK = new Intl.NumberFormat('en-UK', numOption).format(distance)
// const formattedDisGER = new Intl.NumberFormat('de-DE', numOption).format(distance)
// console.log('UK ===>',formattedDisUK);
// console.log('US ====>',formattedDisUS);
// console.log('GER ====>',formattedDisGER);

//TIMER - 2 TYPES
// 1) SetTimeOut -Higher Other Function
// setTimeout(()=>{
//   console.log('Yey! My food is here');
// },1000) // 1st argument is callback function 2nd argument is the time in milliseconds
// setTimeout(()=>{
//   console.log('Yey! My food is here');
// },5000) //5 seconds
// setTimeout(()=>{
//   console.log('Wow! My food is delicious');
// },10000) //10 seconds
// setTimeout(()=>{
//   console.log('My food has finished');
// },15000) //15 seconds
// setTimeout((ing1, ing2)=>{
//   console.log(`I want to order for ${ing1} and ${ing2} again`);
// },19000, 'rice', 'beans') //15 seconds

// Cancelling setTimeOut
//Cancelling order if beans is not included
// const ings = ['rice', 'beans', 'plantain'];
// const timer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`I want to order for ${ing1} and ${ing2} again`);
//   },
//   5000,
  // ...ings
// ); //5 seconds
// if (ings.includes('beans')) {
//   clearTimeout(timer);
// }
// console.log('Waiting ....');

//2)SetInterval
// setInterval(()=>{
//   console.log('2s just pass');
// },2000)

//Stopping SetInterval
// const time = setInterval(()=>{
//     console.log('2s just pass');
//   },2000)
// clearInterval(time)
//DIFFERENCE BTW SETTIMEOUT AND SETINTERVAL
// SETTIMEOUT is called once AND SETINTERVAL is called once the time reaches
