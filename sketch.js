function setup() {
      createCanvas(720,720);
      console.log("Hello");

      noCursor();
      colorMode(HSB,720,100,100);
      rectMode(CENTER);
      noStroke();
      }

      function draw() {
      background(mouseY/2,100,100);
      fill(360-mouseY/2,100,100);
      ellipse(mouseX,mouseY,100,100);
      frameRate(60)
      }
