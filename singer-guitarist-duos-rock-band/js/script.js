// ------------------------------- //
// -------- jQuery Script -------- //
// ------------------------------- //



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
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// Robert Plant
var age_robertPlant = document.getElementById('age_robertPlant');
age_robertPlant.innerHTML = getAge('1948, 08, 20');
// Jimmy Page
var age_jimmyPage = document.getElementById('age_jimmyPage');
age_jimmyPage.innerHTML = getAge('1944, 01, 09');
// Steven Tyler
var age_stevenTyler = document.getElementById('age_stevenTyler');
age_stevenTyler.innerHTML = getAge('1948, 03, 26');
// Joe Perry
var age_joePerry = document.getElementById('age_joePerry');
age_joePerry.innerHTML = getAge('1950, 09, 10');
// Brian Johnson
var age_brianJohnson = document.getElementById('age_brianJohnson');
age_brianJohnson.innerHTML = getAge('1947, 10, 05');
// Angus Young
var age_angusYoung = document.getElementById('age_angusYoung');
age_angusYoung.innerHTML = getAge('1955, 03, 31');
// Axl Rose
var age_axlRose = document.getElementById('age_axlRose');
age_axlRose.innerHTML = getAge('1962, 02, 06');
// Slash
var age_slash = document.getElementById('age_slash');
age_slash.innerHTML = getAge('1965, 07, 23');
// Koshi Inaba
var age_koshiInaba = document.getElementById('age_koshiInaba');
age_koshiInaba.innerHTML = getAge('1964, 09, 23');
// Tak Matsumoto
var age_takMatsumoto = document.getElementById('age_takMatsumoto');
age_takMatsumoto.innerHTML = getAge('1961, 03, 27');