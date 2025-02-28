
// Adding the time

const dateTimeToday = new Date();
let hour = dateTimeToday.getHours();
const minute = dateTimeToday.getMinutes();
const second = dateTimeToday.getSeconds();
const period = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12 || 12;

// console.log(hour, minute, second, period)



// Getting Day, Month, Date and Year
const day = dateTimeToday.toLocaleString('default', { weekday: 'short' });
const month = dateTimeToday.toLocaleString('default', { month: 'short' });
const date = dateTimeToday.getDate();
const year = dateTimeToday.getFullYear();

document.getElementById('date-time').innerHTML = `
<span class='text-lg'>${day}</span>,</br>
<span class='font-bold'>${month} ${date} ${year}
</span>`



