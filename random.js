// the following line sets the image array for use, do not change it
var theImages = new Array()

// set the path to your images
theImages[0] = 'images/15910009.jpg' 
theImages[1] = 'images/15940032.jpg' 
theImages[2] = 'images/15910024.jpg' 
theImages[3] = 'images/000017.jpg'   
theImages[4] = 'images/15930034.jpg' 
theImages[5] = 'images/15890003.jpg' 
theImages[6] = 'images/15910030.jpg' 

// to add more images continue with the pattern above

// do not edit the following 
var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">');
}// JavaScript Document