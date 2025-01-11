document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.header__theme-toggle');
    const themeIcon = themeToggleButton.querySelector('img');
    const body = document.body;
  
  
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      body.classList.add('dark-theme');
    }
  
    if (body.classList.contains('dark-theme')) {
      themeIcon.src = './src/assets/icons/sun.svg';
    } else {
      themeIcon.src = './src/assets/icons/moon.svg';
    }
  
    themeToggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
  
      if (body.classList.contains('dark-theme')) {
        themeIcon.src = './src/assets/icons/sun.svg';
      } else {
        themeIcon.src = './src/assets/icons/moon.svg';
      }
  
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
  