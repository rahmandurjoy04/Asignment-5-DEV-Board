document.getElementById('date-time');


const dateTimeToday =new Date();
// Getting Day, Month, Date and Year
const day =dateTimeToday.toLocaleString('default',{weekday:'short'});
const month =dateTimeToday.toLocaleString('default',{month:'short'});
const date = dateTimeToday.getDate();
const year = dateTimeToday.getFullYear();

document.getElementById('date-time').innerHTML=`
<span class='text-lg'>${day}</span>,</br>
<span class='font-bold'>${month} ${date} ${year}
</span>`
