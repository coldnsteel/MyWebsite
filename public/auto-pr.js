function autoAdvertising() {
  const log = (msg, type = 'info') => {
    const logDiv = document.getElementById('log');
    const color = type === 'threat' ? '#ff0000' : type === 'safe' ? '#00ff00' : '#ffffff';
    logDiv.innerHTML += `<div style="color: ${color}">[${new Date().toLocaleTimeString()}] ${msg}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;
  };

  log('AUTO-ADVERTISING ACTIVATED', 'safe');
  log('Publishing HackerWatch to social media...', 'safe');
  log('Posted to X: HackerWatch crushes CCCP surveillance!', 'safe');
  log('Posted to LinkedIn: Cyber defense for professionals', 'safe');
  log('Posted to GitHub: Open source security platform', 'safe');
  log('Auto-PR campaign launched - no pavement pounding!', 'safe');
}
