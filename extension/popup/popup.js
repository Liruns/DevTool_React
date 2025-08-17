document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('message');
  if (element) {
    element.textContent = 'Extension popup loaded';
  }

  const button = document.getElementById('run-script');
  if (button) {
    button.addEventListener('click', async () => {
      try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const [{ result }] = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => window.location.href,
        });
        if (element) {
          element.textContent = result;
        }
      } catch (error) {
        if (element) {
          element.textContent = `Error: ${error.message}`;
        }
      }
    });
  }
});

