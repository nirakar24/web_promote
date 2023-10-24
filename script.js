gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let timeline = gsap.timeline({
    srcollTrigger:{
        trigger: '#services',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true,
    }
});

timeline.from("a,button", {
    stagger: 0.1,
    y: 20,
    duration: 1,
    ease: Power3,
    opacity: 0
})
.from("#intro", {
    stagger: 0.1,
    y: 50,
    // delay: 0.51,
    duration: 1,
    ease: Expo,
    opacity: 0
})

.from("#services",{
    y:100,
    duration:1,
    opacity:0,
    ease: Expo
})


timeline.play();
