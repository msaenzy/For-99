document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.getElementById("body");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const textBox = document.getElementById("text-box");
  
    // Start the sun animation as the page loads
    sun.style.animation = "moveUp 5s infinite";
  
    toggleButton.addEventListener("click", function() {
      if (body.classList.contains("night")) {
        body.classList.remove("night");
        sun.style.animation = "moveUp 5s infinite";
        sun.style.opacity = "1";  // Make the sun appear
        moon.style.animation = "none";
        moon.style.opacity = "0";  // Make the moon disappear
        textBox.style.color = "black";
      } else {
        body.classList.add("night");
        sun.style.animation = "none";
        sun.style.opacity = "0";  // Make the sun disappear
        moon.style.animation = "moveDown 5s infinite";
        moon.style.opacity = "1";  // Make the moon appear
        textBox.style.color = "white";
      }
    });
  });
  