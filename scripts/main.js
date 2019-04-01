var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/web-image.jpg') {
      myImage.setAttribute ('src','images/nigel2.jpg');
    } else {
      myImage.setAttribute ('src','images/web-image.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Nigel is your daddy, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nigel is your daddy, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }