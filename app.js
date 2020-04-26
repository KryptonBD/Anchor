//navbar on small screen
const slide = () =>{
    const menu = document.querySelector('.menu');
    const navlinks = document.querySelector('.navigation__list');
    
    menu.addEventListener('click',  ()=>{
        navlinks.classList.toggle('nav-active');
        menu.classList.toggle('toggle');
    })
}

//navbar on scroll
const navBar = document.querySelector('.navigation');
window.onscroll = () =>{
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        navBar.classList.add('navigation-scrolled');
    }
}

slide();