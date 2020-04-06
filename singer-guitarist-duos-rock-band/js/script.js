// ------------------------------------- //
// -------- jQuery & JavaScript -------- //
// ------------------------------------- //



// Description text just between the banner slider and the 4 icon columns

$(document).ready(function(){
    $('.special').prepend('<h3 class="text-center mb-5 heading-1 d-flex justify-content-center">What Makes Them So Special?</h3>');
});


// Text on browser alert when clicking each of the 'What Makes Them So Special?' heading links on mobile view

$(document).ready(function(){
    $('.special .row > div:nth-of-type(1) .card').click(function(){
        alert('Their music move people. Their performances are outrageous. The chemistries between the vocals and guitars truly have the power to change the world through rock and roll music.');
    });
    $('.special .row > div:nth-of-type(2) .card').click(function(){
        alert('They are admired by many of their successors, yet still remain at the top of the pyramid. The way they present themselves in the public show not only their confidence, but also their modesty as dreamers themselves.');
    });
    $('.special .row > div:nth-of-type(3) .card').click(function(){
        alert('They have left giant footsteps in the history of rock music. The music they have created have influenced millions of fellow musicians and young dreamers, and it has been proven that their music will never fade.');
    });
    $('.special .row > div:nth-of-type(4) .card').click(function(){
        alert('The lives that they have spent as true rockstars in the last few decades are what people would refer to as “fantasy”. They are really living the dream, and we love them for that.');
    });
});


// Text on browser alert when opening the 'What's a “Rock Band”?' link

$(document).ready(function(){
    $('.whats-a-rock-band span.click.link').click(function(){
        alert('A rock band is a small musical ensemble which performs rock music. The four-piece band is the most common configuration in rock music. This webpage focuses on bands with the common formation of a vocalist who does not play an instrument, electric guitarist(s), bass guitarist, and a drummer.');
    });
});


// Get the year value to be inserted in the copyright section on the footer

var today = new Date();
var year = today.getFullYear();
var copyrightYear = document.getElementById('year');
copyrightYear.innerHTML = year;


// Get age of each musician

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const age_robertPlant = '1948, 08, 20';
const age_jimmyPage = '1944, 01, 09';
const age_stevenTyler = '1948, 03, 26';
const age_joePerry = '1950, 09, 10';
const age_brianJohnson = '1947, 10, 05';
const age_angusYoung = '1955, 03, 31';
const age_axlRose = '1962, 02, 06';
const age_slash = '1965, 07, 23';
const age_koshiInaba = '1964, 09, 23';
const age_takMatsumoto = '1961, 03, 27';

let age_singer = document.getElementById('age_singer');
switch (age_singer.textContent) {
    case 'age_robertPlant':
        age_singer.innerHTML = getAge(age_robertPlant);
        break;
    case 'age_stevenTyler':
        age_singer.innerHTML = getAge(age_stevenTyler);
        break;
    case 'age_brianJohnson':
        age_singer.innerHTML = getAge(age_brianJohnson);
        break;
    case 'age_axlRose':
        age_singer.innerHTML = getAge(age_axlRose);
        break;
    case 'age_koshiInaba':
        age_singer.innerHTML = getAge(age_koshiInaba);
        break;
    default:
        age_singer.innerHTML = '--';
        break;
}

let age_guitarist = document.getElementById('age_guitarist');
switch (age_guitarist.textContent) {
    case 'age_jimmyPage':
        age_guitarist.innerHTML = getAge(age_jimmyPage);
        break;
    case 'age_joePerry':
        age_guitarist.innerHTML = getAge(age_joePerry);
        break;
    case 'age_angusYoung':
        age_guitarist.innerHTML = getAge(age_angusYoung);
        break;
    case 'age_slash':
        age_guitarist.innerHTML = getAge(age_slash);
        break;
    case 'age_takMatsumoto':
        age_guitarist.innerHTML = getAge(age_takMatsumoto);
        break;
    default:
        age_guitarist.innerHTML = '--';
        break;
}