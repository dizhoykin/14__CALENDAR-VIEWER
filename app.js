const numbers = document.querySelectorAll('.number');
const month = document.querySelector('.month');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date()
const currentMonth = date.getMonth();
const currentDate = date.getDate();

month.textContent = '2022 - ' + monthsArray[currentMonth];

numbers.forEach(number => {
  if (number.textContent == currentDate) {
    number.classList.add('today');
  }
});

previous.addEventListener('click', () => {
  date = new Date('');
});

next.addEventListener('click', () => {

});
