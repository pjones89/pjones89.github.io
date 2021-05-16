const hambutton = document.querySelector('.menubutton');
const mainnav = document.querySelector('.menu')
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentdate = weekday[d.getDay()]+", "+d.getDate()+" "+month[d.getMonth()]+" "+ d.getFullYear()

document.querySelector('#currentdate').textContent = currentdate;

