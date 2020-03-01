function setup() {
      createCanvas(windowWidth,windowHeight);

      noCursor();
      colorMode(HSB,900,100,100);
      rectMode(CENTER);
      noStroke();
      }

      function draw() {
      background(mouseY/2,100,100);
      fill(450/2-mouseY/2,100,100);
      ellipse(mouseX,mouseY,100,100);
      frameRate(60)
      }

