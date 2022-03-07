const balls = document.getElementsByClassName("ball");
document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";
  // event.cilentX => get the horizontal coordinate of the mouse
  // event.cilentY => get the vertical coordinate of the mouse
  // window.innerWidth => get the browser width
  // window.innerHeight => get the browser height

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
};

// multilayer page reveal - photobooth left
const linkphoto = document.querySelector(".link-photo");
const transitionleft = document.querySelector(".transition-left");
linkphoto.addEventListener("click", (e) => {
  e.preventDefault();
  transitionleft.classList.add("slide-left");
  setTimeout(() => {
    window.location = linkphoto.href;
  }, 900);
});

// multilayer page reveal - kitchen right
const linkkitch = document.querySelector(".link-kitchen");
const transitionright = document.querySelector(".transition-right");
linkkitch.addEventListener("click", (e) => {
  e.preventDefault();
  transitionright.classList.add("slide-right");
  setTimeout(() => {
    window.location = linkkitch.href;
  }, 900);
});

//fix
// multilayer page reveal - broom up
const linkbroom = document.querySelector(".link-broom");
const transitionup = document.querySelector(".transition-up");
linkbroom.addEventListener("click", (e) => {
  e.preventDefault();
  transitionup.classList.add("slide-up");
  setTimeout(() => {
    window.location = linkbroom.href;
  }, 900);
});

// multilayer page reveal - closet down
const linkcloset = document.querySelector(".link-closet");
const transitiondown = document.querySelector(".transition-down");
linkcloset.addEventListener("click", (e) => {
  e.preventDefault();
  transitiondown.classList.add("slide-down");
  setTimeout(() => {
  }, 900);
});