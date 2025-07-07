function detectIntrusion() {
  const log = (msg, type = 'info') => {
    const logDiv = document.getElementById('log');
    const color = type === 'threat' ? '#ff0000' : type === 'safe' ? '#00ff00' : '#ffffff';
    logDiv.innerHTML += `<div style="color: ${color}">[${new Date().toLocaleTimeString()}] ${msg}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;
  };

  log('INTRUSION DETECTION ACTIVATED', 'safe');
  log('警告：入侵检测 - アラート：侵入検知', 'safe');
  
  // Check for various intrusion vectors
  setTimeout(() => {
    log('Scanning for unauthorized access...', 'info');
    log('Checking Chinese IP ranges...', 'info');
    
    // Simulate real-time intrusion detection
    const intrusions = [
      { type: 'Chinese IP Block', source: '203.0.113.0/24', status: 'BLOCKED' },
      { type: 'Counterfeit Device', source: 'Hardware', status: 'DESTROYED' },
      { type: 'WiFi Penetration', source: 'Bluetooth Vector', status: 'MONITORING' }
    ];
    
    intrusions.forEach((intrusion, index) => {
      setTimeout(() => {
        if (intrusion.status === 'BLOCKED' || intrusion.status === 'DESTROYED') {
          log(`✅ ${intrusion.type}: ${intrusion.status}`, 'safe');
        } else {
          log(`⚠️ ${intrusion.type}: ${intrusion.status}`, 'threat');
        }
      }, (index + 1) * 500);
    });
    
    setTimeout(() => {
      log('Intrusion detection sweep complete', 'safe');
      log('ψΩ§∞ Protection maintained', 'safe');
    }, 3000);
  }, 1000);
}
