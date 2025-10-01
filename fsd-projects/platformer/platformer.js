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
      // Start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); //back wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 700, 1300, 20, "LavenderBlush"); 
    createPlatform(200, 600, 150, 20, "LemonChiffon"); 
    createPlatform(450, 500, 150, 20, "LightSteelBlue"); 
    createPlatform(700, 400, 150, 20, "DarkSeaGreen");  
    createPlatform(950, 300, 120, 20, "NavajoWhite");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 550, 0, 0); 
    createCollectable("grace", 720, 350, 0, 0); 
    createCollectable("kennedi", 970, 250, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("left", 300, 2000);
    createCannon("right", 400, 1500); 
    createCannon("top", 600, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});