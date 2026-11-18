// let number = 25;
// console.log(number);

// let title = document.querySelector("h1")
// title.style.color="green";
// title.textContent+=" to our travel guide!";

// let footer = document.querySelector(".footer")

// let btn = document.querySelector(".btn1")
// btn.addEventListener('click', function(){
//     alert("You subscribed to my Telegram channel! Thank you :)")
// })

// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//     card.classList.add('hidden');
//     observer.observe(card);
// });

// const welcome = document.querySelector('header h1');

// welcome.style.opacity = '0';
// welcome.style.transform = 'translateY(20px)';
// welcome.style.transition = 'all 1s ease';

// window.addEventListener('load', () => {
//     welcome.style.opacity = '1';
//     welcome.style.transform = 'translateY(0)';
// });

$('.carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<img src="arrow_left.png">',
    nextArrow: '<img src="arrow_right.png">',
    autoplay:true,
    autoplaySpeed:5000
});
