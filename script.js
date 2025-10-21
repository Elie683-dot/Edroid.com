const toggle = document.getElementById('darkToggle');
  const body = document.body;
  function applyMode(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      toggle.textContent = '☀️';
    } else {
      body.classList.remove('dark-mode');
      toggle.textContent = '🌙';
    }
  }
  const savedMode = localStorage.getItem('mode') || 'light';
  applyMode(savedMode);
  toggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀️' : '🌙';
  });