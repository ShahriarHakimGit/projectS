var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 9000);
}

//my code
const mySlides = document.querySelectorAll(".mySlides");
console.log(mySlides);
mySlides.forEach((s, i) => {
  s.style.width = "80%";
});

//selectors
const dotContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slide");
let curSlide = 0;
let maxSlide = slides.length;
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

//functions

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDots(curSlide);
};

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide='${slide}']`)
    .classList.add("dots__dot--active");
};

//event handlers
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  else if (e.key === "ArrowRight") nextSlide();
});
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});

document.getElementById("news").addEventListener("click", function () {
  document.querySelector("#section--2").scrollIntoView({ behavior: "smooth" });
});

//initiation
createDots();
goToSlide(0);
activateDots(0);
