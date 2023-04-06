$('.header-menu-icon').on('click', ()=>{
    $('.nav-menu').slideDown(500).addClass('animate__animated animate__fadeInRight')
})

$('.icon-close').on('click', ()=>{
    $('.nav-menu').slideUp(500)
})

let typed = new Typed('#element', {
    strings: ["Designer", "Developer", "Artist"],
    typeSpeed: 100,
    backDelay: 1200,
    loop: true,
    cursorChar: '|',
    autoInsertCss: true,
  });

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 3){
        $('.navigation').addClass('navigation-dark')
    } else {
        $('.navigation').removeClass('navigation-dark')
    }
})