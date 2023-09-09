document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.getElementById("body");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const textBox = document.getElementById("text-box");
  
    // Texto para el día
    const dayText = 'Luna, princesa de la Noche, y Sol, emperatriz del Día, se encontraron en el primer eclipse jamás visto. "¿Eres tú quien adorna la noche con plata?", preguntó Sol. "Sí, ¿y tú decoras el día con luz dorada?", respondió Luna. Aunque separadas por tiempo y espacio, valoraban cada eclipse que las unía. "Te llevo en los detalles de oro de mi corona", dijo Luna. "Y yo en cada estrella que descansa en mi manto", replicó Sol.';
  
    // Texto para la noche
    const nightText = "Distantes en cuerpo pero nunca en alma, Luna y Sol encontraban en su extraordinaria relación una intimidad que desafiaba las leyes celestiales, en encuentro efímeros e inefables, no obstante, resonante, eterno y redundantemente interminable";
  
    // Start the sun animation as the page loads
    sun.style.animation = "moveUp 5s infinite";
    textBox.innerHTML = dayText;  // Se asume que inicialmente es de día
  
    toggleButton.addEventListener("click", function() {
      if (body.classList.contains("night")) {
        body.classList.remove("night");
        sun.style.animation = "moveUp 5s infinite";
        sun.style.opacity = "1";  // Hacer que el sol aparezca
        moon.style.animation = "none";
        moon.style.opacity = "0";  // Hacer que la luna desaparezca
        textBox.innerHTML = dayText;
        textBox.style.color = "black";
      } else {
        body.classList.add("night");
        sun.style.animation = "none";
        sun.style.opacity = "0";  // Hacer que el sol desaparezca
        moon.style.animation = "moveDown 5s infinite";
        moon.style.opacity = "1";  // Hacer que la luna aparezca
        textBox.innerHTML = nightText;
        textBox.style.color = "white";
      }
    });
  });
  