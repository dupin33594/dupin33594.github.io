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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 700, 200, 10)
createPlatform(200, 580, 200, 10)
createPlatform(0, 200,)
createPlatform(200, 580, 10, 145)
createPlatform(600, 600, 100, 10)
createFakePlatform(800, 550, 100, 10)
createBadPlatform(420, 600, 200, 10)
createCollectable("diamond", 700, 60)
createCollectable("grace", 600, 500)
createPlatform(900, 530, 100, 10)
createPlatform(1110, 490, 100, 10)
createPlatform(200, 360, 900, 10)
createBadPlatform(600, 300, 50, 50)
createPlatform(500, 300, 100, 10)
createBadPlatform(0, 735, 1400, 10)
createFakePlatform(700, 600, 100, 10)
    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
createCannon("right", 550, 2000);
createCannon("top", 600, 2000)
createCannon("top", 1200, 2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
