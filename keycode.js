


// const passCode(event) => {
//     console.log(`Location of key pressed: ${event.code}`);
//   }

// const passKey(event) => {
//     console.log(`Location of key pressed: ${event.key}`);
//   }

// const passWhich(event) => {
//     console.log(`Location of key pressed: ${event.which}`);
//   }
// const frontContainer = document.querySelector(".frontContainer");
// const containerLater = document.querySelector(".container-later");
const eventWhich = document.querySelector("#eventWhich");
const bigKey = document.querySelector("#bigKey");
const eventKey = document.querySelector("#eventKey");
const eventCode = document.querySelector("#eventCode");


document.addEventListener("keydown", event => {
console.log(event);
    //    frontContainer.remove();
       eventKey.textContent =  `${event.key}`;
       bigKey.textContent =  `${event.keyCode}`;
       eventWhich.textContent =  `${event.keyCode}`;
       eventCode.textContent =  `${event.code}`;
   
       if(event.code == "Space"){
           eventKey.textContent =  `Space Character`;
       }
   });
