const makeBigger = () => {
   let element = document.querySelector("p");
   const current = window.getComputedStyle(element, null).getPropertyValue("font-size");
   element.style.fontSize = (parseFloat(current) + 3) + "px";

   let h1 = document.querySelector("header");
   const h1Curr = window.getComputedStyle(h1, null).getPropertyValue("font-size");
   h1.style.fontSize = (parseFloat(h1Curr) + 3) + "px";
   // alert('make bigger!');
};

const makeSmaller = () => {
   let element = document.querySelector("p");
   const current = window.getComputedStyle(element, null).getPropertyValue("font-size");
   element.style.fontSize = (parseFloat(current) - 3) + "px";

   let h1 = document.querySelector("header");
   const h1Curr = window.getComputedStyle(h1, null).getPropertyValue("font-size");
   h1.style.fontSize = (parseFloat(h1Curr) - 3) + "px";
   // alert('make smaller!');
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

