document.getElementById("startButton").addEventListener("click", function () {
    var sound = document.getElementById("sound");
    sound.volume = 0.01; // Adjust this value between 0.0 and 1.0
  
    setInterval(function () {
      sound.play();
    }, 10000); // 10000 milliseconds = 10 seconds
  });
  