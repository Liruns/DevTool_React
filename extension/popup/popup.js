document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('message');
  if (element) {
    element.textContent = 'Extension popup loaded';
  }
});
