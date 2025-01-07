// Carousel
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".wrapper i");


const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let ScrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";   
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value   
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
  // updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  // scolling images/carousel to left according to mouse pointer
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchmove", dragStop);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
