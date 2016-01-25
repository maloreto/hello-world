function setup() {
  createCanvas (600,400);
  background (240);
}

function draw() {
  //left ear
  fill (200);
  ellipse (150,150,50,60);
  
  //inner circle left ear
  fill (255,102,204);
  ellipse (150,150,30,35);
  
  //right ear
  fill (200);
  ellipse (250,150,50,60);
  
  //inner circle right ear
  fill (255,102,204);
  ellipse (250,150,30,35);
  
  //face
  fill (200);
  ellipse (200,200,100,90);
  
  //left eye
  noFill (0);
  ellipse (180,190,20,30);
  fill (0);
  ellipse (180,200,14,10);
  
  //right eye
  noFill (0);
  ellipse (215,190,20,30);
  fill (0);
  ellipse (215,200,14,10);
  
  //nose
  fill (0);
  ellipse (200,225,15,10);
  
  //mustache left
  line ();
  line ();
  
  //mustache right
  line ();
  line ();
}