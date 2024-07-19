
// OnPageLoad Animation
function page_loadAnim() {
  var tl = gsap.timeline();
  tl.from(".logo img", {
    duration: 0.4,
    opacity: 0,
    y: 80,
  });

  tl.from(
    ".logo p",
    {
      duration: 0.57,
      opacity: 0,
      y: 80,
    },
    "navAnim"
  );

  tl.from(
    "#heroText",
    {
      duration: 0.4,
      opacity: 0,
      y: 35,
    },
    "navAnim"
  );
}
page_loadAnim();

// Header Animation
function heroAnimation() {
  gsap.to("#heroBg", {
    scale: 2.3,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#man", {
    scale: 0.3,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#leftCurtain", {
    x: -700,
    duration:1,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#rightCurtain", {
    x: 700,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#heroText", {
    y: 500,
    scrollTrigger: {
      scrub: 2,
    },
  });
}
heroAnimation();

Shery.mouseFollower()
Shery.makeMagnet(".logo img",{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
})
Shery.hoverWithMediaCircle("#heroText", {
  images: ["./img/textImg.jpg"]
});

// Slider
function threedslider() {
  let nextButton = document.getElementById('next');
  let prevButton = document.getElementById('prev');
  let carousel = document.querySelector('.carousel');
  let listHTML = document.querySelector('.carousel .list');
  let seeMoreButtons = document.querySelectorAll('.seeMore');
  let backButton = document.getElementById('back');
  
  nextButton.onclick = function(){
      showSlider('next');
  }
  prevButton.onclick = function(){
      showSlider('prev');
  }
  let unAcceppClick;
  const showSlider = (type) => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';
  
      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carousel .list .item');
      if(type === 'next'){
          listHTML.appendChild(items[0]);
          carousel.classList.add('next');
      }else{
          listHTML.prepend(items[items.length - 1]);
          carousel.classList.add('prev');
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(()=>{
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
      }, 2000)
  }
  seeMoreButtons.forEach((button) => {
      button.onclick = function(){
          carousel.classList.remove('next', 'prev');
          carousel.classList.add('showDetail');
      }
  });
  backButton.onclick = function(){
      carousel.classList.remove('showDetail');
  }
  gsap.from('.sliderAnim',{
    duration: 1,
    opacity:0,
    stagger:0.4,
    y:100,
    scrollTrigger:{
    trigger:'.item',
    scroller: 'body',
    start:'top 20%',
    end:'top -100%',
    scrub:2,
    }
    })
}
threedslider();

function offerAnim() {
  gsap.to('.fleft-elem',{
    scrollTrigger:{
        trigger:'#fImages',
        scroller: 'body',
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:2
    },
    y:"-300%",
    ease: Power1
  })

  gsap.from('.fheading',{
  opacity:0,
  duration:0.4,
  y:100,
  scrollTrigger:{
  trigger:'.fheading',
  scroller: 'body',
  scrub:2,
  }
  })
  gsap.from('.first',{
  opacity:0,
  y:100,
  scrollTrigger:{
  trigger:'.firstElem',
  scroller: 'body',
  scrub:2,
  start:'top 50%',
  end:'top 10%'
  }
  })
  gsap.from('.sec',{
  opacity:0,
  y:100,
  scrollTrigger:{
  trigger:'.secElem',
  scroller: 'body',
  scrub:2,
  start:'top 90%',
  end:'top 35%'
  }
  })
  gsap.from('.third',{
  opacity:0,
  y:100,
  scrollTrigger:{
  trigger:'.thirdElem',
  scroller: 'body',
  scrub:2,
  start:'top 125%',
  end:'top 65%'
  }
  })
  gsap.from('.four',{
  opacity:0,
  y:100,
  scrollTrigger:{
  trigger:'.last',
  scroller: 'body',
  scrub:2,
  start:'top 115%',
  end:'top 65%'
  }
  })

}

offerAnim();
