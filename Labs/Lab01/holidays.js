const _ = require('lodash');

const holidays = [
  { name: 'New Year', date: '2026-01-01' },
  { name: 'Canada Day', date: '2025-07-01' },
  { name: 'Christmas', date: '2025-12-25' },
];

function daysUntil(dateStr) {
  const today = new Date();
  const holidayDate = new Date(dateStr);
  const diffTime = holidayDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

console.log('Days until each holiday:');
holidays.forEach(holiday => {
  const days = daysUntil(holiday.date);
  console.log(`${holiday.name} is in ${days} day(s)`);
});

const randomHoliday = _.sample(holidays);
console.log(`\nRandom Holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

const christmasIndex = _.findIndex(holidays, { name: 'Christmas' });
const canadaDayIndex = _.findIndex(holidays, { name: 'Canada Day' });

console.log(`\nIndex of Christmas: ${christmasIndex}`);
console.log(`Index of Canada Day: ${canadaDayIndex}`);
