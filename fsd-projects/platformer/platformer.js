$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform(200, 650, 200, 20, "green");   
    createPlatform(450, 570, 150, 20, "green");   
    createPlatform(700, 490, 200, 20, "green");   
    createPlatform(950, 410, 150, 20, "green");   
    createPlatform(1200, 330, 200, 20, "green");  
    
    createPlatform(600, 240, 150, 20, "purple", 600, 900, 2);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 220, 560, 0.5, 0.6); // bouncing
    createCollectable("max", 520, 460, 0.5, 0.7);
    createCollectable("grace", 850, 360);
    createCollectable("steve", 1150, 260);

    createCollectable("kennedi", 350, 200, 0, 1, 350, 600, 2);
    
    // TODO 4 - Create Cannons
    createCannon("bottom", 400, 2000);
    createCannon("top", 700, 1500);
    createCannon("left", 450, 2500);
    createCannon("right", 500, 3000);

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
