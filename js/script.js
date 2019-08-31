new Glider(document.querySelector('.glider'), {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: {
        prev: '.glider__prev',
        next: '.glider__next'
    },
    draggable: true,
    rewind: true,
    // scrollLock: true
});



document.querySelector('.tahir-lang-button').addEventListener('click', (event) => {

    if( event.target.innerHTML == "Arabic") {
        document.querySelector('html').setAttribute('dir', 'rtl');
        event.target.innerHTML = "English";
    } else {
        document.querySelector('html').setAttribute('dir', 'ltr');
        event.target.innerHTML = "Arabic";

    }
    
});