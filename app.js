const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

var i = 0;
var txt = 'See What EzeBot Can Do'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("feat_type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}