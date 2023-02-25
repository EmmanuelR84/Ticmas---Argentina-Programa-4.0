const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const birthday = document.querySelector('#birthday');
const phone = document.querySelector('#phone');
const website = document.querySelector('#website');


// Change name
document.querySelector('#name').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'My name is';
});

document.querySelector('#name').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Emmanuel Ramello';
});

document.querySelector('#name').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#name').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});



// Change mail
document.querySelector('#mail').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'My mail is';
});

document.querySelector('#mail').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = 'emmanuelramello@gmail.com';
});

document.querySelector('#mail').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#mail').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});



// Change birthday
document.querySelector('#birthday').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'I was born on';
});

document.querySelector('#birthday').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = 'August 12, 1984';
});

document.querySelector('#birthday').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#birthday').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});



// Change address
document.querySelector('#address').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'I live in';
});

document.querySelector('#address').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Belgrano 168, Villa Maria, Cordoba, Arg.';
});

document.querySelector('#address').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#address').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});



// Change phone
document.querySelector('#phone').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'My phone number is';
});

document.querySelector('#phone').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = '+54 9 353 6565823';
});

document.querySelector('#phone').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#phone').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});



// Change website
document.querySelector('#website').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'My website is';
});

document.querySelector('#website').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = "https://erwebp.com.ar";
});

document.querySelector('#website').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#website').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});



// Change more info
document.querySelector('#moreInfo').addEventListener('mouseover', function() {
    document.querySelector('#firstParagraph').innerHTML = 'click for more';
});

document.querySelector('#moreInfo').addEventListener('mouseover', function() {
    document.querySelector('#secondParagraph').innerHTML = "Info";
});

document.querySelector('#moreInfo').addEventListener('mouseleave', function() {
    document.querySelector('#firstParagraph').innerHTML = 'Hello!!';
});

document.querySelector('#moreInfo').addEventListener('mouseleave', function() {
    document.querySelector('#secondParagraph').innerHTML = 'Nice to meet you!';
});

const infoDiv = document.querySelector('.info__container');

document.querySelector('#moreInfo').addEventListener('click', function() {
    console.log('click en more info');
    infoDiv.classList.remove('inactive');
});

document.querySelector('#closeInfo').addEventListener('click', () => {
    infoDiv.classList.add('inactive');
});