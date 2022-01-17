//Navbar
const menu = document.querySelector('#mobile-menu');  
 const menuLinks = document.querySelector('.navbar__menu');  
 // Display mobile menu  
 const mobieMenu = () =>{  
 menu.classList.toggle('is-active')  
 menuLinks.classList.toggle('active')  
 }  
 menu.addEventListener('click', mobieMenu)  
 function myFunction() {  
   document.getElementById("demo").innerHTML = "Hello World";  
  } 

//middle-of-the-page
const sliderContainer = document.querySelector(".slider-container");  
 const slideRight = document.querySelector(".right-slide");  
 const slideLeft = document.querySelector(".left-slide");  
 const upButton = document.querySelector(".up-button");  
 const downButton = document.querySelector(".down-button");  
 const slidesLength = slideRight.querySelectorAll("div").length;  
 let activeSlideIndex = 0;  
 slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;  
 const changeSlide = (direction) => {  
  const sliderHeight = sliderContainer.clientHeight;  
  if (direction === "up") {  
   activeSlideIndex++;  
   if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;  
  } else if (direction === "down") {  
   activeSlideIndex--;  
   if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;  
  }  
  slideRight.style.transform = `translateY(-${  
   activeSlideIndex * sliderHeight  
  }px)`;  
  slideLeft.style.transform = `translateY(${  
   activeSlideIndex * sliderHeight  
  }px)`;  
 };  
  upButton.addEventListener("click", () => changeSlide("up"));  
  downButton.addEventListener("click", () => changeSlide("down"));  




