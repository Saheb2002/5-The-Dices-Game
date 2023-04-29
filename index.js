// JavaScript source code


// First dice

var random1 = Math.floor(Math.random() * 6 + 1);   // 1--6 //

var randomImages1 = "dice" + random1 + ".png";     // Random images names //

var randomImagesLocation1 = "images/" + randomImages1;     // Random images complete location //

document.querySelectorAll("img")[0].setAttribute("src",randomImagesLocation1);    // Change random images //


// Second dice

var random2 = Math.floor(Math.random() * 6 + 1);  //1--6//

var randomImages2 = "dice" + random2 + ".png";

var randomImagesLocation2 = "images/" + randomImages2;

document.querySelectorAll("img")[1].setAttribute("src",randomImagesLocation2)


// Player 1 wins

if(random1 > random2){
  document.querySelector("h1").textContent = "🚩Player 1 wins";
}

//Player 2 wins

else if(random1 < random2){
  document.querySelector("h1").textContent =  "Player 2 wins🚩";
}

//Draw

else {
    document.querySelector("h1").textContent = "Draw!";
}
