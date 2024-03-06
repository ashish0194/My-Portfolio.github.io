$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});

let menu = document.querySelector('#hamburger')
let close = document.querySelector('#close')
let mobileNav = document.querySelector('.mobile-nav')

menu.addEventListener('click', ()=>{
mobileNav.classList.add('open')
})

close.addEventListener('click', ()=>{
    mobileNav.classList.remove('open')   
})