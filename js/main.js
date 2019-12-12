function myFunction(x) {

    let element = document.querySelector('.dw-hamburger-menu');

    x.classList.toggle("dw-cross");
    element.classList.toggle("dw-hide");
    openEffect();
}

function openEffect() {

    TweenMax.staggerFrom(".dw-hamburger-list", .4, {
        opacity: 0,
        ease: Power1.easeIn
    });
}