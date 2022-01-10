
const wrapper = document.querySelector('.wrapper');
const month = document.querySelector('.month');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

const cellTemplate = document.querySelector('#empty').content;
const cellItemNode = cellTemplate.querySelector('.number');

const dayTemplate = document.querySelector('#day-template').content;
const dayNode = dayTemplate.querySelector('.day-of-week');

const monthsArray = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const date = new Date();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentYear = date.getFullYear();
let currentDay = date.getDay();

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

const monthRemover = () => {
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number => {
    number.remove();
  });
};

const setDayNames = () => {
  for (let i = 0; i < daysArray.length; i++) {
    const dayName = dayNode.cloneNode(true);
    dayName.textContent = Array.from(daysArray[i])[0];
    wrapper.appendChild(dayName);
  }
};

setDayNames();

const setCalendarHeader = () => {
  month.textContent = currentYear +  ' - ' + monthsArray[currentMonth];
};

setCalendarHeader();


const setCalendar = () => {

  const countOfEmptyCellsAtTheStartOfMonth = daysArray.indexOf(daysArray[getFirstDayInMonth(currentYear, currentMonth)]);
  const countOfEmptyCellsAtTheEndofMonth = daysArray.length - daysArray.indexOf(daysArray[getLastDayInMonth(currentYear, currentMonth)]);

  for (let i = 0; i < countOfEmptyCellsAtTheStartOfMonth; i++) {
    const emptyCell = cellItemNode.cloneNode(true);
    wrapper.appendChild(emptyCell);
  }

  for (let i = 0; i < getDaysInMonth(currentYear, currentMonth); i++) {
    const numberedCell = cellItemNode.cloneNode(true);
    numberedCell.textContent = (i + 1);
    wrapper.appendChild(numberedCell);

    if (numberedCell.textContent == currentDate) {
      numberedCell.classList.add('today');
    }
  }

  for (let i = 0; i < countOfEmptyCellsAtTheEndofMonth - 1; i++) {
    const emptyCell = cellItemNode.cloneNode(true);
    wrapper.appendChild(emptyCell);
  }
};

setCalendar();

previous.addEventListener('click', () => {
  monthRemover();
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  setCalendarHeader();
  setCalendar();
});

// Next Button toggler
next.addEventListener('click', () => {
  monthRemover();
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  setCalendarHeader();
  setCalendar();
});
