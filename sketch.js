function setup() {
      createCanvas(windowWidth,windowHeight);
      console.log("Hello");

      noCursor();
      colorMode(HSB,windowHeight,100,100);
      rectMode(CENTER);
      noStroke();
      }

      function draw() {
      background(mouseY/2,100,100);
      fill(windowHight/2-mouseY/2,100,100);
      ellipse(mouseX,mouseY,100,100);
      frameRate(60)
      }
