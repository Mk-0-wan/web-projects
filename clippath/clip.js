console.log("if you are able to see me everything is fine");
// where i want the animation to occur to
const maiN = document.querySelector(".container");
// pause until an event happens
const tl = gsap.timeline({paused: true , defaults:{duration:1.2}});

// the animation
//setting up some de
tl.to(maiN, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 53% 100%, 0 100%, 0 53%)", ease:"elastic"});
tl.to(maiN, {clipPath:"polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 100% 62%)", ease:"power2.inOut"}, "+=1");
tl.to(".container2", {clipPath: "polygon(0 0, 100% 0, 100% 100%, 53% 100%, 0 100%, 0 53%)", ease:"elastic"},"+=1");
// the event itself
maiN.addEventListener("mouseover", () => {
    tl.play()
});
maiN.addEventListener("mouseout", () => {
    tl.reverse()
});
