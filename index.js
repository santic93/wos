//de arriba a bajo y queda fijo
// window.addEventListener('DOMContentLoaded', function() {
//     var title = document.getElementById('title');
//     setTimeout(function() {
//       title.style.opacity = '1';
//       title.style.transform = 'translateY(0)';
//     }, 2000);
//   });

///rebote
// const title = document.getElementById('title');
// title.addEventListener('animationend', () => {
//   title.style.animation = '';
// });

////rebote
const title = document.getElementById('title');
title.addEventListener('animationend', () => {
  title.style.animation = '';
});

////mostrar oculto
function mostrarPrincipal() {
  var principalSection = document.getElementById('principal');
  principalSection.style.display = 'block';
  //principalSection.classList.add("mostrar");
}
