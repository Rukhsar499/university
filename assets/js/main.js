
const slides = document.querySelectorAll('.slide');

function slideShow(){
    // get current slide
    const current = document.querySelector('.active')
    //remove active class
    current.classList.remove('active');
    // if there is a nextElementSibling:
    if(current.nextElementSibling){
        //add active to next slide
        current.nextElementSibling.classList.add('active')
    } else {
        // add active to first one
        slides[0].classList.add('active')
    }

    setTimeout('slideShow()', 3000)
    // 3000 will make 3s per slide which will match our progress bar
}

// load the function when the website loads
window.onload = slideShow;

// header script
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
  })

  // coursel script
  var $carousel = $('[data-owl-carousel]');
  if ($carousel.length) {
      $carousel.each(function (index, el) {
          $(this).owlCarousel($(this).data('owl-carousel'));
      });
  }

  // aos data
  AOS.init();

  // top to bottom
  window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("go-top");
    } else {
        document.getElementById("go-top");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})
