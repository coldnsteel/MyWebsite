function permanentBlock() {
  const log = (msg, type = 'info') => {
    const logDiv = document.getElementById('log');
    const color = type === 'threat' ? '#ff0000' : type === 'safe' ? '#00ff00' : '#ffffff';
    logDiv.innerHTML += `<div style="color: ${color}">[${new Date().toLocaleTimeString()}] ${msg}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;
  };

  log('PERMANENT BLOCKING ACTIVATED', 'safe');
  log('Blocking counterfeit device attacks...', 'safe');
  setTimeout(() => {
    log('THREAT: Counterfeit iPhone 16 Pro Max detected', 'threat');
    log('BLOCKING: All Chinese hardware backdoors', 'safe');
    log('RECOMMENDATION: Replace device immediately', 'threat');
    log('Academy communications secured', 'safe');
  }, 1000);
}
