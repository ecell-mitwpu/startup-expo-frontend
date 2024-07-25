

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
function header_Parallax() {
  gsap.to("#heroBg", {
    scale: 2,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#man", {
    scale: 0.5,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#leftCurtain", {
    x: -500,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#rightCurtain", {
    x: 500,
    scrollTrigger: {
      scrub: 2,
    },
  });
  gsap.to("#heroText", {
    y: 400,
    scrollTrigger: {
      scrub: 2,
    },
  });
}
header_Parallax();
Shery.mouseFollower()
Shery.makeMagnet(".logo img",{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
})
Shery.hoverWithMediaCircle("#heroText", {
  images: ["./img/textImg.jpg"]
});