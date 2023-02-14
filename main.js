noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(570,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model is loaded!!!");
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("lightblue");
    fill("darkslateblue");
    textSize(difference);
    text("Trisha",noseX,noseY);
    document.getElementById("font_size").innerHTML="The font-size of the text is : "+difference+"px";
}