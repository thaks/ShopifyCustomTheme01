new Glider(document.querySelector('.glider'), {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: {
        prev: '.glider__prev',
        next: '.glider__next'
    },
    draggable: true,
    rewind: true,
    scrollLock: true
});