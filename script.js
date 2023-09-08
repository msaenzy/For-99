document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.getElementById("body");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const textBox = document.getElementById("text-box");
  
    toggleButton.addEventListener("click", function() {
      if (body.classList.contains("night")) {
        body.classList.remove("night");
        sun.style.animation = "moveUp 5s infinite";
        moon.style.animation = "none";
        textBox.style.color = "black";
      } else {
        body.classList.add("night");
        sun.style.animation = "none";
        moon.style.animation = "moveDown 5s infinite";
        textBox.style.color = "white";
      }
    });
  });
  