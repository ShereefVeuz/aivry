
//Animations
gsap.registerPlugin(ScrollTrigger);

  // gsap.from(".top-categories .owl-carousel .item", {
  //   duration: 200,
  //   x: 100,
  //   opacity:0,
  //   stagger: 50,
  //   scrollTrigger: {
  //     trigger: ".top-categories .owl-carousel .item",
  //     start: "top 130%",
  //     end:"center 50%",
  //     scrub: true, 
  //     markers: true,
  //     toggleActions: "play reverse play reverse",
  //   },
  // });


// top-products
gsap.from(".top-products .owl-carousel .item", {
  duration: 1,       
  x: 100,
  opacity: 0,
  stagger: 0.2,  
  scrollTrigger: {
    trigger: ".top-products",    
    start: "top 80%",             
    end: "bottom 30%",             
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});

// top-categories
gsap.from(".top-categories .owl-carousel .item", {
  duration: 1,   
  x: -100,
  opacity: 0,
  stagger: 0.2,   
  scrollTrigger: {
    trigger: ".top-categories",  
    start: "top 80%",    
    end: "bottom 30%",    
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});

// top-products
gsap.from(".most-freq-inner .owl-carousel .item", {
  duration: 1,       
  x: 100,
  opacity: 0,
  stagger: 0.2,  
  scrollTrigger: {
    trigger: ".most-freq-inner",    
    start: "top 80%",             
    end: "bottom 30%",             
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});

// home-shiping-item
gsap.from(".home-shiping-item", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".home-shiping-item",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

// makup products
gsap.from(".right-mkp-products-item", {
  duration: 1,   
  x: -100,
  opacity: 0,
  stagger: 0.2,   
  scrollTrigger: {
    trigger: ".right-mkp-products-item",  
    start: "top 80%",    
    end: "bottom 30%",    
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});
gsap.from(".left-mkp-products-item", {
  duration: 1,       
  x: 100,
  opacity: 0,
  stagger: 0.2,  
  scrollTrigger: {
    trigger: ".left-mkp-products-item",    
    start: "top 80%",             
    end: "bottom 30%",             
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});

// makup products
gsap.from(".app-content-out", {
  duration: 1,   
  x: -100,
  opacity: 0,
  stagger: 0.2,   
  scrollTrigger: {
    trigger: ".app-content-out",  
    start: "top 80%",    
    end: "bottom 30%",    
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});
gsap.from(".testim-out", {
  duration: 1,       
  x: 100,
  opacity: 0,
  stagger: 0.2,  
  scrollTrigger: {
    trigger: ".testim-out",    
    start: "top 80%",             
    end: "bottom 30%",             
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse"
  }
});






//scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)

// close



// document.addEventListener('DOMContentLoaded', function () {
//     gsap.registerPlugin(ScrollTrigger);
// });
