///////////////////////////// Carousel
const SLIDES = $(".slide");
var INDEX = 0;
const BUTTONS = $(".button");

function showSlide(index) {
  INDEX = index;
  let currentSlide = SLIDES.eq(index);
  let currentButton = BUTTONS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");

  BUTTONS.removeClass("current-slide");
  currentButton.addClass("current-slide");
}


////////////////// click listeners
$("#left-button").click(function(){
  let NEW = (INDEX - 1) % SLIDES.length;
  showSlide(NEW);
});

$("#right-button").click(function(){
  let NEW = (INDEX + 1) % SLIDES.length;
  showSlide(NEW);
});

$("#button1").click(function(){
  showSlide(0);
});

$("#button2").click(function(){
  showSlide(1);
});
