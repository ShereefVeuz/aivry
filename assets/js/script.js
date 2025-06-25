

//// mobile header
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');
const html = document.documentElement;
const body = document.body;
 
let isOpen = false;
 
// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 992;
}
 
// Function to open the menu
function openMenu() {
  html.classList.add('no-scroll');
  body.classList.add('no-scroll');
 
  // Slide in menu from right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: '0%',
    ease: 'power3.out'
  });
 
  // Animate menu links
  gsap.fromTo(menuItems, {
    opacity: 0,
    x: 20
  }, {
    duration: 0.5,
    opacity: 1,
    x: 0,
    stagger: 0.1,
    delay: 0.2,
    ease: 'power3.out'
  });
}
 
// Function to close the menu
function closeMenu() {
  html.classList.remove('no-scroll');
  body.classList.remove('no-scroll');
 
  // Animate links out
  gsap.to(menuItems, {
    duration: 0.3,
    opacity: 0,
    x: 20,
    stagger: -0.1
  });
 
  // Slide out menu to the right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: isMobileView() ? '-100%' : '-50%',
    delay: 0.3,
    ease: 'power3.in'
  });
}
 
// Toggle menu on button click
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isOpen = !isOpen;
  menuButton.classList.toggle('open', isOpen);
});


const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    const parent = toggle.closest('.menu-dropdown');

    // Close all other dropdowns
    document.querySelectorAll('.menu-dropdown').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    // Toggle the clicked one
    parent.classList.toggle('open');
  });
});


// // menu dropdown
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', (e) => {
//     e.preventDefault();
//     const parent = toggle.closest('.menu-dropdown');
//     parent.classList.toggle('open');
//   });
// }); 


// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     const parent = toggle.closest('.menu-dropdown');

//     // Close all other dropdowns
//     document.querySelectorAll('.menu-dropdown').forEach(item => {
//       if (item !== parent) {
//         item.classList.remove('open');
//       }
//     });

//     // Toggle the clicked one
//     parent.classList.toggle('open');
//   });
// });


// // menu mouse hover show 
// const dropdowns = document.querySelectorAll('.menu-dropdown');
// dropdowns.forEach(dropdown => {
//   const toggle = dropdown.querySelector('.dropdown-toggle');

//   dropdown.addEventListener('mouseenter', () => {
//     // Close all other dropdowns
//     dropdowns.forEach(d => {
//       if (d !== dropdown) {
//         d.classList.remove('open');
//       }
//     });
//     // Open current
//     dropdown.classList.add('open');
//   });

//   dropdown.addEventListener('mouseleave', () => {
//     dropdown.classList.remove('open');
//   });
// });




// product-slider
// $('.pfolio .owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     autoplay: true,
//     autoplayHoverPause: true,
//     navText: [
//       "<i class='fa fa-arrow-left-long'></i>",
//       "<i class='fa fa-arrow-right-long'></i>"
//     ],
//     items: 2,
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       780: {
//         items: 2
//       },
//       900: {
//         items: 2
//       },
//       1000: {
//         items: 3
//       },
//       1300: {
//         items: 8
//       }
//     }
//   })
  // close

  $(document).ready(function(){
      var $carousel = $('.top-products  .owl-carousel');
      var $currentItem = $('.current-item');
      var $totalItems = $('.total-items');
      var totalItems = $carousel.children().length;
      
      $totalItems.text(totalItems);
      
      $carousel.owlCarousel({
        items: 7, // Show 7 items at once
        margin: 15,
        dots: true,
        autoplay: false,
        dotsEach: true, // Show a dot for each item
        loop: true,
        onInitialized: updateCounter,
        onChanged: updateCounter
      });
      
      function updateCounter(event) {
        // Update current position counter
        var currentPosition = event.item.index + 1;
        $currentItem.text(currentPosition);
      }
  });

$(document).ready(function(){
      var $carousel2 = $('.top-categories .owl-carousel');
      var $currentItem2 = $('.current-item');
      var $totalItems2 = $('.total-items');
      var totalItems2 = $carousel2.children().length;
      
      $totalItems2.text(totalItems2);
      
      $carousel2.owlCarousel({
        items: 4, // Show 7 items at once
        margin: 15,
        dots: true,
        autoplay: false,
        dotsEach: true, // Show a dot for each item
        loop: true,
        onInitialized: updateCounter,
        onChanged: updateCounter
      });
      
      function updateCounter(event) {
        // Update current position counter
        var currentPosition2 = event.item.index + 1;
        $currentItem2.text(currentPosition2);
      }
  });

// END section scrolling



//// returnTop 
// window.onscroll = function() {
//   const topButton = document.getElementById("topButton");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     topButton.style.display = "block";
//   } else {
//     topButton.style.display = "none";
//   }
// };

// // Function to scroll to the top
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }



 //// loader
  // document.addEventListener('DOMContentLoaded', function() {
  //   const loader = document.querySelector('.loader');
    
  //   // Hide loader after content loads
  //   window.addEventListener('load', function() {
  //       setTimeout(() => {
  //           gsap.to(loader, {
  //               opacity: 0,
  //               duration: 0.5,
  //               onComplete: () => {
  //                   loader.style.display = 'none';
  //               }
  //           });
  //       }, 2000); // Adjust time as needed
  //   });
  // });
