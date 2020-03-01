function setup() {
      createCanvas(1920,1080);
      console.log("Hello");

      noCursor();
      colorMode(HSB,1080,100,100);
      rectMode(CENTER);
      noStroke();
      }

      function draw() {
      background(mouseY/2,100,100);
      fill(540-mouseY/2,100,100);
      ellipse(mouseX,mouseY,100,100);
      frameRate(60)
      }
