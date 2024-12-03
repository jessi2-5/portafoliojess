document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de cambio de tema
    const themeToggleButton = document.getElementById('theme-toggle');
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleButton.innerText = '🌙'; // Cambia el ícono si es oscuro
    } else {
      document.body.classList.remove('dark-theme');
      themeToggleButton.innerText = '☀️'; // Cambia el ícono si es claro
    }
  
    // Cambiar el tema cuando el usuario haga clic en el botón
    themeToggleButton.addEventListener('click', () => {
      const isDarkTheme = document.body.classList.toggle('dark-theme');
      
      // Cambiar el ícono dependiendo del estado
      if (isDarkTheme) {
        themeToggleButton.innerText = '🌙'; // Ícono de luna para modo oscuro
        localStorage.setItem('theme', 'dark'); // Guardar la preferencia en el localStorage
      } else {
        themeToggleButton.innerText = '☀️'; // Ícono de sol para modo claro
        localStorage.removeItem('theme'); // Eliminar la preferencia del localStorage
      }
    });
  });
  