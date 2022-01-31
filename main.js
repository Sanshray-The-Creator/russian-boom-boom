x = 0;
y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
sub = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size (550, 500);
    canvas = createCanvas(550, 425);
    canvas.position(560,100);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    background("#e8a323");
    textSize(sub);
    fill("#b4eb34");
    text("Bomb go BOOM BOOM", x, y);
}

function modelLoaded()
{
    console.log("Posenet Model Is Successfully Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        console.log("left_wrist_x= " + left_wrist_x);

        console.log("right_wrist_x= " + right_wrist_x);

        sub = floor(left_wrist_x - right_wrist_x);

        console.log("sub = " + sub);

    }
}