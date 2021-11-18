///////////////////////////// Carousel
const SLIDES = $(".slide");
var INDEX = 0;
const BUTTONS = $(".button");
console.log(BUTTONS);

function showSlide(index) {
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
  INDEX = NEW;
  showSlide(INDEX);
});

$("#right-button").click(function(){
  let NEW = (INDEX + 1) % SLIDES.length;
  INDEX = NEW;
  showSlide(INDEX);
});

$("#button1").click(function(){
  INDEX = 0;
  showSlide(INDEX);
});

$("#button2").click(function(){
  INDEX = 1;
  showSlide(INDEX);
});
