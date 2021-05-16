const hambutton = document.querySelector('.menubutton');
const mainnav = document.querySelector('.menu')
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};



