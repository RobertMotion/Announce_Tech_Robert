var images=["will_code_quote.jpg","nas_tech_queens.jpg", "mcHammer.png"];

var caption = ["WILL.I.AM","NAS","McHAMMER"];

var imageNumber = 0;
var imageLength = images.length-1;

//function sayz when i reach end of array, start over//
function changeImage(x){
    imageNumber += x;
    
    if (imageNumber > imageLength){
        imageNumber = 0;
    }
    if (imageNumber < 0){
        imageNumber = imageLength;
    }
    
   document.getElementById("slideshow").src = images[imageNumber];
    
   document.getElementById("caption").innerHTML = caption[imageNumber];
    
   return false;
}

function autoRun(){
  setInterval(changeImage, 5000,1);
}