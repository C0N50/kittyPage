console.log('in app.js');
console.log('Gimme that MONAY 💸💸💸', $)

//Hey Jquery, plz call my 'onReady' function when the DOM is ready to go
$(document).ready(onReady);

function onReady() {
    console.log('Ready to DOMinate 🏋️🏋️🏋️');
    
    
    //do cool DOM stuff here
    let myImage = $('img');
    myImage.hide();
    for (let i = 0; i < 10; i++) {
    myImage.delay(1000).fadeIn(3000);
    myImage.delay(1000).fadeOut(3000);
    }
    myImage.delay(1000).fadeIn(3000);

    $('h1')
        .css('color', '#96c')
        .css('background-color', 'black');


    $('#kittyTitle')

        .css('border', '1px dotted purple');

    $('#kittyTitle')
        .css('outline','3px solid blue');

    $('.kittyStuff')
        .css('outline', '4px solid red');

    $('.kitty-img')
        .css('transform', 'rotate(180deg)');

}