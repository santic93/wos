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


///volver arriba 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").classList.add("show");
  } else {
    document.getElementById("scrollButton").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
