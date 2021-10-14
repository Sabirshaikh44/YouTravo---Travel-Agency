// console.log("Travel Agency project");
let HamburgerBtn = document.getElementById("hamburgerBtn");
HamburgerBtn.addEventListener("click",function(e){
    let navlinks = document.getElementById("navlinks");
    if(navlinks.style.display != 'block'){
        navlinks.style.display = "block";
    }else{
        navlinks.style.display = "none";
    }
})

// intersection api for navbar
const headersection = document.querySelector(".navbar");
const headerSectionhero = document.querySelector(".hero-container");
const headerSectionheroOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-200px 0px 0px 0px"
};
const headerSectionheroObserver = new IntersectionObserver(function(entries,headerSectionheroObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            headersection.classList.add("navbar-white");
        }else{
            headersection.classList.remove("navbar-white"); 
        }
    })
},headerSectionheroOptions);
headerSectionheroObserver.observe(headerSectionhero);

// promo box animation using intersection api:
const promobox = document.querySelector(".promo-box");
const promoContainer = document.querySelector(".hero-container");
const promoSecOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-400px 0px 0px 0px"
};
const promosectionObserver = new IntersectionObserver(function(entries,promosectionObserver){
  entries.forEach(entry=>{
      if(!entry.isIntersecting){
          promobox.classList.add("promo-container-slide-up");
      }else{
          promobox.classList.remove("promo-container-slide-up");
      }
  })
},promoSecOptions)
promosectionObserver.observe(promoContainer);



// slider
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// form-script
let form = document.getElementById('contact-form');
form.addEventListener('click',function(e){
    e.preventDefault();
})
// formbtn script
let formsubmitBtn = document.getElementById('form-submit-btn');
formsubmitBtn.addEventListener('click',function(){
    formsubmitBtn.innerHTML = "SENDING MESSAGE...";
    setTimeout(() => {
        formsubmitBtn.innerHTML = "MESSAGE SENT SUCCESSFULLY!"
    }, 2000);
})