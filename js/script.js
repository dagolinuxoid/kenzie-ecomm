window.onload = () => {
   const resource = document.querySelector('.resource');
   const resourceInfo = document.querySelector('.resource__info');
   resource.addEventListener('click', () => resourceInfo.classList.toggle('show-board-js'));
};