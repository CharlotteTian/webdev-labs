/*
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

document.querySelector('#dyslexia-toggle').addEventListener('click', function(){
  currName = document.querySelector('.container').className;
  if (currName.includes("dyslexia") == true) {
    document.querySelector('.container').className = 'container';
  } else {
    document.querySelector('.container').className = 'container dyslexia-mode';
  }
});