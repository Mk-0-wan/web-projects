//setting up our invisible slider
//make a mouse on click
const track = document.getElementById("track");
const tl = gsap.timeline({paused:true});

//keep the cordinates of where our starting point is
const holdOnDown = e => track.dataset.mouseDownAt = e.clientX;

//setting and storing the data for the actual cordinates of the mouseDownAtposition(which is our
//starting point) followed by storing the percentage of where we left of when mouseup was set ==
//this will act as astarting point cordinates as we continue scrolling towards the
//nextPercentage(position)
const holdOnUp = () => {
    track.dataset.mouseDownAt = "0";  //begining of the scroll
    track.dataset.prevPercentage = track.dataset.percentage; //where we left off in percentage form
}

const holdOneMove = e => {

    if(track.dataset.mouseDownAt === "0")return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
         maxDelta = window.innerWidth / 2;


    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,    //means it can go onto inifinity
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

   track.dataset.percentage = nextPercentage;
    tl.fromTo(track, 2,{
        x: `${nextPercentage}%`,
    },
         {
             x: '0%',
             ease: "linear"
         });
   // track.animate({
    //transform: `translate(${nextPercentage}%, -50%)`
    //},
       // { duration: 1200, fill: "forwards" });

    //for(const image of track.getElementsByClassName("image")) {
    const images = Array.from(track.getElementsByClassName("image"));

    images.forEach(image => {
      gsap.to(image, {
        duration: 1.2,
        objectPosition: `${100 + nextPercentage}% center`,
        ease: 'linear'
      }, "<");
    });
       // image.animate({
      //objectPosition: `${100 + nextPercentage}% center`
       // },
        //    { duration: 1200, fill: "forwards" });
  // }
}

window.onmousedown = e => holdOnDown(e);
window.ontouchstart = e => holdOnUp(e.touches[0]);
window.onmouseup = e => holdOnUp(e);
window.ontouchend = e => holdOnUp(e.touches[0]);
window.onmousemove = e => holdOneMove(e);
window.ontouchmove = e => holdOneMove(e.touches[0]);

