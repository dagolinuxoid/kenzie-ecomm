window.onload = () => {
   const resources = document.querySelectorAll('.resource');
   const resourcesInfo = document.querySelectorAll('.resource__info');
   [...resources].forEach((resource, i) => {
       resource.addEventListener('click', () => resourcesInfo[i].classList.toggle('js-show-info'));
   });
};