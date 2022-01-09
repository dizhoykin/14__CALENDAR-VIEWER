const numbers = document.querySelectorAll('.number');
const month = document.querySelector('.month');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const currentYear = date.getFullYear();
const currentDay = date.getDay();

const cellTemplate = document.querySelector('#empty').content;
const cellItemNode = cellTemplate.querySelector('.number');

const getDaysInMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
};

const getFirstDayInMonth = (year, month) => {
  let date = new Date(year, month, 1);
  return date.getDay();
};

const getLastDayInMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDay();
};

const setCalendar = () => {
  const countOfEmptyCellsAtTheBeginningOfMonth = daysArray.indexOf(daysArray[getFirstDayInMonth(currentYear, currentMonth)]) - 1;
  const countOfEmptyCellsAtTheEndofMonth = daysArray[getLastDayInMonth(currentYear, currentMonth)];
  // console.log(countOfEmptyCellsAtTheEndofMonth);
  for (let i = 0; i < countOfEmptyCellsAtTheBeginningOfMonth; i++) {

  }
};

setCalendar();

 // Set current Month and Year to the Calendar
month.textContent = currentYear +  ' - ' + monthsArray[currentMonth];

// Set current Date Number to the Calendar
numbers.forEach(number => {
  if (number.textContent == currentDate) {
    number.classList.add('today');
  }
});

// Previous Button toggler
previous.addEventListener('click', () => {
  
});

// Next Button toggler
next.addEventListener('click', () => {

});
