const logo = document.querySelector('.img_logo');
const heading = document.querySelector('h1');
const menu_icon = document.querySelector('.menu_icon');

window.addEventListener('mousemove' , (e)=> {
    let container_logo = e.target.closest('.img_logo');
    if (container_logo) {
        logo.setAttribute(
            'style',
            'transform: translateX(calc(-20% + '+(e.clientX / 10)+'px)) translateY(calc(-40% + '+(e.clientY / 3)+'px))'
        );
        heading.setAttribute('style','')
        return false;
    } 
    logo.setAttribute('style','') 
    heading.setAttribute('style', 'transform:translateX(calc(-50% + '+(e.clientX / 40)+'px)) translateY(calc(-50% + '+(e.clientY / 40)+'px)');
})

/*------------------|
|     Nav Icon      |
|------------------*/
const main_menu = document.querySelector('.main_menu');
menu_icon.addEventListener('click', ()=> {
    menu_icon.classList.toggle('open');
  main_menu.classList.toggle('hide');
})