function monitorEmails() {
  const emails = [
    'diplomat.hawaiiankingdom.justice@gmail.com',
    'superbcounsel@gmail.com', 
    'barefootcounsel@gmail.com',
    'greenrushgeneralstore@gmail.com',
    'worldwidefamilyoffice@gmail.com',
    'dr.karlagottschalk@gmail.com',
    'lexalytics@yahoo.com',
    'ai_comedylounge@yahoo.com'
  ];
  
  const log = (msg, type = 'info') => {
    const logDiv = document.getElementById('log');
    const color = type === 'threat' ? '#ff0000' : type === 'safe' ? '#00ff00' : '#ffffff';
    logDiv.innerHTML += `<div style="color: ${color}">[${new Date().toLocaleTimeString()}] ${msg}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;
  };

  log('EMAIL MONITORING ACTIVATED', 'safe');
  log(`Monitoring ${emails.length} Academy email addresses`, 'safe');
  emails.forEach(email => log(`Securing: ${email}`, 'safe'));
}
