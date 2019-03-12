//Nav functionality
$('nav').localScroll();

var test = $('a');



//Typing function

var typed = new Typed('.iAm', {
  strings: ["First sentence.", 'a Web Developer.',
  'a quick-learner.', 'a good communicator.','always learning more.',
  'enterprising.','analytical.', 'process-oriented.'],
  typeSpeed: 40,
  backSpeed: 60,
  loop: true,
  backDelay: 3000
});


//Animate function
// var animateHTML = function() {
//   var elems;
//   var windowHeight;
//   function init() {
//     elems = document.querySelectorAll('.hidden');
//     windowHeight = window.innerHeight;
//     addEventHandlers();
//     checkPosition();
//   }
//   function addEventHandlers() {
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
//   }
//   function checkPosition() {
//     for (var i = 0; i < elems.length; i++) {
//       var positionFromTop = elems[i].getBoundingClientRect().top;
//       if (positionFromTop - windowHeight <= 0) {
//         elems[i].className = elems[i].className.replace(
//           'hidden',
//           'fade-in-element'
//         );
//       }
//     }
//   }
//   return {
//     init: init
//   };
// };
// animateHTML().init();

//Project image select functionality
$('.image').css('cursor','hand');
