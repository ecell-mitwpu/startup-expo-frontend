let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

Shery.mouseFollower();
Shery.makeMagnet(".logo img",{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
})

// OnPageLoad Animation
function page_loadAnim() {
  var tl = gsap.timeline();
  tl.from(".logo img", {
    duration: 0.4,
    opacity: 0,
    y: 80,
  });

  tl.from(
    ".logo span",
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
      duration: 0.5,
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

function speakerPartnerSection(){
  gsap.from("#speakerSection", {
    y: 50,
    opacity:0,
    stagger:0.7,
    scrollTrigger:{
    trigger:'#speakerSection',
    scroller: 'body',
    start:'top 65%',
    end:'top -5%',
    scrub:3,
    }
  });
  gsap.from(".partners", {
    y: 50,
    opacity:0,
    stagger:0.65,
    scrollTrigger:{
    trigger:'.partners',
    scroller: 'body',
    start:'top 95%',
    end:'top -1%',
    scrub:3,
    }
  });
}
speakerPartnerSection();

function VideoAnimation() {
var videoPlayBtn=document.querySelector(".videoSection-center")
var video=document.querySelector("#videoSection video")

videoPlayBtn.addEventListener("click",function () {
  video.play()
  gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0
  })
})

video.addEventListener("click",function () {
  video.pause()
  gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px"
  })
})
}
VideoAnimation();

