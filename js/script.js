// new Glider(document.querySelector('.glider'), {
//     slidesToShow: 1.5,
//     slidesToScroll: 1,
//     arrows: {
//         prev: '.glider__prev',
//         next: '.glider__next'
//     },
//     draggable: true,
//     rewind: true,
//     // scrollLock: true
// });



// document.querySelector('.tahir-lang-button').addEventListener('click', (event) => {

//     if( event.target.innerHTML == "Arabic") {
//         document.querySelector('html').setAttribute('dir', 'rtl');
//         event.target.innerHTML = "English";
//     } else {
//         document.querySelector('html').setAttribute('dir', 'ltr');
//         event.target.innerHTML = "Arabic";

//     }
    
// });















const desktopMenutriggers = document.querySelectorAll('.cool > li');

function handleEnter() {

    console.log("Entering");
    
    this.classList.add('trigger-enter');
    setTimeout(() => {
        this.classList.add('trigger-enter-active');
    }, 100);
}

function handleLeave() {
    console.log("Leaving");
    
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');    

}

desktopMenutriggers.forEach( trigger => trigger.addEventListener('mouseenter', handleEnter));
desktopMenutriggers.forEach( trigger => trigger.addEventListener('mouseleave', handleLeave));












