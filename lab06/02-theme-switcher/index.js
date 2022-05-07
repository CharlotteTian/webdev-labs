/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/

document.querySelector('#default').addEventListener('click', function(){
   document.querySelector('.container').className = 'container';
 });

document.querySelector('#desert').addEventListener('click', function(){
   document.querySelector('.container').className = 'container desert';
 });

document.querySelector('#ocean').addEventListener('click', function(){
   document.querySelector('.container').className = 'container ocean';
 });

document.querySelector('#high-contrast').addEventListener('click', function(){
   document.querySelector('.container').className = 'container high-contrast';
 });