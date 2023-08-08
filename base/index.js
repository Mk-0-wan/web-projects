//making a hover effect color change using gsap
//var element = document.querySelector('.change');
//
//element.addEventListener('mouseover', function() {
//  gsap.from(element, {
//    duration: 3,
//    color: 'red',  // Change this to the desired color
//    scale:1  // Example animation property
//    })
//});

//we are able to make the color change while i hover over the text
//the next question is how to hover and change the css property
console.log("Hello there you see me");

//var element = document.querySelector('.change');
//
//element.addEventListener('mouseover', function() {
//  gsap.fromTo(element, {
//    color: 'rgba(255, 255, 255, 0.5)',  // Light white color (adjust opacity as needed)
//    backgroundPosition: 'left',  // Start position of the background image (if applicable)
//  }, {
//    color: '#FFFFFF',  // Bright white color
//    backgroundPosition: 'right',  // End position of the background image (if applicable)
//    duration: 0.3,
//    ease: 'power2.out'
//  });
//});
//
//element.addEventListener('mouseout', function() {
//  gsap.fromTo(element, {
//    color: '#FFFFFF',  // Bright white color
//    backgroundPosition: 'right',  // End position of the background image (if applicable)
//  }, {
//    color: 'rgba(255, 255, 255, 0.5)',  // Light white color (adjust opacity as needed)
//    backgroundPosition: 'left',  // Start position of the background image (if applicable)
//    duration: 0.3,
//    ease: 'power2.out'
//  });
//});

//making an image to appear when we hover over the link
//first making a link between the two by making the two share the same timeline which will always be
//ready once you hover over the text before anything else make sure the width is always zero
$(document).ready(function() {
    gsap.set(".project_preview", {width:0});
    var tl = gsap.timeline();


    //SET THE ANIMATION TO HAPPEN ONCE YOU HOVER OVER THE TEXT
    $(document).on("mouseover", ".change", function(evt){
        var tl2 = gsap.timeline();
        tl2.to($(".project_preview"), 1, {
            width:"600px",
            ease:"power4.out"
        }, "+=.5");
        //set the animation once you have been able to hover out of the text and make everything
        //return to normal
    }).on("mouseout", ".change", function(evt){
        var tl3 = gsap.timeline();
        tl3.to($(".project_preview"), 1, {
            width:0,
            ease:"power4.out"
        });
    });
});

//now comes the good part where we are going to make each of the children to have a uniq image background
$(".navigation-link-1").hover(function() {
    $(".project_preview").css({"background-image": "url(https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"});
});
$(".navigation-link-3").hover(function() {
    $(".project_preview").css({"background-image": "url(https://images.unsplash.com/photo-1484353371297-d8cfd2895020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80)"});
});
$(".navigation-link-2").hover(function() {
    $(".project_preview").css({"background-image": "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)"});
});
$(".navigation-link-4").hover(function() {
    $(".project_preview").css({"background-image": "url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"});
});

gsap.registerPlugin(CSSRulePlugin);
//making a mouse tracker with js
const trailer = document.getElementById("trailer");
const ontop = document.querySelector(".interactable");

const animationTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;
    //trailer.style.transform = `translate(${x}px, ${y}px) scale(${interacting ? 8:1})`;
    //lets use gsap for an easier animation effect
    gsap.to(trailer, {
        x:x,
        y:y,
        scale: interacting ? 5:1,
        duration:.5,
        ease:"power2.out"
    });
};
// will look for the right way tomake the hover effect be still on a picture and see the difference
//ontop.addEventListener("mouseover", () => {
//    animationTrailer(event, true);
//});
//ontop.addEventListener("mouseout", () => {
//    animationTrailer(event, false);
//});
//window.addEventListener("mouseove", event => {
//    animationTrailer( event, false);
//});
//for now i will stick to the normal animation with the text hovering over it with the bits of
// issues
window.onmousemove = e => {     //making an event to check whethere the element has the .interactable class to it and add the following animation to it
  const interacting = e.target.closest(".interactable"), //checking for the next closet element has the class of interactable
        interacted = interacting !== null; // if true well let the animation continue to function
//help in animating the two events together while still using gsap we've tied up some of the
    //animation properties i want to happen when the event of mousemove happens
        animationTrailer(e, interacting);
}
//with jquery
//$(document).ready(function() {
//  var trailer = $("#trailer");
//
//  $(window).mousemove(function(e) {
//    var x = e.clientX - trailer.width() / 2;
//    var y = e.clientY - trailer.height() / 2;
//    setTimeout(function(){
//        trailer.css("transform", "translate(" + x + "px, " + y + "px)");}
//        ,200);
//  });
//});

//making the hyperlaxed effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let interval = null;
document.querySelector(".skip").onmouseover = event => {
  let iterations = 0;
  clearInterval(interval);
  interval = setInterval(() => {event.target.innerText = event.target.innerText.split("")
     .map((letter,index) => {
      if (index < iterations) {
        return event.target.dataset.value[index];
      }
      return letters[ Math.floor(Math.random() * 26)];
    }).join("");
    if (iterations >= event.target.dataset.length){
        clearInterval(interval);
    }
    iterations += 1/ 3;
  },40);
}

//adding the animation when i scroll to move the opposite side
window.addEventListener("scroll", () => {
    const eLement = document.querySelector(".left");
    const scRollP = window.scrollY;

    if(scRollP <= window.innerHeight) {
        eLement.classList.add("tickerRv");
        eLement.classList.remove("ticker");
        console.log("changed the direction");
    }else{
        eLement.classList.remove("ticker");
        eLement.classList.add("tickerRv");
        console.log("element back to the normal mode");
    }
});
