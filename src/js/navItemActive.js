const navLink = document.querySelectorAll('.nav__link');
const headerNewSection = document.querySelectorAll('.header-new-section');

navLink.forEach((item) => {
   item.addEventListener('click', () => {
      let linkActive = document.querySelector('.nav__link.active');
      
      if(item !== linkActive){
         item.classList.add('active');
         linkActive.classList.remove('active');
      }

      switch(item.textContent){
         case 'Ремонтируемые устройства':
            headerNewSection[0].scrollIntoView(true);
            break;
         case 'Дополнительные услуги':
            headerNewSection[1].scrollIntoView(true);
            break;
         case 'Цены на услуги':
            headerNewSection[2].scrollIntoView(true);
            break;
      }
   });
});