// Your code goes here

//1. click
document.querySelectorAll(".logo-heading").forEach((title) => {
  title.addEventListener("click", (e) => {
    console.log(e);
    title.style.color = "purple";
  });
});

//2. Mouseenter
const bannerImg = document.querySelector(".intro");
bannerImg.addEventListener("mouseenter", () => {
  bannerImg.style.transform = "scale(.75)";
  bannerImg.style.transition = "transform 1s";
});

//3. Resize
const imgContent = document.querySelector(".img-content img");
window.addEventListener("resize", () => {
  imgContent.src =
    "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
});

//4. DblClick
const header = document.querySelector("header");
header.addEventListener("dblclick", () => {
  header.style.background = "yellow";
  header.style.fontWeight = "bolder";
});

//5. Scroll
const body = document.querySelector("body");
window.addEventListener("scroll", (e) => {
  body.style.background = "purple";
});

//6. Load
window.addEventListener("load", (e) => {
  alert("Sorry! Page is not loading");
  e.stopPropagation();
});

//7. Keydown
const footer = document.querySelector(".footer");
window.addEventListener("keydown", (e) => {
  if (e.key === "s") {
    footer.style.background = "blue";
  } else {
    footer.style.background = "yellow";
  }
});

//8. Wheel

function zoom(event) {
  event.preventDefault();

  scale += event.delay * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  header.style.transform = `scale(${scale})`;
}

let scale = 1;
header.onwheel = zoom;

//9. ContextMenu
const bodyOne = document.querySelector(".nav");

bodyOne.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

//10. Keyup
const intro = document.querySelector(".intro");
window.addEventListener("keyup", (event) => {
  if (event.code === 5) {
    return;
  }
  intro.style.color = "green";
});

// Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

//Are these two woking properly??
const navClick = document.getElementsByClassName("destination");
navClick[2].addEventListener('click', (e) => {
  navClick[2].style.border = '10px dotted yellow';
  e.stopPropagation();
})

const top = document.getElementsByClassName('content-pick');
top[0].addEventListener('click', (e) => {
  top[0].style.border = '10px dashed black';
});


// Stop the navigation items from refreshing the page by using `preventDefault()`

const nav = document.getElementsByClassName('.nav');
nav.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});
