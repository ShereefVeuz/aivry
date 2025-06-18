
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
  //     markers: false,
  //     toggleActions: "play reverse play reverse",
  //   },
  // });












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




