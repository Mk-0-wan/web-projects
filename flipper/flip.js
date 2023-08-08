//make a nodelist of all the elements with id of one
const splitt = document.querySelectorAll("#one");

//make a loop over the list
splitt.forEach((sPlit) => {
    const splitted = sPlit.innerText.split("");
    const newElement = splitted.map((letters) => {
        sPlit.innerText = "";//clears the innerText creating space for the new one
        const element = document.createElement("span");
        element.innerText = letters;
        return element;
    });

    //make a loop which will be able to add a class of splits to each element created above
    newElement.forEach((element) => {
        element.classList.add("splits");
        sPlit.appendChild(element);
    });
});
//making the hyperlaxed effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890^&*%$#@!"
let interval = null; //how many times should you repeat the loop
//const HappyLetters = document.querySelector(".skip");
//const coZyLetters = document.querySelector(".skipped");
//HappyLetters.onmouseover = event => {
//  let iterations = 0;
//  clearInterval(interval);
//  interval = setInterval(() => {event.target.innerText = event.target.innerText.split("")
//     .map((letter,index) => {
//      if (index < iterations) {
//        return event.target.dataset.value[index];
//      }
//      return letters[ Math.floor(Math.random() * 26)];
//    }).join("");
//    if (iterations >= event.target.dataset.length){
//        clearInterval(interval);
//    }
//    iterations += 1/ 3;
//  },30);
//}
//made a copy for each effect to and element has hover effect
//modified version which will be able to loop over each of the elements with the classname of .skip
const targets = document.querySelectorAll(".skp");

targets.forEach((coZyLetters) => {
    coZyLetters.onmouseover = event => {
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
      },30);
    }
});


//understanding interval 
function sayHello() {
    console.log("For every second log\n hello world on the web\n");
}
const inTervalId = [];
inTervalId.push(setInterval(sayHello, 1000));
inTervalId.push(setInterval(sayHello, 2000));
inTervalId.push(setInterval(sayHello, 3000));
inTervalId.push(setInterval(sayHello, 4000));
inTervalId.push(setInterval(sayHello, 5000));
inTervalId.push(setInterval(sayHello, 6000));
inTervalId.push(setInterval(sayHello, 7000));
inTervalId.push(setInterval(sayHello, 8000));
inTervalId.push(setInterval(sayHello, 9000));

const line = [];
    line.push(setTimeout(() => {
    clearInterval(inTervalId)}, 
    5000
    ));

line.forEach((lines) => {
 console.log(lines);
});

