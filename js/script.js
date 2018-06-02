window.onload = () => {
   const resource = document.querySelectorAll('.resource');
   const resourceInfo = document.querySelectorAll('.resource__info');
   [...resource].forEach((card,i) => {
       card.addEventListener('click', () => resourceInfo[i].classList.toggle('show-board-js'));
   });
};