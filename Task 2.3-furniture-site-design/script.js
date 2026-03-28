document.addEventListener('DOMContentLoaded', function () {
    const togglebutton = document.querySelector('.navbar-mobile-menu-toggle');
    const mobilemenu = document.querySelector('.navbar-mobile-menu-items');

    togglebutton.addEventListener('click', function () {
      mobilemenu.classList.toggle('active');
    })

    let current = 0;
    const images = document.querySelectorAll('.rooms-images img');
    const dots = document.querySelectorAll('.dot');
    const total_images = images.length;
    const nextArrow = document.querySelector('.next-arrow');
    const prevArrow = document.querySelector('.prev-arrow');

    const moveRooms = () => {
      //move the rooms-images div
      const moveBy = current * (372 + 24);
      document.querySelector('.rooms-images').style.transform = `translateX(-${moveBy}px)`;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[current].classList.add('active');
      if (current == total_images -1) {
        nextArrow.style.visibility = 'hidden';
      }
      else if (current == 0) {
        prevArrow.style.visibility = 'hidden';
      }
      else {
        prevArrow.style.visibility = 'visible';
        nextArrow.style.visibility = 'visible';
      }
    };  
    

    //move the rooms-images div when .next-arrow is clicked
    nextArrow.addEventListener('click', () => {
      current = (current + 1) % total_images; 
      moveRooms();
    });

    prevArrow.addEventListener('click', () => {
      current = (current - 1 + total_images) % total_images; 
      moveRooms();
    });

})