//// END pre loader



// main products banner
$('.big-banner-inner .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  })
// close


// main products banner
$('.most-freq .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      780: {
        items: 2
      },
      1300: {
        items: 4
      }
    }
  })
  // close


// testimonials
$('.testim-inner .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa fa-arrow-left-long'></i>",
      "<i class='fa fa-arrow-right-long'></i>"
    ],
    responsive: {
      0: {
        items: 1
      }
    }
  })
  // close



  // cart increment and decrement
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".shop-down").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const input = this.parentElement.querySelector(".quantity-input");
        let value = parseInt(input.value) || 1;
        if (value > 1) input.value = value - 1;
      });
    });

    document.querySelectorAll(".shop-up").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const input = this.parentElement.querySelector(".quantity-input");
        let value = parseInt(input.value) || 1;
        input.value = value + 1;
      });
    });
  });



// // price range filter
function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#889c9b", "#2EBB77", controlSlider);
  fromSlider.value = from;

  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromSlider.value = from;
  }
}

// Controls the slider using to Input....
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#889c9b", "#2EBB77", controlSlider);
  setToggleAccessible(toInput);
  toSlider.value = to;
  toInput.value = to;

  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
  }
}

// Sliding event of the From slider
function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  console.log([from, to]);
  fillSlider(fromSlider, toSlider, "#889c9b", "#2EBB77", toSlider);
  fromInput.value = from;
  if (from > to) {
    fromInput.value = to;
    toInput.value = from;
  }
}

// Sliding event of the To slider
function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#889c9b", "#2EBB77", toSlider);
  setToggleAccessible(toSlider);
  toSlider.value = to;
  toInput.value = to;
  if (from > to) {
    fromInput.value = to;
    toInput.value = from;
  }
}

// Parsign values of the Inputs
function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

// Changing and Filling the color in the selected part...
function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  let rangeDistance = to.max - to.min;
  let fromPosition = from.value - to.min;
  let toPosition = to.value - to.min;
  if (fromPosition > toPosition) {
    let spare = fromPosition;
    fromPosition = toPosition;
    toPosition = spare;
  }
  controlSlider.style.background = `linear-gradient(
              to right,
              ${sliderColor} 0%,
              ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
              ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
              ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
              ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
              ${sliderColor} 100%)`;
}

// Making sure the toggle which we are using is accesible to change the range
function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector("#toSlider");
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector("#fromSlider");
const toSlider = document.querySelector("#toSlider");
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");

// Initially filling the slider using default values...
fillSlider(fromSlider, toSlider, "#889c9b", "#2EBB77", toSlider);
setToggleAccessible(toSlider);

// Assigning listner methonds to respective events.
fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () =>
  controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
// // END price range filter


// select color change
document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', function () {
    // Remove 'selected' from all color options
    document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
    
    // Add 'selected' to the clicked one
    this.classList.add('selected');
  });
});


//// product details slider
function changeImage(event, src) {
  document.getElementById('mainImage').src = src;
  document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
  event.target.classList.add('active');
}

//// product rating
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.rating-star');
  const ratingInput = document.getElementById('rating');

  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = this.getAttribute('data-rating');
      ratingInput.value = rating;
      resetStars();
      for (let i = 0; i < rating; i++) {
        stars[i].classList.remove('fa-star');
        stars[i].classList.add('fa-star-fill');
      }
    });
  });

  function resetStars() {
    stars.forEach(star => {
      star.classList.remove('fa-star-fill');
      star.classList.add('fa-star');
    });
  }
});


