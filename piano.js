var status = "";
var canvas = "";
var object_detector = "";
var img = "";
function draw(){
    
}
function preload(){
    img = loadImage('whjr_project_image1.JPG');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    object_detector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
  }