const sr = ScrollReveal ({
    distance : "65px",
    duration : 2600,
    delay : 450,
    reset : true
});

sr.reveal('.home', {delay:200, origin:'top'});
sr.reveal('.btn', {delay:430, origin:'left'});

var imag3 = document.querySelector(".imag3");

var dot1 = document.querySelector(".dot1");
var dot2 = document.querySelector(".dot2");
var dot3 = document.querySelector(".dot3");

dot1.onclick = function() {
    imag3.src = "./img/plate1.png"
}
dot2.onclick = function() {
    imag3.src = "./img/plate2.png"
}
dot3.onclick = function() {
    imag3.src = "./img/plate3.png"
}

const menueIcon = document.querySelector('.toggle');
const baR = document.querySelector('.navMenue');

menueIcon.onclick = function() {
    if(menueIcon.style.display != "block"){
        menueIcon.style.display = "block"
    }
    else{
        baR.style.display = "none"
    }
}
