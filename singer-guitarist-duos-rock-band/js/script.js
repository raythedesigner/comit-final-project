// Description text just between the banner slider and the 4 icon columns

$(document).ready(function(){
    $('.services').prepend('<h3 class="text-center mb-5">How Can We Help You To Reach Your Financial Freedom?</h3>');
});


// Text on browser alert when opening the disclaimer link

$(document).ready(function(){
    $('.disclaimer button').click(function(){
        confirm('Please read the disclaimer carefully before contacting us regarding any concerns.');
    });
});