// Mobil Burger
const mobilMenu = document.querySelector('#mobil-menu');
const mobilDrop = document.querySelector('.mobil-drop');

function getOpenn() {
    mobilMenu.style.display = (mobilMenu.style.display == 'block') ? 'none' : 'block';


}
// Mobil Dropdown
const mobilDown = document.querySelector('#mobil-down');

function drop(x) {
    mobilDown.style.display = (mobilDown.style.display === 'block') ? 'none' : 'block';
    mobilDrop.style.background = (mobilDrop.style.background === "none") ? '' : '#aeabab'
}



// First owl corusel

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});


// Secund owl corusel

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });
});