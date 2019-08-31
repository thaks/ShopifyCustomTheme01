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



document.querySelector('.tahir-lang-button').addEventListener('click', (event) => {
    const lang = event.target.innerHTML; 
    const html = document.querySelector('html');


    if( lang === "Arabic") {
        html.setAttribute('dir', 'ltr');
        event.target.innerHTML = "English";

        return;
    } else {
        html.setAttribute('dir', 'rtl');
        event.target.innerHTML = "Arabic";

    }

    console.log(lang);
    
});