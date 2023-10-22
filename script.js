const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("a,button",{
    stagger:.1,
    y:20,
    duration:1,
    ease:Power3,
    opacity:0
})

gsap.from("#intro",{
    stagger:.1,
    y:50,
    delay:0.51,
    duration:1,
    ease:Expo,
    opacity:0
})

Shery.imageEffect("#intro-img img",{
    style: 4, 
    debug: true,
    config:
    {"uColor":{"value":false},"uSpeed":{"value":0.62,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.94,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":52.02},"zindex":{"value":"9","range":[-9999999,9999999]},"aspect":{"value":1.8455166964990617},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });