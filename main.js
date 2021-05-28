function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
 { image(video, 210, 170, 210, 170);

fill(0, 128,0);
stroke(0, 128,0);
rect(580, 50, 10, 380);

fill(0, 128,0);
stroke(0, 128,0);
rect(30, 50, 550, 10);

fill(0, 128,0);
stroke(0, 128,0);
rect(30, 50, 10, 380);

fill(0, 128,0);
stroke(0, 128,0);
rect(30, 420, 550, 10);

fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 80)

fill(255, 0, 0);
stroke(255, 0, 0);
circle(580, 50, 80)

fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 400, 80)

fill(255, 0, 0);
stroke(255, 0, 0);
circle(580, 400, 80)
}

 function take_snapshot()
 { save('chaitanya.png'); }
